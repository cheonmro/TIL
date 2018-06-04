// 1. String Constructor

var strObj = new String('Lee');
console.log(strObj); // String {0: 'L', 1: 'e', 2: 'e', length: 3, [[PrimitiveValue]]: 'Lee'}

var strObj = new String(1);
console.log(strObj); // String {0: '1', length: 1, [[PrimitiveValue]]: '1'}

var strObj = new String(undefined);
console.log(strObj); // String {0: 'u', 1: 'n', 2: 'd', 3: 'e', 4: 'f', 5: 'i', 6: 'n', 7: 'e', 8: 'd', length: 9, [[PrimitiveValue]]: 'undefined'}


// 2. String Property


// 2.1 String.length

var str = 'Hello';
console.log(str.length); // 5

str = '안녕하세요';
console.log(str.length); // 5


// 3. String Method


// 3.1 String.prototype.charAt()

var str = 'Hello';

console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o
// 지정한 index가 범위(0 ~ str.length-1)를 벗어난 경우 빈문자열을 반환한다.
console.log(str.charAt(5)); // ''

for (var i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

// 3.2 String.prototype.indexOf()

var str = 'Hello World';

console.log(str.indexOf('l'));  // 2
console.log(str.indexOf('or')); // 7
console.log(str.indexOf('or' , 8)); // -1

// 3.3 String.prototype.lastIndexOf()

var str = 'Hello World';

console.log(str.lastIndexOf('World')); // 6
console.log(str.lastIndexOf('l'));     // 9
console.log(str.lastIndexOf('o', 5));  // 4
console.log(str.lastIndexOf('o', 8));  // 7
console.log(str.lastIndexOf('l', 10)); // 9

console.log(str.lastIndexOf('H', 0));  // 0
console.log(str.lastIndexOf('W', 5));  // -1
console.log(str.lastIndexOf('x', 8));  // -1


// 3.4 String.prototype.replace()

var str = 'Hello Hello';

var replacedStr = str.replace('Hello', 'Lee');

// 결과가 반영된 새로운 문자열을 반환한다.
console.log(replacedStr); // Lee Hello
// 원본 문자열은 변경되지 않는다.
console.log(str);         // Hello Hello

replacedStr = str.replace(/hello/gi, 'Lee');
/* 정규표현식
i(Ignore Case): 대소문자를 구별하지 않고 검색한다.
g(Global): 문자열 내의 모든 패턴을 검색한다.
*/

console.log(replacedStr); // Lee Lee
console.log(str);         // Hello Hello


// 3.5 String.prototype.split()

var str = 'How are you doing?';

// 공백으로 구분하여 배열로 반환한다
var splitStr = str.split(' ');
console.log(splitStr); // [ 'How', 'are', 'you', 'doing?' ]
// 원본 문자열은 변경되지 않는다
console.log(str); // How are you doing?

// 인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
splitStr = str.split();
console.log(splitStr); // [ 'How are you doing?' ]

// 각 문자를 모두 분리한다
splitStr = str.split('');
console.log(splitStr); // [ 'H','o','w',' ','a','r','e',' ','y','o','u',' ','d','o','i','n','g','?' ]

// 공백으로 구분하여 배열로 반환한다. 단 요소수는 3개까지만 허용한다
splitStr = str.split(' ', 3);
console.log(splitStr); // [ 'How', 'are', 'you' ]

// 'o'으로 구분하여 배열로 반환한다.
splitStr = str.split('o');
console.log(splitStr); // [ 'H', 'w are y', 'u d', 'ing?' ]


// 3.6 String.prototype.substring()

var str = 'Hello World'; // str.length == 11

var res = str.substring(1, 4);
console.log(res); // ell

// 첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
res = str.substring(4, 1);
console.log(res); // ell

// 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
res = str.substring(4);
console.log(res); // o World

// 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
res = str.substring(-2);
console.log(res); // Hello World

// 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.
res = str.substring(1, 12);
console.log(res); // ello World

res = str.substring(11);
console.log(res); // ''

res = str.substring(20);
console.log(res); // ''

res = str.substring(0, str.indexOf(' '));
console.log(res); // 'Hello'

res = str.substring(str.indexOf(' ') + 1, str.length);
console.log(res); // 'World'


// 3.7 String.prototype.toLowerCase()

var str = 'Hello World!';

var res = str.toLowerCase();
console.log(res); // hello world!


// 3.8 String.prototype.toUpperCase()

var str = 'Hello World!';

var res = str.toUpperCase();
console.log(res); // HELLO WORLD!


// 3.9 String.prototype.trim()

var str = '   foo  ';
var trimmedStr = str.trim();
console.log(trimmedStr); // foo
console.log(str); //    foo  