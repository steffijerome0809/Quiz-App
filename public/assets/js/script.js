$(document).ready(() => {
  var timer = $('#timer');
  var title = $('#pageTitle');

  var timeLeft = 0;
  var quizTime = 0;
  var score = 0;

  function quizStart() {
    timeLeft = 75;
    startTimer();
    // createQuestion();
  }

  //  function changes timer display every showTime (second)
  function startTimer() {
    timer.innerHTML = timeLeft;
    quizTime = setInterval(showTime, 1000);
  }
});
