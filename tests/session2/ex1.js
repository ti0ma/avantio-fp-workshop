const test = require('ava');
const isCharPresent = require('../../exercises/session2/ex1');

test.before(() => {
  Array.prototype.indexOf = () => {};
  String.prototype.indexOf = () => {};
});

test('t1', (t) => {
  t.is(isCharPresent('asdf', 'a'), true);
});

test('t2', (t) => {
  t.is(isCharPresent('Pisctyuuit', 'u'), true);
});

test('t3', (t) => {
  t.is(isCharPresent('i lOVE fUNCTIONS', 'S'), true);
});

test('t4', (t) => {
  t.is(isCharPresent('i lOVE fUNCTIONS', 'a'), false);
});

test('t5', (t) => {
  t.is(isCharPresent('i lOVE fUNCTIONS', ''), false);
});
