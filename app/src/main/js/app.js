import React from "react";
import { connect } from "react-redux";
import { Route, HashRouter, Switch } from "react-router-dom";
import PageTransition from "react-router-page-transition";

import NavBar from "./components/navbar";
import EmptyListPlaceholder from "./components/emptylist-placeholder";
import DownloadListPage from "./pages/download-list-page";
import SearchMangaPage from "./pages/search-manga-page";

import GlobalLoadingIndicator from "./components/global-loading-indicator";
import "../res/scss/app.scss";

const App = ({ globalMessage = "" }) => (
  <HashRouter>
    <div className="app">
      <NavBar />
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
      {globalMessage && <GlobalLoadingIndicator description={globalMessage} />}
    </div>
  </HashRouter>
);

const mapStateToProps = state => ({
  globalMessage: state.globalMessage
});

export default connect(mapStateToProps)(App);
