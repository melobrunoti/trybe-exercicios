 const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
/* 
let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);  */

function newObj (obj,key,value){
  let newKey = key;
  obj[newKey] = value
  
  console.log(obj)
}

newObj(customer,'lastname','Geraldo')


