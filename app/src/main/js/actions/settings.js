import { SETTINGS_ACTIONS } from "../consts/settings_action_types";

export const setSettings = settings => ({
  type: SETTINGS_ACTIONS.SET_SETTINGS,
  settings
});

export const setUpdateOnStart = isEnabled => ({
  type: SETTINGS_ACTIONS.SET_UPDATE_ON_START,
  isEnabled
});

export const setDefaultSaveLocation = location => ({
  type: SETTINGS_ACTIONS.SET_DEFAULT_SAVE_LOCATION,
  location
});

export const setDefaultFormat = format => ({
  type: SETTINGS_ACTIONS.SET_DEFAULT_FORMAT,
  format
});

export const setNotifyOnFinish = isEnabled => ({
  type: SETTINGS_ACTIONS.SET_NOTIFY_ON_FINISH,
  isEnabled
});

export const setDarkTheme = isEnabled => ({
  type: SETTINGS_ACTIONS.SET_DARK_THEME,
  isEnabled
});

// thunks

export const doSetUpdateOnStart = () => {
  return (dispatch, getState) => {
    const status = getState().settings.isUpdateOnStartEnabled;
    dispatch(setUpdateOnStart(!status));
  };
};

export const doSetNotifyOnFinish = () => {
  return (dispatch, getState) => {
    const status = getState().settings.isNotifyOnFinishEnabled;
    dispatch(setNotifyOnFinish(!status));
  };
};

export const doSetDarkTheme = () => {
  return (dispatch, getState) => {
    const status = getState().settings.isDarkThemeEnabled;
    dispatch(setDarkTheme(!status));
  };
};

export const doSetDefaultFormat = format => {
  return (dispatch, getState) => {
    dispatch(setDefaultFormat(format));
  };
};

export const doSetDefaultSaveLocation = location => {
  return (dispatch, getState) => {
    dispatch(setDefaultSaveLocation(location));
  };
};
