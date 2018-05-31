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
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    const { children, hidden, close } = { ...this.props };
    return (
      <div
        className={classNames("global-modal-holder", "page", "animated", {
          slideOutDown: hidden,
          slideInUp: !hidden
        })}>
        <span className="fa fa-close close" onClick={close} />
        {children}
      </div>
    );
  }
}

export default GlobalModalHolder;
