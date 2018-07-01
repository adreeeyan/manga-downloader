import React from "react";
import { connect } from "react-redux";
import DownloadItem from "../components/download-item";
import {
  setDownloadMangaStatus,
  setDownloadedMangaForDeletion
} from "../actions/list_actions";
import {
  doDeleteDownloadedManga,
  doDownloadManga
} from "../actions/download";
import { DownloadStatus } from "../consts/download-status";

const DownloadsList = ({ mangas, setFilter, setForDelete, retryDownload }) => (
  <div className="row">
    {mangas.map((manga, key) => (
      <div className="col-sm-12 col-lg-6" key={key}>
        <DownloadItem
          manga={manga}
          setFilter={setFilter}
          setForDelete={setForDelete}
          retryDownload={retryDownload}
        />
      </div>
    ))}
  </div>
);

const getVisibleMangas = (mangas, filter) => {
  if (filter == null) {
    return mangas;
  }
  return mangas.filter(m => m.status == filter);
};

const mapStateToProps = state => ({
  mangas: getVisibleMangas(
    state.downloadedMangas,
    state.downloadMangaStatusFilter
  )
});

const mapDispatchToProps = dispatch => ({
  setFilter: (id, status) => dispatch(setDownloadMangaStatus(id, status)),
  setForDelete: manga => {
    dispatch(setDownloadedMangaForDeletion(manga))
  },
  retryDownload: manga => {
    // delete in list
    dispatch(doDeleteDownloadedManga(manga.info.location, "", false));
    // add to list again
    // convert to int list, doDownloadManga accepts ints in chapters
    const chapters = _.map(manga.chapters, m => m.index);
    dispatch(doDownloadManga(manga.info, manga.location, manga.compressToCbz, chapters, manga.downloaded, DownloadStatus.ONGOING));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsList);
