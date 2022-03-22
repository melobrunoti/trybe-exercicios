
const   magicNumber   = require('./index');

const { expect } = require('chai');

describe('Quando o numero for menor que 0', () => {
  it('e uma string',() => {
    const resposta = magicNumber(-3);

    expect(resposta).to.be.a('string')
  });
 
  it('retorna "negativo"', () => {
    const resposta = magicNumber(-3);

    expect(resposta).to.be.equals('negativo')
  });
});

describe('Quando o numero for maior que 0', () => {
  it('e uma string',() => {
    const resposta = magicNumber(3);

    expect(resposta).to.be.a('string')
  });
 
  it('retorna "positivo"', () => {
    const resposta = magicNumber(3);

    expect(resposta).to.be.equals('positivo')
  });
});

describe('Quando o numero for 0', () => {
  it('e uma string',() => {
    const resposta = magicNumber(0);

    expect(resposta).to.be.a('string')
  });
 
  it('retorna "negativo"', () => {
    const resposta = magicNumber(0);

    expect(resposta).to.be.equals('neutro')
  });
});

describe('Quando for passado um parametro que nao e um numero', () => {
  it('retorna erro',() => {
    const resposta = magicNumber('a');

    expect(resposta).to.be.equals('o valor deve ser um número');
  });
});