const { test, expect } = require('@jest/globals');
const  service  = require('./service');
jest.mock("./service");


test("testando funcao randomNumber", () => {
  service.randomNumber = jest.fn().mockReturnValue(10)

  expect(service.randomNumber()).toBe(10)
  expect(service.randomNumber).toHaveBeenCalled()
  expect(service.randomNumber).toHaveBeenCalledTimes(1)
});


test("testando divisao de randomNumber ", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a,b) => a/b)

  expect(service.randomNumber(20,10)).toBe(2)
  expect(service.randomNumber).toHaveBeenCalled()
  expect(service.randomNumber).toHaveBeenCalledTimes(1)
});

test("testando multiplicacao de randomNumber ", () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)

  expect(service.randomNumber(2,3,4)).toBe(24)
  expect(service.randomNumber).toHaveBeenCalled()
  expect(service.randomNumber).toHaveBeenCalledTimes(1)


});

test("testando multiplicacao de randomNumber ", () => {
  service.randomNumber.mockReset()
  expect(service.randomNumber).not.toHaveBeenCalled()
  service.randomNumber = jest.fn().mockImplementation((a) => a * 2)

  expect(service.randomNumber(24)).toBe(48)
  expect(service.randomNumber).toHaveBeenCalled()
  expect(service.randomNumber).toHaveBeenCalledTimes(1)
});

test("A funcao upperCase agora deve retornar qualquer string em caixa baixa",() => {
  service.upperCase.mockImplementation(str => str.toLowerCase());

  expect(service.upperCase('ALOU')).toBe('alou')
  expect(service.upperCase).toHaveBeenCalledTimes(1)

 /*  service.upperCase.mockRestore();

  expect(service.upperCase("lowercase")).toBe("LOWERCASE"); */

});

test("A funcao firstLetter agora deve retornar qualquer a ultima letra de uma string",() => {
  service.firstLetter = jest.fn().mockImplementation((str) => str.split('')[str.length - 1])

  expect(service.firstLetter('alou')).toBe('u')
  expect(service.firstLetter).toHaveBeenCalledTimes(1)

})

test("A funcao concat agora deve retornar 3 strings concaternadas",() => {
  service.concat = jest.fn().mockImplementation((firstStr, secondStr, thirdStr) => `${firstStr} ${secondStr} ${thirdStr}` )

  expect(service.concat('ola', 'tudo bem', 'como vai?')).toBe('ola tudo bem como vai?')
  expect(service.concat).toHaveBeenCalledTimes(1)

})

test('testar se a requisicao foi um sucesso', async ()=>{
 /*  service.fetchDog = jest.fn(); */
  service.fetchDog.mockResolvedValue("request sucess");

  service.fetchDog()
  expect(service.fetchDog).toHaveBeenCalled()
  await expect(service.fetchDog()).resolves.toBe('request sucess')
})