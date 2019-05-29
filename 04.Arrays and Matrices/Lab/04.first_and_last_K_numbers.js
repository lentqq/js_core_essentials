function firstAndLastNumbers(array) {
    let counterElements = array.shift();
    let firstLine = array.slice(0, counterElements);
    let lastLine = array.slice(array.length - counterElements);
    console.log(firstLine.join(' '));
    console.log(lastLine.join(' '));
};

firstAndLastNumbers([3, 6, 7, 8, 9]);