//when box is clicked turn to backside with color
var counter = 0;
var matches = 0;
$('.box').on('click', function(){
  $(this).addClass('flip');
  counter ++;
  //console.log(counter);
  if (counter === 2) {
    setTimeout(function() {checkBox()}, 500);
    }
});

//check if both turned over cards match
var checkBox = function(){
  $flipped =$('.flip');
  var square1 = $flipped[0]; //shows classes of first flipped box
  var square2 = $flipped[1]; //shows classes of 2nd flipped box
  if (square1.children[1].className === square2.children[1].className) {
    $(square1).removeClass('flip').addClass('matched').off('click');
    $(square2).removeClass('flip').addClass('matched').off('click');
    counter = 0;
    matches = matches + 1;
    $('p').text('You made a match!');
    setTimeout(function (){
      $('p').text('')}, 800);
      if (matches === 6) {
        window.alert('You matched all the dogs');
      }
    }
    else {
      $(square2).removeClass('flip');
      $(square1).removeClass('flip');
      counter = 0;
    }
  };

$('button').on('click', function(){
  location.reload();
});

