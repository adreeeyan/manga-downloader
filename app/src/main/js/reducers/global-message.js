import { LIST_ACTIONS } from "../consts/action_types";

export const globalMessage = (state = null, action) => {
  console.log("setGlobalMessage action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_GLOBAL_MESSAGE:
      return action.message;
    case LIST_ACTIONS.REMOVE_GLOBAL_MESSAGE:
      return null;
    default:
      return state;
  }
};
