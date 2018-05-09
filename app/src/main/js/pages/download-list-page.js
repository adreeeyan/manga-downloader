import React from "react";

import DownloadItem from "../components/download-item";
import DownloadStatesFilter from "../components/download-states-filter";
import AddMangaButton from "../components/add-manga-button";

import "../../res/scss/download-list-page.scss";

const DownloadListPage = () => (
  <div className="download-list-page transition-item page">
    <div className="filter-state mb-4">
      <DownloadStatesFilter />
    </div>
    <div className="row">
      <div className="col-sm-12 col-md">
        <DownloadItem />
      </div>
      <div className="col-sm-12 col-md">
        <DownloadItem />
      </div>
    </div>
    <div className="add-button">
      <AddMangaButton />
    </div>
  </div>
);

export default DownloadListPage;
