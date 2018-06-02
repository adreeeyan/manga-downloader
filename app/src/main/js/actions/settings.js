import InitService from "../services/init-services";

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

export const setCompressToCbz = compressToCbz => ({
  type: SETTINGS_ACTIONS.SET_COMPRESS_TO_CBZ,
  compressToCbz
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

export const doSetSettings = settings => {
  return (dispatch, getState) => {
    dispatch(setSettings(settings));
  };
};

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
    const theme = !status ? "superhero" : "pulse";
    InitService.injectTheme(theme);
  };
};

export const doSetCompressToCbz = compressToCbz => {
  return (dispatch, getState) => {
    const status = getState().settings.compressToCbz;
    dispatch(setCompressToCbz(!status));
  };
};

export const doSetDefaultSaveLocation = location => {
  return (dispatch, getState) => {
    dispatch(setDefaultSaveLocation(location));
  };
};
