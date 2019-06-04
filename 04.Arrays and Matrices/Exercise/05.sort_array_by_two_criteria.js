function sortArray(array) {
    array.sort((a, b) => {
        return a.length - b.length || a.localCompare(b);
    });

    for (const element of array) {
        console.log(element);
    }
}

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);