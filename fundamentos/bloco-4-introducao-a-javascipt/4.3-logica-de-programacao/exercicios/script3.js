let asteriscos = ''
let n = 5
let position = n;


for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j < position) {
          asteriscos+= ' '
      } else {
          asteriscos+= '*'
      }
    }
    console.log(asteriscos);
    asteriscos = ''
    position--
}
