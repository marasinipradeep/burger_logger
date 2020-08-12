// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  
  function onClickMe() {
    event.preventDefault()
    console.log(`inside click`)
    var newBurger = {
      name: $("#userInputBurger").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function (res) {
      // Reload the page to get the updated list
     location.reload();
    });
  }

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submitButton").on("click", onClickMe)

})
