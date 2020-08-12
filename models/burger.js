const orm = require("../config/orm")

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },
    insertInto:function(columnName,vals,cb){
       
        orm.insertInto("burgers",columnName,vals,function(res){
            cb(res)

        })
    },
    update: function(objColVals,condition, cb) {
        orm.update("burgers", objColVals,condition,function(res) {
          cb(res);
        });
      }
}

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;