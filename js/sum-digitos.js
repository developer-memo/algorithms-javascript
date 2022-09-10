
let addDigits = function(num) {
  let arrInt = 0;
  let arrTemp = JSON.stringify(num).split('');
  arrTemp.forEach( x => {
    arrInt += +x;
  });
  do {
    arrInt = JSON.stringify(arrInt).split('');
    let numTmp = 0;
    arrInt.forEach( y => {
      numTmp += +y;
    });
    
    arrInt = JSON.stringify(numTmp).split('');

 } while(arrInt.length > 1);

return JSON.parse(arrInt)
    
};


console.log(addDigits(2343));