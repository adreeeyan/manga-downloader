import React from "react";
import { connect } from "react-redux";
import { Route, HashRouter, Switch } from "react-router-dom";
import PageTransition from "react-router-page-transition";
import { ThemeSwitcher } from "react-bootstrap-theme-switcher";
import classNames from "classnames";

import NavBar from "./components/navbar";
import DownloadListPage from "./pages/download-list-page";
import SearchMangaPage from "./pages/search-manga-page";
import SettingsPage from "./pages/settings-page";
import AboutPage from "./pages/about-page";

import GlobalModalHolder from "./components/global-modal-holder";
import LoadingIndicator from "./components/loading-indicator";
import "../res/scss/app.scss";

const App = ({ globalMessage = "", theme }) => (
  <ThemeSwitcher themePath="./themes" defaultTheme={theme}>
    <HashRouter>
      <div className="app">
        <NavBar />
        <div
          className={classNames("container-fluid", "content", {
            dark: theme == "superhero"
          })}>
          <Route
            render={({ location }) => (
              <PageTransition timeout={0}>
                <Switch location={location}>
                  <Route exact path="/" component={DownloadListPage} />
                  <Route path="/search" component={SearchMangaPage} />
                  <Route path="/settings" component={SettingsPage} />
                  <Route path="/about" component={AboutPage} />
                </Switch>
              </PageTransition>
            )}
          />
        </div>
        {globalMessage && (
          <GlobalModalHolder>
            <LoadingIndicator description={globalMessage} />
          </GlobalModalHolder>
        )}
      </div>
    </HashRouter>
  </ThemeSwitcher>
);

const mapStateToProps = state => ({
  globalMessage: state.globalMessage,
  theme: state.settings.isDarkThemeEnabled ? "superhero" : "pulse"
});

export default connect(mapStateToProps)(App);
