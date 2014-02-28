define(['./module'], function(module) {
    module.directive('dAutofocus', function($timeout) {
        return {
            link: function(scope, ielem, iattr) {
                $timeout(function() {
                    ielem.focus();
                });
            }
        };
    });
});