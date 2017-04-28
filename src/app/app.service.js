angular
.module('app')
.service('ContactService', function() {
  var list = [];

  this.getList = function() {
    return list;
  };

  this.setList = function(_list) {
    list = _list;
  };

  this.push = function(contact) {
    list.push(contact);
  };
});