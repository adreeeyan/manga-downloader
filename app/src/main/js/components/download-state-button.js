import React from "react";

const DownloadStateButton = ({ active, children, onClick }) => (
  <button
    type="button"
    className="btn btn-secondary"
    onClick={onClick}
    disabled={active}>
    {children}
  </button>
);

export default DownloadStateButton;
