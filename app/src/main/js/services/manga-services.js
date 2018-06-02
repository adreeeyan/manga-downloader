import fs from "fs";
import mkdirp from "mkdirp";
import http from "http";
import rimraf from "rimraf";

import {
  addDownloadedChapter,
  setDownloadMangaStatus
} from "../actions/list_actions";
import { store } from "../store";
import { DownloadStatus } from "../consts/download-status";
import CompressionService from "./compression-services";

import logo from "../../res/images/logo.png";

const { shell } = require("electron").remote.require("electron");

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

const download = async (
  id,
  location,
  compressToCbz,
  title,
  chapters,
  startingChapter = 0
) => {
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

    // compress folder
    if (compressToCbz) {
      await CompressionService.compressChapter(chapterFolder, true);
    }

    // update status
    updateProgress(id, chapter);
  }
  updateFinished(id);
  await notifyUserFinished(id, location);
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
  return new Promise((resolve, reject) => {
    // check if manga state is paused
    const checker = () => {
      const downloadedMangas = store.getState().downloadedMangas;
      const manga = _.find(downloadedMangas, m => m.info.location == id);
      if (!manga) {
        return;
      }
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

const updateFinished = id => {
  store.dispatch(setDownloadMangaStatus(id, DownloadStatus.DOWNLOADED));
};

const notifyUserFinished = async (id, location) => {
  const manga = await getManga(id);
  const notification = new Notification("Manga download complete", {
    body: manga.title,
    icon: manga.cover
  });
  notification.onclick = evt => {
    shell.showItemInFolder(`${location}/${manga.title}`);
  };
};

const deleteDownloadedManga = location => {
  rimraf(location, () => {
    console.log(`Deleted ${location}`);
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
  download,
  deleteDownloadedManga
};

export default MangaService;
