import { addDownloadedChapter } from "../actions/list_actions";

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

const download = async (id, location, title, chapters, pauseCheck, progressCb) => {
  // create the manga folder
  const baseFolder = `${location}/${title}`;
  mkdirp.sync(baseFolder);

  // iterate the chapters list
  for (const chapter of chapters) {
    // create the folder for the chapter
    const chapterPrefix = chapter.index.toString().padStart(4, "0");
    const chapterFolder = `${baseFolder}/${chapterPrefix} - ${chapter.title}`;
    mkdirp.sync(chapterFolder);

    // get the pages for the chapter
    const pages = await getPages(encryptParam(chapter.location));
    // download each pages
    for (const page of pages) {
      await pauseCheck(id);
      const pagePrefix = page.index.toString().padStart(4, "0");
      const pageLocation = `${chapterFolder}/${pagePrefix}.jpg`;
      await downloadImage(page.image, pageLocation);
    }

    // update status
    progressCb(id, chapter);
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
