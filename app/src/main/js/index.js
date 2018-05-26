import fs from "fs";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

import { store } from "./store";
import App from "./app";
import MangaServices from "./services/manga-services";
import {
  updateList,
  updateAllMangaList,
  setGlobalMessage,
  removeGlobalMessage
} from "./actions/list_actions";
import { DOWNLOADEDMANGASDBNAME } from "./consts/settings";
import { doDownloadManga } from "./actions/download";

// get initial mangas
store.dispatch(setGlobalMessage("Updating manga providers..."));
MangaServices.searchManga("").then(list => {
  store.dispatch(updateList(list));
  store.dispatch(updateAllMangaList(list));
  store.dispatch(removeGlobalMessage());

  // check if there are outstanding downloads
  if (fs.existsSync(DOWNLOADEDMANGASDBNAME)) {
    const downloadedMangas = JSON.parse(
      fs.readFileSync(DOWNLOADEDMANGASDBNAME, { encoding: "utf8" })
    );
    downloadedMangas.forEach(manga => {
      const chapters = _.map(manga.chapters, m => m.index);
      doDownloadManga(manga.info, manga.location, chapters, manga.downloaded, manga.status)(
        store.dispatch,
        store.getState
      );
    });
  }
});

// subscribe store to save download status
let previousState = {};
store.subscribe(() => {
  let currentState = store.getState();
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
  previousState = currentState;
});

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("reactbody")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    // eslint-disable-next-line
    const nextApp = require("./app").default;
    render(nextApp);
  });
}
