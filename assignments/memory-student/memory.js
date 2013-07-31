//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  // using medium size array for now
  // will need to select array with click functions later
  letters = _.shuffle(lettersMedium);
  startGame();
  cardClick();
  hovering();
});

// Initializes the game and creates the board
function startGame() {
  // prints letters array to console - remove later
  console.log(letters);
  // creates div for each letter, adds square class to each
  // adds unique id to each div to match a letter's index
  // adds div into game div
  $.each(letters, function(index, value){
    var div = $('<div/>').addClass('square');
    div.attr("id", index);
    div.appendTo('#game');
  });
}

// Flips a card and checks for a match
function cardClick() {
  // occurs when div with square class is clicked
  $('.square').click(function() {
    // rest of function only runs if this square is not the one previously clicked
    if (this.id !== lastId){
      // takes div id, finds corresponding letter in letters array, adds letter as text of div
      var index = parseInt(this.id);
      $(this).text(letters[index]);
      // if lastId is blank, add clicked div's info to lastId and lastCard
      if (lastId === '') {
        lastCard = $(this).text();
        lastId = this.id;
      }
      // if div's text matches that of the last square clicked, found class is added to both squares
      else {
        if ($(this).text() === lastCard) {
          $(this).addClass('found');
          $('#' + lastId).addClass('found');
        }
        // if lastId is not blank, both squares should be made blank after a delay
        else {
          setTimeout(function(){$('#' + lastId).text("")}, 1000);
          setTimeout(function(){$(this).text("")}, 1000);
        }
        // lastCard and lastId should be made blank after any two selections, right or wrong
        lastCard = '';
        lastId = '';
      }
    }
  });
}

//Add hoverclass to cards.
function hovering() {
  // occurs when div with square class is moused on/off
  // adds and removes the hover class, which changes div colors
  $('.square').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}