const a = 60;
const b = 60;
const c = 60;

let totalAngle = a + b + c;

if (totalAngle == 180){
    console.log(true)
}
else if(totalAngle > 0 && totalAngle < 179){
    console.log(false)
}
else{
    console.log("error")
}
