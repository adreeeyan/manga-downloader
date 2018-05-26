import { addDownloadedChapter } from "../actions/list_actions";
import { store } from "../store";
import { DownloadStatus } from "../consts/download-status";


const fs = require("fs");
const mkdirp = require("mkdirp");
const http = require("http");

const SERVER_URL = "http://localhost:55235";

const searchManga = async title => {
  const mangas = await fetch(`${SERVER_URL}/manga?title=${title}`);
  return await mangas.json();
};

const getManga = async location => {
  const l = encryptParam(location);
  const manga = await fetch(`${SERVER_URL}/manga/${l}`);
  return await manga.json();
};

const getChapters = async location => {
  const l = encryptParam(location);
  const chapters = await fetch(`${SERVER_URL}/chapter/${l}`);
  return await chapters.json();
};

const getPages = async location => {
  const pages = await fetch(`${SERVER_URL}/page/${location}`);
  return await pages.json();
};

const updateMangaProviders = async () => {
  return await fetch(`${SERVER_URL}/provider`, {
    method: "POST",
    body: {}
  });
};

const getSourceFromLocation = async location => {
  const l = encryptParam(location);
  const source = await fetch(`${SERVER_URL}/source/${l}`);
  return await source.json();
};

const download = async (id, location, title, chapters, startingChapter = 0) => {
  // create the manga folder
  const baseFolder = `${location}/${title}`;
  mkdirp.sync(baseFolder);

  // iterate the chapters list
  const slicedChapters = chapters.slice(startingChapter);
  for (const chapter of slicedChapters) {
    // create the folder for the chapter
    const chapterPrefix = chapter.index.toString().padStart(4, "0");
    const chapterFolder = `${baseFolder}/${chapterPrefix} - ${chapter.title}`;
    mkdirp.sync(chapterFolder);

    // get the pages for the chapter
    const pages = await getPages(encryptParam(chapter.location));
    // download each pages
    for (const page of pages) {
      await checkIfPaused(id);
      const pagePrefix = page.index.toString().padStart(4, "0");
      const pageLocation = `${chapterFolder}/${pagePrefix}.jpg`;
      await downloadImage(page.image, pageLocation);
    }

    // update status
    updateProgress(id, chapter);
  }
  return { status: "success" };
};

const downloadImage = async (url, location) => {
  return await new Promise((resolve, reject) => {
    http.get(url, res => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(location);
        res.pipe(fileStream);
        res.on("error", err => {
          reject(err);
        });
        fileStream.on("finish", function() {
          resolve();
        });
      }
    });
  });
};

const checkIfPaused = id => {
  return new Promise(resolve => {
    // check if manga state is paused
    const checker = () => {
      const downloadedMangas = store.getState().downloadedMangas;
      const manga = _.find(downloadedMangas, m => m.info.location == id);
      if (manga.status == DownloadStatus.PAUSED) {
        console.log(`${manga.info.title} is paused`);
        setTimeout(() => {
          checker();
        }, 1000);
      } else if (manga.status == DownloadStatus.ONGOING) {
        resolve();
      }
    };

    checker();
  });
};

const updateProgress = (id, chapter) => {
  store.dispatch(addDownloadedChapter(id, chapter));
};

const encryptParam = param => {
  return btoa(param);
};

const MangaService = {
  searchManga,
  getManga,
  getChapters,
  updateMangaProviders,
  getSourceFromLocation,
  download
};

export default MangaService;
