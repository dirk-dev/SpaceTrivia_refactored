console.log("app.js active");

$(document).ready(() => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let unanswered = 0;
  let timer = 11;

  let questions = [
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

  let gameStart = () => {
    $("#gameBoard").hide();
    $("#scoreScreen").hide();
    console.log("gameStart running");
  };

  let run = () => {
    intervalId = setInterval(decrement, 1000);
  };

  let decrement = () => {
    timer--;
    $("#countdown").html("Time remaining: " + timer + " seconds");
    if (timer === 0) {
      scoring();
      $("#gameBoard").remove();
      $("#scoreScreen").show();
    }
  };

  let scoring = () => {
    for (let i = 0; i < questions.length; i++) {
      //added :checked to indicate the checked radio box
      let questionAnswer = $("input[name=question" + [i] + "]:checked").val();

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
      console.log("scoring function called");
    }

    $("#correctAnswers").append(correctAnswers);
    $("#wrongAnswers").append(wrongAnswers);
    $("#unanswered").append(unanswered);
  };

  // removes start button onclick and displays question screen
  gameStart();

  $("#startButton").click(() => {
    $("#startScreen").hide();
    $("#gameBoard").show();
    run();
    decrement();
    console.log("start button click running");

    //outer for loop iterates through each question
    for (let j = 0; j < questions.length; j++) {
      $("#questionDiv").append(
        "<p class='questionCopy'>" + questions[j].question + "</p>"
      );

      //inner for loop iterates through the answer array of each question
      for (let k = 0; k < questions[j].answers.length; k++) {
        $("#questionDiv").append(
          '<input type="radio" class="radio-btn" name="question' +
            j +
            '" value="' +
            questions[j].answers[k] +
            '">' +
            questions[j].answers[k]
        );
      }
      $("#questionDiv").append("<br>");
      $("#questionDiv").append("<hr>");
    }
  });

  // clears question screen takes user to scoring screen
  $("#doneButton").click(() => {
    timer = 0;
    scoring();
    $("#gameBoard").remove();
    $("#scoreScreen").show();
  });
});

//is the setTimeout doing anything?
/* 
* the scoring function called twice - once when the done button is clicked, and once
when the timer runs out again

* discrepancy betwween show/hide/remove


*/
