$(document).ready(() => {
  var timer = $('#timer');
  // var title = $('#pageTitle');

  var timeLeft = 0;
  var quizTime = 0;
  //var score = 0;

  function quizStart() {
    timeLeft = 75;
    startTimer();
    // createQuestion();
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

  // Document => Start Quiz
  $(document).on('click', '#startbutton', () => {
    quizStart();
  });
});
