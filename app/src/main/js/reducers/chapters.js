import { LIST_ACTIONS } from "../consts/action_types";

const selectedChapters = (state = null, action) => {
  console.log("chapters action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.CHAPTER_TOGGLE:
      if (state.indexOf(action.id) != -1) {
        return _.without(state, action.id);
      }
      return [...state, action.id];
    case LIST_ACTIONS.CHAPTER_SELECT_ALL:
      return [...action.chapters];
    case LIST_ACTIONS.CHAPTER_UNSELECT_ALL:
      return [];
    case LIST_ACTIONS.CHAPTER_SELECT_RANGE:
      if(action.chapters == null){
        return null;
      }
      return [...action.chapters];
    default:
      return state;
  }
};

export default selectedChapters;
