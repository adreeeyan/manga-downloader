import fs from "fs";

import { store } from "../store";
import { ALLMANGASDBNAME, DOWNLOADEDMANGASDBNAME } from "../consts/settings";
import MangaServices from "./manga-services";
import { doDownloadManga } from "../actions/download";
import {
  updateList,
  updateAllMangaList,
  setGlobalMessage,
  removeGlobalMessage
} from "../actions/list_actions";

// update all mangas list
const updateAllMangasList = (force) => {
  if (fs.existsSync(ALLMANGASDBNAME) && !force) {
    const allMangas = JSON.parse(
      fs.readFileSync(ALLMANGASDBNAME, { encoding: "utf8" })
    );
    // if no content then we forcely update it
    if(allMangas.length == 0){
        updateAllMangasList(true);
        return;
    }
    callDispatchesAfterUpdate(allMangas);
  } else {
    store.dispatch(setGlobalMessage("Updating manga providers..."));      
    MangaServices.searchManga("").then(list => {
      callDispatchesAfterUpdate(list);
    });
  }
};

const callDispatchesAfterUpdate = list => {
  store.dispatch(updateList(list));
  store.dispatch(updateAllMangaList(list));
  store.dispatch(removeGlobalMessage());
  restoreDownloads();
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
    updateAllMangasList
};

export default InitService;