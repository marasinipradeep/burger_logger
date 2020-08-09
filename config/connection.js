const mysql=require("mysql")
const util = require("util")


//Database Connection Info
const connection = mysql.createConnection({
    host:process.env.DBHOST ||"localhost",
    user:process.env.DBUSER ||"root",
    password:process.env.DBPASSWORD ||"alterPassword",
    database:process.env.DATABASE ||"burgers_db"
})

//Connecting to  database
connection.connect((err)=>{
    if(err)throw err;
    console.log("Database connected " + connection.threadId)
})


// Setting up connection.query to use promises, which will allow us to use the async/await
connection.query=util.promisify(connection.query)


module.exports = connection;

// Host 	rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
//Username  avdwxnjnhx3zq2wz
//Password  s2l03bbvlh5kkqh4
//Port      3306
//Database  urkutl4nl3j84uf1