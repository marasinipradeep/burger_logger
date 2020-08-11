const express = require("express")
const burger = require("../models/burger");
const router = express.Router();

var newBurger = []
var hbsObject = {
  burger: newBurger
}

//Route when user loads the page
router.get("/", function (req, res) {
  res.render("index", hbsObject)
})

//Route when user hits click button to select choice of burger
router.post("/api/burger", function (req, res) {
  var burgerName = req.body.name
  insertIntoTable(burgerName);
  newburgerName(burgerName)
  res.end()
});


//update devoured burger
router.put("/api/burger/:id", function(req, res) {
  var id = req.params.id;

  console.log("condition", id);
  burger.update(id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Function that inserts the burger in database with the burger of user input
function insertIntoTable(burgerName){
  return burger.insertInto(burgerName,function(data){

  })
}


//Function that macthes the burger in database with the burger of user input
function newburgerName(burgerName) {
  return burger.all(function (data) {
    console.log(`line 34`)
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      const { id,burger_name } = data[i]
      console.log(`line 36`)
      console.log(id,burger_name)
      if (burgerName === burger_name) {
        hbsObject.burger.push({id:id},{ burgerName: burgerName })
      }
      else { console.log("DID NOT FOUND MATCHING BURGER") }

    }
  })
}

module.exports = router;