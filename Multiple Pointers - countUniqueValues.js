function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) {
      return 0;
  };
  let lastUnique = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== lastUnique) {
          count++;
          lastUnique = arr[i];
      }
  }
  return count;
}