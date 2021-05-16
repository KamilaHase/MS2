/* $( function hide() {
    $( '.draggable-cards' ).hide();
  } );
  */


//adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?noredirect=1&lq=1
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  
 var arr = $( '.draggable-cards' );
 shuffle(arr);
 $('#draggable-cards').append(arr);
 // console.log(arr.slice(4));
 $(arr).slice(2).hide();
 


 

/*
//adapted accordingly from https://stackoverflow.com/questions/30984794/display-random-div
 $(document).ready(function() {
    var cards = $('.draggable-cards');
    var randomCard1 = Math.floor(Math.random()*cards.length);
    var visibleCard1 = $('.draggable-cards')[randomCard1];
    $(visibleCard1).show();
  
    var randomCard2 = Math.floor(Math.random()*cards.length);
    var visibleCard2 = $('.draggable-cards')[randomCard2];
    $(visibleCard2).show();
});

*/

// jquery
$( function() {
    $( "#postylka" ).draggable();
    $( "#okno" ).draggable();
    $( "#kocka" ).draggable();
    $( "#zachod" ).draggable();
    $( "#vaza" ).draggable();
    $( "#lednice" ).draggable();
  } );


