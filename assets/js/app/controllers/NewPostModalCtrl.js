Leviathan.controller('NewPostModalCtrl', ['$scope','$modalInstance','UserService','$resource', function($scope,$modalInstance,UserService,$resource) {

  UserService.check(function(err, data){
    // console.log(data);
  });

  var currentUser = UserService.currentUser;

  var Post = $resource('/api/user/'+ currentUser.id +'/posts');
  $scope.addPost = function(){
    var post = new Post();
    post.title = $scope.postTitle;
    post.link = $scope.postLink;
    post.linkTitle = $scope.postLinkTitle;
    post.body = $scope.postBody;
    post.$save(function(){
      $modalInstance.close();
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);