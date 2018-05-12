import React, { Component } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

import "../../res/scss/manga-info.scss";

class MangaInfo extends Component {
  state = { isClosing: false };
  render() {
    let { manga, onClickClose, onClickAdd, history } = { ...this.props };
    return (
      <div
        className={classNames("manga-info", "row", "animated", "slideInUp", {
          slideOutDown: this.state.isClosing
        })}>
        <span
          className="fa fa-close close"
          onClick={() => {
            this.setState({ isClosing: true });
            onClickClose();
          }}
        />
        <div className="cover col-md-12 col-lg-2">
          <img src={manga.cover} alt="Cover" />
        </div>
        <div className="info col-md-12 col-lg">
          <h4>{manga.title}</h4>
          <h6>
            <em>{manga.author}</em>
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
              <span className="col-sm col-lg">{manga.alternativeTitle}</span>
            </div>
            <div className="row genre">
              <strong className="col-sm-2 col-lg-2">Genre</strong>
              <span className="col-sm col-lg">{manga.genre}</span>
            </div>
          </div>
          <div className="summary text-center">
            <h6>
              <strong>Summary</strong>
            </h6>
            <em>
              Bacon ipsum dolor amet pastrami alcatra porchetta biltong
              turducken. Short ribs drumstick burgdoggen jowl meatloaf doner pig
              corned beef venison ribeye. Shoulder jerky rump short ribs bacon
              shankle. Tri-tip spare ribs doner strip steak, shoulder boudin
              corned beef drumstick meatloaf andouille flank. Shank bacon pork
              loin, ball tip chicken tail jowl venison jerky biltong sirloin pig
              andouille swine. Swine spare ribs salami kielbasa meatball fatback
              flank corned beef meatloaf.
            </em>
          </div>
          <div className="chapters mt-4">
            <div className="header-item col-lg d-flex">
              <span className="col-sm">Chapters</span>
              <div className="float-right">
                <button type="button" className="btn btn-sm">
                  <span className="fa fa-check mr-2" />Select all
                </button>
                |
                <button type="button" className="btn btn-sm">
                  <span className="fa fa-times mr-2" />Unselect all
                </button>
              </div>
            </div>
            <div className="list-group row chapters-list">
              {manga.chapters.map((chapter, id) => (
                <a
                  className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4"
                  key={id}>
                  <span className="count">{id}</span>
                  <span className="col-lg">{chapter}</span>
                </a>
              ))}
            </div>
            <div className="range">
              <div className="form-group row ml-0 mr-0 mt-2">
                <label className="col-form-label">From</label>
                <div className="mt-1 ml-2 mr-2">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                  />
                </div>
                <label className="col-form-label">To</label>
                <div className="mt-1 ml-2">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="actions float-right">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                onClickAdd(manga.id, [1, 2, 3, 4]);
                history.push("/downloads");
              }}>
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
