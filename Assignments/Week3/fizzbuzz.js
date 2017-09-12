var fizzbuzz = function(i,j){
	if(i < j){
		for(var i ; i < j; i++){
			if (i % 3 == 0 && i % 5 === 0) {
				console.log("FizzBuzz");
			} else if (i % 5 === 0){
				console.log("Buzz");
			} else if (i % 3 === 0 ){
				console.log("Fizz");
			} else {
				console.log(i);
			}
		}
	} else {
		alert("The second number should be bigger.")
	}

};

fizzbuzz(i,j); 


/*Thoughts:
1. We had to put our most specific match at the top and then filter down our 
checks to most general. Coding involves much head banging and hair pulling. 
if I put "if(i % 3 == 0 && i % 5 === 0){}" at the bottom, I won't have 'FizzBuzz'.
the first two items are catching all the conditions, which is causing the third if 
check not to run.