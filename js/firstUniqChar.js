var firstUniqChar = function(s) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    map.set( s.charAt(i), (map.get(s.charAt(i)) || 0) + 1);
  }
  
  for (let i = 0; i < s.length; i++) {
    if (map.get(s.charAt(i)) === 1)
      return i;
  }
  
  return -1;
};


console.log(firstUniqChar('aeioh'));