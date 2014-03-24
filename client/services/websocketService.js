define(['./module', 'socket.io/socket.io'], function(module) {
    module.factory('websocketService', function() {
        var service = {
            socket: null,
            connect: function(tag, onProgress) {
                if (!this.socket) {
                    this.socket = io.connect(location.origin);
                    this.socket.on('progress', onProgress);
                }
                else {
                    this.socket.socket.reconnect();
                }

                this.socket.emit('start', {
                    tag: tag
                });
            },

            cancel: function() {
                this.socket.disconnect();
            }
        };

        return Object.create(service);
    });
});