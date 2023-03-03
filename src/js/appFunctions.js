const { ipcRenderer} = require('electron')
const ipc = ipcRenderer;
const {exec} = require('child_process');

let quitButton = document.getElementById("quitButton");
let minimizeButton = document.getElementById("minimizeButton");



quitButton.addEventListener("click", ()=> {
    ipc.send('close')
})

minimizeButton.addEventListener("click", ()=> {
    ipc.send('minimize')
})