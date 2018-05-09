import React from "react";
import DownloadStateButton from "./download-state-button";

const DownloadStatesFilter = () => (
  <div className="btn-group" role="group">
    <DownloadStateButton children="All" active={false} onClick={() => {console.log("All")}} />
    <DownloadStateButton children="Downloading" active={true} onClick={() => {console.log("Downloading")}} />
    <DownloadStateButton children="Finished" active={false} onClick={() => {console.log("Finished")}} />
    <DownloadStateButton children="Stopped" active={false} onClick={() => {console.log("Stopped")}} />
  </div>
);

export default DownloadStatesFilter;
