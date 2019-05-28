function sameNumber(num) {
    num = num.toString();
    let isSame = true;
    let firstNumber = num[0];
    let sum = Number(firstNumber);

    for (let i = 1; i <= num.length - 1; i++) {
        sum += Number(num[i]);

        if(firstNumber !== num[i]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumber(2222222)