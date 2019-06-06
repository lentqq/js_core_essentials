function solve() {
    let input = document.getElementById('input').value;
    let result = document.getElementById('resultOutput');
    let sum = getSum(input);

    function getSum(input) {
        let sum = 0;
        let result = input;

        while (result.length > 1) {
            for (let element of result) {
                sum += Number(element);
            }
            result = sum.toString();
            sum = 0;
        }
        return Number(result);
    }
     let sliccedInput = input.slice(sum, input.length - sum);

     function parsedBinaryToChar(binary) {
         let parsedResult = parseInt(binary,2);
         let char = String.fromCharCode(parsedResult);
         return char;
     }

     let output = sliccedInput
     .split(/([\d]{8})/g)
     .filter(el => el !== '')
     .map(el => parsedBinaryToChar(el))
     .filter(el => /[a-zA-Z ]+/g.test(el))
     .join('');

     result.textContent = output;
}