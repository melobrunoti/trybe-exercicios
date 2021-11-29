const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (str) => str.toUpperCase()

const firstLetter = (str) => (str.split('')[0])

const concat = (firstStr, secondStr) => (`${firstStr} ${secondStr}`)

function fetchDog(){
  let url = 'https://dog.ceo/api/breeds/image/random'

  return fetch(url)
  .then(response => response
      .json()
      .then(json =>
    response.ok ? Promise.resolve(json) : Promise.reject(json)
    )
  )
}


module.exports = { randomNumber, upperCase, firstLetter, concat, fetchDog }

