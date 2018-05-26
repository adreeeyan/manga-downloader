import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

import { store } from "./store";
import App from "./app";
import InitService from "./services/init-services";

// init-services
InitService.updateAllMangasList();

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
