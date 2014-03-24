define(['./module'], function(module) {
    module.controller('socketioController', ['$scope', '$http', 'websocketService',
        function socketioController($scope, $http, websocketService) {
            $scope.tag = null;
            $scope.output = [];
            var socket = null;

            $scope.startProcess = function() {
                socket = websocketService.connect($scope.tag, function onProgress(data) {
                    $scope.$apply(function() {
                        $scope.output.push(data.data);
                    });
                });
            }

            $scope.stopProcess = function() {
                websocketService.cancel(socket);
            }
        }
    ])
});