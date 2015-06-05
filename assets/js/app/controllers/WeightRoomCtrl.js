Leviathan.controller('WeightRoomCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){

  $rootScope.loading = true;

  $http.get('/api/weightroom').success(function(data){
    $scope.articles = data;
    $rootScope.loading = false;
  });

}]);