$(document).ready( function(){
//Create sketch grid
	$('#header button[name="grid"]').click( function(){
		var numDivs= prompt("Please enter a grid between 4 and 64")
		var grd = '<div class="sqr"></div>';
		for (i=0; i < numDivs; i++){
			$('#container').append(grd);
		}	
	});
//Reset button to erase 'sketch'
	$('#header button[name="reset"]').click( function(){
		$('.sqr').removeClass('sketched');
	});
//Sketch!
	$(document).on('mouseenter', '.sqr', function() {
			$(this).addClass('sketched');
			$(this).addClass('highlight');
	});
	$(document).on('mouseleave','.sqr', function(){
			$(this).removeClass('highlight');
	});
});
