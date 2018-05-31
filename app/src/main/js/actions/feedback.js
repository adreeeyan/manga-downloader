import InitService from "../services/init-services";

import { FEEDBACK_ACTIONS } from "../consts/feedback_action_types";

// actions

export const setFeedback = feedback => ({
  type: FEEDBACK_ACTIONS.SET_FEEDBACK,
  feedback
});

export const toggleFeedback = () => ({
  type: FEEDBACK_ACTIONS.TOGGLE_FEEDBACK,
});

// thunks

export const doSetFeedback = feedback => {
  return (dispatch, getState) => {
    dispatch(setFeedback(feedback));
  };
};

export const doToggleFeedback = () => {
    return (dispatch, getState) => {
        dispatch(toggleFeedback());
    };
};