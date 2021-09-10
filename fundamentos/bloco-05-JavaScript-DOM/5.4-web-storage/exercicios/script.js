window.onload = function(){
  
let select = document.querySelector('select');

select.addEventListener('change', function(){
  let selected = select.selectedOptions[0];
  document.body.style.backgroundColor = selected.value
  })

let selectTextColor = document.querySelectorAll('select')[1]
  selectTextColor.addEventListener('change', function(){
    let selected = selectTextColor.selectedOptions[0];
    document.body.style.color = selected.value
    })

  let selectTextSize = document.querySelectorAll('select')[2]
  selectTextSize.addEventListener('change', function(){
    let selected = selectTextSize.selectedOptions[0];
    document.body.style.fontSize = selected.value
    })
  let selectTextSpace = document.querySelectorAll('select')[3]
  selectTextSpace.addEventListener('change', function(){
    let selected = selectTextSpace.selectedOptions[0];
    document.body.style.lineHeight = selected.value
    })

  let selectFont = document.querySelectorAll('select')[4]
  selectFont.addEventListener('change', function(){
    let selected = selectFont.selectedOptions[0];
    document.body.style.fontFamily = selected.value
    })
  }
