Leviathan.controller('EditStatsModalCtrl', ['$scope','$modalInstance','UserService','$resource','user','User', function($scope,$modalInstance,UserService,$resource,user,User) {

  $scope.user = user;

  $scope.edit = function(){
    User.update({id:$scope.user.id},{
      username:$scope.user.username,
      height:$scope.user.height,
      weight:$scope.user.weight,
      gender:$scope.user.gender
    },function(data){
      $modalInstance.close();
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);