const test = require('ava');
const filter = require('../../exercises/session1/ex5');

test('t1', (t) => {
  const result = filter(['1', null, '', 0, '5'], Boolean);

  t.deepEqual(result, ['1', '5']);
});

test('t2', (t) => {
  const result = filter([1, 2, 3, 4, 5], (a) => a > 2);

  t.deepEqual(result, [3, 4, 5]);
});
