const lotteryResult = () => {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}

const bet = (number, callback) =>{
  const luckynumber = callback()
if (number === luckynumber){
  return `LUCLY NUMBER : ${luckynumber} -- Congratulations you WON !!!`
} else {
  return `LUCKY NUMBER : ${luckynumber} -- You lost , try again`
}
}

console.log(bet(5, lotteryResult))