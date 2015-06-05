Leviathan.factory('Comment',['$resource',function($resource){

  return $resource('/api/comment/:id', null, {
    'update': { method:'PUT' },
  });

}]);