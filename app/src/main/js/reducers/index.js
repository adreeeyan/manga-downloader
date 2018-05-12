import { combineReducers } from "redux"
import mangas from "./mangas";
import selectedMangaForDownload from "./selected-manga";
import searchValue from "./search-value";

const rootReducer = combineReducers({
    mangas,
    selectedMangaForDownload,
    searchValue
});

export default rootReducer;