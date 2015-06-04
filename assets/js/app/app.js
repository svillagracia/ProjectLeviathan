var Leviathan = angular.module('Leviathan',['ngRoute','ngResource','ui.bootstrap']);

Leviathan.run(['UserService','AlertService','$rootScope',function(UserService,AlertService,$rootScope){
  console.log('Leviathan Online');

  UserService.check(function(err, data){
    console.log('check', err, data);
  });

}]);

Leviathan.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvier){
  $locationProvier.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
    controller:'StaticCtrl'
  })
  .when('/weightroom',{
    templateUrl:'/views/user/weightroom.html',
    controller:'WeightRoomCtrl'
  })
  .when('/chalkboard',{
    templateUrl:'/views/user/chalkboard.html',
    controller:'ChalkBoardCtrl'
  })
  .when('/platform',{
    templateUrl:'/views/user/platform.html',
    controller:'PlatformCtrl'
  })
  .when('/platform/:id',{
    templateUrl:'/views/post/show.html',
    controller:'PostShowCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  });
}]);