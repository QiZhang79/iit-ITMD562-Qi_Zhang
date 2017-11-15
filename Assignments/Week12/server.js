const express = require('express'),
	    http = require('http'),
	    bodyParser = require('body-parser'),
	    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

var users = [ ];

//1. GET /users/{userId}
app.get('/users/:userId', function(req, res){  
	var userID = req.params.userId;

	if(!users[userID - 1]) {
		res.status(404).send("Not found.");
	} else {
    res.status(200).send(users[userID-1].user);
	}
});

//2. GET /users/{userId}/reminders with title filtering
app.get('/users/:userId/reminders', function(req, res){
	var userID = req.params.userId;

	if(!users[userID - 1]) {
		res.status(404).send("Not found.");
	} else {
    var Reminders = [];
		users[userID - 1].reminders.forEach(function(getReminder){
			Reminders.push(getReminder.reminder)
		});
		res.status(200).send(Reminders);
	}
});

//3. GET users/{userId}/reminders/{reminderId}
app.get('/users/:userId/reminders/:reminderId', function (req, res) {
  var userID = req.params.userId;
  var reminderID = req.params.reminderId;

  if(!users[userID - 1].reminders[reminderID - 1]){
    res.status(404).send("Reminder Not found");
  }
  else {
    res.status(200).send(users[userID - 1].reminders[reminderID - 1].reminder);
  }
})

//4. POST /users
app.post('/users', function (req, res) {
  var newUserId = {'userId' : users.length + 1};
  var newUser = req.body; 
  newUser.id = newUserId.userId;

  newUser.reminders = [ ];
  users.push(newUser);
  res.status(200).send(newUserId);
});

//5. POST /users/{userId}/reminders
app.post('/users/:userId/reminders', function(req,res){
	var userID = req.params.userId,
	    newReminderID = {'reminderId' : users[userID - 1].reminders.length + 1}, //? users.length + 1 or users.length;
	    createdTime = new Date();

	if(!users[userID - 1]){
		res.status(404).send("Not found.");
	} else {
		var newRemind = req.body;
		newRemind.id = newReminderID.reminderId;
		newRemind.reminder.created = createdTime;
		users[userID - 1].reminders.push(newRemind);
		res.status(200).send(newReminderID);
	}
});

//6. DELETE /users/:userId
app.delete('/users/:userId', function (req,res){
  var userID = req.params.userId;

  if (!users[userID - 1]) {
    res.status(404).send("This user doesn't exist");
  }
  else {
    delete users[userID - 1];
    res.status(204).send('204 No content upon success');
  }
});

//7. DELETE /users/:userId/reminders
app.delete('/users/:userId/reminders', function (req, res) {
  var userID = req.params.userId;

  if(!users[userID - 1]){
    res.status(404).send("This user doesn't have any reminders.");
  }
  else {
    users[userID - 1].reminders = [];
    res.status(204).send('204 No content upon success');
  }
});

//8. Delete /users/:userId/reminders/:reminderId
app.delete('/users/:userId/reminders/:reminderId', function (req, res) {
  var userID = req.params.userId;
  var remindID = req.params.reminderId;

  if(!users[userID - 1].reminders[remindID - 1]){
    res.status(404).send("This reminder doesn't exist");
  }
  else {
    delete users[userID - 1].reminders[remindID - 1];
    res.status(204).send('204 No content upon success');
  }
});

//set app to run on port 3000
app.listen(3000, function () {
  console.log('The reminder RESTful app is listening on port 3000');
});
