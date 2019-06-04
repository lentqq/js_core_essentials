function solve() {
  let text = document.getElementById('text').value;
  let conventionType = document.getElementById('naming-convention').value;

  function pascalOrCamelCase(text, conventionType) {
    let words = text.toLowerCase().split(' ').filter(a => a !== '');
    let output = '';
    if (conventionType === 'Pascal Case' || conventionType === 'Camel Case') {
      for (let word of words) {
        output += word[0].toUpperCase() + word.substr(1);
      }
    }
    // else if (conventionType === 'Camel Case') {
    //   for (let word of words) {
    //     output += word + word[0].toUpperCase() + word.substr(1);
    //   }
    //}
    else {
      output = 'Error!';
    }
    if (conventionType === 'Camel Case') {
      output = output[0].toLowerCase() + output.substr(1);
    }
    document.getElementById('result').innerHTML = output;
  }

  pascalOrCamelCase(text, conventionType);
}

solve();