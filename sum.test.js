const sum = require('./sum.js');


describe('sum functions', () => {

  // jest gives us a built in test function and expect function
  // test functions will take two arguments, first is a string, second is a function
  test('should add two numbers and return sum', () =>{
    // this is where the test code goes
    const result = sum(83, 6);
    //  built in function
    expect(result).toBe(89)
    // instead of console.log('83 + 6 should be 89', result)
  });
  
  
  test('should add positive to negative', () => {
    const result = sum(83, -6);
    expect(result).toBe(77);
    
  })
  
  
  test('should add two negative numbers', () => {
    const result = sum(-83, -6);
    expect(result).toBe(-89);
    
  })
  
  
  test('should fail if only one argument', () => {
    // error handling includes security, think about security
    // when testing
    expect(() => {
      sum(83);
    }).toThrow("You're missing an argument" );
    
  })
  
  test('should convert strings to number', () => {
    const result = sum("9", "3");
    expect(result).toBe(12);
    
  })

  
})
