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
    console.log(`on change devoured clicked`)
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newBurgerState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });

  $("#submitButton").on("click", onClickMe)

})
