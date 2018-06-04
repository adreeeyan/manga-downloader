import { APPUPDATE_ACTIONS } from "../consts/appupdate_action_types";
import UpdateService from "../services/update-services";

// actions

export const setUpdate = update => ({
  type: APPUPDATE_ACTIONS.SET_UPDATE,
  update
});

export const setHaveUpdate = haveUpdate => ({
  type: APPUPDATE_ACTIONS.SET_HAVE_UPDATE,
  haveUpdate
});

export const acceptUpdate = () => ({
  type: APPUPDATE_ACTIONS.ACCEPT_UPDATE
});

export const rejectUpdate = () => ({
  type: APPUPDATE_ACTIONS.REJECT_UPDATE
});

export const setUpdateReadyForInstall = updateReadyForInstall => ({
  type: APPUPDATE_ACTIONS.SET_UPDATE_READY_FOR_INSTALL,
  updateReadyForInstall
});

// thunks

export const doSetUpdate = update => {
  return (dispatch, getState) => {
    dispatch(setUpdate(update));
    dispatch(setHaveUpdate(true));
  };
};

export const doSetHaveUpdate = haveUpdate => {
  return (dispatch, getState) => {
    dispatch(setHaveUpdate(haveUpdate));
  };
};

export const doAcceptUpdate = () => {
  return (dispatch, getState) => {
    dispatch(acceptUpdate());
    dispatch(setHaveUpdate(false));
    UpdateService.downloadUpdate();
  };
};

export const doRejectUpdate = () => {
  return (dispatch, getState) => {
    dispatch(rejectUpdate());
    dispatch(setHaveUpdate(false));
  };
};

export const doSetUpdateReadyForInstall = updateReadyForInstall => {
  return (dispatch, getState) => {
    dispatch(setUpdateReadyForInstall(updateReadyForInstall));
  };
};

export const doInstallUpdate = () => {
  return (dispatch, getState) => {
    UpdateService.installUpdate();
  };
};

export const doInstallUpdateLater = () => {
  return (dispatch, getState) => {
    dispatch(doSetUpdateReadyForInstall(false));
  };
};