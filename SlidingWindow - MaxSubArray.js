function maxSubarraySum(arr, size){
  // add whatever parameters you deem necessary - good luck!
  if (size > arr.length || arr.length === 0) {
      return null;
  }

  let sub = arr[0];
  let firstIndex = 0;
  let lastIndex = size - 1;
  let max;

  // summing initial value for sub array
  if (size > 1) {
    for (let i = 1; i < size; i ++) {
      sub += arr[i]
    }
  }

  max = sub;

  for (let j = 1; j <= arr.length - size; j++) {

      sub = (sub - arr[firstIndex] + arr[lastIndex + 1]);
      if (sub > max) {
          max = sub;
      };
      firstIndex++;
      lastIndex++;
  }
  return max;
}