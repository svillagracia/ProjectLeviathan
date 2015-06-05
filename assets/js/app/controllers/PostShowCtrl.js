Leviathan.controller('PostShowCtrl',['$scope','UserService','$routeParams','PostComment','AlertService','$http','Post','$rootScope',function($scope,UserService,$routeParams,PostComment,AlertService,$http,Post,$rootScope){

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  $rootScope.loading = true;

  Post.get({id:$routeParams.id},function(data) {
    $rootScope.loading = false;
    $scope.post = data;
  },function(err){
    console.log(err);
  });

  $scope.postInfo = function(){
    $http.get('/api/post/'+ $routeParams.id)
    .success(function(data){
      $scope.information = data;
    });
  };

  $scope.addComment = function(){
    var comment = new PostComment();
    comment.title = $scope.commentTitle;
    comment.body = $scope.commentText;
    comment.$save({postId:$routeParams.id},function(data){
      $scope.post = data;
      $scope.commentTitle = '';
      $scope.commentText = '';
      $scope.postInfo();
    });
  };

  $scope.postInfo();

}]);

