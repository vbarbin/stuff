var socketio = require('socket.io')
var Process = require('./process')

var ProcessService = function(app) {
    this.io = null;

    app.get('/status', function(req, res) {
        res.send({status: 'Available'});
    });
}

ProcessService.prototype.start = function(server) {
    this.io = socketio.listen(server);
    this.io.sockets.on('connection', function(socket) {
        var process = null;
        
        socket.on('start', function(data) {
            process = new Process(socket, data.tag);
            process.run();
        });

        socket.on('disconnect', function() {
            process.cancel();
        });
    });
};

module.exports = ProcessService;