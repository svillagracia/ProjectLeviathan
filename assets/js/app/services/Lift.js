Leviathan.factory('Lift',['$resource',function($resource){

  return $resource('/api/lift/:id', null, {
    'update': { method:'PUT' },
    'create': { method:'POST' }
  });

}]);