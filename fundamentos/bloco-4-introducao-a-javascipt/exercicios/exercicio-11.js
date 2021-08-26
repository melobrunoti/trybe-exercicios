let salarioBruto= 3000.00;
let base;
let total;

if(salarioBruto <= 1556.94){
    base = salarioBruto - (salarioBruto* 0.08);
}
else if(salarioBruto >= 1556,95 && salarioBruto <= 2594.92 ){
    base = salarioBruto - (salarioBruto * 0.09);
}
else if(salarioBruto >= 2594.93 && salarioBruto <=5189.82){
    base = salarioBruto - (salarioBruto* 0.11);
}
else if(salarioBruto > 5189.82){
    base = salarioBruto - 570.88;
}

console.log("Salario Base = " + base);

if (base <= 1903.98){
    total = base;
}
else if (base >= 1903.99 && base <= 2826,66){
    total = base - ((base * 0.075) - 142.80);
}
else if (base >= 2826.66 && base <= 3751.05){
    total = base - ((base * 0.15) - 354.80);
}
else if (base >= 3751.06 && base <= 4664.68){
    total = base - ((base * 0.225) - 636.13);
}
else if (base >= 4664.68){
    total = base - ((base * 0.275) - 869.36);
}

console.log("Salario Total = " + total);