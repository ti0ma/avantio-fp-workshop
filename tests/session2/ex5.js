const test = require('ava');
const getMovies = require('../../exercises/session2/ex5');
const movies = require('./movies');

test('t1', (t) => {
  const result = getMovies(movies);

  t.deepEqual(result, [
    {
      title: 'Die Hard',
      boxart: {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
      }
    },
    {
      title: 'Bad Boys',
      boxart: {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'
      }
    },
    {
      title: 'The Chamber',
      boxart: {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg'
      }
    },
    {
      title: 'Fracture',
      boxart: {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg'
      }
    }
  ]);
});
