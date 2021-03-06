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

// counts number of squares matched
var matchedSquares = 0;

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  // using medium size array for now
  // will need to select array with click functions later
  $('input').click(function(){
    var size = this.value;
    if (size === "Small") {
      letters = _.shuffle(lettersSmall);
    }
    else if (size === "Medium") {
      letters = _.shuffle(lettersMedium);
    }
    else {
      letters = _.shuffle(lettersLarge);
    }
    startGame();
    cardClick();
    hovering();
    startTime();
    // makes sure updateTime is only called once
    if (timerId === 0){
      updateTime();
    }
  });
});

// Initializes the game and creates the board
function startGame() {
  // prints letters array to console - remove later
  console.log(letters);
  // resets count of matched squares at beginning of each game
  // resets game board
  matchedSquares = 0;
  $('#game').children().remove();
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
    // rest of function only runs if this square is not the one previously clicked and has not been matched
    if (this.id !== lastId && $(this).hasClass('found') === false){
      // takes div id, finds corresponding letter in letters array, adds a span with letter as text into div
      var index = parseInt(this.id);
      $(this).html("<span>" + letters[index] + "</span>");
      // if lastId is blank, add clicked div's info to lastId and lastCard
      if (lastId === '') {
        lastCard = $(this).html();
        lastId = this.id;
      }
      // if div's span matches that of the last square clicked, found class is added to both squares
      else {
        if ($(this).html() === lastCard) {
          $(this).addClass('found');
          $('#' + lastId).addClass('found');
          matchedSquares += 2;
        }
        // if lastId is not blank, both squares should be made blank after a delay
        else {
            $('#' + lastId).find('span').fadeOut(1000);
            $(this).find('span').fadeOut(1000);
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
  time = 0;
  $('#timer').html("<span>Seconds passed: " + time + "<span>");
}

//Increment the timer and display the new time
function updateTime() {
  // if not all squares have been matched and updateTime is not already in effect, timer is increased once a second
  timerId = 1;
  setInterval(function(){
    if (matchedSquares < letters.length) {
      time++;
      $('#timer').html("<span>Seconds passed: " + time + "<span>");
    }
  }, 1000);
}