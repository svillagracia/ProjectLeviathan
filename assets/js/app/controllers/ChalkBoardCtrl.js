Leviathan.controller('ChalkBoardCtrl',['$scope','$http','$modal','UserService',function($scope,$http,$modal,UserService){

  console.log('Chalk Board Controller Loaded!');

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  $scope.currentUser = UserService.currentUser;

  $scope.userInfo = function(){
    $http.get('/api/auth')
    .success(function(data){
      $scope.user = data;
    });
  };

  $scope.userLifts = function(){
    $http.get('/api/lift/mine')
    .success(function(data){
      $scope.lifts = data;
    });
  };

  $scope.postInfo = function(){
    $http.get('/api/user/' + $scope.currentUser.id + '/posts')
    .success(function(data){
      console.log('postInfo gets: ',data);
    });
  };

  $scope.addLifts = function() {
    $modal.open({
      templateUrl:'/views/user/addLiftsModal.html',
      controller:'LiftsModalCtrl'
    });
  };

  $scope.postInfo();
  $scope.userInfo();
  $scope.userLifts();

}]);