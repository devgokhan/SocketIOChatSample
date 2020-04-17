var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
    console.log('User connected to chat with connection id: ', socket.client.conn.id);
  
    socket.on('disconnect', function(){
        console.log('User disconnected to chat with connection id: ', socket.client.conn.id);
    });

    socket.on('sendMessage', function(sender, message){
        console.log(String('Sender ' + sender + ' sent message: ' + message));
        io.emit('message', sender, message);
    });

});

exports.app = http.listen(port, function(){
    console.log('listening on *:' + port);
});