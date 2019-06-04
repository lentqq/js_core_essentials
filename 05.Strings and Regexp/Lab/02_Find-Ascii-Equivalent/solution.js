function solve() {
  let stringParameter = document.getElementById('text').value;
  let result = document.getElementById('result');
  function findAcsiiEquivalent(text) {

    let data = stringParameter.split(' ').filter(a => a !== '');
    let words = '';
    let numbers = '';

    for (let word of data) {
      if (Number(word)) {
        numbers += String.fromCharCode(word);
      }
      else {
        let charToNum = [];
        for (let i = 0; i < word.length; i++) {
          charToNum.push(word[i].charCodeAt(0))
        }
        // words += [...d].map(ch => ch.charCodeAt(0)).join(' \n',words);
        let p = document.createElement('p');
        p.innerHTML = charToNum.join(' ');
        result.appendChild(p);
      }
    };
    let p = document.createElement('p');
    p.innerHTML = numbers;
    result.appendChild(p);
  }

  findAcsiiEquivalent();
}

solve();