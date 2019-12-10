const test = require('ava');
const getMoviesIdAndTitle = require('../../exercises/session1/ex4');
const MOVIES = require('./movies');

test('t1', (t) => {
  const result = getMoviesIdAndTitle(MOVIES);

  t.deepEqual(result, [{
    id: 1,
    title: 'Avengers: Endgame',
  }, {
    id: 2,
    title: 'Joker',
  }, {
    id: 3,
    title: 'Toy Story 4',
  }, {
    id: 4,
    title: 'Black Panther',
  }, {
    id: 5,
    title: 'Captain Marvel',
  }]);
});
