import React from "react";

import "../../res/scss/download-item.scss";
import { DownloadStatus } from "../consts/download-status";

const DownloadItem = ({ manga, setFilter }) => (
  <div className="download-item">
    <div className="row align-items-center">
      <div className="cover">
        <img src="http://via.placeholder.com/150x150" alt="Cover" />
      </div>
      <div className="col-sm">
        <h5>Manga title #{manga.id}</h5>
        <h6>
          <em>- Author name</em>
        </h6>
        <div className="chapters">
          <small>
            Downloaded <strong>1</strong> of{" "}
            <strong>{manga.chapters.length}</strong> chapters
          </small>
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: "75%" }}
          />
        </div>
        <div className="actions mt-3">
          {manga.status == DownloadStatus.ONGOING && (
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => {
                setFilter(manga.id, DownloadStatus.PAUSED);
              }}>
              <span className="fa fa-pause-circle mr-1" />Pause
            </button>
          )}
          {manga.status == DownloadStatus.PAUSED && (
            <button
              type="button"
              className="btn btn-sm btn-info"
              onClick={() => {
                setFilter(manga.id, DownloadStatus.ONGOING);
              }}>
              <span className="fa fa-play-circle mr-1" />Resume
            </button>
          )}
          <button type="button" className="btn btn-sm btn-outline-danger ml-1">
            <span className="fa fa-trash mr-1" />Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DownloadItem;
