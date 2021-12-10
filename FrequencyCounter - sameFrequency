function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.

  let stringify = (number) => {
     return number.toString()
  }
  console.log(num1, num2);
  let str1 = stringify(num1);
  let str2 = stringify(num2);

  if (str1.length !== str2.length) {
      console.log('returning false')
      return false
  };

  let obj = {};

  for ( let i = 0; i < str1.length; i++) {
    obj[str1[i]] ? obj[str1[i]]++ : obj[str1[i]] = 1;
    console.log('here is the object[str1[i]]: ', obj[str1[i]]);
  }

  console.log('here is the object: ', obj);

  for (let j = 0; j < str2.length; j++) {
    if (obj[str2[j]]) {

        obj[str2[j]]--;

        } else {

            return false;

        };
  }
  return true;
};