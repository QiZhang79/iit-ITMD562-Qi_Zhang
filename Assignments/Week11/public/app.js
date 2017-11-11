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
        var $result = $("<p>");
        // res = JSON.stringify(res)
        console.log(typeof(res.userId));
        $result.text("UserID: " + res.userId + " Username: " + user.user.name + 
          " Email: " + user.user.email);
        $("#userContainer").html($result);           
      }
    });
  });

  //GET USER
  $("#getUserBtn").on("click", function() {
    var userID = $("#userIdInput").val();

    $.ajax({
      url: "http://localhost:3000/users/" + userID,
      type: "GET",
      success: function(getUser, status) {
          var $result = $("<p>");
          $result.text("Username: " + getUser.name + " Email: " + getUser.email);
          $("#searchedUser").html($result);
      }
    });
  });

  //DELETE USER
  $("#delUserBtn").on("click", function() {
    var userID = $("#delUserIdInput").val();

    $.ajax({
      url: "http://localhost:3000/users/" + userID,
      type: "DELETE",
      success: function(status) {                             
        var $result = $("<p>");
        $result.text("UserID: " + userID + " has been removed.");
        $("#deletedUser").html($result);
      }
    });
  }); 

  //ADD REMINDER
  $("#addReminBtn").on("click", function() {
    var userID = $("#addReminUserInput").val();
    var newTitle = $("#titInput").val();
    var newDesc = $("#descInput").val();
    console.log(newTitle);
    console.log(newDesc);
    var newReminder = {"reminder" : {
                "title" : newTitle,
                "description" : newDesc
            }};

    $.ajax({
      url: "http://localhost:3000/users/" + userID + "/reminders",
      type: "POST",
      data: JSON.stringify(newReminder),
      contentType: "application/json",
      success: function(res, status) {
        var $result = $("<p>");
        // res = JSON.stringify(res)
        $result.text("New ReminderID: " + res.reminderId + " Title: " + 
          res.reminder.title + " Description: " + res.reminder.description);
        $("#reminContainer").html($result);           
      }
    });
  });

  //GET ALL REMINDERS
  $("#getAllBtn").on("click", function() {
    var userID = $("#getAllReminUserInput").val();
    
    $.ajax({
      url: "http://localhost:3000/users/" + userID + "/reminders/",
      type: "GET",
      success: function(res, status) {
        $("#allContainer").empty();
          res.forEach(function (reminders) {
            var $result = $("<p>");
            $result.text("Title: " + reminders.title +
                    " Description: " + reminders.description);
            $("#allContainer").append($result);
        });
      }
    });
  });

  // GET REMINDER BY USERID AND REMINDID
  $("#getReminderBtn").on("click", function() {
    var userID = $("#getReminUserIdInput").val();
    var reminderID = $("#getReminIdInput").val();
    
    $.ajax({
      url: "http://localhost:3000/users/" + userID + "/reminders/" + reminderID,
      type: "GET",
      success: function(res, status) {
          var $result = $("<p>");
          $result.text("Title: " + res.title +
                       " Description: " + res.description);
          $("#searchedReminder").html($result);
      }
    });
  });

  // DELETE REINDER BY REMINDERID
  $("#delReminderBtn").on("click", function() {
    var userID = $("#delReminUserIdInput").val();
    var reminderID = $("#delReminIdInput").val();
    
    $.ajax({
      url: "http://localhost:3000/users/" + userID + "/reminders/" + reminderID,
      type: "DELETE",
      success: function(res, status) {
          $("#deletedReminder").empty();
          var $result = $("<p>");
          $result.text("ReminderID " + reminderID + " has been removed");
          $("#delRemOutput").html($result);
      }
    });
  });

  //DELETE ALL REMINDERS
  $("#delAllReminderBtn").on("click", function() {
    var userID = $("#delAllReminUserIdInput").val();
    
    $.ajax({
      url: "http://localhost:3000/users/" + userID + "/reminders/",
      type: "DELETE",
      success: function(res, status) {
          $("#deletedAll").empty();
          var $result = $("<p>");
          $result.text("All Reminders have been removed");
          $("#deletedAll").html($result);
      }
    });
  });

});