# Javascript Scope

변수에의 접근성과 생존기간(life-cycle)

Scope(유효범위): 변수가 참조할 수 있는 범위(변수에의 접근성과 생존기간을 의미)

<br>

변수는 어디서 선언을 하느냐에 따라 변수의 Scope를 가지게 된다.
- 변수가 전역에서 선언되면, 그 변수는 전역 Scope를 갖는 전역 변수가 된다.
- 변수가 지역(자바스크립트에서는 함수 내부)에서 선언되면, 그 변수는 지역 Scope를 갖는 지역 변수가 된다.

<br>

자바스크립트의 Scope 종류
- 전역 Scope(Global Scope)
  - 코드 어디에서든지 참조할 수 있다.
- 지역 Scope(Local Scope or Function-level Scope)
  - 정의된 함수 내에서만 참조할 수 있다.

<br>

자바스크립트의 변수: 모든 변수는 Scope를 갖는다.
- 전역 변수(Global Variable)
  - 전역 Scope를 갖는 변수
- 지역 변수(Local Variable)
  - 지역 Scope를 갖는 변수

<br>

변수를 참조(변수에의 접근성)
- 전역 Scope를 갖는 전역 변수는 전역(코드 어디서든지)에서 참조할 수 있다. 즉, 지역(함수)안에서도 전역 변수를 참조할 수 있다.
- 지역(함수 내부)에서 선언된 지역 변수는 그 지역과 그 지역의 하부 지역(함수내의 또다른 함수, 즉 내부함수에서만 참조할 수 있다.

<br>

Scope Level
- 자바스크립트: Function-level Scope
  - 함수 코드 블록내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고, 함수 외부에서는 유효하지 않다.(참조할 수 없다.)
- C-family 언어: Block-level Scope
  - 코드 블록('{ }') 내에서 유효한 Scope를 의미한다. 즉, 코드 블록 밖에서 코드 블록 안에서 선언된 변수를 참조할 수 없다.

<br>

<em>Javascript에서의 Function-level Scope</em>
```
var global = 'global';

function foo() {
  var local = 'local';
  console.log(global);
  console.log(local);
}
foo();

console.log(global);
console.log(local); // Uncaught ReferenceError: local is not defined
```
<br>

<em>C언어에서의 Block-level Scope</em>
```
int main(void) {
  // block-level scope
  if (1) {
    int x = 5;
    printf("x = %d\n", x);
  }

  printf("x = %d\n", x); // use of undeclared identifier 'x'

  return 0;
}
```
<br>

ECMAScript 6에서 도입된 'let' 키워드를 사용하면, Block-level Scope를 사용할 수 있다.

<br>

<em>Javascript ECMAScript 6에서의 Block-level Scope</em>
```
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
```

<br>

## Javascript의 기본적인 Scope 규칙

전역변수와 지역변수를 참조할 경우, 기본적으로 다음의 규칙을 따른다.
- 전역변수
  - 전역에서 선언한 변수는 전역 변수가 되어, 어디에서든지 참조가 가능하다.
  - 지역(함수 내부)에서도 전역 변수를 참조할 수 있다.
- 지역변수
  - 지역(함수 내부)에서 선언한 변수는 지역 변수가 되어, 지역(함수 내부)에서 참조가 가능하다.
  - 그러나, 함수 밖에서는 그 지역 변수를 참조할 수 없다.
- 변수를 참조하는 순서
  - 지역(함수 내부)에서 어떤 변수를 참조할 때, 먼저 자기가 위치한 지역(함수 내부)에서 그 변수를 찾는다.
  - 자기가 위치한 지역에 그 변수가 없을 경우, 상위 지역에서 그 변수를 찾는다.
  - 이때, 자기 위치가 내부 함수이고, 그 내부 함수를 포함하는 외부 함수가 있을 경우, 그 외부 함수에서 그 변수를 찾는다.
  - 그 외부 함수에서도 그 변수가 없거나, 처음부터 외부함수가 없을 경우, 외부(전역)에서 그 변수를 찾아서 참조한다.
  - 만약 전역에서도 없을 경우, 

```
var global = 'global';

function foo() {
  var local = 'local';
  console.log(global); // global
  console.log(local); // local
}
foo();

console.log(global); // global
console.log(local); // Uncaught ReferenceError: local is not defined
```

<br>

위와 같이, Javascript는 타 언어와는 달리 특별한 시작점(Entry point)이 없고, 코드가 나타나는 즉시 해석되고 실행된다.
따라서, 전역에 변수나 함수를 선언하기 쉽기 때문에, 전역 변수를 남발하게 하는 문제를 야기시킨다.

이와 반대로, C언어는 main 함수가 시작점이 되기 때문에 대부분의 코드는 main 함수 내에 포함된다.
C언어의 경우, 전역 변수를 선언하기 위해서는 의도적으로 main 함수 밖에 변수를 선언하여야 한다.

```
#include <stdio.h>

/* global variable declaration */
int g;

int main () {

  // local variable declaration
  int a, b;

  // actual initialization
  a = 10;
  b = 20;
  g = a + b;

  printf ("value of a = %d, b = %d and g = %d\n", a, b, g);

  return 0;
}
```

<br>

## if문에서 변수 선언 시, 주의해야 할 Scope

```
if (true) {
  var x = 5;
}
console.log(x);
```

변수 x는 코드 블록 내에서 선언되었지만, 자바스크립트는 function-level scope를 따르므로, 코드 블록과 상관없이 함수 안에서 선언된 것이 아니므로, 
변수 x는 전역 변수이다. 따라서, 전역에서 변수 x를 참조할 수 있다.

<br>

## 1. 변수가 중복선언되는 경우에서의 Scope

전역변수와 지역변수가 x로 중복 선언되었을 경우, 지역변수를 우선하여 참조한다.

```
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // local
}

foo();          
console.log(x); // global
```

<br>

## 2. 내부함수가 있을 경우에서의 Scope

내부함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있다.
즉, 내부함수에서 변수를 참조할 경우, 우선 내부함수에서 참조할 그 변수를 찾는다.
만약, 없다면, 자신인 내부함수를 포함하고 있는 외부함수의 변수에 접근하여 그 변수를 참조한다.

```
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // local

  function bar() {  // 내부함수
    console.log(x); // local
  }

  bar();
}
foo();
console.log(x); // global
```

<br>

## 3. 함수 내부에서 전역변수의 값을 할당하는 경우에서의 Scope

함수 내부에서는 전역변수를 참조할 수 있을 뿐만아니라, 전역변수의 값도 변경이 가능하다.
내부 함수의 경우에도 그 내부 함수를 포함하고 있는 외부 함수 뿐만아니라, 전역에 있는 변수에 접근하고, 그 변수의 값을 변경할 수 있다.

```
var x = 10;

function foo() {
  x = 100;
  console.log(x); // 100
}
foo();
console.log(x); // 100
```

<br>

## 4. 내부 함수에서 변수의 값을 할당하는 경우에서의 Scope

내부 함수에서 변수의 값을 할당하게 되면, 그 내부 함수를 포함하고 있는 외부 함수에서 선언된 변수의 값을 변경한다.
즉, 변수의 값을 할당한 지역에서 가장 가까운 위치에서 선언된 변수의 값을 변경한다.
만약, 외부함수가 존재한다면, 외부함수에서 선언된 변수의 값을 변경한다.
만약, 외부함수가 없다면, 전역에서 선언된 전역변수의 값을 변경한다.

```
var x = 10;

function foo(){
  var x = 100;
  console.log(x); // 100

  function bar(){   // 내부함수
    x = 1000;
    console.log(x); // 1000
  }

  bar();
}
foo();
console.log(x); // 10
```

<br>

위 코드의 경우, bar 함수에서 변수 x의 값을 1000으로 할당하게 되면,
bar 함수에서 가장 가까운 위치인 foo 함수(외부 함수)에서 선언된 변수 x의 값을 변경한다.
전역에서 선언된 변수 x의 값은 변경하지 않는다.



```
var foo = function ( ) {

  var a = 3, b = 5;

  var bar = function ( ) {
    var b = 7, c = 11;

// 이 시점에서 a는 3, b는 7, c는 11

    a += b + c;

// 이 시점에서 a는 21, b는 7, c는 11

  };

// 이 시점에서 a는 3, b는 5, c는 not defined

  bar( );

// 이 시점에서 a는 21, b는 5

};
```

<br>

## 5. 상위 지역(전역변수 또는 외부 함수)에서 선언되지 않은 채, 함수 내부에서 할당된 경우에서의 Scope

상위 지역에서 변수가 선언되지 않은 상태에서, 하위 지역에서 변수에 값을 할당할 경우,
우선 상위 지역에서 그 변수를 찾고, 없으면, 그 변수를 암묵적으로 상위 지역의 변수로 선언한다.

<br>

<em>상위지역이 전역인 경우</em>
```
function foo() {
  x = 1;   // Throws a ReferenceError in "use strict" mode
  var y = 2;
}

foo();

console.log(x); // 1
console.log(y); // ReferenceError: y is not defined
```

<br>

<em>상위지역이 외부 함수인 경우</em>
```
function bar() {

    function foo() {
      x = 1;
      var y = 2;
    }

	foo();

	console.log(x);
	console.log(y);

}

bar();
```

<br>

## Lexical Scoping(Static Scoping)

자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다.

아래 코드에서, 함수 bar가 어떤 상황에서 호출될 지 선언 시점에서는 알 수 없다.

```
var i = 5;

function foo() {
  var i = 10;
  bar();
}

function bar() { // 선언된 시점에서의 scope를 갖는다!
  console.log(i); // 5
}

foo(); 
```
<br>

bar 함수에서 변수 i를 참조하기 위해 변수 i를 찾는데, 자기 지역(bar 함수)에서는 i가 없다.
그래서, 그 상위 지역인 전역에서 전역변수 i 값을 찾아서 참조한다.
foo 함수는 bar 함수의 외부 함수, 즉 상위 함수가 아니기 때문에, 위의 경우 상위지역은 전역 영역이 된다.

<br>

## 변수명의 중복

아래와 같은, 2개의 파일로 분리된 자바스크립트 코드가 있다.

```
// x.js
function foo (){
  // var i = 0;
  i = 0;
  // ...
}

// y.js
for(var i = 0; i < 5; i++){
  foo();
  console.log(i);
}

```
<br>

x.js와 y.js에 모두 변수 i가 존재한다.
HTML에서 이 2개의 자바스크립트 파일을 로드하여 사용하면, 변수 i는 중복된다. 


전역객체는 window로 1개다. 파일 여러개여도.
(네임스페이스가 하나다.)


```
<!DOCTYPE html>
<html>
<body>
  <script src='x.js'></script>
  <script src='y.js'></script>
</body>
</html>
```

<br>

x.js의 변수 i는 var 키워드를 사용하지 않았으므로 암묵적으로 전역 변수화 되고 y.js의 변수 i는 전역변수이다. 이때 자바스크립트는 변수명의 중복을 허용하므로 어떠한 에러 메시지도 발생시키지 않는다. 따라서 무한 반복 상태에 빠지게 된다.

이와 같이 전역변수의 무분별한 사용은 무척 위험하다. 전역변수를 반드시 사용하여야 할 이유를 찾지 못한다면 지역변수를 사용하여야 한다. 변수의 범위인 스코프는 좁을수록 좋다.

코드가 길어지면 변수명의 중복이 발생하기 쉬워 예기치 못한 이상 동작의 원인이 되기 쉬우며, 전역변수는 지역변수보다 탐색에 걸리는 시간이 더 길다.(속도면에서 그리 큰 차이는 없지만 분명히 느리다.)

<br>

## 최소한의 전역변수 사용

전역변수 사용을 최소화하는 방법 중 하나는 애플리케이션에서 전역변수 사용을 위해 다음과 같이 전역변수 객체 하나를 만들어 사용하는 것이다. (더글라스 크락포드의 제안)

```
var MYAPP = {};

MYAPP.student = {
  name: 'Lee',
  gender: 'male'
};

console.log(MYAPP.student.name);
```
<br>

## 즉시실행함수를 이용한 전역변수 사용 억제

전역변수 사용을 억제하기 위해, 즉시 실행 함수(IIFE, Immediately-Invoked Function Expression)를 사용할 수 있다. 이 방법을 사용하면 전역변수를 만들지 않으므로 라이브러리 등에 자주 사용된다. 즉시 실행 함수는 즉시 실행되고 그 후 전역에서 바로 사라진다.

```
(function () {
  var MYAPP = {};

  MYAPP.student = {
    name: 'Lee',
    gender: 'male'
  };

  console.log(MYAPP.student.name);
}());

console.log(MYAPP.student.name);
```
