var flags = new Array(0, 0, 0, 0, 0, 0, 0, 0);

$('.name-overlay .input-name').focus();

$('.name-overlay .input-name').keypress(function(event) {
	if(event.which == 13) {
		if($('.name-overlay .input-name').val() != 'xxx') {
			$('.name-overlay .warning').css('color', 'red');
			return;
		}
		$('.name-overlay .warning').remove();
		$(this).removeClass('input-breath');
		$(this).addClass('input-shrink');
		$('.name-overlay .circle').addClass('circle-spread');
	}
});

$('.circle').bind('webkitAnimationEnd', function() {
	$('.name-overlay').remove();
	$('.screen-1').addClass('animation');
});

$('.line-3').bind('webkitAnimationEnd', function(e) {
	$('.screen-1').addClass('screen-out');
	flags[1] = true;
	e.stopPropagation();
});

$('.screen-1').bind('webkitAnimationEnd', function() {
	if(flags[1]) {
		$('.screen-1').remove();
		$('.screen-2').addClass('animation');
	}
});	

$('.sun').bind('webkitAnimationEnd', function() {
	if(!flags[2]) {
		flags[2] = true;
		setTimeout(function() {
			$('.sun').removeClass('sun-enter');
			$('.sun').addClass('sun-leave');
		}, 2000);
	} else {
		$('.screen-2').remove();
		$('.screen-3').addClass('animation');
		$('.screen-3').addClass('screen-in');
	}
});	

$('.screen-3').bind('webkitAnimationEnd', function() {
	if(!flags[3]) {
		flags[3] = true;
		setTimeout(function() {
			$('.screen-3').removeClass('screen-in');
			$('.screen-3').addClass('screen-out');
		}, 2000);
	} else {
		$('.screen-3').remove();
		$('.screen-4').addClass('animation');
		$('.screen-4').addClass('screen-in');
	}
});	

$('.screen-4 .title').bind('webkitAnimationEnd', function() {
	$('.screen-4').remove();
	$('.screen-5').addClass('animation');
	$('.screen-5').addClass('screen-in');
});	

$('.screen-5').bind('webkitAnimationEnd', function() {
	if(!flags[5]) {
		flags[5] = true;
		setTimeout(function() {
			$('.screen-5').removeClass('screen-in');
			$('.screen-5').addClass('screen-out');
		}, 2000);
	}
});	

$('.screen-5 .title').bind('webkitAnimationEnd', function() {
	$('.screen-5').remove();
	$('.screen-6').addClass('animation');
	$('.screen-6').addClass('screen-in');
});	

$('.screen-6').bind('webkitAnimationEnd', function() {
	if(!flags[6]) {
		flags[6] = true;
		setTimeout(function() {
			$('.screen-6').removeClass('screen-in');
			$('.screen-6').addClass('screen-out');
		}, 2000);
	}
});

$('.screen-6 .love-text').bind('webkitAnimationEnd', function() {
	$('.thanks').addClass('screen-in');
});

$('.thanks').bind('webkitAnimationEnd', function() {
	if(!flags[7]) {
		flags = true;
		$('.fin').addClass('fin-animation');
		$('.end').addClass('fin-animation');
	}
});

function calcDate() {
	var date1=new Date(2016,0,1,0,0);
	var date2=new Date();
	var date3=date2.getTime()-date1.getTime();

	var days=Math.floor(date3/(24*3600*1000));
	 
	var leave1=date3%(24*3600*1000);
	var hours=Math.floor(leave1/(3600*1000));

	var leave2=leave1%(3600*1000);
	var minutes=Math.floor(leave2/(60*1000));

	var leave3=leave2%(60*1000);
	var seconds=Math.round(leave3/1000);

	$(".date").text(days + '天' + hours + '时' + minutes + '分' + seconds + '秒');
	setTimeout('calcDate()', 1000);
}

calcDate();