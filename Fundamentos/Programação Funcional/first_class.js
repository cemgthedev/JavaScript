const sayMyName = () => console.log('Mark');

const runFunction = fn => fn();

runFunction(sayMyName);
runFunction(() => console.log('discover'));

console.log(runFunction(Math.random));