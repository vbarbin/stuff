function Process(socket, tag) {
    this.socket = socket;
    this.tag = tag;
    this.intervalId = null;
}

Process.prototype.run = function() {
    var self = this;
    
    this.socket.emit('progress', {
        data: 'Running'
    });

    var i = 1;
    this.intervalId = setInterval(function() {
        self.socket.emit('progress', {
            data: self.tag + ' ' + i++
        })
    }, 500);
}

Process.prototype.cancel = function() {
    clearInterval(this.intervalId);
}

module.exports = Process;