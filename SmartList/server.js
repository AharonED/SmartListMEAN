const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


///////
//var express = require('express');
//var app = express();
//var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
global.getIO = io;


io.sockets.on('connection', function (client) {

this.client=client;

console.log("new connection");
	/**
	 *	When users join, set their userName and broadcast they are here
	 */

	client.on('join', function(name) {
		client.set('userName', name);
		client.broadcast.emit('add user', name); 
    });

		/**
		 *	Add all current chatters to the current client’s chatters list
		 */
/*
		redisClient.smembers('chatters', function(error, names) {
			names.forEach(function(name) {
				client.emit('add user', name);
			});
		});

*/
		/**
		 *	Add latest chat messages to current client
		 */
/*		
		redisClient.lrange('messages', 0, -1, function( error, messages) {
			messages = messages.reverse();

			messages.forEach(function(message) {
				message = JSON.parse(message);
				client.emit('messages',message.name + ' : ' + message.data);
			});
		});
	});
*/

	/**
	 *	When a message comes through, get the name and broadcast the messsage
	 *	Store the message after we get the nicname
	 */

	client.on('message', function(message) {
      console.log('server event: get message ' + message);

			client.broadcast.emit('message',  '--- : ' + message);
	});

  

	client.on('AddGroup', function(GroupCount) {
    console.log('server event: get message AddGroup ' + GroupCount);

    client.broadcast.emit('GroupAdded',  '--- : ' + GroupCount);
});

	/**
	 *	When a user disconnects, get their name and broadcast they left
	 */

	client.on('disconnect', function(name) {
					client.broadcast.emit('remove user', name);
	});
});

module.exports = server;
