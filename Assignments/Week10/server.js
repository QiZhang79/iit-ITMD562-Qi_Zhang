const express = require('express'),
	http = require('http'),
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.json());

const users = [];

//1. GET /users/{userId}
app.get('./users/:userId', function(req, res){
	var userID = req.params.userId;

	if(!users[userID - 1]) {
		res.status(404).send("Not found.");
	} else {
        res.status(200).send(users[userID-1].user);
	}
});

//2. GET/users/{userId}/reminders with title filtering
// app.get('.users/:userId/reminders', function(req, res){
// 	var userID = req.params.userId;
// 	var reminders = [];

// 	if(!users[userID - 1]) {
// 		res.status(404).send("Not found.");
// 	} else {
		
// 	}
// });


//5. POST/users
app.post('/users', function (req, res) {
  var ID = {'userId' : users.length + 1};
  var newUser = req.body; //Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
  newUserId = ID;

  users.push(newUser);
  res.status(200).send(newUserId);
});



//set app to run on port 3000
app.listen(3000, function () {
  console.log('The reminder RESTful app is listening on port 3000');
});
