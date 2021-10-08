const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá


const [hello,sayHello] = saudacoes

console.log(sayHello(hello)); 