import { LIST_ACTIONS } from "../consts/action_types";

const selectedChapters = (state = [], action) => {
  console.log("chapters action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.CHAPTER_TOGGLE:
      if (state == null) {
        return state;
      }
      if (state.indexOf(action.index) != -1) {
        return _.without(state, action.index);
      }
      return [...state, action.index];
    case LIST_ACTIONS.CHAPTER_SELECT_ALL:
      return [...action.chapters];
    case LIST_ACTIONS.CHAPTER_UNSELECT_ALL:
      return [];
    case LIST_ACTIONS.CHAPTER_SELECT_RANGE:
      if (action.chapters == null) {
        return state;
      }
      return [...action.chapters];
    default:
      return state;
  }
};

export default selectedChapters;
