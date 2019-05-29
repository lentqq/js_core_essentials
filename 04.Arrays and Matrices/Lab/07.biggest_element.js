function biggestElement(array) {
let resultArray = [];
for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
        resultArray.push(array[row][col]);
    }
}
resultArray.sort((a,b) => {
    return a -b;
});

console.log(resultArray.pop());
};

biggestElement([[3, 5, 7, 12],
               [-1, 4, 33, 2],
               [8, 3, 0, 4]]);