const connection = require("./connection")


// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT "
    queryString += "*"
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
  },
  insertInto:function(tableInput,tableColumn,newBurgerName,cb){

    var queryString = "INSERT INTO "
    queryString += tableInput
    queryString += "("
    queryString += tableColumn
    queryString += ")"
    queryString += " VALUE"
    queryString += "("
    queryString += "\""+newBurgerName+"\""
    queryString += ")"
    queryString += ";"
    console.log(`line 50 :`)
    console.log(queryString)

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  },
  update: function(table,id, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET devoured =";
    queryString +=true 
    queryString += " WHERE ";
    queryString += "id = ";
    queryString += "\""+id+"\"";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
  
};

// Export the orm object for the model (cat.js).
module.exports = orm;
