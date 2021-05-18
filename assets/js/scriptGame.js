/*--------------------------SHUFFLE THE CARDS AND PICK TWO RANDOM ONES-------------------------------------------------*/
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

/*---------------------------------QUIZ-------------------*/
function check() {
  let postylka = $("#input-postylka").val();
  let okno = $("#input-okno").val();
  let kocka = $("#input-kocka").val();
  let zachod = $("#input-zachod").val();
  let vaza = $("#input-vaza").val();
  let lednice = $("#input-lednice").val();
  let correct = 0;

  if (postylka == "4") {
    correct++;
    $("#input-postylka").css("background-color", "green"); //correct answer
  } else {
    $("#input-postylka").css("background-color", "red"); //incorrect answer
  };
  
  if (okno == "2") {
    correct++;
    $("#input-okno").css("background-color", "green"); //correct answer
  } else {
    $("#input-okno").css("background-color", "red"); //incorrect answer
  };

  if (kocka == "1") {
    correct++;
    $("#input-kocka").css("background-color", "green"); //correct answer
  } else {
    $("#input-kocka").css("background-color", "red"); //incorrect answer
  };

  if (zachod == "3") {
    correct++;
    $("#input-zachod").css("background-color", "green"); //correct answer
  } else {
    $("#input-zachod").css("background-color", "red"); //incorrect answer
  };

  if (vaza == "5") {
    correct++;
    $("#input-vaza").css("background-color", "#198754"); //correct answer
  } else {
    $("#input-vaza").css("background-color", "#ca3434"); //incorrect answer
  };

  if (lednice == "6") {
    correct++;
    $("#input-lednice").css("background-color", "#198754"); //correct answer
  } else {
    $("#input-lednice").css("background-color", "#ca3434"); //incorrect answer
  };

};



/*
let postylka;
let okno;
let kocka;
let zachod;
let vaza;
let lednice;

function check() {
  ansPostylka = $("#input-postylka").val();
  ansOkno = $("#input-okno").val();
  ansKocka = $("input-kocka").val();
  ansZachod = $("input-zachod").val();
  ansVaza = $("input-vaza").val();
  ansLednice = $("input-Lednice").val();

  if (ansPostylka === "4") {
    postylka = 1;
    $("#input-postylka").css("background-color", "green"); //correct answer
  } else {
    $("#input-postylka").css("background-color", "red"); //incorrect answer
  };

  if (ansOkno === "2") {
    okno = 1;
    $("#input-okno").css("background-color", "green"); //correct answer
  } else {
    $("#input-okno").css("background-color", "red"); //incorrect answer
  };

  if (ansKocka === "1") {
    kocka = 1;
    $("#input-kocka").css("background-color", "green"); //correct answer
  } else {
    $("#input-kocka").css("background-color", "red"); //incorrect answer
  };

  if (ansZachod === "3") {
    zachod = 1;
    $("#input-zachod").css("background-color", "green"); //correct answer
  } else {
    $("#input-zachod").css("background-color", "red"); //incorrect answer
  };

  if (ansVaza === "5") {
    vaza = 1;
    $("#input-vaza").css("background-color", "green"); //correct answer
  } else {
    $("#input-vaza").css("background-color", "red"); //incorrect answer
  };

  if (ansLednice === "6") {
    lednice = 1;
    $("#input-lednice").css("background-color", "green"); //correct answer
  } else {
    $("#input-lednice").css("background-color", "red"); //incorrect answer
  };

};

*/

