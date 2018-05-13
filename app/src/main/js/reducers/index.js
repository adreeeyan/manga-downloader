import { combineReducers } from "redux";

import mangas from "./mangas";
import selectedMangaForDownload from "./selected-manga";
import searchValue from "./search-value";
import downloadedMangas from "./download-manga";
import selectedChapters from "./chapters";

const rootReducer = combineReducers({
  mangas,
  selectedMangaForDownload,
  searchValue,
  downloadedMangas,
  selectedChapters
});

export default rootReducer;
