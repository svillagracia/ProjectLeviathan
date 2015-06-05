Leviathan.directive('alerts', function() {

  return {
    restrict:'E',
    scope:{
      alerts:'=?'
    },
    controller:['$scope', 'AlertService', function($scope, AlertService) {

      $scope.getAlerts = function() {
        return AlertService.get();
      };

      $scope.closeAlert = function(idx) {
        AlertService.remove(idx);
      };

    }],
    replace:true,
    template:'<alert ng-repeat="alert in getAlerts()" type="{{alert.type}}" close="$parent.closeAlert($index)">{{alert.text}}</alert>'
  };

});