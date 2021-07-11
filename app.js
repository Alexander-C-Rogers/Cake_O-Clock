const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();