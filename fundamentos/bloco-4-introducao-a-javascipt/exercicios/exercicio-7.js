let percentage = 30;

if (percentage >= 90 && percentage <= 100){
    console.log("A")
}
else if(percentage >= 80 && percentage <= 89){
    console.log("B")
}
else if(percentage >=70 && percentage <= 79){
    console.log("C")
}
else if (percentage >=60 && percentage <= 69){
    console.log("D")
}
else if (percentage > 0 && percentage <= 59){
    console.log("F")
}
else{
    console.log("error")
}