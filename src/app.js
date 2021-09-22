const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', user);


module.exports = app;

