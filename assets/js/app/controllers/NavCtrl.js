Leviathan.controller('NavCtrl',['$scope','$modal','UserService',function($scope,$modal,UserService){
  console.log('Nav Bar is Ready');

  $scope.showLogin = function() {
    $modal.open({
      templateUrl:'/views/auth/loginModal.html',
      controller:'AuthLoginModalCtrl'
    });
  };

  $scope.showSignUp = function() {
    $modal.open({
      templateUrl:'/views/auth/signUpModal.html',
      controller:'AuthSignUpModalCtrl'
    });
  };

  $scope.logout = function() {
    UserService.logout(function(err, data){
      //doing nothing...
    });
  };

}]);