console.log("app.js active");

$(document).ready(function() {
  // let questionVal;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let unanswered = 0;
  let timer = 51;

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

    /*This code displays question & answers corectly, but NOT inside a form */

    //iterates through the questions array - renders each question on DOM
    for (let j = 0; j < questions.length; j++) {
      //displays question in HTML
      let questionHeading = questions[j].question;
      $("#questionDiv").append("<form>");
      $("#questionDiv").append("<p>" + questionHeading + "</p>");

      //iterates through all 3 answers in the specific question
      for (let k = 0; k < questions[k].answers.length; k++) {
        // let answerOptions = <input id="answer"[k] type="radio" name=question[k] value="Big Dipper"> <label for="anskA">AnswerkA</label>;

        $("#questionDiv").append("<span>answerOptions </span>");
      }
      $("#questionDiv").append("<hr>");

      console.log("question heading", questionHeading);

      /* questionBlock += $(
      '<input id="answerkA" type="radio" name="questionk" value="Big Dipper"> <label for="anskA">AnswerkA</label>'
      );
      console.log(questionBlock); */

      // $("#testDiv").append(questionBlock);

      // $("#questionDiv").append('<input type = "radio" value="test">Test<br>');

      // $("#questionDiv").append(
      //   '<input id="answer0A" type="radio" name="question0" value="Big Dipper"> <label for="ans0A">Answer0A</label>'
      // );

      // $("#questionDiv").append("</form>");
      // $("#questionDiv").append("<hr>");

      // $("label[for=ans" + j + "A]").html(questions[i].answers[0]);
      // $("label[for=ans" + j + "B]").html(questions[i].answers[1]);
      // $("label[for=ans" + j + "C]").html(questions[i].answers[2]);
      // $("</form>");
      // $("<hr>");
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
