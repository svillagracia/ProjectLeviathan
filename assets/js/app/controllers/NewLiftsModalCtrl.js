Leviathan.controller('LiftsModalCtrl', ['$scope','$modalInstance','UserService','$resource', function($scope,$modalInstance,UserService,$resource) {
  console.log('New Lifts modal controller!!');

  UserService.check(function(err, data){
    console.log('check', err, data);
  });

  var currentUser = UserService.currentUser;

  var Lift = $resource('/api/user/'+ currentUser.id +'/lifts');
  console.log(Lift);
  $scope.newAttempts = function(){
    console.log('button clicked');
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
      console.log('New Lift Saved!', lift);
    });
  };

}]);