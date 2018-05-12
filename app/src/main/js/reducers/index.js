import { combineReducers } from "redux"
import mangas from "./mangas";
import selectedManga from "./selected-manga";
import searchValue from "./search-value";

const rootReducer = combineReducers({
    mangas,
    selectedManga,
    searchValue
});

export default rootReducer;