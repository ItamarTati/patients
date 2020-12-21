import shortendDate from './shortendDate';
test('Take a date code and convert it into a readable date', () => {
  expect(shortendDate('2005-09-09T00:00:00.000Z')).toBe('9th of September, 2005');
  expect(shortendDate('2008-03-24T00:00:00.000Z')).toBe('24th of March, 2008');
  expect(shortendDate('2005-09-01T00:00:00.000Z')).toBe('1st of September, 2005');
  expect(shortendDate('2008-03-23T00:00:00.000Z')).toBe('23rd of March, 2008');
  expect(shortendDate('2005-09-02T00:00:00.000Z')).toBe('2nd of September, 2005');
  expect(shortendDate('2008-03-22T00:00:00.000Z')).toBe('22nd of March, 2008');
});