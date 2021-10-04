const myFizzBuzz = require('./fizzBuzz.js')

describe('Checks the fizzBUzz function', () =>{

  it('verifica se possui o retorno esperado', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('4')).toBe(false);

    
  })


})