import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fs from "fs";

import reducers from "./reducers/index";
import {
  ALLMANGASDBNAME,
  DOWNLOADEDMANGASDBNAME,
  SETTINGSDBNAME
} from "./consts/settings";
import InitService from "./services/init-services";

/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */
const initialState = window.__INITIAL_STATE__; // eslint-disable-line

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);

// init-services
// services should be initialized before the store can call subscriptions
InitService.restoreSettings();
InitService.updateAllMangasList();

// subscribe store changes
let previousState = {};
store.subscribe(() => {
  let currentState = store.getState();

  // for saving download status
  if (
    !_.isEqual(previousState.downloadedMangas, currentState.downloadedMangas) &&
    !_.isUndefined(previousState.downloadedMangas)
  ) {
    // write the download status
    fs.writeFileSync(
      DOWNLOADEDMANGASDBNAME,
      JSON.stringify(currentState.downloadedMangas, null, 4)
    );
  }

  // for saving all mangas
  if (!_.isEqual(previousState.allMangas, currentState.allMangas)) {
    // write the mangas list
    fs.writeFileSync(
      ALLMANGASDBNAME,
      JSON.stringify(currentState.allMangas, null, 4)
    );
  }

  // for saving the settings
  if (!_.isEqual(previousState.settings, currentState.settings)) {
    // write the settings
    fs.writeFileSync(
      SETTINGSDBNAME,
      JSON.stringify(currentState.settings, null, 4)
    );
  }

  previousState = currentState;
});
