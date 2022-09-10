let mergel2Lists = function(list1, list2) {

  const mergeList = [...list1, ...list2];
  mergeList.sort(function(a, b){return a - b});

  return mergeList;


  // let newNode = {
  //   val: 0,
  //   next: null,
  // };
  // let previous = newNode;
  
  // while (list1 && list2) {
  //   if (list1.val >= list2.val) {
  //     previous.next = list2;
  //     list2 = list2.next;
  //   } else {
  //     previous.next = list1;
  //     list1 = list1.next;
  //   }
  //   previous = previous.next;
  // }
  
  // if (list1) previous.next = list1;
  // if (list2) previous.next = list2;
  
  // return newNode.next;
};




console.log( mergel2Lists([0,8,2,5,4], [6,1,7,3,9,2]) );