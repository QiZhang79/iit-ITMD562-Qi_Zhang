var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser");
    mongoose = require("mongoose"),
    app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HandSchema = mongoose.Schema({
  handId: String,
  cards: String
}, { collection: 'pokerhand' });
var Hand = mongoose.model("Hand", HandSchema);

var url = 'mongodb://localhost/PokerHand';
mongoose.connect(url, { useMongoClient: true, });

app.get("/hands/:handId", function (req, res) {
    Hand.find({"handId":req.body.id}, function (err, hands) {
		if (err !== null) {
      res.status(404);
      console.log(err);
		}else{
      res.status(200);
      res.json(hands);
      console.log(hands);
		}
  });
});

app.get("/hands/:handId/cards", function (req, res) {
  Hand.find({"handId":req.body.id, "cards":[]}, function(err, cards){
    if(err !== null){
      res.status(404);
    }
    else{
      res.status(200).json(cards);
    }
  })
});

app.post('/hands', function (req, res){
  console.log(req.body);
  var newHand = new Hand({"handId":req.body.id, "cards": [req.body.cards,
                                                          req.body.cards,
                                                          req.body.cards,
                                                          req.body.cards,
                                                          req.body.cards]});
  newHand.save(function (err, result){
    if (err !== null) {
      console.log(err);
      res.send("err");
    }
    else {
      res.status(200).json(result);
    }
  });
});

app.put('/hands', function (req, res){
  console.log(req.body);
  var newHand = new Hand({"handId":req.body.id, "cards": [req.body.cards,
                                                          req.body.cards,
                                                          req.body.cards,
                                                          req.body.cards,
                                                          req.body.cards]});
  newHand.save(function (err, result){
    if (err !== null) {
      console.log(err);
      res.send("err");
    }
    else {
      res.status(204);
    }
  });
});


http.createServer(app).listen(3000);