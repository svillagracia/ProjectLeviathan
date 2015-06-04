/**
* Lift.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    meetTrain: {
      type:'string',
      required:true
    },
    benchPress:{
      type:'integer'
    },
    benchSuccess: {
      type:'integer'
    },
    squat:{
      type:'integer'
    },
    squatSuccess: {
      type:'integer'
    },
    deadLift:{
      type:'integer'
    },
    deadLiftSuccess: {
      type:'integer'
    },
    attemptDate: {
      type:'date',
      required:true
    },

    ///// associations /////
    user:{
      model:'User'
    }

  }
};

