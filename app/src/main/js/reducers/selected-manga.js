import { LIST_ACTIONS } from "../consts/action_types";

const selectedMangaForDownload = (state = null, action) => {
  console.log("select action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.MANGA_SELECT_FOR_DOWNLOAD:
      return action.id;
    default:
      return state;
  }
};

export default selectedMangaForDownload;
