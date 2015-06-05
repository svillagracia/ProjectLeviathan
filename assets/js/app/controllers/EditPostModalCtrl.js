Leviathan.controller('EditPostModalCtrl', ['$scope','$modalInstance','UserService','$resource','thisPost','Post', function($scope,$modalInstance,UserService,$resource,thisPost,Post) {
  console.log('Edit Post modal controller!!', thisPost);

  $scope.post = thisPost;

  $scope.edit = function(){
    Post.update({id: $scope.post.id},{
      title: $scope.post.title,
      link: $scope.post.link,
      linkTitle: $scope.post.linkTitle,
      body: $scope.post.body
    },function(data){
      console.log('edited post: ',data);
      $modalInstance.close();
    });
  };

}]);