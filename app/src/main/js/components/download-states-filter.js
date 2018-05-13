import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import _ from "lodash";

import DownloadStateButton from "./download-state-button";
import { setDownloadMangaStatusFilter } from "../actions/list_actions";
import { DownloadStatus } from "../consts/download-status";

const DownloadStatesFilter = ({ filter, setFilter }) => (
  <div className="btn-group" role="group">
    <DownloadStateButton
      children="All"
      active={isFilterActive(filter, null)}
      onClick={() => {
        setFilter(null)
      }}
    />
    <DownloadStateButton
      children="Downloading"
      active={isFilterActive(filter, DownloadStatus.ONGOING)}
      onClick={() => {
        setFilter(DownloadStatus.ONGOING)
      }}
    />
    <DownloadStateButton
      children="Finished"
      active={isFilterActive(filter, DownloadStatus.DOWNLOADED)}
      onClick={() => {
        setFilter(DownloadStatus.DOWNLOADED)
      }}
    />
    <DownloadStateButton
      children="Paused"
      active={isFilterActive(filter, DownloadStatus.PAUSED)}
      onClick={() => {
        setFilter(DownloadStatus.PAUSED)
      }}
    />
  </div>
);

const isFilterActive = (currentFilter, ownFilter) => {
  return currentFilter == ownFilter || (currentFilter == null && ownFilter == null);
}

const mapStateToProps = state => ({
  filter: state.downloadMangaStatusFilter
});

const mapDispatchToProps = dispatch => ({
  setFilter: status => dispatch(setDownloadMangaStatusFilter(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DownloadStatesFilter
);
