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
  //var score = 0;

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
  function createQuestion() {
    // get the questions from db
    $.get('/api/questions').then((data) => {
      // loop over the questions
      console.log(data);
      const questions = data;
      // data.forEach((park) => {
      //   // append them as select options
      //   const newLoc = $('<option>').attr('value', park.id).text(park.title);
      //   locationInput.append(newLoc);
      // });
      // locationInput.formSelect();
    });

    $('.codeQuiz').hide();

    $('.quiz').show();
    CodeQuiz(qNumber);
  }

  //  function checks if there are anymore questions and if not ends the quiz
  //   function CodeQuiz() {
  //     if (qNumber >= questions.length) {
  //       quizOver();
  //     } else {
  //       codequestion.innerHTML = questions[qNumber].question;
  //       answerSelect1.innerHTML = questions[qNumber].choices[0];
  //       answerSelect2.innerHTML = questions[qNumber].choices[1];
  //       answerSelect3.innerHTML = questions[qNumber].choices[2];
  //       answerSelect4.innerHTML = questions[qNumber].choices[3];
  //     }
  //   }
  // $ and API Calllzzzz

  // Document => Start Quiz
  $(document).on('click', '#startbutton', () => {
    quizStart();
  });
});
