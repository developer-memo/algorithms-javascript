let moveZeroes = function(nums) {
  let countOfZeros = 0; 
  const newArray = []; 
    
  for (const item of nums) { 
    if (item === 0) {
      countOfZeros++;
    }  
    else {
      newArray.push(item); 
    }
  };

  for (let i = 0; i < countOfZeros; i++) { 
    newArray.push(0); 
  } 
  
  return newArray; 

};



console.log(moveZeroes([9,3,0,0,4,0,5,6,9,0,7]));