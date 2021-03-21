//Note: Used help of internet due to weak knowledge of proper JS.

document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(function () {
    document.body.className = '';
  }, 230);
});

//Form Submission (Code)
function finalCodeSubmission() {
  var one = document.getElementById('Q1F').value;
  var two = document.getElementById('Q2F').value;
  var three = document.getElementById('Q3F').value;
  var four = document.getElementById('Q4F').value;
  var five = document.getElementById('Q5F').value;
  var six = document.getElementById('Q6F').value;
  var seven = document.getElementById('Q7F').value;
  var eight = document.getElementById('Q8F').value;
  var nine = document.getElementById('Q9F').value;

  var concStr = nine.concat(eight, seven, six, five, four, three, two, one);
  var correctCode = '250910115';

  document.getElementById('results').innerHTML = concStr;

  if (concStr == correctCode) {
    var path = 'escape.html';
    window.open(path);
  } else {
    alert('Lock combination does not match.');
  }
}
