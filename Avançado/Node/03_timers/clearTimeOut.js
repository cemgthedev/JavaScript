const timeOut = 3000;
const finished = () => console.log("What is your name ?");

let timer = setTimeout(finished, timeOut);
clearTimeout(timer);
