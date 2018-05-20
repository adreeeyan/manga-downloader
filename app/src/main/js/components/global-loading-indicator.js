import React from "react";

import LoadingIndicator from "./loading-indicator";
import "../../res/scss/global-loading-indicator.scss";

const GlobalLoadingIndicator = ({ description = "" }) => (
  <div className="global-loading-indicator page">
    <LoadingIndicator description={description} />
  </div>
);

export default GlobalLoadingIndicator;
