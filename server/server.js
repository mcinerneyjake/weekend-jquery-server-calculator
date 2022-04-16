const calculatorStorage = [];
let addTotal;
let subractTotal;
let multiplyTotal;
let divideTotal;

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
  addTotal = Number(number1 + number2);
}

function subtractNumbers(number1, number2) {
  subractTotal = Number(number1 - number2);
}

function multiplyNumbers(number1, number2) {
  multiplyTotal = Number(number1 * number2);
}

function divideNumbers(number1, number2) {
  divideTotal = Number(number1 / number2);
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
      object.addTotal = addTotal;
    } else if (calculatorDataFromClient.mathOperator === '-') {
      subtractNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
      object.subractTotal = subractTotal;
    } else if (calculatorDataFromClient.mathOperator === '*') {
      multiplyNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
      object.multiplyTotal = multiplyTotal;
    } else if (calculatorDataFromClient.mathOperator === '/') {
      divideNumbers(Number(calculatorDataFromClient.firstNumber), Number(calculatorDataFromClient.secondNumber));
      object.divideTotal = divideTotal;
    }
  }
  res.sendStatus(200);
});

app.get('/calculator', (req, res) => {
  console.log('GET /calculator');
  res.send(calculatorStorage);
});
//////////////////////////////////////////
