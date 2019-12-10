const test = require('ava');
const getMostViewedMovie = require('../../exercises/session1/ex10');

test('t1', (t) => {
  const result = getMostViewedMovie([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  t.deepEqual(result, 60);
});
