// #10. Check Palindrom
// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 
// 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 
// 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 
// 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {
  var revStr = str.split('').reverse().join(''); // mordnilap
  var sameChar = 0;
  var len = str.length;
  for(var i = 0; i < len; i++) {
    if(str[i] === revStr[i]) {
      sameChar += 1;
    }
  }
  return sameChar === len;

}
console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true