const { Router } = require('express');

const sessionsRouter = new Router();

/**
 * Handle GET requests to /sessions route.
 *
 * This is a more-or-less a simulation of
 * passing the search parameters to query
 * down a returned object of sessions.
 *
 * However, this function simply sends back
 * a response with a generated SQL query
 * as a string.
 */
sessionsRouter.get('/', (req, res) => {
  const table = 'session';
  const params = req.query.searchParams;
  const where = [];
  const numbers = ['screen_width', 'screen_height', 'visits'];

  let query = `SELECT * FROM ${table}`;

  if (params) {
    query += ' WHERE ';

    for (let i = 0; i < params.length; i++) {
      let { name, reducer, value } = JSON.parse(params[i]);

      if (!name || !reducer || !value) {
        return res.send("Oops! You didn't fill out all of the fields.");
      }

      switch (reducer) {
        case 'starts_with':
          where.push(`${name} LIKE '${value}%'`);
          break;

        case 'not_starts_with':
          where.push(`${name} NOT LIKE '${value}%'`);
          break;

        case 'equals':
          if (numbers.includes(name)) {
            where.push(`${name} = ${value}`);
          } else {
            where.push(`${name} = '${value}'`);
          }
          break;

        case 'not_equals':
          if (numbers.includes(name)) {
            where.push(`${name} != ${value}`);
          } else {
            where.push(`${name} != '${value}'`);
          }
          break;

        case 'contains':
          where.push(`${name} LIKE '%${value}%'`);
          break;

        case 'not_contains':
          where.push(`${name} NOT LIKE '%${value}%'`);
          break;

        case 'range':
          if (value.min > value.max) {
            return res.send('Oops! That is not a valid range.');
          }
          where.push(`${name} >= ${value.min} AND ${name} <= ${value.max}`);
          break;

        case 'less':
          where.push(`${name} <= ${value}`);
          break;

        case 'greater':
          where.push(`${name} >= ${value}`);
          break;
      }
    }

    query += where.join(' AND ');
  }

  query += ';';

  return res.send(query);
});

module.exports = sessionsRouter;
