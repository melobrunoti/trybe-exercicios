
const waterCups = (str) => {
result = 0
for (let index = 0; index < str.length; index++) {
  let parsedChar = parseInt(str[index])
if (!isNaN(parsedChar)){
   result += parsedChar
  }
}
let copos = 'copo'
  if (result > 1){
    copos = 'copos'
  }


  return `${result} ${copos} de água`
}

module.exports = waterCups