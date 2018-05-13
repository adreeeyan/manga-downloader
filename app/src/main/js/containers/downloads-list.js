import React from "react";
import { connect } from "react-redux";
import DownloadItem from "../components/download-item";
import { setDownloadMangaStatus } from "../actions/list_actions";

const DownloadsList = ({ mangas, setFilter }) => (
  <div className="row">
    {mangas.map((manga, key) => (
      <div className="col-sm-12 col-lg" key={key}>
        <DownloadItem manga={manga} setFilter={setFilter} />
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
  setFilter: (id, status) => dispatch(setDownloadMangaStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsList);
