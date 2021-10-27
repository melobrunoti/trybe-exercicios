

const api_url = `https://api.coincap.io/v2/assets`

fetchTest = async () => {
const coins = await fetch(api_url)
  .then((response) => response.json())
      .then((data) => data.data)
        .catch((error)=> error);

    return coins
}

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const fetchUsdCurrencies = await fetch(url)
    .then((response) => response.json())
      .then((data)=> data.usd)
        .catch((error)=>error)

  return fetchUsdCurrencies
};


const setCoins = async () => {

  const coins = await fetchTest();
  const usCurrencies = await fetchUsdCurrencies();
  
  coins.filter((coin)=> coin.rank <=10)
  .forEach((coin)=> {

    const newLi = document.createElement('li')
    const coinList = document.getElementById('list')
    const price = Number(coin.priceUsd)
    const brlPrice = price * usCurrencies.brl

    newLi.innerText = `${coin.name} ${coin.symbol} R$: ${brlPrice.toFixed(2)}`

    coinList.appendChild(newLi)
  });

}


window.onload = () => setCoins(), fetchUsdCurrencies()