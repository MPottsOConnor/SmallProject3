//Question 3 answer developed here
//NB during one stage in testing, there was a tiny black bar that sometimes appeared at the top of the screen. This stopped happening after a refresh.
"use strict";

var current_banner_num = 1;

$(document).ready(function () {

	$("#banner-base").css("visibility", "hidden"); // Use hidden to keep width and height of div same as image
	$("#banner-" + current_banner_num).show();

	//creation of button variables and slider
	var start_button = $("#start").button();
	var stop_button = $("#stop").button();
	$("#slider").slider();

	//Question 3(4) calculating new values based on slider
	function reccalculateTimes(v){
		console.log(v);
		interval = ((v / 100) * 5000);
		fadeTime = ((v / 100) * 4000);
	}

	var current = 1;
	var interval;
	var fadeTime;
	var imgNum = 4;

	//Question 3(4) values and range on slider with method called to recalculate
	$("#slider").slider({
		min: 0, max: 80, value: 40, change: function (e, u) {
			reccalculateTimes(100-u.value);
		}
	});
	reccalculateTimes(($("#slider").slider("option", "value")));
	

	//intervalId created in order to have a 'display time' for each picture
	// manipulated after clicking so it can be given a value/cleared. This ensures that there is no delay between clicking start and the faceIn/Out
	var intervalId;

	//Question 3(1) click function for start button and falling 'fadeNext()'
	start_button.click(function () {
		fadeNext();
	});

	function fadeNext() {

		//Question 3(2) make image fade in and fade out at one time, without splash vsual;
		$('#banner-' + current).css('z-index', 0).fadeOut(fadeTime);
		if (current++ == 4) {
			current = 1;
		}
		$('#banner-' + current).css('z-index', 1).fadeIn(fadeTime);
		//Question 3(3) clearTimeout used so that on click, the fade in/fade out is instant (rather than delayed)
		clearTimeout(intervalId);
		intervalId = setTimeout(function () {
			fadeNext();
		}, interval);
	}
	//Question 3(3) function of the stop button
	stop_button.click(function () {
		clearTimeout(intervalId);
	});
});