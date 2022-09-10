let esPalindromo = function(x) {
  let splitWord;
  if(!isNaN(x)) {
    splitWord = Array.from(String(x),Number);
  } else {
    splitWord = x.split("");
  }
  let invertWord = splitWord.reverse();
  let joinWord = invertWord.join("");

  if ( x == joinWord ) {
    return true;
  } else {
    return false;
  }
};




console.log(esPalindromo(434));