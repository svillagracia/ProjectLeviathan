Leviathan.factory('User',['$resource',function($resource){

  return $resource('/api/user/:id', null, {
    'update': { method:'PUT' },
  });

}]);