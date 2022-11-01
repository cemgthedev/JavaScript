const { inherits } = require('util');
const { EventEmitter } = require('events');

const event = new EventEmitter();

/*
--> Ouvir uma única vez
event.once('saySomething', () => {
    console.log('Ouvi você');
});
*/

event.on('saySomething', () => {
    console.log('Ouvi você');
});

event.emit('saySomething');

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado`));

console.log("Oh! e agora... quem poderá me defender ?");
chapolin.emit('help');
