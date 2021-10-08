const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
  acc + curr.toLocaleLowerCase().split('').reduce((accumulator, current)=>{
    if(current === 'a'){
      return accumulator += 1
    }
    return accumulator
  }, 0), 0)
 }

 
 console.log(containsA())