
const myQuestions = [
  {
   'question':  'The instrument that measures and records the relative humidity of air is?',
   'answers': ["Hydrometer","Hygrometer","Lactometer","Barometer"],
   'correct': 0
  },
  {
   'question': 'The different colors of different stars are due to the variation of?',
   'answers': ["temperature", "pressure", "density", "radiation from them"],
   'correct':  0
  },
  {
   'question': "The shape of our Milky Way galaxy is?",
   'answers': ["circular","elliptical","spiral","None of the above"],
   'correct':  2
  },
  {
  'question': "The instrument used to measure the force and velocity of wind is?",
  'answers': ["Ammeter","Anemometer","Altimeter","Veltometer"],
  'correct':  1
  },
  {
   'question':  "Equilibrium is a condition that can...",
   'answers': ["never change","change only if some outside factor changes","change only if some internal factor changes","change only if government policies change"],
   'correct': 0
  }
  ];

// Set score and current to 0 and increase the counter as both increase through the quiz
var score = 0;
var current = 0;

$(document).ready(function(){
  // Create an event listener to listen for a click on the Begin Quiz button
  $(".start-button").click(function(){
     $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('Current Score: '+score);
    //console.log("Start Quiz button clicked");
  });

  // Create an event listener to listen for a click on the Next button
  $(".next-button").click(function(event){
    //console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });

  $(".submit-button").click(function(event){
    if($('li.selected').length){
      var answer = $('li.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      // If no answer is selected, trigger an alert
      alert('Please select an answer');
    }
  });

  // Create an event listener to listen for a click on the Start Over button and refresh the page
  $(".retake-button").click(function(){
  location.reload();
    console.log("Retake button clicked");
  });

  //Click listener when clicking on a list item to change the color of the background
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });

});

//Function List
function displayQuestion(){
  $('.question-number').text('Question Number: '+(current + 1)+"/5" );
  if(current < myQuestions.length){
    var listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (var i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
    }
  } else {
    // show summary that says how many you got correct
    displayScore();
  }
}

// Checks answer from the array to see if the one chosen is the one that is correct
function checkAnswer(answer){
  var listQuestion = myQuestions[current];
  if(listQuestion.correct == answer){
    score++;
    $('li.selected').addClass('correct');
  } else {
    $('li.selected').addClass('incorrect');
    $('listQuestion.correct').addClass('correct');
  }
  $('.score').text('Current Score: '+score);
  current++;
}

//Display score
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.end-score').text("Your score is: " +score + '/5');
  if(score >= 4){
    $('.comment').text('GREAT JOB!');
  }
}






















