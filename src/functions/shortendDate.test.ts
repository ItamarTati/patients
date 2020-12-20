import shortendDate from './shortendDate';
test('Take a date code and convert it into a readable date', () => {
  expect(shortendDate('2005-09-09T00:00:00.000Z')).toBe('9th of September, 2005');
  expect(shortendDate('2008-03-24T00:00:00.000Z')).toBe('24th of March, 2008');
});