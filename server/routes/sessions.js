import { Router } from 'express';

const sessionsRouter = new Router();

/**
 * Handle GET requests.
 */
sessionsRouter.get('/', (req, res) => {
  return res.send('SQL query statement...');
});

export default sessionsRouter;
