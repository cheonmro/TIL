# Javascript Control Flow

제어문(Control Flow Statement): 조건에 따른 명령 실행(조건문)이나 반복 실행(반복문)이 필요할 때 사용

일반적으로, 코드는 위에서 아래 방향으로 순차적 실행을 한다.
그러나, 제어문을 이용하면 실행 순서를 변경하거나 조건에 따라 실행 여부를 결정하기도 하고 반복할 수도 있다.

<br>

## 1. 블록 구문(Block Statement)

블록 구문: 구문들의 집합으로, 중괄호('{}')로 그 범위를 정한다.
블록 구문은 일반적으로 다음과 같은 곳에서 사용된다.(if, for, while)
- 함수
- 객체리터럴
- 흐름 제어 구문(Control Flow Statement)


```
// 함수 선언문
function foo() {
  var a = 1, b = 2;
  console.log(a + b);
}
foo();


// 객체리터럴에 의한 객체 선언
var obj = {
  x: 1,
  y: 2
};
console.log(obj.x + obj.y);


// 흐름 제어 구문(control flow statement)
var a = 0;
while (a < 10) {
  a++;
}
console.log(a);
```

<br>

## 2. 조건문(Conditional Statement)

데이터의 흐름을 제어한다는 것은 일정 조건에 따른 의사결정을 통해 다음 진행 흐름으로 유도(Control Flow)하는 것이다.
즉, 의사결정(상황판단)의 기준을 제시하고, 그 결과에 따른 행위를 지시하는 것이다.

이를 수행할 수 있는 것이 조건문이다.
조건문은 주어진 조건식이 참인지 거짓인지에 따라 실행되어질 구문들의 집합이다.

Javascript의 조건문
- If문
- Switch문

<br>

### 1. If문

If문은 주어진 조건식을 평가하여 논리적 참, 거짓을 구별하는 구문이다.
조건식은 표현식이기 때문에, 하나의 값(true/false)으로 수렴될 수 있다.


```
if (조건식) {
  // 조건식이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식이 거짓이면 이 코드 블록이 실행된다.
}
```

```
// if-else if 문
if (hour < 10) {
  greeting = 'Good morning';
} else if (hour < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

console.log(greeting);
```

<br>

### 2. Swtich문

Switch문은  switch 변수의 값과 일치되는 case문으로 실행 순서가 이동하게 된다.
swtich 변수의 값과 일치되는 case 문이 없다면, 실행 순서는 default로 이동한다.


```
var location = 'seoul';

// location = switch 변수
switch (location) {
  // location == 'newyork'인 경우
  case 'newyork':
    console.log('newyork');
  // location == 'seoul'인 경우
  case 'seoul':
    console.log('seoul');
  // location == 'jeju'인 경우
  case 'jeju':
    console.log('jeju');
  // 그외의 경우
  default:
    console.log('unknown location');
}
```

break 키워드: switch 구문에서 탈출하는 역할을 수행한다.
break문이 없다면, case문의 조건과 일치하지 않더라도 실행 순서는 다음 case문으로 이동한다.

```
var location = 'red';

switch (location) {
  case 'newyork':
    console.log('newyork');
    break;
  case 'seoul':
    console.log('seoul');
    break;
  case 'jeju':
    console.log('jeju');
    break;
  default:
    console.log('unknown location');
}
```

default문: break 키워드 생략 가능하다. 왜냐하면 default문이 가장 마지막에 위치하므로 다음 구문으로 이동할 수 없기 때문이다.


<br>

## 3. 반복문(Loop)

주어진 조건식이 참인 경우, 코드 블록을 실행하는 것을 반복문이라고 한다.
그 후, 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행하며 이는 조건식이 거짓일 때까지 반복된다.

Javascript의 반복문
- for문
- while문
- do while문

<br>

### 3.1 for문

가장 일반적으로 사용되는 반복문으로써, 특정 조건이 거짓으로 판별될 때까지 반복한다.


```
for ([초기문]; [조건문]; [증감문]) {
  구문;
}
```

예를 들어, 변수 i를 0으로 초기화하고, i가 10보다 작아질 때까지 코드 블록을 반복 실행하는 for문은 아래와 같다.

```
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

위 예제를 역으로 반복하면 아래와 같다.

```
for (var i = 9; i >= 0; i--) {
  console.log(i);
}
```

배열을 순회하는 다양한 for문은 아래와 같다.


```
var array = ['apple', 'banana', 'cherry', 'orange'];

for (var i = 0; i < array.length; i++) {
  // console.log(array[i]);
  console.log('[' + i + '] = ' + array[i]);
}

// for-in
for (var index in array) {
  console.log('[' + index + '] = ' + array[index]);
}

// foreach
array.forEach(function (element, index, arr) {
  console.log('[' + index + '] = ' + element);
});

// for-of (ES6)
for (const element of array) {
  console.log(element);
}
// array.entries(): 배열의 key/value의 쌍을 반환하는 iterator를 반환
for (const [index, value] of array.entries()) {
  console.log('[' + index + '] = ' + value);
}
```


for문의 모든 식은 선택 사항이기 때문에 반드시 사용할 필요는 없다.
어떤 식도 선언하지 않으면, 무한루프가 된다.

```
var i = 0;
for (;;) { // 무한루프
  if (i >= 10) {
    break;
  }
  console.log(i);
  i++;
}
```

*for문의 단점: 전역변수를 생성하게 된다. for문 안에서 var i=0를 하게되면, Javascript는 funciton-level scope이기 때문이라, for문안에서 선언된 변수는 함수안이 아니기 때문에, 전역변수가 된다.


<br>

### 3.2 while문

조건문이 참이면 코드 블록을 계속해서 반복 실행한다.
조건문이 거짓이 되면, 실행을 종료하고 반복문을 빠져나간다.

```
var n = 0;
var x = 0;

// n이 10보다 작을 때까지 계속 반복한다.
while (n < 10) { // n: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  n++;          // n: 1, 2, 3, 4, 5, 6, 7, 8, 9
  x += n;       // x: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
  console.log(x);
}
```

조건문이 언제나 참이면, 무한루프가 된다.

```
var i = 0;
// 무한루프
while (true) {
  console.log(i);
  i++;
}
```

무한루프를 탈출하기 위해서는, break문을 사용한다.
break문을 감싸는 반복문 하나를 탈출한다.

```
var i = 0;
// 무한루프
while (true) {
  console.log(i);
  i++;
  // i가 20이면 exit!
  if (i === 20) break;
}
```

<br>

### 3.3 do while문

while문이 시작되기 전, 코드 블록이 있어, 이 코드 블록을 먼저 1회 실행하고, 그 다음 while문을 실행한다.

```
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

<br>

### 3.4 continue

continue: continue문 이후, 구문의 실행을 스킵하고 반복문의 조건문으로 이동한다.
break: 반복문 하나를 탈출한다.

```
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
```

<br>

## 4. 평가(Evaluation)

일반적으로, 흐름제어를 위해서는 조건식을 평가하여 논리적 참, 거짓을 구별한 후 평가 결과에 따라 의사결정을 한다.

조건식은 표현식의 일종이다.
따라서, 피연산자와 연사자로 구성된 일반적 표현식뿐만 아니라 문자열이나 숫자와 같은 리터럴 값, 변수, 내장값들(true, false, null, undefiend, Nan, Infinity 등) 또한 조건식으로 사용될 수 있다.

이때, Javascript는 암묵적 강제 형 변환을 통해 조건식을 평가한다.

```
if (true) {
  console.log('1');
}

if (1) {
  console.log('2');
}

if ('str') {
  console.log('3');
}

if (null) {
  console.log('4');
}

var x = '';

if (x) {
  console.log('5');
}

if (!x) {
  console.log('6');
} 
```

<br>

### 4.1 암묵적 강제 형 변환(Type coercion)

Javascript는 문맥(context)을 고려하여 자료형을 암묵적으로 강제 변환하여 작업을 완료할 수 있다.
이는 의도하지 않은 값을 만들어낼 수 있어 주의가 필요하다.

```
console.log('1' > 0);            // true
console.log(1 + '2');            // '12'
console.log(2 - '1');            // 1
console.log('10' == 10);         // true
console.log('10' === 10);        // false
console.log(undefined == null);  // true
console.log(undefined === null); // false
```

위와 같이, 암묵적 강제 형 변환이 일어나도록 코딩하는 것은, 가독성이 좋지 않을 뿐만 아니라, 의도하지 않은 오류를 만들 가능성이 있기 때문에 바람직하지 않다.

```
var num = 10;
var str = '5';

// Bad
console.log(num - str);

// Good
console.log(num - parseInt(str));

```

'parseInt'와 같이 문자를 정수로 바꿔주고, 연산을 수행하는 것이 좋다.

<br>

### 4.2 Type Conversion Table

| Origina Value        | Converted to Number           | Converted String  | Converted to Boolean |
| ------------- |:-------------:| -----:| ----:|
| false      | 0 | 'false' | false |
| true      | 1      |   'true' | true |
| 0 | 0      |   '0' | false |
| 1 | 1      |   '1' | true |
| '0' | 0      |   '0' | true |
| '1' | 1      |   '1' | true |
| NaN | NaN      |   'NaN' | false |
| Infinity | Infinity      |   'Infinity' | true |
| -Infinity | -Infinity      |   '-Infinity' | true |
| " | 0      |   " | false |
| '10' | 10      |   '10' | true |
| 'ten' | NaN      |   'ten' | true |
| [] | 0      |   " | true |
| [10] | 10      |   '10' | true |
| [10,20] | NaN      |   '10,20' | true |
| ['ten'] | NaN      |   'ten' | true |
| ['ten','tweenty'] | NaN      |   'ten, twenty' | true |
| function(){} | NaN      |   'function(){}' | true |
| {} | NaN      |   '[object Object]' | true |
| null | 0      |   'null' | false |
| undefined | NaN      |   'undefined' | false |


```
var x = false;

// 변수 x의 값을 숫자 타입으로 변환
console.log('Number : ' + Number(x));  // 0
// 변수 x의 값을 문자열 타입으로 변환
console.log('String : ' + String(x));  // 'false'
// 변수 x의 값을 불리언 타입으로 변환
console.log('Boolean: ' + Boolean(x)); // false

```

”+” 단항 연산자는 대부분의 값을 숫자형으로 변환할 수 있다.

```
console.log(+20);     // 20
console.log(+'20');   // 20
console.log(+true);   // 1
console.log(+false);  // 0
console.log(+null);   // 0
console.log(+undefined); // NaN
console.log(+NaN);    // NaN
```

<br>

### 4.3 Data Type Conversion

```
var val = '123';
console.log(typeof val + ': ' + val); // string: 123

// sting -> number
val = +val; // "+": 단항 연산자(unary operator)
// val = val * 1;
// val = parseInt(val);
// val = Number(val);
console.log(typeof val + ': ' + val); // number: 123

// number -> sting
val = val + '';
// val = String(val);
// val = val.toString();
console.log(typeof val + ': ' + val); // string: 123
```

<br>

### 4.4 Truthy & Falsy values

아래 값들은 Boolean context에서 false로 평가된다.

- false
- undefined
- null
- 0
- NaN (Not a Number)
- '' (빈문자열)


이들을 Falsy value라 한다.

Falsy value 이외의 값들(object 포함)은 모두 true로 평가된다. 이들을 Truthy value라 한다.

```
var x = false;
if (!x)  console.log(x+' is falsy value');

x = undefined;
if (!x)  console.log(x+' is falsy value');

x = null;
if (!x)  console.log(x+' is falsy value');

x = 0;
if (!x)  console.log(x+' is falsy value');

x = NaN;
if (!x)  console.log(x+' is falsy value');

x = '';
if (!x)  console.log(x+' is falsy value');
```

<br>

### 4.5 Checking equality

두 값을 비교할 때 사용하는 연산자
- 동등 연산자(==, !=)
- 일치 연산자(===, !==)

일치 연산자를 사용해야 한다.
동등 연산자는 암묵적으로 변환된 값만을 비교하지만, 일치 연산자는 자료형까지 비교하므로 보다 정확한 결과를 얻을 수 있다.

두 연산자의 비교는 [==와 ===의 차이점](https://steemit.com/kr-dev/@cheonmr/js-operator)
에서 확인하면 된다.

```
// 모두 false를 출력한다
console.log(null == false);
console.log(undefined == false);
console.log(null == 0);
console.log(undefined == 0);
console.log(undefined === null);
console.log(NaN == null);
console.log(NaN == NaN);
```


<br>

### 4.6 Checking existence

객체나 배열(배열도 객체이다)이 undefined, null이 아니면 truthy value로 취급된다. 이를 이용하여 존재 여부를 확인할 수 있다. 아래의 예제를 살펴보자.

getElementById를 통해 DOM에서 특정 요소를 취득하는 경우, DOM 상에 해당 요소가 존재할 수도 있지만 존재하지 않을 가능성도 있다. 만약 취득하고자하는 요소가 존재하여 해당 요소 취득에 성공하였다면 변수 elem의 값은 HTMLElement를 상속받은 객체의 인스턴스이다. 취득하고자하는 요소가 존재하지 않아서 요소 취득에 실패하였다면 변수 elem의 값은 null이다. 이때 객체의 인스턴스는 true로 평가되며 null은 false로 평가된다.

```
// DOM에서 특정 요소를 취득
var elem = document.getElementById('section');

if (elem) {
  // 요소가 존재함(요소 취득 성공) : 필요한 작업을 수행
} else {
  // 요소가 존재하지 않음(요소 취득 실패) : 에러 처리
}
```


아래 예는 위의 예와는 다른 의미이다. 객체의 존재는 truthy value로 취급지만 boolean 값 true와 같지는 않다.

```
// DOM에서 특정 요소를 취득
var elem = document.getElementById('section');

// 변수 elem의 값이 true인지 평가한다.
// 변수 elem의 값은 null 또는 HTMLElement를 상속받은 객체의 인스턴스
if (elem == true) // false
```

아래 예와 같은 경우를 주의해야 한다.
```
var b = new Boolean(false);
if (b) // true
```
