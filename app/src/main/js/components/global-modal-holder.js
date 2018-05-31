import React from "react";

import "../../res/scss/global-modal-holder.scss";

const GlobalModalHolder = (props) => (
  <div className="global-modal-holder page">
    {props.children}
  </div>
);

export default GlobalModalHolder;
