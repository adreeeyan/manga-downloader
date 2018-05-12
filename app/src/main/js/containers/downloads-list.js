import React from "react";
import { connect } from "react-redux";
import DownloadItem from "../components/download-item";

const DownloadsList = ({ mangas }) => (
  <div className="row">
    {mangas.map((manga, key) => (
      <div className="col-sm-12 col-lg-6" key={key}>
        <DownloadItem manga={manga} />
      </div>
    ))}
  </div>
);

const getVisibleMangas = (mangas, filter) => {
  if (filter == null) {
    return mangas;
  }
  return mangas.filter(m.status == filter);
};

const mapStateToProps = state => ({
  mangas: getVisibleMangas(
    state.downloadedMangas,
    state.downloadedMangasFilter
  )
});

export default connect(mapStateToProps)(DownloadsList);
