var utils = require('utils'),
  EventEmitter = require('events').EvenetEmitter;

var Server = function() {
  console.log('init');
};

utils.inherits(Server, EventEmitter);

var s = new Server();

s.on('abc', function() {
  console.log('abc');
});
