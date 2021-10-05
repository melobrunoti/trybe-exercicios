const person = (fullName) => {
const email = fullName.toLowerCase().split(' ').join('_');
return {fullName , email: `${email}@trybe.com`}
}


const newEmployee = (callback) =>{
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva')
  }
  return employees
}

console.log(newEmployee(person))
