Leviathan.factory('PostComment',['$resource',function($resource){

  return $resource('/api/post/:postId/comments/:id', null, {
    'update': { method:'PUT' },
    'create': { method:'POST' }
  });

}]);