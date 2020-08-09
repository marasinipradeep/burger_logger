const orm = require("../config/orm")


var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("cats", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;