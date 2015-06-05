/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  edit:function(req,res){
    User.update({id:req.params.id},{
      username: req.body.username,
      height: req.body.height,
      weight: req.body.weight,
      gender: req.body.gender
    }).then(function(data){
      req.session.user = data[0];
      res.send(data[0]);
    });
  }

};

