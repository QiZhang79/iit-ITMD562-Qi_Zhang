var main =function(){
	'use strict;'

	$('.relevant p:nth-child(1)').hide();
	$('.relevant p:nth-child(1)').css('color','red');
	$('.relevant p:nth-child(1)').fadeIn(2000);

	$('.relevant p:nth-child(2)').hide();
	$('.relevant p:nth-child(2)').css('color','orange');
	$('.relevant p:nth-child(2)').delay(500).fadeIn(2000);

	$('.relevant p:nth-child(3)').hide();
	$('.relevant p:nth-child(3)').css('color','yellow');
	$('.relevant p:nth-child(3)').delay(1000).fadeIn(2000);

	$('.relevant p:nth-child(4)').hide();
	$('.relevant p:nth-child(4)').css('color','green');
	$('.relevant p:nth-child(4)').delay(1500).fadeIn(2000);

	$('.relevant p:nth-child(5)').hide();
	$('.relevant p:nth-child(5)').css('color','grey');
	$('.relevant p:nth-child(5)').delay(2000).fadeIn(2000);

	$('.relevant p:nth-child(6)').hide();
	$('.relevant p:nth-child(6)').css('color','blue');
	$('.relevant p:nth-child(6)').delay(2500).fadeIn(2000);

	$('.relevant p:nth-child(7)').hide();
	$('.relevant p:nth-child(7)').css('color','purple');
	$('.relevant p:nth-child(7)').delay(3000).fadeIn(2000);
};

$(document).ready(main);



