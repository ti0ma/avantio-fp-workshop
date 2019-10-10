const test = require('ava');
const map = require('../exercises/ex3');

test('t1', (t) => {
  const result = map(['1', '2', '3', '4', '5'], Number);

  t.deepEqual(result, [1, 2, 3, 4, 5]);
});

test('t2', (t) => {
  const result = map(map(['1', '2', '3', '4', '5'], Number), (a) => a * 2);

  t.deepEqual(result, [2, 4, 6, 8, 10]);
});

test('t3', (t) => {
  const result = map([1, 2], (a, idx, arr) => arr);

  t.deepEqual(result, [[1, 2], [1, 2]]);
});

test('t4', (t) => {
  const result = map([1, 2, 3, 4, 5], (a, idx, arr) => idx);

  t.deepEqual(result, [0, 1, 2, 3, 4]);
});
