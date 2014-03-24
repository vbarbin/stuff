define(['./module'], function(module) {
    module.controller('validationController', ['$scope', 
        function validationController($scope) {
            $scope.title = '';
            $scope.actors = [];

            $scope.addActor = function addActor() {
                $scope.actors.push({
                    name: ''
                });
            };

            $scope.isValid = function() {
                return ($scope.title || '').toUpperCase() != 'CACA';
            };

            $scope.isActorUnique = function(actor) {
                var actorsCount = {};
                for (var index in $scope.actors) {
                    var name = $scope.actors[index].name;
                    actorsCount[name] = (actorsCount[name]) ? actorsCount[name] + 1 : 1;
                }
                return actorsCount[actor.name] == 1;
            }
        }
    ]);
});