function printWithGivenDelimeter(array) {
   let delimeter = array.pop();
   console.log(array.join(delimeter));
}

printWithGivenDelimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']);