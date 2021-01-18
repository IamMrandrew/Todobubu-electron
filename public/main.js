const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 425,
    height: 800,
    minWidth: 425,
    minHeight: 740,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
      webSecurity: false,
    },
  });
  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : "https://todobubu.laporatory.com"
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
