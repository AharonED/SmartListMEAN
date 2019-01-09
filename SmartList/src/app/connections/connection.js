//;(function(){

	var socket = io.connect();
//	var users = document.getElementById('users');
//	var chat_input = document.getElementById('chat-input');
//	var chat_console = document.getElementById('chat-console');
	var userName;
/*
	function removeUser(name) {
		var current_users = document.querySelectorAll('[data-name]'),
			i;

		for (var i = 0; i < current_users.length; i += 1) {
			if (name === current_users[i].getAttribute('data-name')) {
				current_users[i].parentNode.removeChild(current_users[i]);
				break;
			};
		};
	};

	function insertUser(name) {
		var new_chatter = document.createElement('li');
		new_chatter.setAttribute('data-name', name);
		new_chatter.setAttribute('class', 'connected');
		new_chatter.innerHTML = name;
		users.appendChild(new_chatter);
	};

	function insertMessage(message) {
		var new_message = document.createElement('span');
		new_message.innerHTML = message + '<br/>';
		chat_console.appendChild(new_message);
	};
*/

	function sendtMessage(message) {
		socket.emit('messages', message);
	}

	socket.on('messages', function(data) {
		insertMessage(data);
	});

	socket.on('connect', function(data) {
		chat_console.innerHTML = '<span class="connected">connected to the chat socket</span><br/>';
		userName = prompt('what is your nickanme?');
		socket.emit('join', userName);
	});

	socket.on('add user', insertUser);
	socket.on('remove user', removeUser);

//}());
