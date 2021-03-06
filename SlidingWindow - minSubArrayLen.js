const minSubArrayLen = (arr, int) => {

  let first = 0; // keeps track of current starting point
  let total = arr[0];
  let last = 0;

  while (total < int) { //first subarray greater than or equal to toal
    last++;
    total += arr[last];
    if (total < int && last === arr.length - 1) {
      return 0;
    }
  }

  let min = last + 1;
  total -= arr[first];
  first++;

  while (last <= arr.length - 1 && first <= arr.length - 1) {

      if ( total >= int) {
          min--;
          total -= arr[first];
          first++;
      } else if (total < int) {
          total -= arr[first];
          first++;
          last++;
          total += arr[last];
      }
    }
    return min;
  }

