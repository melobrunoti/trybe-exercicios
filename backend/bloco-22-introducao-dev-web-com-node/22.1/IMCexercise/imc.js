const calc = (peso, altura) => {
  const conversor = altura / 100
  return Math.round(peso / Math.pow(conversor, 2))
}

module.exports = calc;