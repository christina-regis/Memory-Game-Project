
//when box is clicked turn to backside with picture
var counter = 0;
var matches = 0;
$('.box').on('click', function(){
  //if has class matched, card has already been matched and can't be flipped again
  if ($(this).hasClass('matched')) {
    return false;
  } else {
  $(this).addClass('flip');
  counter ++;
    if (counter === 2) {
      //unable to finish first checkbox function before next one starts
      setTimeout(function() {checkBox();}, 500);
    }
  }
});

//check if both turned over cards match
var checkBox = function(){
  $flipped =$('.flip');
  var square1 = $flipped[0]; //shows classes of first flipped box
  var square2 = $flipped[1]; //shows classes of 2nd flipped box
  if (square1.children[1].className === square2.children[1].className) {
    $(square1).removeClass('flip').addClass('matched');
    $(square2).removeClass('flip').addClass('matched');
    counter = 0;
    matches = matches + 1;
    $('.matchesMade').text('Matches made: ' + matches );
    $('.matchesNotify').text('You made a match!');

    setTimeout(function (){
      $('.matchesNotify').text('');}, 800);
      if (matches === 6) {
        //at the end of the game if yes to play again run same code as reset button
        var playAgain = window.confirm('You matched all the dogs! Would you like to play again?');
        if (playAgain === true) {
          $('.flip').removeClass('flip');
          $('.matched').removeClass('matched');
          var randomDivs = $('.box').get().sort(function() {
          return Math.round(Math.random())-0.5;
          });
          $(randomDivs).appendTo(randomDivs[0].parentNode).show();
          matches = 0;
          $('.matchesMade').text('Matches made: ' + matches);
        } else {
            console.log('cancel');
        }
      }
    } else {
    //if squares do not match, turns cards back over
      $(square2).removeClass('flip');
      $(square1).removeClass('flip');
      counter = 0;
      }
};
$('.reset').on('click', function(){
  $('.flip').removeClass('flip');
  $('.matched').removeClass('matched');
  var randomDivs = $('.box').get().sort(function() {
    return Math.round(Math.random())-0.5;
  });
  $(randomDivs).appendTo(randomDivs[0].parentNode).show();
  matches = 0;
   $('.matchesMade').text('Matches made: ' + matches);
});

