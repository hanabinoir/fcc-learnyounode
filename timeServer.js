var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
// socket handling logic
    var date = new Date();
    date = strftime('%F %H:%M', date) + "\n";
    socket.end(date, 'utf8');
});
server.listen(process.argv[2]);
