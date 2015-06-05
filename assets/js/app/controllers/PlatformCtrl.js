Leviathan.controller('PlatformCtrl',['$scope','$http','$modal',function($scope,$http,$modal){

  $scope.getPosts = function(){
    $http.get('/api/post')
    .success(function(data){
      $scope.posts = data;
    });
  };

  $scope.newPost = function() {
    $modal.open({
      templateUrl:'/views/post/newPostModal.html',
      controller:'NewPostModalCtrl'
    }).result.then(function(){
      $scope.getPosts();
    });
  };

  $scope.getPosts();

}]);