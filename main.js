//when box is clicked turn to backside with color
var counter = 0;
$('.box').on('click', function(){
  $(this).addClass('flip');
  counter ++;
  if (counter === 2) {
    checkBox();
  }
});

//check if both turned over cards match
var checkBox = function(){
  $flipped =$('.flip');
  var square1 = $flipped[0]; //shows classes of first flipped box
  var square2 = $flipped[1]; //shows classes of 2nd flipped box
  if (square1.children[1].className === square2.children[1].className) {
    window.alert('You got a match!');
    $(this).removeClass('flip').addClass('matched');
    counter = 0;
    }
    else {
      $(this).removeClass('flip');
      counter = 0;
    }
  };
//how to access the second child of the flipped box and compare the class names of the children
//box one and box 2 as flipped 1 and 2
//if match remove .flip, add class matched
//if they don't match remove class flip
//counter run each time is two, after 2 reset to 0
//stay face up
//if they do not match flip back over
//else if {
  //flip back over
//}
//when all colors are matched alert "Good Job!  Would you like to play again?"
