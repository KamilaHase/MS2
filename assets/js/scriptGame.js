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



