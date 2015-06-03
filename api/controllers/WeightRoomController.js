/**
 * WeightRoomController
 *
 * @description :: Server-side logic for managing Weightrooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request');
var async = require('async');

module.exports = {

  getArticles: function(req,res){
    // asynchronous call to reddit for postings from two subreddits.
    async.concat(['r/powerlifting','r/weightroom'],function(subR,callback){
      request({
        url:'http://www.reddit.com/'+subR+'.json'
      },
      function(error,response,data){
        if(!error && response.statusCode == 200){
          var articles = JSON.parse(data);
          callback(null, articles.data.children || []);
        }
      });
    },function(err,results){
      if(err) throw err;
      // SORT ACCORDING TO DATE CREATED
      results.sort(function(a,b){
        return b.data.created - a.data.created;
      });
      res.send(results);
    });
  }

};
