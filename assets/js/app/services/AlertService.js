Leviathan.factory('AlertService', [function() {

  var alerts = [];

  return {
    clear: function() {
      //clear all alerts
      alerts = [];
    },
    add: function(type, text) {
      //add an alert
      alerts.push({type:type, text:text});
    },
    get: function() {
      //get list of all alerts
      return alerts;
    },
    remove: function(idx) {
      //remove an alert by index
      alerts.splice(idx,1);
    }
  };

}]);