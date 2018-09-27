const Express = require('express');
const morgan = require('morgan');
const path = require('path');
const sessionsRouter = require('./routes/sessions');

const app = new Express();

app.use(morgan('dev'));

app.use('/sessions', sessionsRouter);

app.use('/', Express.static(path.join(__dirname, '../public')));

app.listen(8080, function() {
  console.log('The server is now running on port 8080.');
});
