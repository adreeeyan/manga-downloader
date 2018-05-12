import { combineReducers } from "redux";

import mangas from "./mangas";
import selectedMangaForDownload from "./selected-manga";
import searchValue from "./search-value";
import downloadedMangas from "./download-manga";

const rootReducer = combineReducers({
  mangas,
  selectedMangaForDownload,
  searchValue,
  downloadedMangas
});

export default rootReducer;
