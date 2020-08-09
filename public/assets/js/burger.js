// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
function onClickMe(){
    event.preventDefault()
  console.log(`inside click`)
  var newBurger = {
      name: $("#userInputBurger").val().trim()
    };

 console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "GET",
     // data: newBurger
    }).then(
      function(res) {
        
        // Reload the page to get the updated list
       // location.reload();
       console.log("line 20");
        console.log(res);
      }
    );
}
$("#submitButton").on("click",onClickMe)

})