const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const objs = student => {
  const arrayOfSkills = Object.keys(student)
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`)
      
    }
  }

  objs(student1)

  console.log ( '----------------------------')
  objs(student2)

