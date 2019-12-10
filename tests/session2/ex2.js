const test = require('ava');
const titleCase = require('../../exercises/session2/ex2');

test('t1', (t) => {
  t.is(titleCase('avaNTio'), 'Avantio');
});

test('t2', (t) => {
  t.is(titleCase('Piscuit'), 'Piscuit');
});

test('t3', (t) => {
  t.is(titleCase('i lOVE fUNCTIONS'), 'I Love Functions');
});

test('t4', (t) => {
  t.is(titleCase('high level functions let us express what data we want'), 'High Level Functions Let Us Express What Data We Want');
});
