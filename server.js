var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var SerialPort = require("serialport");
var serialPort = new SerialPort("COM3");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
	
  });
});

serialPort.on("open", function () {
  serialPort.on('data', function(data) {
	 io.emit('chat message', data.toString());
	 //console.log(data.toString());	 
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
