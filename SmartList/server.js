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




////////////////////////////////////////////////////////////////
//using websockets for 2-way-bonding in case of adding new group.
//each users registers after logingin and server establish connection.
//when user add new group, it use the groups-service for adding to DB, imidiate after that, the service 
//call the server emitter for notifying all entier users for adding new group...
////////////////////////////////////////////////////////////////
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
	 *	When a message comes through, get the name and broadcast the messsage
	 *	send broadcast message to update all users
	 */

	client.on('message', function(message) {
      console.log('server event: get message ' + message);

			client.broadcast.emit('message',  message);
	});

  
	/**
	 *	Notify all users whan new Group was added
	 */

	client.on('AddGroup', function(GroupCount) {
    console.log('server event: get message AddGroup ' + GroupCount);

    client.broadcast.emit('GroupAdded',  GroupCount);
});

	/**
	 *	When a user disconnects, get their name and broadcast they left
	 */

	client.on('disconnect', function(name) {
					client.broadcast.emit('remove user', name);
	});
});

module.exports = server;
