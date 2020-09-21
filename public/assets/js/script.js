$(document).ready(() => {
  var timer = $('#timer');
  var codequestion = $('#question');
  var answerSelect1 = $('#answer1');
  var answerSelect2 = $('#answer2');
  var answerSelect3 = $('#answer3');
  var answerSelect4 = $('#answer4');
  var feedback = $('#feedback');
  var title = $('#pageTitle');
  var qNumber = 0;
  var timeLeft = 0;
  var quizTime = 0;
  var score = 0;
  let questioncount = 0;
  let questionDisplay = '';

  function quizStart() {
    timeLeft = 75;
    startTimer();
    createQuestion();
  }

  // function changes timer display every showTime (second)
  function startTimer() {
    timer.text(timeLeft);
    quizTime = setInterval(showTime, 1000);
  }

  //  function equates a showTime to a second and determines when timer reaches zero
  function showTime() {
    if (timeLeft !== 0) {
      timeLeft--;
      timer.text(timeLeft);
    } else {
      clearInterval(quizTime);
      quizOver();
    }
    return;
  }

  //  function hides initial elements and shows quiz relevant ones, then starts main quiz function
  // $ and API Calllzzzz
  const createQuestion = async () => {
    // get the questions from db
    await $.get('/api/questions').then((data) => {
      // loop over the questions
      questionDisplay = data;
      data.forEach((question) => {
        questioncount = question.id;
      });

      console.log('questions length', questioncount);
    });

    $('.codeQuiz').hide();

    $('.quiz').show();
    await CodeQuiz(qNumber);
  };

  //  function checks if there are anymore questions and if not ends the quiz
  function CodeQuiz() {
    if (qNumber >= questioncount) {
      return;
      // quizOver();
    } else {
      codequestion.text(questionDisplay[qNumber].question);
      let result;
      result = questionDisplay[qNumber].choices.split(':');
      console.log('choices:', result);

      answerSelect1.text(result[0]);
      answerSelect2.text(result[1]);
      answerSelect3.text(result[2]);
      answerSelect4.text(result[3]);
    }
  }

  //  function checks whether or not answer is the correct one
  function answerCheck(btnId) {
    if ($(btnId).text(questionDisplay[qNumber].answer)) {
      rightAnswer();
      qNumber++;
    } else {
      wrongAnswer();
      qNumber++;
    }
    CodeQuiz(qNumber);
  }
  //  this function runs when answer is right
  function rightAnswer() {
    score = timeLeft;
    feedback.text('Correct');
    setTimeout(function () {
      feedback.text('');
    }, 800);
  }

  //  this function runs when answer is wrong
  function wrongAnswer() {
    timeLeft = timeLeft - 15;
    feedback.text('Wrong');
    setTimeout(function () {
      feedback.text('');
    }, 800);
  }

  //  this function generates the end screen and allows user to submit initials with their score
  function quizOver() {
    $('.quiz').hide();
    var content = document.getElementById('center-content');
    var done = document.getElementById('done');
    var submit = document.getElementById('submit');

    timer.innerHTML = 0;

    content.insertAdjacentHTML(
      'afterbegin',
      '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-danger">Submit</button> <input id="userScore"> - Enter Initials</input>'
    );

    var done = document.getElementById('done');
    done.insertAdjacentHTML(
      'afterend',
      '<p id="finalScore">Your final score is ' + score + '</p>'
    );

    var submit = document.getElementById('submit');
    submit.addEventListener('click', function () {
      var value = document.getElementById('userScore').value;
      localStorage.setItem(value, score);
      window.location.href = 'highscore.html';
      console.log(window.location.href);
    });
    clearInterval(quizTime);
  }

  // Document => Start Quiz
  $(document).on('click', '#startbutton', () => {
    quizStart();
  });
});
