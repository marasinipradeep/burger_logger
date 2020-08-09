const express = require("express")
const burger = require("../models/burger");
const router  = express.Router();



router.get("/",function(req,res){
  res.render("index")
})

router.get("/api/burger", function(req, res) {

  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log("line 13");
    console.log(hbsObject);
   res.render("index",hbsObject)
  });
  
});



module.exports=router;