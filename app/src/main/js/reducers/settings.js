import { SETTINGS_ACTIONS } from "../consts/settings_action_types";
import DEFAULT_STATE from "../consts/default_state";

export const settings = (state = DEFAULT_STATE.settings, action) => {
  console.log("settings action", action, "state", state);
  switch (action.type) {
    case SETTINGS_ACTIONS.SET_SETTINGS:
      return action.settings;
    case SETTINGS_ACTIONS.SET_UPDATE_ON_START:
      return { ...state, isUpdateOnStartEnabled: action.isEnabled };
    case SETTINGS_ACTIONS.SET_DEFAULT_SAVE_LOCATION:
      return { ...state, saveLocation: action.location };
    case SETTINGS_ACTIONS.SET_COMPRESS_TO_CBZ:
      return { ...state, compressToCbz: action.compressToCbz };
    case SETTINGS_ACTIONS.SET_NOTIFY_ON_FINISH:
      return { ...state, isNotifyOnFinishEnabled: action.isEnabled };
    case SETTINGS_ACTIONS.SET_DARK_THEME:
      return { ...state, isDarkThemeEnabled: action.isEnabled };
    default:
      return state;
  }
};
