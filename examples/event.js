var event = require('events');
var em = new event.EventEmitter();

var listner1 = function listner1()
{
    console.log('listner1 executed.');
}

var listner2 = function listner2()
{
    console.log('listner2 executed.');
}

em.on('connection',listner1);
em.on('connection',listner2);
var eventListeners = listenerCount(eventEmitter,'connection');
console.log(eventListeners,"Listeners are connecting");

em.emit('connection');
em.removeListener(listner1);
console.log("listner1 wont listen now");

em.emit('connection');
em.removeListener(listner2);
console.log("listner2 wont listen now");