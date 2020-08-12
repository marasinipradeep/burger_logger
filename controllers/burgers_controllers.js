const express = require("express")
const burger = require("../models/burger");
const router = express.Router();

//Route when user loads the page
router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log(`line 34`)
    console.log(data)
    //  hbsObject.burger = data
    var hbsObject = {
      burger: data
    }
    res.render("index", hbsObject)
  })
})

//Route when user hits click button to select choice of burger
router.post("/api/burger", function (req, res) {
  var burgerName = req.body.name
  burger.insertInto(burgerName, function (data) {
    res.end()
  })
});


//update devoured burger
router.put("/api/burger/:id", function (req, res) {
  var id = req.params.id;
  console.log("condition", id);
  burger.update(id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;