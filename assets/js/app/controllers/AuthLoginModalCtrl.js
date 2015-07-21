Leviathan.controller('AuthLoginModalCtrl', ['$scope','$modalInstance','UserService','$resource','$location',function($scope,$modalInstance,UserService,$resource,$location) {

  $scope.login = function() {
    UserService.login($scope.email, $scope.password, function(err, data){
      if(err){
        console.log(err);
        alert('something horrible happened.');
      }else if(data && data.result){
        $location.path('/chalkboard');
        $modalInstance.close();
      } else {
        console.log(data);
        alert('unable to log in');
      }
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);