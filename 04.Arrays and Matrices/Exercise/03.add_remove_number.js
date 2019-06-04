function addOrRemove(array) {
    let arrResult = [];
    let startNumber = 1;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === 'add') {
            arrResult.push(startNumber);
        }
        else {
            arrResult.pop();
        }
        startNumber++;
    }

    if (arrResult.length > 0) {
        console.log(arrResult.join('\n'));
    }
    else {
        console.log('Empty');
    }
}

addOrRemove(['add',
    'add',
    'remove',
    'add',
    'add']);