const path = require('path');
const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const isDev = require('electron-is-dev');
const fs = require('fs')

const openFile = () => {
  const files = dialog.showOpenDialogSync({
    title: "Open File",
    defaultPath: app.getPath('home'),
    properties: ['openFile']
  })

  if(!files) return null
  
  const file = files[0]
  const fileContent = fs.readFileSync(file).toString();
  // console.log(fileContent);
  return fileContent;
}

const openFolder = ()=> {
  const fileDialog = dialog.showOpenDialogSync({
    title: "Open Folder",
    properties: ['openDirectory']
  })

  console.log(fileDialog)
  return fileDialog
}


const fileTab = {
  label: "File",
  submenu: [
    {
      label: "New File",
      accelerator: process.platform === 'darwin' ? 'Cmd+N' : 'Ctrl+N',
      click: () => console.log("open new window"),
    },
    {
      label: "New Window",
      accelerator: process.platform === 'darwin' ? 'Cmd+Shift+N' : 'Ctrl+Shift+N',
      click: () => createWindow()
    },
    {
      type: "separator",
    },
    {
      label: "Open File",
      accelerator: process.platform === 'darwin' ? 'Cmd+O' : 'Ctrl+O',
      click: () => openFile()

    },
    {
      label: "Open Folder",
      accelerator: process.platform === 'darwin' ? 'Cmd+Shift+O' : 'Ctrl+Shift+O',
      click: () => openFolder()
    },
    {
      type: "separator",
    },
    {
      label: "Save",
    },
    {
      label: "Save As",
    },
    {
      type: "separator",
    },
    {
      role: "quit",
    },
  ],
};

const editTab = {
  label: "Edit",
  submenu: [
    { role: "undo" },
    { role: "redo" },
    { type: "separator" },
    { role: "cut" },
    { role: "copy" },
    { role: "paste" }
  ],
};

const helpTab = {
  role: "help",
  submenu: [
    {
      label: "Learn More",
      click: async () => {
        await shell.openExternal("https://electronjs.org");
      },
    },
  ],
};

const viewTab = { role: "viewMenu" }

const template = [fileTab, editTab, viewTab, helpTab];

const loadMenuTemplate = () => {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  loadMenuTemplate()
  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
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