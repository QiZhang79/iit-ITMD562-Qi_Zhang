
var main =function(){
	'use strict;'

	var colors = ['red','orange','yellow','green','grey','blue','purple'];

	$('.relevant p').hide();

	for (i = 0; i < 7; i++) {
		var num = $(this).find('.relevant p:nth-child('+(i+1)+')');

		num.css('color', colors[i]);
		num.delay(i*500).fadeIn(2000);
	}
};


$(document).ready(main);


/* Tips:
p:nth-child(i+1) is wrong. 
