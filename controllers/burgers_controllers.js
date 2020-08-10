const express = require("express")
const burger = require("../models/burger");
const router = express.Router();

var newBurger=[]
var hbsObject = {
  burger:newBurger
}

router.get("/", function (req, res) {
  res.render("index",hbsObject)
})

router.post("/api/burger", function (req, res) {
  console.log("line 12")
  var burgerName = req.body.name
  console.log(burgerName)
  burger.all(function(data){
    console.log("line 16")
    for(var i = 0;i<data.length;i++){
      const {burger_name} = data[i]
    console.log(burger_name)
    if(burgerName === burger_name){
      console.log("BURGER FOUND")
     hbsObject.burger.push({burgerName:burgerName})
      console.log(`line 25`)
      console.log(hbsObject)
     // res.render("index",hbsObject)
     res.end()
    }
    else{
      console.log("DID NOT FOUND MATCHING BURGER")
    }
    
  }

  })
  // burger.all(function (data) {
  //   var hbsObject = {

  //     burger: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});



module.exports = router;