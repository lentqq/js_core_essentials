function giants(array, sizeCut) {
    let firstPart = array.slice(0, array.length / 2);
    let secondPart = array.slice(array.length / 2);
    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while(firstPart.length > 0 && secondPart.length > 0) {
        firstGiantLife += firstPart.splice(0, sizeCut).reduce((a, b) => a * b);
        secondGiantLife += secondPart.splice(0, sizeCut).reduce((a, b) => a * b);
    }

    let demage = Math.min(...array);
    let stopFigthNumber = Math.max(...array);
    let roundsCounter = 1;

    while(firstGiantLife > stopFigthNumber && secondGiantLife > stopFigthNumber) {
        firstGiantLife = firstGiantLife - demage;
        secondGiantLife = secondGiantLife - demage;
        roundsCounter ++;
    }

    if(firstGiantLife === secondGiantLife) {
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
    }
    else {
        if(firstGiantLife > secondGiantLife) {
            console.log(`First Giant defeated Second Giant with result ${Math.max(firstGiantLife, secondGiantLife)} - ${Math.min(firstGiantLife, secondGiantLife)} in ${roundsCounter} rounds`);
        }
        else {
            console.log(`Second Giant defeated First Giant with result ${Math.max(firstGiantLife, secondGiantLife)} - ${Math.min(firstGiantLife, secondGiantLife)} in ${roundsCounter} rounds`);
        }
    }  
}

giants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
