(function(){

  /**
   * Update a link tag dynamically
   *
   * @constructor
   */
  function UpdateLinkDirective($log, updateAttribute) {

    return {
      restrict: 'E',
      scope: {
        rel: '@',
        href: '@'
      },
      link: function(scope, iElem, iAttrs) {
        var rel = '[rel="' + scope.rel + '"]';
        var href= '[href="' + scope.href + '"]';
        var selector = 'link' + rel + href;

        // watch the content parameter and set the changing value as needed
        scope.$watch('href', function (newValue, oldValue) {
          if (typeof newValue !== 'undefined') {
            updateAttribute.update(selector, 'href', scope.href);
          }
        });
      }
    };
  }

  // Inject dependencies
  UpdateLinkDirective.$inject = ['$log', 'updateAttribute'];

  // Export
  angular
    .module('updateMeta')
    .directive('updateLink', UpdateLinkDirective);
})();
