const validAnagram = (str1, str2) => {
  let obj1 = {};
  let obj2 = {};

  if (str1.length !== str2.length) {
      return false;
  };

  for (let i = 0; i < str1.length; i++){
    if (!obj1[str1[i]]) {
        obj1[str1[i]] = 1;
    } else {
        obj1[str1[i]]++;
    };
  };

    for (let j = 0; j < str2.length; j++){
    if (!obj2[str2[j]]) {
        obj2[str2[j]] = 1;
    } else {
        obj2[str2[j]]++;
    };
  };

    for ( const key in obj1) {
        console.log(obj1[key], obj2[key]);
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    console.log (obj1, obj2);
    return true;

};