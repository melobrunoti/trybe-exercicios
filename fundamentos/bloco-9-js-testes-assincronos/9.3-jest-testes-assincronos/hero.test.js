const getSuperHero = require('./getData');

test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
  const error = await getSuperHero();
  expect(error).toMatch('earro');
});