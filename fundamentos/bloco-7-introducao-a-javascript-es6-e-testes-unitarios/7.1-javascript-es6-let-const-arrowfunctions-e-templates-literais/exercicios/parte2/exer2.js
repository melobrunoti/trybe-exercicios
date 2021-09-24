
const word = words => {

  let wordArray = words.split(' ');
  let count = 0;
  let result = '';

  for ( let i = 0; i < wordArray.length ; i += 1){
    if( count < wordArray[i].length){
      result = wordArray[i]
    }  
  }
  return result;
}


console.log(word('Antonio foi no banheiro e não sabemos o que aconteceu'))

