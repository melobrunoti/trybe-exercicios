import './node_modules/just-validate/dist/js/just-validate.js'

let sendButton = document.getElementById('send-button')

let test = document.getElementById('myForm')

let states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

document.getElementById('initial-date-field').DatePickerX.init();




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

window.onload = function(){
  new window.JustValidate('#myForm',{
    rules: {
      cpf: {
        required: true,
        maxLength: 11, 
        minLength: 11
      },
      adress: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true,
      },
      casaAp: {
        required: true,
      },
      abstractResume: {
        required: true,
        maxLength: 1000
      },
      function: {
        required: true,
        maxLength: 40
      },
      description: {
        required: true,
        maxLength: 400
      },
      dateInit: {
        required: true
      },
    }
  })
}