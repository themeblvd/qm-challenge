import { Router } from 'express';

const sessionsRouter = new Router();

/**
 * Handle GET requests.
 */
sessionsRouter.get('/', (req, res) => {
  const table = 'session';
  const params = req.query.predicates;
  const where = [];
  const numbers = ['screen_width', 'screen_height', 'visits'];
  const errorMsg = "Oops! You didn't fill out all of the fields.";

  let query = `SELECT * FROM ${table}`;

  if (params) {
    query += ' WHERE ';

    for (let i = 0; i < params.length; i++) {
      let { name, reducer, value } = JSON.parse(params[i]);

      if (!name || !reducer || !value) {
        return res.send(errorMsg);
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
          where.push(`${name} >= ${value.min} AND ${name} <= ${value.max}`);
          break;

        case 'less':
          where.push(`${name} <= ${value.min}`);
          break;

        case 'greater':
          where.push(`${name} >= ${value.min}`);
          break;
      }
    }

    query += where.join(' AND ');
  }

  query += ';';

  return res.send(query);
});

export default sessionsRouter;
