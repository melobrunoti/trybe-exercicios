let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length;i += 1){
    if(numbers[i] <= 20){
        console.log("Numero = " + numbers[i] + " menor que 20")
    }
    else{
        console.log("Numero = " + numbers[i] + " maior que 20")
    }
}