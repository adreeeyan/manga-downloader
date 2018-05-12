import { LIST_ACTIONS } from "../consts/action_types";
import DEFAULT_STATE from "../consts/default_state";

const mangas = (state = DEFAULT_STATE.mangas, action) => {
  console.log("manga action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.MANGA_ADD:
      return [
        ...state,
        {
          ...action.manga
        }
      ];
    case LIST_ACTIONS.MANGA_SEARCH:
      return state.filter(m => m.title.indexOf(action.title) != -1);
    default:
      return state;
  }
};

export default mangas;
