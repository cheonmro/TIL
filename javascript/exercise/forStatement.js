// 1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for(var i = 0; i < 10; i++) {
  if(i % 2 === 0) {
    console.log(i); // 0, 2, 4, 6, 8
  }
}

// console.log()를 사용하면 기본적으로 개행(줄바꿈)이 된다.
// 그래서, console.log(i)를 for문 안에서 실행하면, 출력값 i가 매번 개행이 되어 출력된다.

// 'i'를 사용하는 것은, index를 의미하기 때문이다.
// i < 10;가 일반적, i <= 9보다는 


// #2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
var str = '';
for(var j = 0; j < 10; j++) {
  if(j % 2 === 0) {
    str = str + j;
  }
}
console.log(str); // 02468

// 위와 같이 출력하기 위해서는, console.log()를 한번만 사용해야 한다.

// if문이 한줄일때는, {} 생략가능
// if (i % 2 === 0) console.log(i);


// #3. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for(var k = 9; k >=0; k--) {
  if(k % 2 === 1) {
    console.log(k); // 9, 7, 5, 3, 1
  }
}



// #4. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
var a = 0;
while(a < 10) {
  if(a % 2 === 0) {
    console.log(a); // 0, 2, 4, 6, 8
  }
  a++;
}



// #5. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var b = 9;
while(b >= 0) {
  if(b % 2 === 1) {
    console.log(b); // 9, 7, 5, 3, 1
  }
  b--;
}



// #6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
var sum = 0;
for(var b = 0; b < 10; b++) {
  sum += b;
}
console.log(sum); // 45



// #7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var sumAll = 0;
for(var c = 1; c <= 20; c++) {
  if(!(c % 2 === 0) && !(c % 3 === 0)) {
    sumAll += c;
  }
} 
console.log(sumAll); // 73



// #8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var sumNumber = 0;
for(var d = 1; d <= 20; d++) {
  if((d % 2 === 0) || (d % 3 === 0)) {
    sumNumber += d;
  }
} 
console.log(sumNumber); // 137



// #9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
var howMany = 0;
for(var f = 1; f <= 6; f++) {
  for(var s = 1; s <= 6; s++) {
    if(f + s === 6) {
      howMany += 1;
    }
  }
}
console.log(howMany); // 5



// #10. 삼각형출력하기
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 
// 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관계없다.
// 높이(line)가 5


// my first try

// var star = '*';
// for(var line = 1; line <= 5; line++) {
//   console.log(star + '\n');
//   star += '*';
// }


var star = '';
for(var i = 0; i < 5; i++) {
  for(var j = 0; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);

// *
// **
// ***
// ****
// *****



// #11. 트리 출력하기
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관계없다.
// 높이(line)가 3일때 + 높이(line)가 5일때


// my first try

// var treeStar = '*';
// for(var first = 1; first <= 3; first++) {
//   console.log(treeStar + '\n');
//   treeStar += '*';
// }
// var secondStar = '*';
// for(var second = 1; second <= 5; second++) {
//   console.log(secondStar + '\n');
//   secondStar += '*';
// }


// my second try

var treeStar = '';
for(var i = 0; i < 8; i++) {
  if(i < 3) {
    for(var j = 0; j <= i; j++) {
      treeStar += '*';
    }
    treeStar += '\n';
  } else {
    for(var k = 0; k <= i-3; k++) {
      treeStar += '*';
    }
    treeStar += '\n';
  }
}
console.log(treeStar);


// *
// **
// ***
// *
// **
// ***
// ****
// *****