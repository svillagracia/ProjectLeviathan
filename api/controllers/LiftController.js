/**
 * LiftController
 *
 * @description :: Server-side logic for managing lifts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  mine: function(req,res){
    if(req.session.user){
      Lift.find({user:req.session.user.id}).then(function(lift){
        res.send(lift);
      }).catch(function(err){
        console.log('error',err);
        res.send([]);
      });
    } else {
      console.log('not logged in...');
      res.send([]);
    }
  }

};

