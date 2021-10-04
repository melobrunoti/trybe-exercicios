const sum = require ('./sum')


describe('function sum', () =>{

  it('sums 2 and 3', () =>{
  expect(sum(2,3)).toBe(5)
  })

  it('sums 0 and 0 ', () =>{
    expect(sum(0,0)).toBe(0)
  })

  it('sums 4 and "5" ', () => {
    expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'));
  })
})


