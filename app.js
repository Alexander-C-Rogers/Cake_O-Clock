const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

// View engine setup
app.engine('handlebars', expressHandlebars({defaultLayout: 'app'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');