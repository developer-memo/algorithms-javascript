

let containsDuplicate = function(nums) {
  const orderArray = [...nums].sort();

  let arrRepeat = [];

  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i + 1] === orderArray[i]) {
      arrRepeat.push(orderArray[i]);
    }
  }

  if (arrRepeat.length > 0) {
    return true;
  } else {
    return false;
  }

};



let arraNums = [7,1,5,9,3,4];
console.log(containsDuplicate(arraNums));