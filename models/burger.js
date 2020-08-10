const orm = require("../config/orm")


var burger = {
    all: function (cb) {
        orm.all("burger_name","burgers", function (res) {
            cb(res);
        })
    }
}

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;