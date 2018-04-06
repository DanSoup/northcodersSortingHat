const app = require('express')();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use('/api', apiRouter);

// err

module.exports = app;