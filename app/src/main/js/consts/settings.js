import os from "os";
import path from "path";
import mkdirp from "mkdirp";

// base folder of all the settings
const SETTINGSDIR = ".baruchmd";

// create base folder
mkdirp.sync(path.join(os.homedir(), SETTINGSDIR));

export const ALLMANGASDBNAME = path.join(
  os.homedir(),
  SETTINGSDIR,
  "mangas.json"
);
export const DOWNLOADEDMANGASDBNAME = path.join(
  os.homedir(),
  SETTINGSDIR,
  "download_state.json"
);
export const SETTINGSDBNAME = path.join(
  os.homedir(),
  SETTINGSDIR,
  "settings.json"
);

export default {
  isUpdateOnStartEnabled: false,
  saveLocation: os.homedir(),
  compressToCbz: false,
  isNotifyOnFinishEnabled: true,
  isDarkThemeEnabled: true
};
