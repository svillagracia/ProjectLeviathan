Leviathan.controller('ChalkBoardCtrl',['$scope','$http','$modal',function($scope,$http,$modal){

  console.log('Chalk Board Controller Loaded!');

  $scope.userInfo = function(){
    $http.get('/api/auth')
    .success(function(data){
      $scope.user = data;
      console.log('User is: ',data);
    });
  };

  $scope.userLifts = function(){
    $http.get('/api/lift/mine')
    .success(function(data){
      $scope.lifts = data;
      console.log('Lifts is: ',$scope.lifts);
    });
  };

  $scope.addLifts = function() {
    $modal.open({
      templateUrl:'/views/user/addLiftsModal.html',
      controller:'LiftsModalCtrl'
    });
  };

  $scope.userInfo();
  $scope.userLifts();

}]);