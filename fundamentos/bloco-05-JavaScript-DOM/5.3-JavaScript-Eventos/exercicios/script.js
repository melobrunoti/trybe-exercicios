function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDaysOfTheMonth(){
  const daysElement = document.querySelector('#days')
  for (let index = 0; index < dezDaysList.length; index+= 1 ) {
    const days = dezDaysList[index]
    const daysList = document.createElement('li');
   
    if(days === 24 || days === 31){
      daysList.className = 'day holiday'
      daysList.innerHTML = days;
      daysElement.appendChild(daysList)
    }
      else if(days === 4 || days === 11 || days === 18){
      daysList.className = 'friday'
      daysList.innerHTML = days;
      daysElement.appendChild(daysList)
    }
      else if(days === 25){
      daysList.className = 'day friday holiday'
      daysList.innerHTML = days;
      daysElement.appendChild(daysList)
    }
      else {
      daysList.className = 'day'
      daysList.innerHTML = days;
      daysElement.appendChild(daysList)
      }

  }
}


createDaysOfTheMonth();
let buttonID = 'btn-holiday'
let newButton = document.createElement('button')
let buttonContainer = document.querySelector('.buttons-container')
function holidays(button){
  
newButton.innerHTML = button;
newButton.id = buttonID;
buttonContainer.appendChild(newButton)


}
holidays('Feriados!')

function paintHolidays (){
let holidayElements = document.querySelectorAll('.holiday')
let getButton = document.querySelector('#btn-holiday')
let originalColor = 'rgb(238,238,238)'
let newColor = 'red'

getButton.addEventListener('click', function() {
  for (let index = 0; index < holidayElements.length; index++) {
    if(holidayElements[index].style.backgroundColor === newColor){
    holidayElements[index].style.backgroundColor = originalColor;
    } else {
      holidayElements[index].style.backgroundColor = newColor;
    }
  }
})
  
}
paintHolidays();

function isFriday (str){
  let newButton = document.createElement('button');
  let buttonID = 'btn-friday'
  let buttonContainer = document.querySelector('.buttons-container');

  newButton.innerHTML = str;
  newButton.id = buttonID;
  buttonContainer.appendChild(newButton);
}
isFriday('Sexta Feira!')

function sextou(frydays){
  let getFrydays = document.querySelectorAll('.friday')
  let getButton = document.querySelector('#btn-friday')
  let sextouStr = 'SEXTOU!'
 

  getButton.addEventListener('click', function(){
    for (let index = 0; index < getFrydays.length; index+= 1) {
    if (getFrydays[index].innerHTML !== sextouStr){
    getFrydays[index].innerHTML = sextouStr;
    } else {
      getFrydays[index].innerHTML = frydays[index];
    }
      
    }
  })

}
sextou([4,11,18,25])


