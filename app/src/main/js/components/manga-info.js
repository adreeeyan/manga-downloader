import React from "react";

import "../../res/scss/manga-info.scss";

const MangaInfo = () => (
  <div>
    <div className="manga-info row">
      <span className="fa fa-close close" />
      <div className="cover col-md-12 col-lg-2">
        <img src="http://via.placeholder.com/170x180" alt="Cover" />
      </div>
      <div className="info col-md-12 col-lg">
        <h4>Manga title here</h4>
        <h6>
          <em>Author name</em>
        </h6>
        <div>
          <h6>
            35 chapters | <span className="badge badge-primary">Ongoing</span>
          </h6>
        </div>
        <div className="mt-4 mb-4 other-info">
          <div className="row other-title">
            <strong className="col-sm-2 col-lg-2">Other title</strong>
            <span className="col-sm col-lg">
              Another title here; This one too
            </span>
          </div>
          <div className="row genre">
            <strong className="col-sm-2 col-lg-2">Genre</strong>
            <span className="col-sm col-lg">
              Action; Adventure; Manhua; Martial arts; Seinen
            </span>
          </div>
        </div>
        <div className="summary text-center">
          <h6>
            <strong>Summary</strong>
          </h6>
          <em>
            Bacon ipsum dolor amet pastrami alcatra porchetta biltong turducken.
            Short ribs drumstick burgdoggen jowl meatloaf doner pig corned beef
            venison ribeye. Shoulder jerky rump short ribs bacon shankle.
            Tri-tip spare ribs doner strip steak, shoulder boudin corned beef
            drumstick meatloaf andouille flank. Shank bacon pork loin, ball tip
            chicken tail jowl venison jerky biltong sirloin pig andouille swine.
            Swine spare ribs salami kielbasa meatball fatback flank corned beef
            meatloaf.
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
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4 active">
              <span className="count">14</span>
              <span className="col-lg">Cras justo odio</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Dapibus ac facilisis in</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Morbi leo risus</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Porta ac consectetur ac</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center col-md-6 col-lg-4">
              <span className="count">14</span>
              <span className="col-lg">Vestibulum at eros</span>
            </a>
          </div>
          <div className="range">
            <div className="form-group row ml-0 mr-0 mt-2">
              <label className="col-form-label">From</label>
              <div className="mt-1 ml-2 mr-2">
                <input type="number" className="form-control form-control-sm" />
              </div>
              <label className="col-form-label">To</label>
              <div className="mt-1 ml-2">
                <input type="number" className="form-control form-control-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="actions float-right">
          <button type="button" className="btn btn-success">
            <span className="fa fa-plus-circle mr-1" />Add to queue
          </button>
          <button type="button" className="btn btn-outline-warning">
            <span className="fa fa-bookmark mr-1" />Bookmark
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MangaInfo;
