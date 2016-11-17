/*

Assignment 10

The example below uses jQuery to
1.  Use Draggable and Droppable elements
2.  Keep track of amounts that are dragged over a droppable item
3.  Play a sound when an item is dropped

Resources:
http://jqueryui.com/draggable/
http://jqueryui.com/droppable/

http://www.tutorialspoint.com/jqueryui/jqueryui_draggable.htm
http://www.tutorialspoint.com/jqueryui/jqueryui_droppable.htm

*/
$(document).ready(function () {

	// Set global variable 'total' to 0
	var total = 0;

	// Double-Clicking the coin will make it explode
	// and will drop it back in place with a bounce
	$(".coin").dblclick(function() {
		$(this).effect("explode");
		$(this).delay(800).show("bounce");
	});

	// Make the elements with 'class' = 'coin' draggable
	// These are the pictures of the coins
	$('.coin').draggable({

		helper: "clone",		// makes a copy of the coin
		revert: "invalid",		// this will put the coin back if not dropped over correct place
		cursor: "pointer"		// when the mouse is over the coin the pointer will change

	});

	// Make the element with ID='body' droppable
	// This is the picture of the cat
	$('#body').droppable({

		// this is the 'drop' option
		drop: function(event, ui) {

			var className = $(ui.draggable);		// get the html 'class' of the 'dragged' item.  this is put into 'ui'

				// add penny -- searches the elements that have a class containing the word 'penny'
				if (className.hasClass("penny") == true) {
					total += .01;
				}
				// add a dime
      else if (className.hasClass("dime") == true) {
          total += .10;
        }

				// add a nickel
        else if (className.hasClass("nickel") == true) {
          total += .05;
        }
				// add a quarter
        else if (className.hasClass("quarter") == true) {
          total += .25;
        }
				// add a half dollar
        else if (className.hasClass("halfdollar") == true) {
          total += .50;
        }
				// add a dollar
        else if (className.hasClass("dollar") == true) {
          total += 1;
        }

			// update and display total amount
			$("#total").text("$" + total.toFixed(2));

			// play dropped coin sound
			playSound();
		}
	});

	// display initial total amount
	$("#total").text("$" + total.toFixed(2));

	// function to play sound
	function playSound() {
		// Play sound when coin placed over cat
		// Create a new element name <audio></audio>
  		$('#sound').html("<audio autoplay><source src='audio/coin.wav' type='audio/wav'></audio>");
	}

});
