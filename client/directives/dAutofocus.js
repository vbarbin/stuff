define(['./module'], function(module) {
    module.directive('dAutofocus', [function() {
        return {
            link: function(scope, ielem, iattr) {
                ielem.focus();
            }
        };
    }]);
});