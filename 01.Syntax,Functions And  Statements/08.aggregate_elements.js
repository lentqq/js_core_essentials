function aggregateElements(array) {
    let sum = 0;
    let inverseValueSum = 0;

    for (let i = 0; i < array.length; i++) {
     sum += array[i];
     inverseValueSum += 1 / array[i];
    }

    console.log(sum);
    console.log(inverseValueSum);
    console.log(array.join(''));
}

aggregateElements([1, 2, 3])