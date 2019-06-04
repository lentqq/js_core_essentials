function printNthElement(array) {
    let step = Number(array.pop());

    for (let i = 0; i < array.length; i += step) {
        console.log(array[i]);
    }
}

printNthElement(['dsa',
'asd', 
'test', 
'tset', 
'2']
);