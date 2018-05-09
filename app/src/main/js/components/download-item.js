import React from "react";

import "../../res/scss/download-item.scss";

const DownloadItem = () => (
  <div className="download-item">
    <div className="row align-items-center">
      <div className="cover">
        <img src="http://via.placeholder.com/150x150" alt="Cover" />
      </div>
      <div className="col-sm">
        <h5>Manga title here</h5>
        <h6>
          <em>- Author name</em>
        </h6>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          />
        </div>
        <div className="actions mt-3">
          <button type="button" className="btn btn-sm btn-warning">
            <span className="fa fa-pause-circle mr-1" />Pause
          </button>
          <button type="button" className="btn btn-sm btn-outline-danger ml-1">
            <span className="fa fa-trash mr-1" />Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DownloadItem;
