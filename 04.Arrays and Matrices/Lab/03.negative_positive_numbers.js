function negativePositiveNumbers(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            resultArray.unshift(array[i]);
        }
        else {
            resultArray.push(array[i]);
        }
    }
    for (const number of resultArray) {
        console.log(number);
    }

}

negativePositiveNumbers([7, -2, 8, 9])