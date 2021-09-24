/* function testingScope(escopo) { */
  /* if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  } */


var testscope = escopo => (escopo === true) ? console.log(' ótimo, fui utilizada no escopo (if) !') : console.log('Não devo ser utilizada fora meu escopo (else)');


testscope(true)