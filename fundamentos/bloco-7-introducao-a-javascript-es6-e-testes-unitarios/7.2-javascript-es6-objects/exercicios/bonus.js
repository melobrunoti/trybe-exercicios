
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


/* Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: */

/* const matStudents = (obj) => {
  let result = 0
  const array = Object.keys(obj)
  const mat = Object.values(obj)
  for (index in array) {
  if(mat[index].materia === 'Matemática'){
  result += obj[array[index]].numeroEstudantes
}
 
    }
    return result;
  };

console.log(matStudents(allLessons)) */

const professorsClasses = (obj, prof) => {
  const allClass = [];
  let students = 0;
  const array = Object.values(obj)
   for(index in array){
    if(array[index].professor === prof){
    students += array[index].numeroEstudantes
    allClass.push(array[index].materia)
   }
  }
   return { lessons: allClass, estudantes: students}
}

createReport = (obj, prof) => {
  const report = {}
  report.professor= prof;
  Object.assign(report, professorsClasses(obj, prof));
  return report
}

console.log(createReport(allLessons, 'Maria Clara'))