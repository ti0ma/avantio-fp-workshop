const test = require('ava');
const upperCaser = require('../../exercises/session1/ex1');

test('t1', (t) => {
  t.is(upperCaser('avaNTio'), 'AVANTIO');
});

test('t2', (t) => {
  t.is(upperCaser('Piscuit'), 'PISCUIT');
});
