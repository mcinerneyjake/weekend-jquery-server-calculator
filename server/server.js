const calculatorStorage = [];

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

app.post('/calculator', (req, res) => {
  console.log('POST /calculator');
  let calculatorDataFromClient = req.body;
  calculatorStorage.push(calculatorDataFromClient);
  console.log(calculatorDataFromClient);

  if (calculatorDataFromClient.mathOperator === '+') {
    addNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
  }
  if (calculatorDataFromClient.mathOperator === '-') {
    console.log(
      subtractNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber))
    );
  }
  if (calculatorDataFromClient.mathOperator === '*') {
    console.log(
      multiplyNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber))
    );
  }
  if (calculatorDataFromClient.mathOperator === '/') {
    console.log(
      divideNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber))
    );
  }

  res.sendStatus(200);
});

app.get('/calculator', (req, res) => {
  console.log('GET /calculator');
  res.send(calculatorStorage);
});

function addNumbers(number1, number2) {
  return Number(number1 + number2);
}

function subtractNumbers(number1, number2) {
  return Number(number1 - number2);
}

function multiplyNumbers(number1, number2) {
  return Number(number1 * number2);
}

function divideNumbers(number1, number2) {
  return Number(number1 / number2);
}
