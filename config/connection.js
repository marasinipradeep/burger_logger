const mysql=require("mysql")
const util = require("util")


//Database Connection Info
var  connection 

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}

else{
connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"alterPassword",
    database:"burgers_db"

})
};
//Connecting to  database
connection.connect((err)=>{
    if(err)throw err;
    console.log("Database connected " + connection.threadId)
})


// Setting up connection.query to use promises, which will allow us to use the async/await
connection.query=util.promisify(connection.query)


module.exports = connection;
