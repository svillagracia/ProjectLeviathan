Leviathan.controller('WeightRoomCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){

  console.log('Weight Room Controller Loaded!');

  $rootScope.loading = true;

  $http.get('/api/weightroom').success(function(data){
    $scope.articles = data;
    $rootScope.loading = false;
    console.log('$scope.articles is: ',$scope.articles);
  });

}]);