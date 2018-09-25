import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import sessionsRouter from './routes/sessions';

const port = 8080;

// Initialize the Express app.
const app = new Express();

// Is this development mode?
const isDevMode = process.env.NODE_ENV === 'development' || false;

// Determine static, client-side file path.
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
