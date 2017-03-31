const {app, BrowserWindow} = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

app.on('window-all-closed', function() {
	app.quit();
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		webPreferences: {
			preload: path.join(__dirname, 'js/preload.js')
		}
	});
	mainWindow.loadURL('file://' + __dirname + '/views/browser.html');
	mainWindow.openDevTools();

	mainWindow.webContents.on('did-finish-load', function () {
		let p = path.join(__dirname, 'js/webview.js');
		console.log(p);
		let script = fs.readFile(p, 'utf8', function (err, data) {
			console.log(data);
			mainWindow.webContents.executeJavaScript(data);
		});
	})
});