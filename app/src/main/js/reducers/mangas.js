import { LIST_ACTIONS } from "../consts/action_types";
import DEFAULT_STATE from "../consts/default_state";

export const mangas = (state = DEFAULT_STATE.mangas, action) => {
  console.log("manga action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.MANGA_ADD:
      return [
        ...state,
        {
          ...action.manga
        }
      ];
    case LIST_ACTIONS.MANGA_UPDATE_LIST:
      return [
        ...action.list
      ];
    case LIST_ACTIONS.MANGA_SEARCH:
      return state.filter(m => m.title.indexOf(action.title) != -1);
    default:
      return state;
  }
};

export const allMangas = (state = DEFAULT_STATE.mangas, action) => {
  console.log("allMangas action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.ALL_MANGA_UPDATE_LIST:
      return [
        ...action.list
      ];
    default:
      return state;
  }
};

export const selectedMangaForDownload = (state = null, action) => {
  console.log("select action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.MANGA_SELECT_FOR_DOWNLOAD:
      return action.manga;
    default:
      return state;
  }
};