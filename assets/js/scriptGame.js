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
 
// jquery
$( function() {
    $( "#postylka" ).draggable();
    $( "#okno" ).draggable();
    $( "#kocka" ).draggable();
    $( "#zachod" ).draggable();
    $( "#vaza" ).draggable();
    $( "#lednice" ).draggable();
  } );


  
  $(".btn-reload-page").click(function(){
    location.reload(true);
});


let postylka;
let okno;
let kocka;
let zachod;
let vaza;
let lednice;

function submit() {
  ansPostylka = input-postylka.value;
  ansOkno = input-okno.value;
  ansKocka = input-kocka.value;
  ansZachod = input-zachod.value;
  ansVaza = input-vaza.value;
  ansLednice = input-lednice.value;

  if (ansPostylka == "4") {
    g = 1;
    input-postylka.value = postylka;
    // change class to correct
  } else {
    input-postylka.value = postylka;
    // change class to incorrect
  }

  if (ansOkno == "2") {
    h = 1;
    input-okno.value = okno;
    // change class to correct
  } else {
    input-okno.value = okno;
    // change class to incorrect
  }

  if (ansKocka == "1") {
    i = 1;
    input-kocka.value = kocka;
    // change class to correct
  } else {
    input-kocka.value = kocka;
    // change class to incorrect
  }

  if (ansZachod == "3") {
    j = 1;
    input-zachod.value = zachod;
    // change class to correct
  } else {
    input-zachod.value = zachod;
    // change class to incorrect
  }

  if (ansVaza == "2") {
    k = 1;
    input-vaza.value = vaza;
    // change class to correct
  } else {
    input-vaza.value = vaza;
    // change class to incorrect
  }

  if (ansLednice == "2") {
    l = 1;
    input-lednice.value = lednice;
    // change class to correct
  } else {
    input-lednice.value = lednice;
    // change class to incorrect
  }

}

