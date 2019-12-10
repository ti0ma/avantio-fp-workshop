const test = require('ava');
const reduce = require('../../exercises/session1/ex7');

test('t1', (t) => {
  const result = reduce([1, 2, 3, 4, 5], (prev, curr) => prev + curr, 0);

  t.deepEqual(result, 15);
});

test('t3', (t) => {
  const result = reduce([1], (prev, curr) => prev + curr, 0);

  t.deepEqual(result, 1);
});

test('t4', (t) => {
  const result = reduce([1, 2, 3, 4], (prev, curr) => prev + curr, 10);

  t.deepEqual(result, 20);
});
