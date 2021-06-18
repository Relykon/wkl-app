const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

var app = express();
var PORT = 3000;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`Server running and listening at localhost:${PORT}`);
})