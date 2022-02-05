const minSubArrayLen = (arr, int) => {

  let first = 0; // keeps track of current starting point
  let total = 0;
  let last = 0;

  while (total < int) { //first subarray greater than or equal to toal
      total += arr[last];
      last++;
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
          total += arr[last];
          last++;
      }
    }
    return min;
  }

