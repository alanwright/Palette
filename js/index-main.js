$(function(){
	$("header").headroom();

	$('#input1').val('0E90D2');
	$('#input2').val('8058A5');
	$('#input3').val('5EB95E');
	$('#input4').val('DD514C');
	$('#input5').val('FAD232');

	paletteListeners();
});

function blockEnter() {
  return !(window.event && window.event.keyCode == 13); 
}

function paletteListeners() {
	$("#input1").keyup(function() {
		changeColor(1);
	});
	$("#input1").change(function() {
		changeColor(1);
	});
	$("#input2").keyup(function() {
		changeColor(2);
	});
	$("#input2").change(function() {
		changeColor(2);
	});
	$("#input3").keyup(function() {
		changeColor(3);
	});
	$("#input3").change(function() {
		changeColor(3);
	});
	$("#input4").keyup(function() {
		changeColor(4);
	});
	$("#input4").change(function() {
		changeColor(4);
	});
	$("#input5").keyup(function() {
		changeColor(5);
	});
	$("#input5").change(function() {
		changeColor(5);
	});
	$("#input6").keyup(function() {
		changeColor(6);
	});
	$("#input6").change(function() {
		changeColor(6);
	});

	$('#create').click(function() {
		var url = createURL();
		window.open(url, '_blank');
	});
}

function changeColor(num){
	var color = $('#input' + num).val();
	if( color.length == 3 || color.length == 6)
		$('.color' + num).css('background-color', '#' + color);
}

function createURL() {
	return 'palette.html?c1=' + $('#input1').val() + '&c2=' + $('#input2').val() + '&c3=' + $('#input3').val() + '&c4=' + $('#input4').val() + '&c5=' + $('#input5').val() + '&';
}