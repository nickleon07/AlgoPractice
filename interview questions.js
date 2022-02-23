let myString = 'Hello World';

const changeString = str => {
  str = 'Goodbye World';
};

changeString(myString);

console.log(myString); // What is the value of myString?

// *****************************************************

const myArray = [1, 2, 3];

const changeArray = arr => {
  arr[0] = 'Foo';
  arr.push('Bar');
};

changeArray(myArray);

console.log(myArray); // What is the value of myArray?

// *****************************************************

const myObject = {
  key1: 'Foo',
  key2: 'Bar',
};

const changeObject = obj => {
  let { key2 } = obj;
  obj.key1 = 'Bar';
  key2 = 'Baz';
};

changeObject(myObject);

console.log(myObject); // What is the value of myObject?