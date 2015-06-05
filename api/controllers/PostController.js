/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  edit: function(req,res){
    Post.update({id:req.params.id},{
      title:req.body.title,
      link:req.body.link,
      linkTitle:req.body.linkTitle,
      body:req.body.body
    }).then(function(data){
      res.send(data[0]);
    });
  }

};

