function squareOfStars(input) {
    let inputType = typeof (input);
    if (inputType === 'undefined') {
        for (let i = 0; i < 5; i++) {
            console.log('*'.repeat(5));
        }
    }
    else {
        for (let i = 0; i < input; i++) {
            console.log('*'.repeat(input));
        }
    }
}

squareOfStars(7)