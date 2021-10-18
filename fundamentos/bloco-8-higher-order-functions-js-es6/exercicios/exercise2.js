const sum = ((...number) =>number.reduce((acc,curr) => acc + curr ))

console.log(sum(1,2,5,10))