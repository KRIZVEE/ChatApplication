var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('Client'));

var io= require('socket.io')(server);

io.on('connection', function (socket){
	socket.on('message', function(msg){
		io.emit('message',msg);
	});
});

server.listen(process.env.PORT || 8080, process.env.IP || 178, function() {
	//server.listen(process.env.PORT, process.env.IP, function() {
	var addr = server.address();
  console.log('Chat server running at', addr.address + ":" + addr.port);
});