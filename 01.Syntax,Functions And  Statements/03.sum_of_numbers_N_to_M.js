function sumOfNumbers(stringNumber1, stringNumber2) {
    let num1 = Number(stringNumber1);
    let num2 = Number(stringNumber2);
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNumbers('-8', '20')