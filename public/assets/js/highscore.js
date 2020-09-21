var clearhighscores = $('#clearBtn');

var tbody = $('#tbody');
for (let i = 0; i < localStorage.length; i++) {
  var userName = localStorage.key(i);
  var userScore = localStorage.getItem(userName);
  tbody.prepend(
    '<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>'
  );
}
