Leviathan.controller('ChalkBoardCtrl',['$scope','$http','$modal','UserService','Post','Lift',function($scope,$http,$modal,UserService,Post,Lift){

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
      console.log('Lifts is: ', data);
    });
  };

  $scope.postInfo = function(){
    $http.get('/api/user/' + $scope.currentUser.id + '/posts')
    .success(function(data){
      $scope.myPosts = data;
    });
  };

  $scope.addLifts = function() {
    $modal.open({
      templateUrl:'/views/user/addLiftsModal.html',
      controller:'LiftsModalCtrl'
    }).result.then(function(){
      $scope.userLifts();
    });
  };

  $scope.editPost = function(idx){
    $modal.open({
      templateUrl:'/views/user/editPostModal.html',
      controller:'EditPostModalCtrl',
      resolve: {
        thisPost:function(){
          return $scope.myPosts[idx];
        }
      }
    }).result.then(function(){
      $scope.postInfo();
    });
  };

  $scope.editStats = function() {
    $modal.open({
      templateUrl:'/views/user/editStatsModal.html',
      controller:'EditStatsModalCtrl',
      resolve: {
        user:function(){
          return $scope.currentUser;
        }
      }
    }).result.then(function(){
      $scope.userInfo();
    });
  };

  $scope.deleteAttempt = function(liftId){
    Lift.delete({id:liftId},function(data){
      $scope.userLifts();
      console.log('This set was deleted. ', data);
    });
  };

  $scope.deletePost = function(postId){
    Post.delete({id:postId},function(data){
      $scope.postInfo();
      console.log('This post was deleted. ', data);
    });
  };

  $scope.postInfo();
  $scope.userInfo();
  $scope.userLifts();

}]);