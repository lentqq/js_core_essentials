function sumFirstLast(array) {
  let firstNumber = Number(array.shift());
  let lastNumber = Number(array.pop());
  let sum = firstNumber + lastNumber;
  console.log(sum);
}

sumFirstLast(['5', '10', '2'])