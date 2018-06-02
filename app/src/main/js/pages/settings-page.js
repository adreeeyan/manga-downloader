import React from "react";
import { connect } from "react-redux";

import SwitchToggle from "../components/switch-toggle";
import InitService from "../services/init-services";

import "../../res/scss/settings-page.scss";
import {
  doSetUpdateOnStart,
  doSetNotifyOnFinish,
  doSetDarkTheme,
  doSetCompressToCbz,
  doSetDefaultSaveLocation
} from "../actions/settings";

const remote = require("electron").remote;
const electronDialog = remote.require("electron").dialog;

const SettingsPage = ({
  settings,
  toggleUpdateOnStart,
  toggleSetNotifyOnFinish,
  toggleSetDarkTheme,
  toggleSetCompressToCbz,
  setDefaultSaveLocation
}) => {
  const onChangeSaveLocation = event => {
    setDefaultSaveLocation(event.target.value);
  };
  let compressToCbzControl;
  let saveLocationControl;
  const selectDirectory = () => {
    const saveLocation = electronDialog.showOpenDialog({
      properties: ["openDirectory"]
    }) || [settings.saveLocation];
    setDefaultSaveLocation(saveLocation[0]);
  };
  const updateMangaList = () => {
    InitService.updateAllMangasList(true, true);
  };
  return (
    <div className="settings-page transition-item page">
      <div className="list mt-4">
        <h4 className="title">Manga list</h4>
        <hr />
        <div className="items mt-2 row">
          <div className="col-sm">Update manga list on app start</div>
          <div>
            <SwitchToggle
              onClick={toggleUpdateOnStart}
              checked={settings.isUpdateOnStartEnabled}
            />
          </div>
        </div>
        <div className="items mt-0 row">
          <div className="col-sm">Update manga list now</div>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-radius"
              onClick={updateMangaList}>
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="list mt-3">
        <h4 className="title">Saving</h4>
        <hr />
        <div className="items mt-2 row">
          <div className="col-sm-5">Default save location</div>
          <div className="col-sm-11 row mt-2 ml-5">
            <input
              type="text"
              className="col-sm-3 form-control form-control-sm"
              value={settings.saveLocation}
              onChange={onChangeSaveLocation}
            />
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={selectDirectory}>
              Browse
            </button>
          </div>
        </div>
        <div className="items mt-2 row">
          <div className="col-sm">Compress chapters to CBZ</div>
          <div>
            <SwitchToggle
              onClick={toggleSetCompressToCbz}
              checked={settings.compressToCbz}
            />
          </div>
        </div>
      </div>
      <div className="list mt-3">
        <h4 className="title">Notifications</h4>
        <hr />
        <div className="items mt-2 row">
          <div className="col-sm">
            Notify me when a manga finished downloading
          </div>
          <div>
            <SwitchToggle
              onClick={toggleSetNotifyOnFinish}
              checked={settings.isNotifyOnFinishEnabled}
            />
          </div>
        </div>
      </div>
      <div className="list mt-3">
        <h4 className="title">Appearance</h4>
        <hr />
        <div className="items mt-2 row">
          <div className="col-sm">Use dark theme</div>
          <div>
            <SwitchToggle
              onClick={toggleSetDarkTheme}
              checked={settings.isDarkThemeEnabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  toggleUpdateOnStart: () => dispatch(doSetUpdateOnStart()),
  toggleSetNotifyOnFinish: () => dispatch(doSetNotifyOnFinish()),
  toggleSetDarkTheme: () => dispatch(doSetDarkTheme()),
  toggleSetCompressToCbz: compressToCbz => dispatch(doSetCompressToCbz(compressToCbz)),
  setDefaultSaveLocation: location =>
    dispatch(doSetDefaultSaveLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
