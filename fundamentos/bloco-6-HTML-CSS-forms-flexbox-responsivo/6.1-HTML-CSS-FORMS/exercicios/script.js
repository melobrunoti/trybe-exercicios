let sendButton = document.getElementById('send-button')
let states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];



function send(event){
  event.preventDefault();
  count = 0;
  validateName();
  validateCpf();
  validateEmail();
  validateAdress();
  validateState();
  validateCasaAp();
  validateCity();
  validateAbstractResume();
  validateFunction();
  validateFunctionDescription();
  validateDate();

  if(count === 0){
    alert ('Formulario enviado')
  }
}

sendButton.addEventListener('click', send)

function addStates (){
let selectStates = document.getElementById('state-field')
for (let i = 0; i < states.length; i+= 1) {
 state = document.createElement('option')
 state.value = states[i]
 state.innerHTML = states[i]
 selectStates.appendChild(state)

}
}
window.onload = function (){
  addStates()
}

function validateName(){
  let name = document.querySelector('[name=name]')
  if(name.value.length > 40 || name.value.length === 0){
    alert ('Nome invalido')
    count += 1;
  }
}

function validateCpf(){
  let name = document.querySelector('[name=cpf]')
  if(name.value.length > 11 || name.value.length === 0){
    alert ('Cpf invalido')
    count += 1;
  }
}

function validateEmail(){
  let name = document.querySelector('[name=email]')
  if(name.value.length > 50 || name.value.length === 0){
    alert ('E-mail invalido')
    count += 1;
  }
}

function validateAdress(){
  let name = document.querySelector('[name=adress]')
  if(name.value.length > 200 || name.value.length === 0){
    alert ('Endereco invalido')
    count += 1;
  }
}

function validateCity(){
  let name = document.querySelector('[name=city]')
  if(name.value.length > 28 || name.value.length === 0){
    alert ('Cidade invalida')
    count += 1;
  }
}

function validateState(){
  let name = document.querySelector('[name=state]')
  if(name.value.length === 0){
    alert ('Escolha seu estado!')
    count += 1;
  }
}

function validateCasaAp(){
  let name = document.querySelector('[name=casa-ap]')
  if(name.value.length === 0){
    alert ('Escolha Casa ou Apartamento')
    count += 1;
  }
}

function validateAbstractResume(){
  let name = document.querySelector('[name=abstract-resume]')
  if(name.value.length > 1000 || name.value.length === 0){
    alert ('Resumo invalido!')
    count += 1;
  }
}

function validateFunction(){
  let name = document.querySelector('[name=function]')
  if(name.value.length > 40 || name.value.length === 0){
    alert ('Preencha sua ultima funcao!')
    count += 1;
  }
}

function validateFunctionDescription(){
  let name = document.querySelector('[name=description]')
  if(name.value.length > 500|| name.value.length === 0){
    alert ('Descricao do cargo invalida!')
    count += 1;
  }
}


function validateDate(){
  let name = document.querySelector('[name=initial-date]')
  if(name.value.length === 0){
    count += 1;
    alert( 'A data não foi preenchida!')
  
  }
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

  if(!regex.test(name.value)){
    count += 1;
    return alert ('Data Formato inválido')  
  }

  let divided = name.value.split('/');
  let day = divided[0];
  let month = divided[1];
  let year = divided[2];

  if(day <= 0 || day > 30){
    count += 1;
    return alert ('Dia inválido')  
  }
  if(month <= 0 || month > 12){
    count += 1;
    return alert ('Mês inválido')
  
  }

  if(year <= 0) {
    count += 1;
    return alert ('Ano inválido')
}
}
