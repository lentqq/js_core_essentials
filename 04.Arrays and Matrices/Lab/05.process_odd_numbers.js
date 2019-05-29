function processOddNumbers(array) {
let  resultArray = [];
 
for (let i = 1; i < array.length; i+= 2) {
    resultArray.push(array[i] * 2);
}
resultArray.reverse();
console.log(resultArray.join(' '));
};

processOddNumbers([3, 0, 10, 4, 7, 3]);