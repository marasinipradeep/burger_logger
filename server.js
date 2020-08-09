const express =require("express")
var path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();



// Parse application body as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Set Handlebars
const exphbs = require("express-handlebars")

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname,'./public')));
console.log((path.join(__dirname,'./public')))

//import routes and give the server access to them
var routes = require("./controllers/burgers_controllers")

app.use(routes);

//start our server so that it can begin listening to client requests.

app.listen(PORT,function(){
    console.log("server is listening to port " + PORT)
})




