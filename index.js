const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 800,
    height: 600,
  });

  mainWindow.loadURL( process.env.NODE_ENV === 'development' ? 
    'http://localhost:3000' :
    `file://${path.join(__dirname, 'index.html')}`
  );

  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
