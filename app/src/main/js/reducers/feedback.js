import { FEEDBACK_ACTIONS } from "../consts/feedback_action_types";

export const feedback = (state = {}, action) => {
  console.log("feedback action", action, "state", state);
  switch (action.type) {
    case FEEDBACK_ACTIONS.SET_FEEDBACK:
      return { ...state, message: action.feedback };
    case FEEDBACK_ACTIONS.TOGGLE_FEEDBACK:
      return { ...state, shown: !state.shown };
    default:
      return state;
  }
};
