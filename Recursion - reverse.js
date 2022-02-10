function reverse(str){
  if (str.length <= 1) {
      return str
  } else {
      return str.slice(-1) + reverse(str.slice(0, -1))
  }
// add whatever parameters you deem necessary - good luck!
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'