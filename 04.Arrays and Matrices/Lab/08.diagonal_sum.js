function diagonalSum(array) {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0
   for (let row = 0; row < array.length; row++) {
     sumFirstDiagonal += array[row][row];
     sumSecondDiagonal += array[row][array.length - row - 1];
   }
   console.log(sumFirstDiagonal);
   console.log(sumSecondDiagonal);
}

diagonalSum([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]);