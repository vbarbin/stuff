var exec = require('child_process').exec;
var Q = require('q');

function Process(socket, tag) {
    this.socket = socket;
    this.tag = tag;
    this.intervalId = null;
}

Process.prototype.createFolder = function(folderName) {
    var deferred = Q.defer();
    exec('mkdir d:\\crap\\' + folderName, function(err, stdout) {
        if (err) {
            deferred.reject(err);
        }
        else {
            setTimeout(function() {
                deferred.resolve(stdout.toString());
            }, 6000);
        }
    });

    return deferred.promise;
};

Process.prototype.run = function() {
    var self = this;
    
    this.socket.emit('progress', {
        data: 'Running'
    });

    Q().then(function() {
        return self.createFolder(self.tag + '1')
    }).then(function() {
        return self.createFolder(self.tag + '2')
    }).then(function() {
        return self.createFolder(self.tag + '3')
    }).then(function() {
        return self.createFolder(self.tag + '4')
    }).then(function() {
        return self.createFolder(self.tag + '5')
    }).then(function() {
        return self.createFolder(self.tag + '6')
    }).then(function() {
        return self.createFolder(self.tag + '7')
    }).then(function() {
        return self.createFolder(self.tag + '8')
    }).then(function() {
        return self.createFolder(self.tag + '9')
    }).then(function() {
        return self.createFolder(self.tag + '10')
    }).then(function(data) {
        self.socket.emit('progress', { data: 'Done.'});
    }).catch(function(err) {
        self.socket.emit('progress', { data: err });
    });
};

Process.prototype.cancel = function() {
    clearInterval(this.intervalId);
};

module.exports = Process;