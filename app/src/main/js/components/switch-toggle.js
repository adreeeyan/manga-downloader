import React from "react";
import classNames from "classnames";

import "../../res/scss/switch-toggle.scss";

const SwitchToggle = ({ onClick, checked }) => (
  <label className="switch" onClick={onClick}>
    <span
      className={classNames("slider", {
        checked: checked
      })}
    />
  </label>
);

export default SwitchToggle;
