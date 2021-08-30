let asteriscos = ''
let n = 7
let position = (n + 1) / 2;
let positionLeft = position
let positionRight = position
let lastPosition = ''

for ( let i = 0; i < n ;i++){
    lastPosition+= '*'
}

for (let i = 0; i < position ; i++) {
    for (let j = 1; j < n; j++) {
     if(i == 0 && j == position){
        asteriscos += '*';
    }
    else if(j == positionLeft || j == positionRight){
        asteriscos += '*';
    }
    else if(j == positionLeft || j == positionRight){
        asteriscos += '*';
    }
    else{
        asteriscos += ' ';
    }
   
}
if (i == position - 1) {
    console.log(lastPosition)
} else {
    console.log(asteriscos)
    asteriscos ='';
    positionLeft --;
    positionRight++;
    
}
}

