function evenPosition(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i += 2) {
        resultArray.push(array[i]);
    }
    
    console.log(resultArray.join(' '));
};

evenPosition(['20', '30']);