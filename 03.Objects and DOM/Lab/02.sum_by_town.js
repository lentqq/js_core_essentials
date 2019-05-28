function sumByTown(input) {
    let resultJson = {};

    for (let i = 0; i < input.length; i += 2) {
        if (!resultJson[input[i]]) {
            resultJson[input[i]] = 0;
        }
        resultJson[input[i]] += Number(input[i + 1]);
    }

    console.log(JSON.stringify(resultJson));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])