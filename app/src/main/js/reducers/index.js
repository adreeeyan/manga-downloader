import { combineReducers } from "redux";

import { allMangas, mangas, selectedMangaForDownload } from "./mangas";
import { searchValueFilter, downloadMangaStatusFilter, isFetchingManga } from "./filters";
import downloadedMangas from "./download-manga";
import selectedChapters from "./chapters";
import { globalMessage } from "./global-message";

const rootReducer = combineReducers({
  allMangas,
  mangas,
  selectedMangaForDownload,
  searchValue: searchValueFilter,
  downloadedMangas,
  selectedChapters,
  downloadMangaStatusFilter,
  isFetchingManga,
  globalMessage
});

export default rootReducer;
