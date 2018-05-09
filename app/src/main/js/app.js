import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import PageTransition from "react-router-page-transition";
import { Scrollbars } from "react-custom-scrollbars";

import NavBar from "./components/navbar";
import EmptyListPlaceholder from "./components/emptylist-placeholder";
import DownloadListPage from "./pages/download-list-page";
import SearchMangaPage from "./pages/search-manga-page";

import "../res/scss/app.scss";

const App = () => (
  <HashRouter>
    <div className="app">
      <NavBar />
      <Scrollbars autoHide>
        <div className="container-fluid content">
          <Route
            render={({ location }) => (
              <PageTransition timeout={0}>
                <Switch location={location}>
                  <Route exact path="/" component={EmptyListPlaceholder} />
                  <Route path="/search" component={SearchMangaPage} />
                  <Route path="/downloads" component={DownloadListPage} />
                </Switch>
              </PageTransition>
            )}
          />
        </div>
      </Scrollbars>
    </div>
  </HashRouter>
);

export default App;
