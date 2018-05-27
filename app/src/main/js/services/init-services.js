import fs from "fs";
import * as _ from "lodash";

import { store } from "../store";
import {
  ALLMANGASDBNAME,
  DOWNLOADEDMANGASDBNAME,
  SETTINGSDBNAME
} from "../consts/settings";
import MangaServices from "./manga-services";
import { doDownloadManga } from "../actions/download";
import { doSetSettings } from "../actions/settings";
import {
  updateList,
  updateAllMangaList,
  setGlobalMessage,
  removeGlobalMessage
} from "../actions/list_actions";

// restore settings
const restoreSettings = () => {
  // check if there are outstanding downloads
  if (fs.existsSync(SETTINGSDBNAME)) {
    const settings = JSON.parse(
      fs.readFileSync(SETTINGSDBNAME, { encoding: "utf8" })
    );
    doSetSettings(settings)(store.dispatch, store.getState);
  }
};

// update all mangas list
const updateAllMangasList = (force, dontRestoreDownloads) => {
  // check settings if update on start is enabled
  const isUpdateOnStartEnabled = store.getState().settings
    .isUpdateOnStartEnabled;

  if (isUpdateOnStartEnabled) {
    force = true;
  }

  if (fs.existsSync(ALLMANGASDBNAME) && !force) {
    const allMangas = JSON.parse(
      fs.readFileSync(ALLMANGASDBNAME, { encoding: "utf8" })
    );
    // if no content then we forcely update it
    if (allMangas.length == 0) {
      updateAllMangasList(true);
      return;
    }
    callDispatchesAfterUpdate(allMangas);
    if (!dontRestoreDownloads) {
      restoreDownloads();
    }
  } else {
    store.dispatch(setGlobalMessage("Updating manga providers..."));
    MangaServices.searchManga("").then(list => {
      callDispatchesAfterUpdate(list);
      if (!dontRestoreDownloads) {
        restoreDownloads();
      }
    });
  }
};

const callDispatchesAfterUpdate = list => {
  store.dispatch(updateList(list));
  store.dispatch(updateAllMangaList(list));
  store.dispatch(removeGlobalMessage());
};

const restoreDownloads = () => {
  // check if there are outstanding downloads
  if (fs.existsSync(DOWNLOADEDMANGASDBNAME)) {
    const downloadedMangas = JSON.parse(
      fs.readFileSync(DOWNLOADEDMANGASDBNAME, { encoding: "utf8" })
    );
    downloadedMangas.forEach(manga => {
      const chapters = _.map(manga.chapters, m => m.index);
      doDownloadManga(
        manga.info,
        manga.location,
        chapters,
        manga.downloaded,
        manga.status
      )(store.dispatch, store.getState);
    });
  }
};

const InitService = {
  restoreSettings,
  updateAllMangasList
};

export default InitService;
