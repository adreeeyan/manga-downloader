import { combineReducers } from "redux";

import mangas from "./mangas";
import selectedMangaForDownload from "./selected-manga";
import searchValue from "./search-value";
import downloadedMangas from "./download-manga";
import selectedChapters from "./chapters";
import downloadMangaStatusFilter from "./download-manga-status-filter"

const rootReducer = combineReducers({
  mangas,
  selectedMangaForDownload,
  searchValue,
  downloadedMangas,
  selectedChapters,
  downloadMangaStatusFilter
});

export default rootReducer;
