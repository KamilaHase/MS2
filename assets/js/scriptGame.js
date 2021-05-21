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
 


//--------BUTTON RELOAD---------------

$(".btn-reload-page").click(function(){
location.reload(true);
});


/*---------------------------------QUIZ-------------------*/
// ----VERSION FOR SMALL AND TOUCH SCREENS
// adapted from https://www.youtube.com/watch?v=1SxMWhqYQ4k&t=1588s and https://www.youtube.com/watch?v=C7NsIRhoWuE 


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
  $("#input-postylka").css("background-color", "#d1f8b4"); //correct answer
} else {
  $("#input-postylka").css("background-color", "#ffded6"); //incorrect answer
};

if (okno == "2") {
  correct++;
  $("#input-okno").css("background-color", "#d1f8b4"); //correct answer
} else {
  $("#input-okno").css("background-color", "#ffded6"); //incorrect answer
};

if (kocka == "1") {
  correct++;
  $("#input-kocka").css("background-color", "#d1f8b4"); //correct answer
} else {
  $("#input-kocka").css("background-color", "#ffded6"); //incorrect answer
};

if (zachod == "3") {
  correct++;
  $("#input-zachod").css("background-color", "#d1f8b4"); //correct answer
} else {
  $("#input-zachod").css("background-color", "#ffded6"); //incorrect answer
};

if (vaza == "5") {
  correct++;
  $("#input-vaza").css("background-color", "#d1f8b4"); //correct answer
} else {
  $("#input-vaza").css("background-color", "#ffded6"); //incorrect answer
};

if (lednice == "6") {
  correct++;
  $("#input-lednice").css("background-color", "#d1f8b4"); //correct answer
} else {
  $("#input-lednice").css("background-color", "#ffded6"); //incorrect answer
};

$("#results-correct").css("visibility","visible").addClass("after-submit");
$("#results-correct").html("You got " + correct + " correct.");

};

// ----VERSION FOR LARGE SCREENS - DRAG AND DROP

// jquery

let correct = 0;
let score = function () {
  for (correct; i > 2; i++);
};

$(function() {
  
$( "#postylka, #okno, #kocka, #zachod, #vaza, #lednice" ).draggable();

$( "#drop-postylka" ).droppable({
  accept: "#postylka",
  
  drop: function() {
    $( this )
    .addClass("drop-correct");    
    console.log( "Dropped postylka!" );   
        correct++;
  }
});

$( "#drop-okno" ).droppable({
  accept: "#okno",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");  
        console.log( "Dropped okno!" );
        correct++;
  }
});

$( "#drop-kocka" ).droppable({
  accept: "#kocka",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");
        console.log( "Dropped kocka!" );  
        correct++;
  }
});

$( "#drop-zachod" ).droppable({
  accept: "#zachod",
  
  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");
        console.log( "Dropped zachod!" );    
        correct++;
  }
});

$( "#drop-vaza" ).droppable({
  accept: "#vaza",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");
        console.log( "Dropped vaza!" ); 
        correct++;
  }
});

$( "#drop-lednice" ).droppable({
  accept: "#lednice",

  drop: function( event, ui ) {
    $( this )
        .click("#check-lg").addClass("drop-correct");
        console.log( "Dropped lednice!" );
        correct++;
        $("#lednice").css("background-color", "#d1f8b4");
    }
  });

});


function checkLg() {
  $("#results-correct").css("visibility","visible").addClass("after-submit");
  $("#results-correct").html("You got " + correct + " correct.");
};




/*

function checkLg() {
  let dropPostylka = $("#postylka").droppable({accept: "#postylka"});
  let dropOkno = $("#drop-okno").droppable({accept: "#okno"});
  let dropKocka = $( "#drop-kocka" ).droppable({accept: "#kocka"});
  let dropZachod = $( "#drop-zachod" ).droppable({accept: "#zachod",});
  let dropVaza = $( "#drop-vaza" ).droppable({accept: "#vaza",});  
  let dropLednice = $("#drop-lednice").droppable({accept: "#lednice"});


  if (dropPostylka) {
    $("#postylka").css("background-color", "#d1f8b4"); //correct answer
   }  else {
    $("#postylka").css("background-color", "#ffded6"); //incorrect answer
  }
  
  if (dropOkno) {
    $("#okno").css("background-color", "#d1f8b4"); //correct answer
   }  else {
    $("#okno").css("background-color", "#ffded6"); //incorrect answer
  }

  if (dropKocka) {
    $("#kocka").css("background-color", "#d1f8b4"); //correct answer
  }  else {
    $("#kocka").css("background-color", "#ffded6"); //incorrect answer
  }

  if (dropZachod) {
    $("#zachod").css("background-color", "#d1f8b4"); //correct answer
  }  else {
    $("#zachod").css("background-color", "#ffded6"); //incorrect answer
  }
  
  if (dropVaza) {
    $("#vaza").css("background-color", "#d1f8b4"); //correct answer
  }  else {
    $("#vaza").css("background-color", "#ffded6"); //incorrect answer
  }

  if (dropLednice) {
    $("#lednice").css("background-color", "#d1f8b4"); //correct answer
  }  else {
    $("#lednice").css("background-color", "#ffded6"); //incorrect answer
  }

$("#results-correct").css("visibility","visible").addClass("after-submit");
$("#results-correct").html("You got " + correct + " correct.");

};

*/
