Leviathan.controller('PlatformCtrl',['$scope','$http','$modal',function($scope,$http,$modal){
  console.log('Platform Controller Loaded!');

  $scope.getPosts = function(){
    $http.get('/api/post')
    .success(function(data){
      $scope.posts = data;
      console.log('Posts are:',data);
    });
  };

  $scope.newPost = function() {
    $modal.open({
      templateUrl:'/views/post/newPostModal.html',
      controller:'NewPostModalCtrl'
    });
  };

  $scope.getPosts();

}]);