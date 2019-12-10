const test = require('ava');
const getMoviesAboveFourStars = require('../../exercises/session1/ex6');
const MOVIES = require('./movies');

test('t1', (t) => {
  const result = getMoviesAboveFourStars(MOVIES);

  t.deepEqual(result, [{
    id: 1,
    title: 'Avengers: Endgame',
    stars: 5,
    views: 123,
  }, {
    id: 4,
    title: 'Black Panther',
    stars: 5,
    views: 456,
  }]);
});
