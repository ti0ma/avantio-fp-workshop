const test = require('ava');
const getTotalViews = require('../exercises/ex8');
const MOVIES = require('./movies');

test('t1', (t) => {
  const result = getTotalViews(MOVIES);

  t.deepEqual(result, 1725);
});
