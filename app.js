var socket = io();

$('form').('submit',function(){
	var text	=	$('#message').val();
	socket.emit('message', text);
  $('#message').val('');
	return false;
});

socket.on('message', function (msg) {	
	var incomingMessage = $('<li>').text(msg);
	$('#history').append(incomingMessage);
 // $('<li>').text(msg).appendTo('#history');
});
//alert('hello from the JS file');