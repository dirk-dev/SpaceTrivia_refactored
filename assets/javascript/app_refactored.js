console.log("app.js active");

$(document).ready(function() {
  // var questionVal;
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unanswered = 0;
  var timer = 51;

  var questions = [
    {
      question: "What constellation is also known as the Seven Sisters?",
      answers: ["Big Dipper", "Pleiades", "Cassiopeia"],
      correctAnswer: "Pleiades"
    },
    {
      question: "What is the distance from the Earth to the Sun?",
      answers: ["93 million miles", "1 light year", "500,000 miles"],
      correctAnswer: "93 million miles"
    },
    {
      question: "What is the largest known star?",
      answers: ["Sirius", "Betelgeuse", "VY Canis Majoris"],
      correctAnswer: "VY Canis Majoris"
    },
    {
      question: "What is the closest star to Earth?",
      answers: ["Alpha Centauri", "Proxima Centauri", "Barnard's Star"],
      correctAnswer: "Proxima Centauri"
    },
    {
      question: "How much larger is the Sun than Earth?",
      answers: ["750 times", "5,000 times", "300,000 times"],
      correctAnswer: "300,000 times"
    },
    {
      question: "How many moons does Jupiter have?",
      answers: ["79", "8", "26"],
      correctAnswer: "79"
    },
    {
      question: "What is a shooting star?",
      answers: ["comet", "meteor", "asteroid"],
      correctAnswer: "meteor"
    },
    {
      question: "How many planets in our solar system have rings?",
      answers: ["1", "2", "4"],
      correctAnswer: "4"
    }
  ];

  function gameStart() {
    $("#gameBoard").hide();
    $("#scoreScreen").hide();
    console.log("gameStart running");
  }

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timer--;
    $("#countdown").html("Time remaining: " + timer + " seconds");
    if (timer === 0) {
      $("#gameBoard").remove();
      $("#scoreScreen").show();
    }
  }

  function scoring() {
    for (let i = 0; i < questions.length; i++) {
      //added :checked to indicate the checked radio box
      var questionAnswer = $("input[name=question" + [i] + "]:checked").val();
      console.log("qa:", questionAnswer); //this is logging qa: on

      if (questionAnswer === questions[i].correctAnswer) {
        correctAnswers++;
      } else if (
        questionAnswer !== questions[i].correctAnswer &&
        questionAnswer !== undefined
      ) {
        wrongAnswers++;
      } else {
        unanswered++;
      }
      console.log(
        "radio button value: ",
        $("input[name=question" + [i] + "]:checked").val()
      );
      console.log("correct answer:", questions[i].correctAnswer);
      console.log("question " + [i] + " name = " + [(name = "question" + [i])]);
    }

    $("#correctAnswers").append(correctAnswers);
    $("#wrongAnswers").append(wrongAnswers);
    $("#unanswered").append(unanswered);
  }

  // removes start button onclick and displays question screen
  gameStart();

  $("#startButton").click(function() {
    $("#startScreen").hide();
    $("#gameBoard").show();
    // run();
    // decrement();
    // console.log("start button click running");

    

    for (let j = 0; j < questions.length; j++) {
      $("#questionDiv").prepend("<form>");

      $("#question_" + j).html(questions[j].question);

      $("#questionDiv").append('<input type = "radio" value="test">Test<br>');

      $("#questionDiv").append("</form>");
      $("#questionDiv").append("<hr>");

      $("label[for=ans" + j + "A]").html(questions[j].answers[0]);
      $("label[for=ans" + j + "B]").html(questions[j].answers[1]);
      $("label[for=ans" + j + "C]").html(questions[j].answers[2]);
      $("</form>");
      $("<hr>");
    }

    //do I need to give each question a value?
  });

  // clears question screen takes user to scoring screen
  $("#doneButton").click(function() {
    scoring();

    $("#gameBoard").remove();
    $("#scoreScreen").show();
  });
});

//this works if the value is hard-coded into the HTML.
//find out how to automatically render the questions with their answers in JS
