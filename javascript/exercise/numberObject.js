// 1. Number Constructor



// 2. Number Property

// 2.1 Number.EPSILON

console.log(0.1 + 0.2);
console.log(0.1 +0.2 === 0.3);

function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));



// 2.2 Number.MAX_VALUE

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

var num = 10;
console.log(num.MAX_VALUE); // undefined

console.log(Infinity > Number.MAX_VALUE); // true


// 2.3 Number.MIN_VALUE

console.log(Number.MIN_VALUE); // 5e-324

var num = 10;
console.log(num.MIN_VALUE); // undefined

console.log(Number.MIN_VALUE > 0); // true


// 2.4 Number.POSITIVE_INFINITY

console.log(Number.POSITIVE_INFINITY); // Infinity

var num = 10;
console.log(num.POSITIVE_INFINITY); // undefined


// 2.5 Number.NEGATIVE_INFINITY

console.log(Number.NEGATIVE_INFINITY) // -Infinity

var num = 10;
console.log(num.NEGATIVE_INFINITY); // undefined


// 2.6 Number.NaN

console.log(Number('xyz')); // NaN
console.log(1 * 'string'); // NaN
console.log(typeof NaN); // number



// 3. Number Method


// 3.1 Number.isFinite()

console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite('Hello'));   // false
console.log(Number.isFinite('2005/12/12'));   // false

console.log(Number.isFinite(0));         // true
console.log(Number.isFinite(2e64));     // true
console.log(Number.isFinite(null));      // false. isFinite(null) => true


// 3.2 Number.isInteger()

console.log(Number.isInteger(123));   //true
console.log(Number.isInteger(-123));  //true
console.log(Number.isInteger(5-2));   //true
console.log(Number.isInteger(0));     //true
console.log(Number.isInteger(0.5));   //false
console.log(Number.isInteger('123')); //false
console.log(Number.isInteger(false)); //false
console.log(Number.isInteger(Infinity));  //false
console.log(Number.isInteger(-Infinity)); //false
console.log(Number.isInteger(0 / 0)); //false


// 3.3 Number.isNaN()

console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN(undefined)); // false. undefined->NaN. isNaN(undefined) -> true.
console.log(Number.isNaN({}));        // false. {}->NaN.        isNaN({}) -> true.
console.log(Number.isNaN('blabla'));  // false. 'blabla'->NaN.  isNaN('blabla') -> true.

console.log(Number.isNaN(true));    // false
console.log(Number.isNaN(null));      // false
console.log(Number.isNaN(37));        // false
console.log(Number.isNaN('37'));     // false
console.log(Number.isNaN('37.37'));  // false
console.log(Number.isNaN(''));       // false
console.log(Number.isNaN(' '));      // false
console.log(Number.isNaN(new Date()));             // false
console.log(Number.isNaN(new Date().toString()));  // false. String->NaN. isNaN(String) -> true.


// 3.4 Number.isSafeInteger()

console.log(Number.isSafeInteger(123));   //true
console.log(Number.isSafeInteger(-123));  //true
console.log(Number.isSafeInteger(5-2));   //true
console.log(Number.isSafeInteger(0));     //true
console.log(Number.isSafeInteger(1000000000000000));  // true
console.log(Number.isSafeInteger(10000000000000001)); // false
console.log(Number.isSafeInteger(0.5));   //false
console.log(Number.isSafeInteger('123')); //false
console.log(Number.isSafeInteger(false)); //false
console.log(Number.isSafeInteger(Infinity));  //false
console.log(Number.isSafeInteger(-Infinity)); //false
console.log(Number.isSafeInteger(0 / 0)); //false


// 3.5 Number.prototype.toExponential()

var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
// console.log(77.toExponential());      // SyntaxError: Invalid or unexpected token
console.log(77 .toExponential());     // logs 7.7e+1


// 3.6 Number.prototype.toFixed()

var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed());   // '12346'
// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj.toFixed(1));  // '12345.7'
// 소숫점 이하 2자리수 유효, 나머지 반올림
console.log(numObj.toFixed(2));  // '12345.68'
// 소숫점 이하 3자리수 유효, 나머지 반올림
console.log(numObj.toFixed(3));  // '12345.679'
// 소숫점 이하 6자리수 유효, 나머지 반올림
console.log(numObj.toFixed(6));  // '12345.678900'


// 3.7 Number.prototype.toPrecision()

var numObj = 15345.6789;

// 전체자리수 유효
console.log(numObj.toPrecision());   // '15345.6789'
// 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));  // '2e+4'
// 전체 2자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(2));  // '1.5e+4'
// 전체 3자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(3));  // '1.53e+4'
// 전체 6자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(6));  // '12345.7'


// 3.8 Number.prototype.toString()

var count = 10;
console.log(count.toString());   // '10'
console.log((17).toString());    // '17'
console.log(17 .toString());     // '17'
console.log((17.2).toString());  // '17.2'

var x = 16;
console.log(x.toString(2));       // '10000'
console.log(x.toString(8));       // '20'
console.log(x.toString(16));      // '10'

console.log((254).toString(16));  // 'fe'
console.log((-10).toString(2));   // '-1010'
console.log((-0xff).toString(2)); // '-11111111'


// 3.9 Number.prototype.valueOf()

var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number