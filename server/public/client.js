$(document).ready(onReady);

function onReady() {
  console.log('jQuery');
  $('#equalsButton').on('click', mathEquationOnSubmit);
  $('#clearButton').on('click', clearCalculator);
  $('#addButton').on('click', handleMathOperatorValues);
  $('#subtractButton').on('click', handleMathOperatorValues);
  $('#multiplyButton').on('click', handleMathOperatorValues);
  $('#divideButton').on('click', handleMathOperatorValues);
}

let valueOfButtonOperator = '';

function handleMathOperatorValues() {
  valueOfButtonOperator = $(this).text();
}

function mathEquationOnSubmit() {
  let storeMathEquationObject = {
    firstNumber: Number($('#firstNumberInput').val()),
    secondNumber: Number($('#secondNumberInput').val()),
    mathOperator: valueOfButtonOperator,
  };
  sendMathDataToServer(storeMathEquationObject);
  clearCalculator();
}

function clearCalculator() {
  $('#firstNumberInput').val('');
  $('#secondNumberInput').val('');
}

/////////////////////////////////////////////////////////
// FUCTIONS TO BE PUT ONTO THE SERVER
function addNumbers(number1, number2) {
  let addedNumbers = number1 + number2;
  $('#equationContainer').append(addedNumbers);
}

function subtractNumbers(number1, number2) {
  let subtractedNumbers = number1 - number2;
  $('#equationContainer').append(subtractedNumbers);
}

function multiplyNumbers(number1, number2) {
  let multipliedNumbers = number1 * number2;
  $('#equationContainer').append(multipliedNumbers);
}

function divideNumbers(number1, number2) {
  let dividedNumbers = number1 / number2;
  $('#equationContainer').append(dividedNumbers);
}

/////////////////////////////////////////////////////////

function sendMathDataToServer(data) {
  $.ajax({
    method: 'POST',
    url: '/calculator',
    data: data,
  }).then(function (response) {
    console.log('response of POST is:');
    console.log(response);
    getMathDataFromServer();
  });
}

function getMathDataFromServer() {
  $.ajax({
    method: 'GET',
    url: '/calculator',
  }).then(function (response) {
    console.log('the server sent back the completed equation:');
    console.log(response);
    $('#equationContainer').empty();
    for (let equation of response) {
      $('#equationContainer').append(`<li>${equation.firstNumber} ${equation.mathOperator} ${equation.secondNumber}`);
    }
  });
}
