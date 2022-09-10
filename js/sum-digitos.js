
let addDigits = function(num) {
  if(num < 10){
    return num;
  } else {
    const arrayNumbers = num.toString().split('');
    let iterator = 0;
    const newNumber = arrayNumbers.reduce((a,b) => Number(a) + Number(b), iterator );
    return addDigits(newNumber);
  }
    
};

console.log(addDigits(193));