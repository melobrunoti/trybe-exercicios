const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const value = Object.entries(países);
console.log(value);


for(index in value) {
  console.log('--------');
  console.log('País:', value[index][0]);
  console.log('Capital:', value[index][1]);
};