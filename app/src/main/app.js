const electron = require("electron");

// Module to control application life.
const { app } = electron;
// Module to create native browser window.
const { BrowserWindow } = electron;

const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let splashScreen;

function createSplashScreen() {
  splashScreen = new BrowserWindow({
    width: 600,
    height: 350,
    frame: false,
    transparent: true
  });

  splashScreen.loadURL(
    url.format({
      pathname: path.join(__dirname, "splash.html"),
      protocol: "file:",
      slashes: true
    })
  );
}

/** This function will create the mainWindow */
function createWindow() {
  // Create the browser window.
  const icon = path
    .join(app.getAppPath(), "build", "icon_256.png")
    .replace("app.asar", "app.asar.unpacked");
  if (process.env.NODE_ENV === "development") {
    mainWindow = new BrowserWindow({
      width: 1500,
      height: 700,
      icon: icon,
      show: false
    });
  } else {
    mainWindow = new BrowserWindow({
      width: 1300,
      height: 700,
      icon: icon,
      show: false
    });
  }

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.webContents.on("did-finish-load", () => {
    splashScreen.destroy();
    mainWindow.show();
  });

  if (process.env.NODE_ENV === "development") {
    // Open the DevTools
    mainWindow.webContents.openDevTools();
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require("electron-devtools-installer"); // eslint-disable-line
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log("An error occurred: ", err));

    installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log("An error occurred: ", err));
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// The real start app
const startApp = () => {
  const apiServer = require("child_process").fork(
    require.resolve("./server/server.js"),
    [],
    { silent: true }
  );
  apiServer.stdout.on("data", data => {
    const serverOutput = data.toString("utf8");
    // check if server started the API already
    if (serverOutput.indexOf("Manga provider API started") != -1) {
      console.log("creating the window");
      // create the window
      createSplashScreen();
      createWindow();
    }
    // output from server
    console.log("server process", serverOutput);
  });
  apiServer.on("exit", (code, sig) => {
    // finishing
  });
  apiServer.on("error", error => {
    // error handling
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  startApp();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    startApp();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
