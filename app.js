const express = require('express');
const app = express(); 

const morgan = require('morgan');
const bodyParser = require('body-parser');

const URL_BASE = '/api.hotel';


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const hotel = require('./rotas/hotel');
app.use(URL_BASE + '/hotel', hotel);

module.exports = app;