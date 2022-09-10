let moveZeroes = function(nums) {
  
  let countOfZeros = 0;
  for(let i=0; i< nums.length;) {
    if(nums[i] === 0) {
        nums.splice(i,1);
        countOfZeros++;
    } else {
        i++;
    }
  }
  newArrayNumber = nums.splice(nums.length, 0, ...new Array(countOfZeros).fill(0));
  return newArrayNumber;
};



console.log(moveZeroes([9,3,0,0,4,0,5,6,9,0,7]));