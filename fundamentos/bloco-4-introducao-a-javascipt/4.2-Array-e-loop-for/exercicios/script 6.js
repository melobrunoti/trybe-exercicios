let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let i = 0; i < numbers.length;i += 1){
  if(numbers[i] % 2 != 0){
    impar++
  }
}
 if(impar > 0){
     console.log("Numeros impares no array = " + impar);
 }
 else{
     console.log("Nenhum valor impar encontrado")
 }