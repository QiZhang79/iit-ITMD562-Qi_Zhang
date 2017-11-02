const express = require('express'),
	  http = require('http'),
	  bodyParser = require('body-parser'),
	  app = express();

app.use(bodyParser.json());

const users = [ ];

//1. GET /users/{userId}
app.get('/users/:userId', function(req, res){  //BUG is HERE! "./users/:userId" is wrong!
	var userID = req.params.userId;

	if(!users[userID - 1]) {
		res.status(404).send("Not found.");
	} else {
        res.status(200).send(users[userID-1].user);
	}
});

//2. GET/users/{userId}/reminders with title filtering
app.get('users/:userId/reminders', function(req, res){
	var userID = req.params.userId;
	var reminders = [];

	if(!users[userID - 1]) {
		res.status(404).send("Not found.");
	} else {
		users[userID - 1].remind.forEach(function(getReminder){
			reminders.push(getReminder.reminder)
		});
		res.status(200).send(reminders);
	}
});


//5. POST /users
app.post('/users', function (req, res) {
  var newUserId = {'userId' : users.length + 1};
  var newUser = req.body; //Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
  newUser.reminders = [ ];

  users.push(newUser);
  res.status(200).send(newUserId);
});

//6. POST /users/{userId}/reminders
app.post('/users/:userId/reminders', function(req,res){
	var userID = req.params.userId,
	    reminderID = {'reminderId' : users.length + 1}, //? users.length + 1 or users.length;
	    createdTime = new Date(),
	    reminders = [ ];
	    users.reminder = [ ];

	if(!users[userID - 1]){
		res.status(404).send("Not found.");
	} else {
		var newRemind = req.body;
		newRemind.id = reminderID.reminderId;
		newRemind.reminder.created = createdTime;
		users[userID - 1].reminders.push(newRemind);
		res.status(200).send(reminderID);
	}
});


//set app to run on port 3000
app.listen(3000, function () {
  console.log('The reminder RESTful app is listening on port 3000');
});
