/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    username:{
      type:'string',
      required:true
    },
    email: {
      type:'email',
      required:true,
      unique:true
    },
    password:{
      type:'string',
      minLength:6,
      required:true
    },
    height:{
      type:'string'
    },
    weight:{
      type:'string'
    },
    gender:{
      type:'string'
    },

    ///// associations /////

    lifts:{
      collection:'Lift',
      via:'user'
    },

    //override built-in toJSON method and remove password
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
  },
  beforeCreate: function(values, callback) {
    bcrypt.hash(values.password,10,function(err,hash){
      if(err) return callback(err);
      values.password = hash;
      callback();
    });
  }

};

