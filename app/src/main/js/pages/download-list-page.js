import React from "react";

import DownloadStatesFilter from "../components/download-states-filter";
import AddMangaButton from "../components/add-manga-button";
import DownloadsList from "../containers/downloads-list";

import "../../res/scss/download-list-page.scss";

const DownloadListPage = () => (
  <div className="download-list-page transition-item page">
    <div className="filter-state mb-4">
      <DownloadStatesFilter />
    </div>
    <DownloadsList />
    <div className="add-button">
      <AddMangaButton />
    </div>
  </div>
);

export default DownloadListPage;
