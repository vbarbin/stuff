define(['./module'], function(module) {
    module.directive('dValidate', function($rootScope) {
        return {
            require: 'ngModel',
            restrict: 'A',
            compile: function(telem, tattr) {
                var $form = null;
                $form = $('[name=' + tattr.dValidate + '],[ng-form=' + tattr.dValidate + ']');
                
                return function($scope, $elem, iattr, ngModel) {
                    var matcher = /dValidate(.)(.+)/
                    var validationExpr = {};
                    var form = null;

                    if (iattr.dValidate) {
                        form = $scope[iattr.dValidate];
                    }

                    for (attr in iattr) {
                        var expr = matcher.exec(attr);
                        if (expr) {
                            validationExpr[expr[1].toLowerCase() + expr[2]] = iattr[attr];
                        }
                    }

                    if ($form) {
                        $form.on('validate', checkValidity);
                    }
                    else {
                        $scope.$on('validate', checkValidity);
                    }

                    $elem.on('blur', checkValidity);
                    $elem.on('keyup', checkValidity);
                    $elem.on('focus', function() {
                        if (!$scope.$$phase) $scope.$apply(function() {
                            ngModel.$needsAttention = false;
                        })
                    });
                    
                    function checkValidity(e) {
                        $scope.$apply(function() {
                            for (var expr in validationExpr) {
                                var isValid = true;
                                isValid = $scope.$eval(validationExpr[expr]);
                                ngModel.$setValidity(expr, isValid);
                            }
                            ngModel.$needsAttention = ngModel.$invalid;
                            if (form) form.$needsAttention = form.$invalid;
                        });

                        if (e.name != 'validate' && e.type != 'validate') {
                            if ($form) {
                                $form.trigger('validate');
                            }
                            else {
                                $rootScope.$broadcast('validate');
                            }
                        }
                        else {
                            e.stopPropagation();
                        }
                    }
                }
            }
        };
    });
});