// Select color input
// Select size input
var length;
var breadth; 
var colorShade;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit( function (event) {
	event.preventDefault();
	
	length = $('#inputHeight').val();
	breadth = $('#inputWeight').val();
	
	makeGrid(length, breadth);
	
}); 

function makeGrid(x, y) {

// Your code goes here!
	$('tr').remove();
	for (var row = 1; row <= x; row++){
		$('#pixelCanvas').append('<tr id=table'+ row + '></tr>');
		for (var col = 1; col <= y; col++){
			$('#table'+ row).append('<td></td>');
		}
	}
	
// this section add color to each clicked cell
	var row = $('td'); 
	
	row.click(function shadeColor(){
		colorShade = $('#colorPicker').val();		// this store color picked into the colorShade variable
		
		if ($(this).attr('style')){
			$(this).removeAttr('style');		//this remove the shade color on click
		} else {
			$(this).attr('style', 'background-color:' + colorShade);	// this add color selected from the picker
		}
		
	});
}