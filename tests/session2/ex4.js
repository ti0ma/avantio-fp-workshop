const test = require('ava');
const getMovies = require('../../exercises/session2/ex4');
const movies = require('./movies');

test('t1', (t) => {
  t.is(getMovies(movies).length, 4);
});

test('t2', (t) => {
  t.is(getMovies(movies)[1].title, 'Bad Boys');
});

test('t3', (t) => {
  t.is(getMovies(movies)[2].id, 65432445);
});
