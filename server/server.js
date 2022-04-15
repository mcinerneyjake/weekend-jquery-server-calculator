const savedMathData = [];

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
