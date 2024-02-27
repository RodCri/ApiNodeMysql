const {average} = require('../utils/for_testing');

describe('average', ()=>{
  test('Of one value is the value itself', () => {
    expect(average([1])).toBe(0)
  })
  
  test('Of many is calculate correctly', () => {
    expect(average()).toBe(0)
  })
  
  test('Of many is calculate correctly', () => {
    expect(average([1,2,3,4,5,6])).toBe(3.5)
  })
})