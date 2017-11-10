$(document).ready(function() {
  "use strict";

  //ADD USER
  $("#addUserBtn").on("click", function() {
    var newName = $("#nameInput").val();
    var newEmail = $("#emailInput").val();
    var user = {'user' : {
      name: newName,
      email: newEmail
    }};
    console.log(user);
    $.ajax({
      url: "http://localhost:3000/users",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      success: function(res, status) {
        var $output = $("<p>");
        // res = JSON.stringify(res)
        console.log(typeof(res.userId));
        $output.text("UserID: " + res.userId + " Username: " + user.user.name + " Email: " + user.user.email);
        $("#userContainer").html($output);           
      }
    });
  });

  //GET USER
  $("#getUserBtn").on("click", function() {
    var userID = $("#userIdInput").val()
    $.ajax({
      url: "http://localhost:3000/users/" + userID,
      type: "GET",
      success: function(getUser, status) {
          var $output = $("<p>");
          $output.text("Username: " + getUser.name + " Email: " + getUser.email);
          $("#searchedUser").html($output);
      }
    });
  });

}); 