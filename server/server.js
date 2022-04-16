const calculatorStorage = [];
let total;

//////////////////////////////////////////
// SERVER
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, function () {
  console.log(`The server is running! Check it out at http://localhost:${PORT}!`);
});
//////////////////////////////////////////

//////////////////////////////////////////
// MATH FUNCTIONS

function addNumbers(number1, number2) {
  total = Number(number1 + number2);
}

function subtractNumbers(number1, number2) {
  total = Number(number1 - number2);
}

function multiplyNumbers(number1, number2) {
  total = Number(number1 * number2);
}

function divideNumbers(number1, number2) {
  total = Number(number1 / number2);
}
//////////////////////////////////////////

//////////////////////////////////////////
// POST and GET FUNCTIONS

app.post('/calculator', (req, res) => {
  console.log('POST /calculator');
  let calculatorDataFromClient = req.body;
  calculatorStorage.push(calculatorDataFromClient);
  console.log(calculatorDataFromClient);

  for (object of calculatorStorage) {
    if (calculatorDataFromClient.mathOperator === '+') {
      addNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
    } else if (calculatorDataFromClient.mathOperator === '-') {
      subtractNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
    } else if (calculatorDataFromClient.mathOperator === '*') {
      multiplyNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
    } else if (calculatorDataFromClient.mathOperator === '/') {
      divideNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
    }
    object.total = total;
  }

  res.sendStatus(200);
});

app.get('/calculator', (req, res) => {
  console.log('GET /calculator');
  res.send(calculatorStorage);
});
//////////////////////////////////////////
