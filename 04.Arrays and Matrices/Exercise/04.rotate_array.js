function rotateArray(array) {
let numberRotations = Number(array.pop());

for (let i = 0; i < numberRotations.length % numberRotations; i++) {
    let lastElement = array.pop();
    let firstElement = array.unshift(lastElement);
}

console.log(array.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'200000']);