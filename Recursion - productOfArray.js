// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

let productOfArray = (arr) => {
  if (arr.length === 0) {
      return 1;
  } else {
      return arr.pop() * productOfArray(arr);
  }
}