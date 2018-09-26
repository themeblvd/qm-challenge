import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import sessionsRouter from './routes/sessions';

const app = new Express();
const port = 8080;
const isDevMode = process.env.NODE_ENV === 'development' || false;
const staticPath = isDevMode ? '../client/public' : '../dist/public';

// Apply middleware.
isDevMode && app.use(morgan('dev'));
app.use(bodyParser.json());

// Set up end points.
app.use('/sessions', sessionsRouter);
app.use('/', Express.static(path.join(__dirname, staticPath)));

// Run server.
app.listen(port, function() {
  console.log(`The server is now running on port ${port}.`);
});
