const currentVersion = require("electron").remote.app.getVersion();
import React from "react";
import { connect } from "react-redux";

import {
  doSetUpdate,
  doAcceptUpdate,
  doRejectUpdate
} from "../actions/appupdate";

import "../../res/scss/appupdate.scss";

const AppUpdateConfirmation = ({
  appupdate,
  acceptUpdate,
  rejectUpdate
}) => (
  <div className="appupdate-confirmation">
    <h1 className="mb-3">An update is available!</h1>
    <div className="versions">
      <h6>
        Current version: <strong>{currentVersion}</strong>
      </h6>
      <h6>
        New version: <strong>{appupdate.version}</strong>
      </h6>
      <h6>
        Release name: <strong>{appupdate.releaseName}</strong>
      </h6>
    </div>
    <div
      className="notes"
      dangerouslySetInnerHTML={{ __html: appupdate.releaseNotes }}
    />
    <div className="actions row mt-4">
        <button className="btn btn-outline-success col-md-4" onClick={acceptUpdate}>Update now</button>
        <button className="btn btn-outline-warning col-md-4" onClick={rejectUpdate}>Later</button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  appupdate: state.appupdate || {}
});

const mapDispatchToProps = dispatch => ({
  acceptUpdate: () => dispatch(doAcceptUpdate()),
  rejectUpdate: () => dispatch(doRejectUpdate())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AppUpdateConfirmation
);
