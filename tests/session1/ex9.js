const test = require('ava');
const getMostViewedMovie = require('../../exercises/session1/ex9');
const MOVIES = require('./movies');

test('t1', (t) => {
  const result = getMostViewedMovie(MOVIES);

  t.deepEqual(result, {
    id: 5,
    title: 'Captain Marvel',
    stars: 4,
    views: 567,
  });
});
