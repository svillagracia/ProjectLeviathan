/**
* Lift.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    benchPress:{
      type:'integer'
    },
    squat:{
      type:'integer'
    },
    deadLift:{
      type:'integer'
    },

    ///// associations /////
    user:{
      model:'User'
    }

  }
};

