import React from "react";
import classNames from "classnames";

import "../../res/scss/global-modal-holder.scss";

class GlobalModalHolder extends React.Component {
  escFunction = event => {
    if (event.keyCode === 27) {
      this.props.close();
    }
  };

  componentDidMount() {
    if (!this.props.isUncloseable) {
      document.addEventListener("keydown", this.escFunction, false);
    }
  }

  componentWillUnmount() {
    if (!this.props.isUncloseable) {
      document.removeEventListener("keydown", this.escFunction, false);
    }
  }

  render() {
    const { children, hidden, close, isUncloseable } = { ...this.props };
    return (
      <div
        className={classNames("global-modal-holder", "page", "animated", {
          slideOutDown: hidden,
          slideInUp: !hidden
        })}>
        {!isUncloseable && <span className="fa fa-close close" onClick={close} />}
        {children}
      </div>
    );
  }
}

export default GlobalModalHolder;
