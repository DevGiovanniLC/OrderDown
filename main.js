const { app, BrowserWindow, ipcMain, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const {exec} = require('child_process');
const ipc = ipcMain;

function createWindow () {
  
  win = new BrowserWindow({
    width: 600,
    height: 800,
    resizable: false,
    frame: false,
    icon: 'assets/icon.ico',
    roundedCorners: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('src/index.html')

  ipc.on('close', () => {
    app.quit();
  });

  ipc.on('minimize', () => {
    win.hide();
  });

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
