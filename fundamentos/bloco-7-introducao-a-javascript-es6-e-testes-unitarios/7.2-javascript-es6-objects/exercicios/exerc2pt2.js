
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite'
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};  



const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons)

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */


const totalStudends = (obj) => {
  let result = 0
  const array = Object.keys(obj)
  for (index in array) {
  result += obj[array[index]].numeroEstudantes
   
    }
    return result;
  };

  console.log(totalStudends(allLessons))

  console.table(allLessons)


  const getValueByNumber = (obj, num) => Object.values(obj)[num];

  console.log(getValueByNumber(lesson1,0))

  console.log('----------------------------------------')

const checkKeyValue = (obj,key,value) => {
  let arr = Object.entries(obj)
  let isEqual = false

  for(index in arr){
    if(arr[index][0] === key && arr[index][1] === value){
     isEqual = true
    }
  }
  return isEqual;
}

console.log(checkKeyValue(lesson3, 'turno', 'noite'))
