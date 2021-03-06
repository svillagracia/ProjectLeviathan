Leviathan.controller('NavCtrl',['$scope','$modal','UserService','$location',function($scope,$modal,UserService,$location){

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

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
      $location.path('/');
    });
  };

}]);