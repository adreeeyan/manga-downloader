import React from "react";

import "../../res/scss/emptylist-placeholder.scss";

const EmptyListPlaceholder = () => (
  <div className="wrapper transition-item page">
    <div className="empty-list-placeholder">
      <button type="button" className="btn btn-primary rounded-circle add animated bounce infinite">
        <span className="fa fa-plus" />
      </button>
      <div className="label">Such empty, much wow!</div>
      <div className="recommendation">Click to download manga</div>
    </div>
  </div>
);

export default EmptyListPlaceholder;
