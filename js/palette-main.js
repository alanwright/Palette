$(function(){
	var qs = getQueryStringArray();

	if (qs.c1 !== 'undefined' && qs.c1) {
		$('.color1').css('background-color', '#' + qs.c1);
		$('#hex1').html('#' + qs.c1.toUpperCase());
	}
	if (qs.c2 !== 'undefined' && qs.c2) {
		$('.color2').css('background-color', '#' + qs.c2);
		$('#hex2').html('#' + qs.c2.toUpperCase());
	}
	if (qs.c3 !== 'undefined' && qs.c3) {
		$('.color3').css('background-color', '#' + qs.c3);
		$('#hex3').html('#' + qs.c3.toUpperCase());
	}
	if (qs.c4 !== 'undefined' && qs.c4) {
		$('.color4').css('background-color', '#' + qs.c4);
		$('#hex4').html('#' + qs.c4.toUpperCase());
	}
	if (qs.c5 !== 'undefined' && qs.c5) {
		$('.color5').css('background-color', '#' + qs.c5);
		$('#hex5').html('#' + qs.c5.toUpperCase());
	}
});

function getQueryStringArray(){
    var assoc=[]; 
    var items = window.location.search;
    items = items.substring(1).split('&'); 
    for(var j = 0; j < items.length; j++) { 
       var a = items[j].split('='); assoc[a[0]] = a[1]; 
    }
    return assoc;
};