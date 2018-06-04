import { APPUPDATE_ACTIONS } from "../consts/appupdate_action_types";

export const appupdate = (state = {}, action) => {
  console.log("appupdate action", action, "state", state);
  switch (action.type) {
    case APPUPDATE_ACTIONS.SET_UPDATE:
      return { ...state, data: action.update };
    case APPUPDATE_ACTIONS.SET_HAVE_UPDATE:
      return { ...state, haveUpdate: action.haveUpdate };
    case APPUPDATE_ACTIONS.ACCEPT_UPDATE:
      return { ...state, isAccepted: true };
    case APPUPDATE_ACTIONS.REJECT_UPDATE:
      return { ...state, isAccepted: false };
    case APPUPDATE_ACTIONS.SET_UPDATE_READY_FOR_INSTALL:
      return { ...state, updateReadyForInstall: action.updateReadyForInstall };
    default:
      return state;
  }
};
