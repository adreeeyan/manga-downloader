import React, { Component } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import Collapsible from "react-collapsible";

import "../../res/scss/manga-info.scss";
import ChaptersSelector from "./chapters-selector";
import LoadingIndicator from "./loading-indicator";

const remote = require("electron").remote;
const electronDialog = remote.require("electron").dialog;

class MangaInfo extends Component {
  state = { isClosing: false, saveLocation: this.props.defaultSaveLocation };

  close = () => {
    this.setState({ isClosing: true });
    this.props.onClickClose();
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      // close manga info
      this.close();
    }
  };

  spreadValues = values => {
    if (!values) {
      return "";
    }
    return values.join(", ");
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    let {
      manga,
      onClickClose,
      onClickAdd,
      history,
      selectedChapters,
      isFetchingManga
    } = {
      ...this.props
    };
    let saveLocationControl;
    const selectDirectory = () => {
      const saveLocation = electronDialog.showOpenDialog({
        properties: ["openDirectory"]
      }) || [this.state.saveLocation];
      this.setState({
        saveLocation: saveLocation[0]
      });
    };
    return (
      <div
        className={classNames("manga-info", "row", "animated", "slideInUp", {
          slideOutDown: this.state.isClosing
        })}>
        <span className="fa fa-close close" onClick={this.close} />
        {isFetchingManga && (
          <LoadingIndicator description="Retrieving manga info..." />
        )}
        {!isFetchingManga && (
          <div className="row w-100">
            <div className="cover col-md-12 col-lg-3">
              <img src={manga.cover} alt="Cover" />
            </div>
            <div className="info col-md-12 col-lg">
              <h4>{manga.title}</h4>
              <h6>
                <em>{this.spreadValues(manga.authors)}</em>
              </h6>
              <div>
                <h6>
                  {manga.chapters.length} chapters |{" "}
                  <span className="badge badge-primary">{manga.status}</span>
                </h6>
              </div>
              <div className="mt-4 mb-4 other-info">
                <div className="row other-title">
                  <strong className="col-sm-2 col-lg-2">Other title</strong>
                  <span className="col-sm col-lg">
                    {this.spreadValues(manga.alternative_titles)}
                  </span>
                </div>
                <div className="row genre">
                  <strong className="col-sm-2 col-lg-2">Genre</strong>
                  <span className="col-sm col-lg">
                    {this.spreadValues(manga.genres)}
                  </span>
                </div>
              </div>
              <div className="summary text-center mb-4">
                <h6>
                  <strong>Summary</strong>
                </h6>
                <em>{manga.summary}</em>
              </div>
              <Collapsible trigger="Click me for more configurations" triggerWhenOpen="Hide this messy configurations">
                <div>
                  <ChaptersSelector chapters={manga.chapters} />
                </div>
                <div className="row directory-picker">
                  <label className="col-md-auto pr-1">Save location</label>
                  <input
                    ref={node => (saveLocationControl = node)}
                    type="text"
                    className="col-md-3 mr-1 directory-picker"
                    value={this.state.saveLocation}
                    onChange={() =>
                      this.setState({ saveLocation: saveLocationControl.value })
                    }
                  />
                  <button
                    type="button"
                    className="col-md-auto btn btn-outline-warning"
                    onClick={selectDirectory}>
                    <span>Browse</span>
                  </button>
                </div>
              </Collapsible>
              <div className="actions float-right">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    onClickAdd(
                      manga,
                      this.state.saveLocation,
                      selectedChapters
                    );
                    history.push("/");
                  }}
                  disabled={selectedChapters.length == 0}>
                  <span className="fa fa-plus-circle mr-1" />Download
                </button>
                <button type="button" className="btn btn-outline-warning">
                  <span className="fa fa-bookmark mr-1" />Bookmark
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(MangaInfo);
