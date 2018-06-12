# Javascript Number

기본자료형 number를 위한 레퍼객체(Number 객체)

자바스크립트는 기본자료형을 객체처럼 사용하려할때, 그 기본자료형을 객체로 만들어, 객체처럼 동작한다.
이때 필요한 것이 생성자 함수이다. 기본자료형이 number이면, Number 객체로 만든다.

변수 또는 객체 프로퍼티가 문자열을 값으로 가지고 있다면, Number 객체의 별도 생성없이 Number 객체의 프로퍼티와 메소드를 사용할 수 있다. 이때, 기본자료형 number가 Number 객체의 프로퍼티와 메소드를 호출할 때(사용할 때), 기본자료형 number가 그 기본자료형과 연관된 레퍼객체(Number 객체)로 일시적으로 변환되어, 프로토타입 객체를 공유하게 되기 때문이다. 즉, 프로토타입 객체의 프로퍼티와 메소드를 사용할 수 있게 된다.

```
var num = 1.5;
console.log(num.toFixed()); // 2
```

위와 같이, 기본자료형 문자열을 담고 있는 변수 num이 Number 객체의 메소드를 호출하게 되면, num이 연관된 레퍼객체인 Number 객체로 일시적으로 변환되어, 프로토타입 객체가 가지고 있는 메소드인 'toFixed()'를 사용할 수 있게 된다. 즉, 변수 num은 Number.prototype.toFixed()를 호출하는 것이다. 


<br>

## 1. Number Constructor(생성자함수)

Number 객체는 Number() 생성자 함수를 통해 생성할 수 있다.

```
new Number(value);
```

만일 인자가 숫자로 변환될 수 없다면 NaN을 반환한다.

```
var x = new Number(123);
var y = new Number('123');
var z = new Number('str');

console.log(x); // 123
console.log(y); // 123
console.log(z); // NaN
```


위의 예제들과 같이, Number 객체를 생성하기 위해서는 Number 생성자 함수 앞에 'new' 연산자를 사용해야 한다.
만약, new 연산자를 사용하지 않고 Number() 생성자 함수를 호출하게 되면, 숫자를 반환한다. 이때, 형 변환이 발생할 수 있다.


```
var x = Number('123');

console.log(typeof x, x); // number 123
```

일반적으로 숫자를 사용할 때는 기본자료형의 number를 사용한다.


```
var x = 123;
var y = new Number(123);

console.log(x == y);  // true
console.log(x === y); // false

console.log(typeof x); // number
console.log(typeof y); // object
```

<br>

## 2. Number Property

### 2.1 Number.EPSILON

숫자 사이의 거리

1.01 다음의 숫자(1.000000001..... 이 될 수 있다) 사이의 차이

컴퓨터에서 소수점은 무한 소수다. 그래서 컴퓨터에서 계산이 안된다.

Number.EPSILON은 JavaScript에서 표현할 수 있는 가장 작은 수이다. 
이는 임의의 수와 그 수보다 큰 수 중 가장 작은 수와의 차이와 같다. 
Number.EPSILON은 약 2.2204460492503130808472633361816E-16 또는 2-52이다.

부동소수점 산술 연산 비교는 정확한 값을 기대하기 어렵다. 정수는 2진법으로 오차없이 저장이 가능하지만 부동소수점을 표현하는 가장 널리 쓰이는 표준인 IEEE 754은 2진법으로 변환시 무한소수가 되어 미세한 오차가 발생할 수밖에 없는 구조적 한계를 갖는다.

따라서 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 기능을 갖는 함수를 작성하여야 한다.

```
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false!!!

function isEqual(a, b){
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
```

<br>

### 2.2 Number.MAX_VALUE

자바스크립트에서 사용 가능한 가장 큰 숫자(1.7976931348623157e+308)를 반환한다. MAX_VALUE보다 큰 숫자는 Infinity이다.

```
Number.MAX_VALUE; // 1.7976931348623157e+308

var num = 10;
num.MAX_VALUE;    // undefined

console.log(Infinity > Number.MAX_VALUE); // true
```

<br>

### 2.3 Number.MIN_VALUE

자바스크립트에서 사용 가능한 가장 작은 숫자(5e-324)를 반환한다. MIN_VALUE는 0에 가장 가까운 양수 값이다. MIN_VALUE보다 작은 숫자는 0으로 변환된다.

```
Number.MIN_VALUE; // 5e-324

var num = 10;
num.MIN_VALUE;    // undefined

console.log(Number.MIN_VALUE > 0); // true
```

<br>

### 2.4 Number.POSITIVE_INFINITY

양의 무한대 Infinity를 반환한다.

```
Number.POSITIVE_INFINITY // Infinity

var num = 10;
num.POSITIVE_INFINITY;   // undefined
```

<br>

### 2.5 Number.NEGATIVE_INFINITY

음의 무한대 -Infinity를 반환한다.

```
Number.NEGATIVE_INFINITY // -Infinity

var num = 10;
num.NEGATIVE_INFINITY;   // undefined
```

<br>

### 2.6 Number.NaN

숫자가 아님(Not-a-Number)을 나타내는 숫자값이다. Number.NaN 프로퍼티는 window.NaN 프로퍼티와 같다.

```
console.log(Number('xyz')); // NaN
console.log(1 * 'string');  // NaN
console.log(typeof NaN);    // number
```

<br>

## 3. Number Method

### 3.1 Number.isFinite(testValue: number): boolean

매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다.

<br>

차이점
- Number.isFinite(): 인수를 변환하지 않고, 검사를 수행하기 때문에, 숫자가 아닌 인수가 주어졌을 때, 반환값은 언제나 false가 된다.
- isFinite(): 전역함수로, 인수를 숫자로 변환하여 검사를 수행

<br>

```
Number.isFinite(Infinity)  // false
Number.isFinite(NaN)       // false
Number.isFinite('Hello')   // false
Number.isFinite('2005/12/12')   // false

Number.isFinite(0)         // true
Number.isFinite(2e64)      // true
Number.isFinite(null)      // false. isFinite(null) => true
```

<br>

### 3.2 Number.isInteger(testValue: number): boolean

매개변수에 전달된 값이 정수(Integer)인지 검사하여 그 결과를 Boolean으로 반환한다. 검사전에 인수를 숫자로 변환하지 않는다.

```
Number.isInteger(123)   //true
Number.isInteger(-123)  //true
Number.isInteger(5-2)   //true
Number.isInteger(0)     //true
Number.isInteger(0.5)   //false
Number.isInteger('123') //false
Number.isInteger(false) //false
Number.isInteger(Infinity)  //false
Number.isInteger(-Infinity) //false
Number.isInteger(0 / 0) //false
```

<br>

### 3.3 Number.isNaN(testValue: number): boolean

매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다.

<br>

차이점
- Number.isNaN(): 인수를 변환하지 않고, 검사를 수행하기 때문에, 숫자가 아닌 인수가 주어졌을 때, 반환값은 언제나 false가 된다.
- isNaN(): 전역함수로, 인수를 숫자로 변환하여 검사를 수행

<br>


```
Number.isNaN(NaN)       // true
Number.isNaN(undefined) // false. undefined → NaN. isNaN(undefined) → true.
Number.isNaN({})        // false. {} → NaN.        isNaN({}) → true.
Number.isNaN('blabla')  // false. 'blabla' → NaN.  isNaN('blabla') → true.

Number.isNaN(true)      // false
Number.isNaN(null)      // false
Number.isNaN(37)        // false
Number.isNaN('37');     // false
Number.isNaN('37.37');  // false
Number.isNaN('');       // false
Number.isNaN(' ');      // false
Number.isNaN(new Date())             // false
Number.isNaN(new Date().toString())  // false. String → NaN. isNaN(String) → true.
```

<br>

### 3.4 Number.isSafeInteger(testValue: number): boolean

매개변수에 전달된 값이 안전한(safe) 정수값인지 검사하여 그 결과를 Boolean으로 반환한다. 안전한 정수값은 (253 - 1)와 -(253 - 1) 사이의 정수값이다. 검사전에 인수를 숫자로 변환하지 않는다.

```
Number.isSafeInteger(123)   //true
Number.isSafeInteger(-123)  //true
Number.isSafeInteger(5-2)   //true
Number.isSafeInteger(0)     //true
Number.isSafeInteger(1000000000000000)  // true
Number.isSafeInteger(10000000000000001) // false
Number.isSafeInteger(0.5)   //false
Number.isSafeInteger('123') //false
Number.isSafeInteger(false) //false
Number.isSafeInteger(Infinity)  //false
Number.isSafeInteger(-Infinity) //false
Number.isSafeInteger(0 / 0) //false
```

<br>

### 3.5 Number.prototype.toExponential(fractionDigits?: number): string

대상을 지수 표기법으로 변환하여 문자열로 반환한다. 
지수 표기법(e):
- 매우 큰 숫자를 표기할 때 주로 사용하며 e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식으로 수를 나타내는 방식이다.
- 적은 숫자로 큰수를 표현할 때 사용 -> 1.7976931348623157e+308

```
1234 = 1.234e+3
```

<br>

```
var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77.toExponential());      // SyntaxError: Invalid or unexpected token
console.log(77 .toExponential());     // logs 7.7e+1
```

<br>

제일 중요 --> toFixed
### 3.6 Number.prototype.toFixed(fractionDigits?: number): string

매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

```
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
```

<br>

### 3.7 Number.prototype.toPrecision(precision?: number): string

매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다. 지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.

```
var numObj = 15345.6789;

// 전체자리수 유효
console.log(numObj.toPrecision());   // '12345.6789'
// 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));  // '2e+4'
// 전체 2자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(2));  // '1.5e+4'
// 전체 3자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(3));  // '1.53e+4'
// 전체 6자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(6));  // '12345.7'
```

<br>

### 3.8 Number.prototype.toString(radix?: number): string

숫자를 문자열로 변환하여 반환한다.

```
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
```

<br>

### 3.9 Number.prototype.valueOf(): number

Number 객체의 기본자료형 값(primitive value)을 반환한다.

```
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

<br>


static method v. prototype method
- static method: 생성자 함수가 가지고 있는 메소드
  - 객체 생성과 상관없이, 그냥 호출하여 사용이 가능하다.
  - 예) Number.isFinite()와 같이 사용하게 되면, Number 생성자 함수의 메소드를 호출하여 사용하는 것이다.
- prototype method: 프로토타입 객체가 가지고 있는 메소드
  - 객체 생성후, 프로토타입에 있는 메소드를 호출하여 사용한다.
  - 예) Number.prototype.valueOf()와 같이 사용하여 Number.prototype에 있는 valueOf() 메소드를 호출하여 사용하는 것이다.

<br>

```
var num = 123;
num.valueOf() // num이라는 숫자형이 메소드를 사용하게 될때, 레퍼객체인 Number 객체의 프로토타입 객체(Number.prototype)의 메소드를 사용할 수 있게 된다.
num.isFinite() // 프로토타입 객체의 메소드 중에는 isFinite() 가 없어서 이런 방식으로는 사용하지 못한다.(isFinite()는 Number 생성자함수의 메소드이다.)
```
