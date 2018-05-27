import React from "react";
import { connect } from "react-redux";
import SwitchToggle from "../components/switch-toggle";

import "../../res/scss/settings-page.scss";

const SettingsPage = ({}) => (
  <div className="settings-page transition-item page">
    <div className="list mt-4">
      <h4 className="title">Manga list</h4>
      <hr />
      <div className="items mt-2 row">
        <div className="col-sm">Update manga list on app start</div>
        <div>
          <SwitchToggle />
        </div>
      </div>
      <div className="items mt-0 row">
        <div className="col-sm">Update manga list now</div>
        <div>
          <button type="button" className="btn btn-primary btn-radius">
            Update
          </button>
        </div>
      </div>
    </div>
    <div className="list mt-3">
      <h4 className="title">Saving</h4>
      <hr />
      <div className="items mt-2 row">
        <div className="col-sm">Default save location</div>
        <div className="col-sm-12 row mt-2 ml-5">
            <input type="text" className="col-sm-3 form-control form-control-sm" />
            <button type="button" className="btn btn-primary btn-sm">
            Browse
            </button>
        </div>
      </div>
      <div className="items mt-2 row">
        <div className="col-sm">Default format</div>
        <div className="col-sm-12 row mt-2 ml-5">
          <select className="form-control form-control-sm col-sm-3">
            <option>Folder</option>
            <option>zip</option>
            <option>cbx</option>
          </select>
        </div>
      </div>
    </div>
    <div className="list mt-3">
      <h4 className="title">Notifications</h4>
      <hr />
      <div className="items mt-2 row">
        <div className="col-sm">Notify me when a manga finished downloading</div>
        <div>
          <SwitchToggle />
        </div>
      </div>
    </div>
    <div className="list mt-3">
      <h4 className="title">Appearance</h4>
      <hr />
      <div className="items mt-2 row">
        <div className="col-sm">Use dark theme</div>
        <div>
          <SwitchToggle />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
