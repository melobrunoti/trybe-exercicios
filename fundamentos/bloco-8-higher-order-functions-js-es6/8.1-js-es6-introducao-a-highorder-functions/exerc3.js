const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (correctAnswers, studentAnswers,func) =>{
  let grade = 0
for (let index = 0; index < RIGHT_ANSWERS.length; index++) {
  const actionReturn = func(correctAnswers[index], studentAnswers[index]);
  grade += actionReturn;
  }

  return grade
}


console.log(corrector(RIGHT_ANSWERS,STUDENT_ANSWERS, (rAnswers,sAnswers) =>{
  if(rAnswers === sAnswers){
    return 1
  }

  if (sAnswers === 'N.A'){
    return 0
  }

  return -0.5

}))