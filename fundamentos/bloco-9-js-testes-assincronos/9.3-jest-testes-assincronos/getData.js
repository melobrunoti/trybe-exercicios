// getData.js
const fetch = require('node-fetch');

const getSuperHero = () => {
  const result = fetch('urlinvalida')
    .then((response) => response.json())
    .then((hero) => hero)
    .catch(()=>'erro');
  return result;
};

getSuperHero(); // Wonder Woman

module.exports = getSuperHero;