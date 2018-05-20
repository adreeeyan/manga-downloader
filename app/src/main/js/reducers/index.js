import { combineReducers } from "redux";

import { mangas, selectedMangaForDownload } from "./mangas";
import { searchValueFilter, downloadMangaStatusFilter, isFetchingManga } from "./filters";
import downloadedMangas from "./download-manga";
import selectedChapters from "./chapters";

const rootReducer = combineReducers({
  mangas,
  selectedMangaForDownload,
  searchValue: searchValueFilter,
  downloadedMangas,
  selectedChapters,
  downloadMangaStatusFilter,
  isFetchingManga
});

export default rootReducer;
