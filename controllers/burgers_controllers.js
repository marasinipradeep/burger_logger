const express = require("express")
const burger = require("../models/burger");
const router = express.Router();

//Route when user loads the page
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {burger: data }
    res.render("index", hbsObject)
  })
})

//API Route when user hits click button to select choice of burger
router.post("/api/burger", function (req, res) {
  var burgerName = req.body.name
  burger.insertInto(["burger_name"],[burgerName], function(result) {
    res.json({id:result.insertId})
  })
});


//update devoured burger
router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update({devoured:true},condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;