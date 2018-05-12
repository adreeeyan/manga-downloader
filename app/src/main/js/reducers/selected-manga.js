import { LIST_ACTIONS } from "../consts/action_types";

const selectedManga = (state = null, action) => {
  console.log("action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.MANGA_VIEW:
      return action.id;
    default:
      return state;
  }
};

export default selectedManga;
