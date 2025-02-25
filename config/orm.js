const connection = require("./connection")

function printQuestionMarks(num) {
 
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM "
    queryString += tableInput
    queryString += ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertInto:function(tableName,tableColumn,vals,cb){
    
    var queryString = "INSERT INTO "
    queryString += tableName
    queryString += "("
    queryString += tableColumn.toString();
    queryString += ")"
    queryString += " VALUES"
    queryString += "("
    queryString += printQuestionMarks(vals.length);
    queryString += ")"
    queryString += ";"

    connection.query(queryString,vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  },
  update: function(table,objColVals,condition, cb) {
    
    console.log("line 74 orm");
  console.log(objColVals);
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
  
};

// Export the orm object for the model (burger.js).
module.exports = orm;
