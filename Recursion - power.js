// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, expo){
  if (expo === 0) {
      return 1
  } else {
      return base * power(base, expo - 1);
  }
}