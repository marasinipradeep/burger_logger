const orm = require("../config/orm")


var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },
    insertInto:function(newBurgerName,cb){
        orm.insertInto("burgers","burger_name",newBurgerName,function(res){
            cb(res)

        })
    },
    update: function(id, cb) {
        orm.update("burgers", id,function(res) {
          cb(res);
        });
      }
}

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;