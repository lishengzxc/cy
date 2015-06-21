/**
 * Created by lisheng on 15/6/19.
 */
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	res.sendfile(__dirname + "/static/index.html");
});

server.listen(3000);

var io = require('socket.io').listen(server.listen(3000));

var messages = [];
io.sockets.on('connection',function(socket){

	console.log('connected');

	//socket.on('update',function(data){
	//	//socket.emit('allMessages',messages);
	//	console.log(data);
	//});
	socket.on('update',function(data){
		//console.log(data);
		io.sockets.emit('updated',data);
	});
});

