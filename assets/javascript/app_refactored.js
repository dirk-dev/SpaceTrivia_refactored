import questions from './questions.js'

$(document).ready(() => {
  let correctAnswers = 0
  let wrongAnswers = 0
  let unanswered = 0
  let timer = 51

  const gameStart = () => {
    $('#gameBoard').hide()
    $('#scoreScreen').hide()
    // console.log('gameStart running')
  }

  const run = () => {
    intervalId = setInterval(decrement, 1000)
  }

  const decrement = () => {
    timer--
    $('#countdown').html(`Time remaining: ${timer} seconds`)
    if (timer === 0) {
      scoring()
      $('#gameBoard').remove()
      $('#scoreScreen').show()
    }
  }

  const scoring = () => {
    for (let i = 0; i < questions.length; i++) {
      // added :checked to indicate the checked radio box
      let questionAnswer = $(`input[name=question${[i]}]:checked`).val()

      if (questionAnswer === questions[i].correctAnswer) {
        correctAnswers++
      } else if (
        questionAnswer !== questions[i].correctAnswer &&
        questionAnswer !== undefined
      ) {
        wrongAnswers++
      } else {
        unanswered++
      }
      console.log('scoring function called')
    }

    $('#correctAnswers').append(correctAnswers)
    $('#wrongAnswers').append(wrongAnswers)
    $('#unanswered').append(unanswered)
  }

  // removes start button onclick and displays question screen
  gameStart()

  $('#startButton').click(() => {
    $('#startScreen').hide()
    $('#gameBoard').show()
    // run()
    decrement()
    // console.log('start button click running')

    // outer for loop iterates through each question
    for (let j = 0; j < questions.length; j++) {
      $('#questionDiv').append(
        `<p class='questionCopy'>${questions[j].question}</p>`
      )

      // inner for loop iterates through the answer array of each question
      for (let k = 0; k < questions[j].answers.length; k++) {
        $('#questionDiv').append(
          `<input type="radio" class="radio-btn" name="question${j}" value="${
            questions[j].answers[k]
          }">${questions[j].answers[k]}`
        )
      }
      $('#questionDiv').append('<br>')
      $('#questionDiv').append('<hr>')
    }
  })

  // clears question screen takes user to scoring screen
  // timer = 0 added to prevent scoring function from running twice
  $('#doneButton').click(() => {
    timer = 0
    scoring()
    $('#gameBoard').remove()
    $('#scoreScreen').show()
  })
})
