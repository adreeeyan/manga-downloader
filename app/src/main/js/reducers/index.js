import { combineReducers } from "redux";

import { allMangas, mangas, selectedMangaForDownload } from "./mangas";
import { searchValueFilter, downloadMangaStatusFilter, isFetchingManga } from "./filters";
import { downloadedMangas, downloadedMangaForDeletion } from "./download-manga";
import selectedChapters from "./chapters";
import { globalMessage } from "./global-message";
import { settings } from "./settings";
import { feedback } from "./feedback";

const rootReducer = combineReducers({
  allMangas,
  mangas,
  selectedMangaForDownload,
  searchValue: searchValueFilter,
  downloadedMangas,
  downloadedMangaForDeletion,
  selectedChapters,
  downloadMangaStatusFilter,
  isFetchingManga,
  globalMessage,
  settings,
  feedback
});

export default rootReducer;
