const app = require('express')();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')
const northcoderSorterRouter = require('./routes/northcoderSorter')

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use('/api', apiRouter);
app.use('/northcoderSorter', northcoderSorterRouter);

// err

module.exports = app;