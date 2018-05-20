import React from "react";

import loadingImage from "../../res/images/loading.svg";
import "../../res/scss/loading-indicator.scss";

const LoadingIndicator = ({ description = "" }) => (
  <div className="loading-indicator">
    <div>
        <img src={loadingImage} alt="Loading..." />
    </div>
    <div>
        <h3>{description}</h3>
    </div>
  </div>
);

export default LoadingIndicator;
