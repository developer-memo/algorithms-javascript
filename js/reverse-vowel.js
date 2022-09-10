var reverseVowels = function(s) {
  const vowels = ['a','A','e','E','i','I','o','O','u','U'];
  let newVowels = [];
  const textConvertArray = s.split('');
  
  textConvertArray.forEach( (letter, index) => {
    newVowels[index] = vowels.find( vowel => letter == vowel );
  })
  newVowels = newVowels.filter( item => item !== undefined ).reverse();
  
  let counter = 0;
  const finalWordReverseVowels = textConvertArray.map( letter => {
    if (newVowels.some( find => find == letter)) {
      const vowel = newVowels[counter];
      counter++;
      return vowel;
    } else {
      return letter;
    }
  });
  
  return finalWordReverseVowels.join('');
  
};



console.log(reverseVowels('Guillermo'));