import fs from "fs";
import mkdirp from "mkdirp";
import http from "http";
import https from "https";
import rimraf from "rimraf";
import fetch from "fetch-retry";

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

const RETRY_OPTIONS = { retries: 5, retryDelay: 3000 };

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
  const chapters = await fetch(`${SERVER_URL}/chapter/${l}`, RETRY_OPTIONS);
  return await chapters.json();
};

const getPages = async location => {
  const pages = await fetch(`${SERVER_URL}/page/${location}`, RETRY_OPTIONS);
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
    let pages = [];
    try {
      pages = await getPages(encryptParam(chapter.location));
    } catch (err) {
      updateError(id);
      throw new Error(
        "There was an issue retrieving the manga pages. Kindly retry the download. If the problem persist, report to the dev."
      );
    }
    // download each pages
    for (const page of pages) {
      await checkIfPaused(id);
      const pagePrefix = page.index.toString().padStart(4, "0");
      const pageLocation = `${chapterFolder}/${pagePrefix}.jpg`;
      try{
        await downloadImage(page.image, pageLocation);
      } catch (err) {
        updateError(id);
        throw new Error(
          `There was an issue retrieving the specific manga page ${page.image}. Kindly retry the download. If the problem persist, report to the dev.`
        );
      }
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
    try {
      // check url, if https use https module, if http use http module
      const retrieverProtocol = url.split(":")[0] == "https" ? https : http;

      retrieverProtocol.get(url, res => {
        if (res.statusCode === 200) {
          const fileStream = fs.createWriteStream(location);
          res.pipe(fileStream);
          res.on("error", err => {
            console.log("error downloadImage: ", err);
            reject(err);
          });
          res.on("timeout", err => {
            console.log("timeout downloadImage: ", err);
            reject(err);
          });
          fileStream.on("finish", function() {
            resolve();
          });
        } else {
          console.log("error downloadImage outside statusCode 200", res);
          reject();
        }
      });
    } catch (err) {
      console.log("error on downloadImage httpGet", err);
      reject(err);
    }
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
      if (
        manga.status == DownloadStatus.PAUSED ||
        manga.status == DownloadStatus.ERROR
      ) {
        console.log(`${manga.info.title} is paused or error occured`);
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

const updateError = id => {
  store.dispatch(setDownloadMangaStatus(id, DownloadStatus.ERROR));
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
