const currentVersion = require("electron").remote.app.getVersion();
import React from "react";
import { connect } from "react-redux";

import {
  doSetUpdate,
  doAcceptUpdate,
  doRejectUpdate,
  doInstallUpdate,
  doInstallUpdateLater
} from "../actions/appupdate";

import "../../res/scss/appupdate.scss";

const AppUpdateConfirmation = ({
  appupdate,
  updateReadyForInstall,
  acceptUpdate,
  rejectUpdate,
  installUpdate,
  installUpdateLater
}) => (
  <div className="appupdate-confirmation">
    {!updateReadyForInstall && (
      <div className="update-available">
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
          <button
            className="btn btn-outline-success col-md-4"
            onClick={acceptUpdate}>
            Update now
          </button>
          <button
            className="btn btn-outline-warning col-md-4"
            onClick={rejectUpdate}>
            Later
          </button>
        </div>
      </div>
    )}
    {updateReadyForInstall && (
      <div className="update-ready">
        <h1 className="mb-3">Your update is ready for installation!</h1>
        <h3>
          Do you want me to install it now? Remember that this will restart the
          app.
        </h3>
        <div className="actions row mt-4">
          <button
            className="btn btn-outline-success col-md-4"
            onClick={installUpdate}>
            Yes, install and restart app
          </button>
          <button
            className="btn btn-outline-warning col-md-4"
            onClick={installUpdateLater}>
            No, install after closing app
          </button>
        </div>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  appupdate: state.appupdate.data,
  updateReadyForInstall: state.appupdate.updateReadyForInstall
});

const mapDispatchToProps = dispatch => ({
  acceptUpdate: () => dispatch(doAcceptUpdate()),
  rejectUpdate: () => dispatch(doRejectUpdate()),
  installUpdate: () => dispatch(doInstallUpdate()),
  installUpdateLater: () => dispatch(doInstallUpdateLater())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUpdateConfirmation);
