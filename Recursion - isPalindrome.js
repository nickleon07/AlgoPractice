// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if (str.length <= 1) {
        return true;
    } else {
        if (str[0] !== str[str.length - 1]) {
            return false
        } else {
            return isPalindrome(str.substring(1, str.length - 1));
        }
    }
  // add whatever parameters you deem necessary - good luck!
}