const connection = require("./connection")

// Object for all our SQL statement functions.
var orm = {
  all: function (burger_name, tableInput, cb) {
    var queryString = "SELECT "
    queryString += burger_name
    queryString += " FROM "
    queryString += tableInput
    queryString += ";";
    console.log(`line 50 :`)
    console.log(queryString)

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
