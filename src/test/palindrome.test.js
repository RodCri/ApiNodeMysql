const {palindrome} = require('../utils/for_testing');

test('Palindrome', () => { 
  const result = palindrome('oso');
  expect(result).toBe('oso');
 })