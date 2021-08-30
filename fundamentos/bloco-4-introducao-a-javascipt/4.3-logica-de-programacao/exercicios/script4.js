let asteriscos = ''
let n = 7
let position = (n + 1) / 2;
let positionLeft = position
let positionRight = position 


for (let i = 0; i < position ; i++) {
    for (let j = 0; j <= n; j++) {
     if(j < positionLeft){
        asteriscos += ' '
    }
    else if(j >=positionLeft && j <= positionRight){
        asteriscos += '*'
    }  
   
}
console.log(asteriscos)
asteriscos ='';
positionLeft --;
positionRight++;
}