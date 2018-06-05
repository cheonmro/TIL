// 6. 핸드폰번호 가리기

// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 '*'으로 바꿔야 한다.
// 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라.


function hideNumbers(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(i < str.length - 4) {
      result += '*';
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(hideNumbers('01033334444')) // *******4444


// using substring

function hideNumbers(str) {
  var len = str.length - 4;
  var star = '';

  for(var i = 0; i < len; i++) {
    star += '*';
  }

  var last4 = str.substring(len);
  return star + last4;

  // ES6
  // var len = str.length - 4;
  // return '*'.repeat(len) + str.substring(len);
}

console.log(hideNumbers('01033334444')) // 

