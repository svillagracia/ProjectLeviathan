Leviathan.controller('AuthSignUpModalCtrl', ['$scope','$modalInstance','UserService','$resource', function($scope,$modalInstance,UserService,$resource) {

  $scope.login = function() {
    UserService.login($scope.email, $scope.password, function(err, data){
      if(err){
        console.log(err);
        alert('something horrible happened.');
      }else if(data && data.result){
        $modalInstance.close();
      } else {
        console.log(data);
        alert('unable to log in');
      }
    });
  };

  var User = $resource('/api/user/:id');
    $scope.register = function(){
    var user = new User();
    user.username = $scope.username;
    user.email = $scope.email;
    user.password = $scope.password;
    user.$save(function(){
      $scope.username = '';
      $scope.email = '';
      $scope.password = '';
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);

