Leviathan.controller('LiftsModalCtrl', ['$scope','$modalInstance','UserService','$resource', function($scope,$modalInstance,UserService,$resource) {

  UserService.check(function(err, data){
  });

  var currentUser = UserService.currentUser;

  var Lift = $resource('/api/user/'+ currentUser.id +'/lifts');
  $scope.newAttempts = function(){
    var lift = new Lift();
    lift.meetTrain = $scope.meetTrain;
    lift.benchPress = $scope.benchPress;
    lift.benchSuccess = $scope.benchSuccess;
    lift.squat = $scope.squat;
    lift.squatSuccess = $scope.squatSuccess;
    lift.deadLift = $scope.deadLift;
    lift.deadLiftSuccess = $scope.deadLiftSuccess;
    lift.attemptDate = $scope.attemptDate;
    lift.$save(function(){
      $modalInstance.close();
    });
  };

  $scope.closeModal = function(){
    $modalInstance.close();
  };

}]);