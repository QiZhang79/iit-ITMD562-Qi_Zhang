var hand=[
  // { "rank":"two", "suit":"spades" },
  // { "rank":"four", "suit":"hearts" }, 
  // { "rank":"two", "suit":"clubs" },
  // { "rank":"three", "suit":"spades" }, 
  // { "rank":"eight", "suit":"diamonds" }
];

/*var hand=[
  { "rank":"two", "suit":"spades" },
  { "rank":"four", "suit":"hearts" }, 
  { "rank":"two", "suit":"clubs" },
  { "rank":"four", "suit":"spades" }, 
  { "rank":"eight", "suit":"diamonds" }
];*/

/*var hand=[
  { "rank":"two", "suit":"spades" },
  { "rank":"two", "suit":"hearts" }, 
  { "rank":"two", "suit":"clubs" },
  { "rank":"three", "suit":"spades" }, 
  { "rank":"eight", "suit":"diamonds" }
];*/

function containOnePair(hand) {
	// Extract the card rank
	var handRanks = hand.map(function (card) {
    	return card.rank; //["two", "four", "two", "three", "eight"]
	});

	// Build the hashmap  <rank: count>
	var map = new Object();
	for(var i = 0; i < handRanks.length; i++) {
		if(handRanks[i] in map) {
			map[handRanks[i]] += 1;
		}
		else {
			map[handRanks[i]] = 1;
		}
	}

	// Extract map values aka rank occurrences
	var counts = new Array();
	for (var key in map) {
		counts.push(map[key]);
	}

	// Check if pair exists
	counts = counts.sort(function(a, b){return b-a});
	if (counts[0] != 2) {
		return false;
	}
	else if (counts[1] == 2) {
		return false;
	}
	else {
		return true;
	}
}


function containTwoPairs(hand) {
	// Extract the card rank
	var handRanks = hand.map(function (card) {
    	return card.rank; 
	});

	// Build the hashmap  <rank: count>
	var map = new Object();
	for(var i = 0; i < handRanks.length; i++) {
		if(handRanks[i] in map) {
			map[handRanks[i]] += 1;
		}
		else {
			map[handRanks[i]] = 1;
		}
	}

	// Extract map values aka rank occurrences
	var counts = new Array();
	for (var key in map) {
		counts.push(map[key]);
	}

	// Check if pair exists
	counts = counts.sort(function(a, b){return b-a});
	if (counts[0] != 2) {
		return false;
	}
	else if (counts[1] == 2) {
		return true;
	}
	else {
		return false;
	}
}

function containThree(hand) {
	// Extract the card rank
	var handRanks = hand.map(function (card) {
    	return card.rank; 
	});

	// Build the hashmap  <rank: count>
	var map = new Object();
	for(var i = 0; i < handRanks.length; i++) {
		if(handRanks[i] in map) {
			map[handRanks[i]] += 1;
		}
		else {
			map[handRanks[i]] = 1;
		}
	}

	// Extract map values aka rank occurrences
	var counts = new Array();
	for (var key in map) {
		counts.push(map[key]);
	}

	// Check if pair exists
	counts = counts.sort(function(a, b){return b-a});
	if (counts[0] != 3) {
		return false;
	}
	else {
		return true;
	}
}

function containFour(hand) {
	// Extract the card rank
	var handRanks = hand.map(function (card) {
    	return card.rank; 
	});

	// Build the hashmap  <rank: count>
	var map = new Object();
	for(var i = 0; i < handRanks.length; i++) {
		if(handRanks[i] in map) {
			map[handRanks[i]] += 1;
		}
		else {
			map[handRanks[i]] = 1;
		}
	}

	// Extract map values aka rank occurrences
	var counts = new Array();
	for (var key in map) {
		counts.push(map[key]);
	}

	// Check if pair exists
	counts = counts.sort(function(a, b){return b-a});
	if (counts[0] != 4) {
		return false;
	}
	else {
		return true;
	}
}

function containFlush(hand) {
	// Extract the card rank
	var handSuits = hand.map(function (card) {
    	return card.suit; 
	});

	// Build the hashmap  <suit: count>
	var map = new Object();
	for(var i = 0; i < handSuits.length; i++) {
		if(handSuits[i] in map) {
			map[handSuits[i]] += 1;
		}
		else {
			map[handSuits[i]] = 1;
		}
	}

	// Extract map values aka rank occurrences
	var counts = new Array();
	for (var key in map) {
		counts.push(map[key]);
	}

	// Check if pair exists
	counts = counts.sort(function(a, b){return b-a});
	if (counts[0] != 5) {
		return false;
	}
	else {
		return true;
	}
}

function containStraight(hand) {
	arrayString = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]

	// Extract the card rank
	var handRanks = hand.map(function (card) {
    	return card.rank; 
	});

	var handRanksNum = new Array();

	for (var i = 0; i < handRanks.length; i++) {
		handRanksNum.push(arrayString.indexOf(handRanks[i]) + 1);
	}

	// Sort the array
	handRanksNum = handRanksNum.sort();


	if (handRanksNum[0] == 1) {
		// Has ace
		if ( (handRanksNum[2] == handRanksNum[1]+1) && (handRanksNum[3] == handRanksNum[2]+1) && (handRanksNum[4] == handRanksNum[3]+1) ) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		// No ace
		if ( (handRanksNum[1] == handRanksNum[0]+1) && (handRanksNum[2] == handRanksNum[1]+1) && (handRanksNum[3] == handRanksNum[2]+1) && (handRanksNum[4] == handRanksNum[3]+1) ) {
			return true;
		}
		else {
			return false;
		}
	}
}

function containStraightFlush(hand) {
	return containStraight(hand) && containFlush(hand);
}


function containRoyalFlush(hand) {
	arrayString = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]

	// Extract the card rank
	var handRanks = hand.map(function (card) {
    	return card.rank; 
	});

	var handRanksNum = new Array();

	for (var i = 0; i < handRanks.length; i++) {
		handRanksNum.push(arrayString.indexOf(handRanks[i]) + 1);
	}

	// Sort the array
	handRanksNum = handRanksNum.sort();

	if (handRanksNum[0] == 1 && handRanksNum[1] == 10 && handRanksNum[2] == 11 && handRanksNum[3] == 12 && handRanksNum[4] == 13) {
		return containFlush(hand);
	}
	else {
		return false;
	}

	
}

