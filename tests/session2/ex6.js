const test = require('ava');
const getMovies = require('../../exercises/session2/ex6');
const movies = require('./movies');

test('t1', (t) => {
  const result = getMovies(movies);

  t.deepEqual(result, [
    {
      title: 'Die Hard',
      url: 'http://cdn-0.nflximg.com/images/2891/DieHard400.jpg'
    },
    {
      title: 'Bad Boys',
      url: 'http://cdn-0.nflximg.com/images/2891/BadBoys250.jpg'
    },
    {
      title: 'The Chamber',
      url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg'
    },
    {
      title: 'Fracture',
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg'
    }
  ]);
});
