const timeOut = 1000;
const checking = () => console.log("Checando...");

let interval = setInterval(checking, timeOut);
setTimeout(() => clearInterval(interval), 4000);
