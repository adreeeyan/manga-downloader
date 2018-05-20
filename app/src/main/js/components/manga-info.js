import React, { Component } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

import "../../res/scss/manga-info.scss";
import ChaptersSelector from "./chapters-selector";

class MangaInfo extends Component {
  state = { isClosing: false };

  close = () => {
    this.setState({ isClosing: true });
    this.props.onClickClose();
  };

  escFunction = (event) => {
    console.log("event", event.keyCode)
    if (event.keyCode === 27) {
      // close manga info
      this.close();
    }
  }

  spreadValues = (values) => {
    if(!values){
      return "";
    }
    return values.join(", ");
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    let { manga, onClickClose, onClickAdd, history, selectedChapters } = {
      ...this.props
    };
    console.log("manga", manga);
    return (
      <div
        className={classNames("manga-info", "row", "animated", "slideInUp", {
          slideOutDown: this.state.isClosing
        })}>
        <span className="fa fa-close close" onClick={this.close} />
        <div className="cover col-md-12 col-lg-2">
          <img src={manga.cover} alt="Cover" />
        </div>
        <div className="info col-md-12 col-lg">
          <h4>{manga.title}</h4>
          <h6>
            <em>{this.spreadValues(manga.authors)}</em>
          </h6>
          <div>
            <h6>
              {manga.chapters.length} chapters | {" "}
              <span className="badge badge-primary">{manga.status}</span>
            </h6>
          </div>
          <div className="mt-4 mb-4 other-info">
            <div className="row other-title">
              <strong className="col-sm-2 col-lg-2">Other title</strong>
              <span className="col-sm col-lg">{this.spreadValues(manga.alternative_titles)}</span>
            </div>
            <div className="row genre">
              <strong className="col-sm-2 col-lg-2">Genre</strong>
              <span className="col-sm col-lg">{this.spreadValues(manga.genres)}</span>
            </div>
          </div>
          <div className="summary text-center">
            <h6>
              <strong>Summary</strong>
            </h6>
            <em>
              {manga.summary}
            </em>
          </div>
          <div className="mt-4">
            <ChaptersSelector chapters={manga.chapters} />
          </div>
          <div className="actions float-right">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                onClickAdd(manga.id, selectedChapters);
                history.push("/downloads");
              }}
              disabled={selectedChapters.length == 0}>
              <span className="fa fa-plus-circle mr-1" />Add to queue
            </button>
            <button type="button" className="btn btn-outline-warning">
              <span className="fa fa-bookmark mr-1" />Bookmark
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MangaInfo);
