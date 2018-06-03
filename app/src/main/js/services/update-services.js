const remote = require("electron").remote;
const { autoUpdater } = remote.require("electron-updater");
const electron_log = remote.require("electron-log");
const isDev = remote.require("electron-is-dev");

import { store } from "../store";
import { doSetUpdate } from "../actions/appupdate";

const sendStatusToConsole = text => {
  electron_log.info("update status: " + text);
  console.log("update status", text);
};

autoUpdater.on("checking-for-update", () => {
  sendStatusToConsole("Checking for update...");
});
autoUpdater.on("update-available", info => {
  sendStatusToConsole("Update available." + JSON.stringify(info, null, 4));
  store.dispatch(doSetUpdate(info));
});
autoUpdater.on("update-not-available", info => {
  sendStatusToConsole("Update not available." + JSON.stringify(info, null, 4));
});
autoUpdater.on("error", err => {
  sendStatusToConsole("Error in auto-updater. " + err);
});
autoUpdater.on("download-progress", progressObj => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + " - Downloaded " + progressObj.percent + "%";
  log_message =
    log_message +
    " (" +
    progressObj.transferred +
    "/" +
    progressObj.total +
    ")";
  sendStatusToConsole(log_message);
});
autoUpdater.on("update-downloaded", info => {
  sendStatusToConsole("Update downloaded");
});

const checkForUpdate = () => {
  // if in dev mode, dont check update
  if (isDev) {
    console.log("not checking for update")
    return;
  }
  console.log("checking for update");
  autoUpdater.checkForUpdates();
};

const UpdateService = {
  checkForUpdate
};

export default UpdateService;
