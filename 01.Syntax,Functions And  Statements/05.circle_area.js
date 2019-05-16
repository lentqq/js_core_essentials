function calculateArea(input) {
    let result;
    let inputType = typeof (input);
    if(inputType === 'number') {
        result = (Math.pow(input,2) * Math.PI).toFixed(2);
    }
    else {
        console.log('We can not calculate the circle area, because we receive a string.');
    }
    console.log(result);
}

calculateArea('name')