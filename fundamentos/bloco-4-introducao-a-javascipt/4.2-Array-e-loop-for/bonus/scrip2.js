let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] > array[j]) {
        let position = array[i];
        array[i] = array[j];
        array[j] = position;
      }
    }
  }

console.log(array)