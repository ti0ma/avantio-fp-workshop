const test = require('ava');
const repeat = require('../../exercises/session1/ex2');

test('t1', (t) => {
  let i = 0;
  repeat(() => {
    i++;
  }, 5);

  t.is(i, 5);
});

test('t1', (t) => {
  let i = 0;
  repeat(() => {
    i++;
  }, 10);

  t.is(i, 10);
});
