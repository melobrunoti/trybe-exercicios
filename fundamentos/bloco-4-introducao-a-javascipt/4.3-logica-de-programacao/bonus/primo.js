let primo = 0;

let n = 7;

for (let i = 1; i < n - 1; i+= 1) {
    if(n % i == 0){
        primo += 1
    }
}

if (primo > 0) {
    console.log(" Numero " + n + ": nao e primo !")
    
} else {
    console.log(" Numero " + n + " : e primo !")
}
