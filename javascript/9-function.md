# Javascript Function

- 함수: 어떤 특정 작업을 수행하기 위해, 필요한 일련의 구문들의 집합으로, 코드의 재사용을 위해 함수가 필요시에 호출되어 사용된다.
- 함수의 일반적 기능(코드의 재사용) 외에 다른 기능
  - 객체 생성
  - 객체의 행위 지정(메소드)
  - 정보의 구성 및 은닉
  - 클로저
  - 모듈화
- 일반적으로 프로그래밍 기술은 요구사항의 집합을 자료구조와 함수의 집합으로 변환하는 것이다.
- 함수도 객체이다. 다른 객체와 구분될 수 있는 특징은 호출할 수 있다는 것이다.
- 함수도 객체(일급 객체)이므로 다른 값들처럼 사용할 수 있다. 즉, 변수나 객체, 배열 등에 저장할 수 있고, 다른 함수에 전달되는 인수로도 사용할 수 있으며, 함수의 반환값이 될 수도 있다.

<br>

## 1. 함수 정의

함수를 정의하는 3가지 방식
- 함수선언식(Function declaration)
- 함수표현식(Function expression)
- Function() 생성자 함수

<br>

### 1.1 함수선언식

function 키워드를 사용해서 함수를 선언한다.

- 함수명
  - 함수선언식의 경우, 함수명은 생략할 수 없다.
  - 함수명은 언제 사용할까?
    - 함수 몸체에서 자신을 재귀적(recursive) 호출할 때
    - 자바스크립트 디버거가 해당 함수를 구분할 때
- 매개변수 목록
  - 0개 이상의 목록으로, 괄호로 감싸고, 콤마로 분리한다.
  - 다른 언어와의 차이점: 매개변수의 자료형을 기술하지 않는다는 것이다. 이 때문에 함수 몸체 내에서 매개변수의 자료형 체크가 필요할 수 있다.
- 함수 몸체
  - 실제 함수가 호출되었을 때, 실행되는 구문들의 집합이다.
  - 중괄호('{}')로 구문들을 감싼다.
  - return 문으로 결과값을 반환하는데, 이를 반환값(return value)이라 한다. return 문 이후의 구문들은 적용이 안되고, return 문을 생략 가능하다.(생략하면, undefined를 반환한다.)


```
function square(number) {
  return number * number;
}
```

- 함수명: square
- 매개변수: number
- 함수 몸체: { } 안에 있는 구문들

<br>

### 1.2 함수표현식

(함수의 일급객체 특성을 이용하여) 함수 리터럴 방식으로 함수를 정의하고, 변수에 할당할 수 방식

함수선언식으로 정의한 함수 square()를 함수표현식으로 정의하면 아래와 같다.

```
var square = function(number) {
  return number * number;
};
```

- 함수표현식으로 정의한 함수는 함수명을 생략 가능하다.(이러한 함수를 익명 함수라고 한다.)
- 함수표현식에서는 함수명을 생략하는 것이 일반적이다.
- 함수표현식 
  - 기명 함수표현식
  - 익명 함수표현식


```
// 기명 함수표현식(named function expression)
var foo = function multiply(a, b) {
  return a * b;
};
// 익명 함수표현식(anonymous function expression)
var bar = function(a, b) {
  return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined
```

- 함수는 일급객체이기 때문에 변수에 할당할 수 있는데, 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다.
- 함수 호출시, 함수명이 아니라 함수를 가리키는 변수명을 사용하여야 한다.

```
var foo = function(a, b) {
  return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100
```

- 변수 bar와 변수 foo는 동일한 익명 함수의 참조값을 찾는다.

함수가 할당된 변수를 사용해 함수를 호출하지 않고 기명 함수의 함수명을 사용해 호출하게 되면 에러가 발생한다. 
이는 함수표현식에서 사용한 함수명은 외부 코드에서 접근 불가능하기 때문이다. (사실은 함수선언식의 경우도 마찬가지이다.)

함수선언식으로 정의한 함수 square의 경우, 함수명으로 호출할 수 있었는데 이는 자바스크립트 엔진에 의해 아래와 같은 함수표현식으로 형태가 변경되었기 때문이다.

```
var square = function square(number) {
  return number * number;
};
```

함수명과 함수 참조값을 가진 변수명이 일치하므로 함수명으로 호출되는 듯 보이지만 사실은 변수명으로 호출된 것이다.

결국 함수선언식도 함수표현식과 동일하게 함수 리터럴 방식으로 정의되는 것이다.

<br>

### 1.3 Function() 생성자 함수

함수선언식과 함수표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데, 이것은 결국 내장 함수 Function() 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand(축약법)이다.

- Function() 생성자 함수는 Function.prototype.constructor 프로퍼티로 접근할 수 있다.

- Function() 생성자 함수로 함수를 생성하는 문법은 다음과 같다.

```
new Function(arg1, arg2, ... argN, functionBody)
```

```
var square = new Function('number', 'return number * number');
console.log(square(10)); // 100
```

- Function() 생성자 함수로 함수를 생성하는 방식은 함수를 생성하는 방식 중 하나이지만, 함수선언식과 함수표현식을 할때, 자바스크립트 엔진에 내장해서 작동하는 방식이기 때문에, 일반적으로 이 방식은 사용하지 않는다.

함수를 정의하는 방식은 달라도, 결국 Function() 생성자 함수를 통해 함수를 생성하는 것이다.



*instance: 메모리에 있는 실체


<br>

## 2. 함수 호이스팅(Function Hoisting)

함수선언의 위치와는 상관없이 코드 내 어느 곳에서든지 호출이 가능하게 만드는 것을 말한다.
단, 함수선언식에만 적용이 된다.

함수선언식으로 정의된 함수는 자바스크립트 엔진이 스크립트가 로딩되는 시점에 바로 초기화하고 이를 VO(variable object)에 저장한다. 즉, 함수 선언, 초기화, 할당이 한번에 이루어진다. 그렇기 때문에 함수 선언의 위치와는 상관없이 소스 내 어느 곳에서든지 호출이 가능하다.

다음은 함수표현식으로 함수를 정의한 경우이다.

```
var res = square(5); // TypeError: square is not a function

var square = function(number) {
  return number * number;
}
```

위와 같이 에러가 발생한 이유는, 함수표현식의 경우는 함수 호이스팅이 아니라, 변수 호이스팅이 발생하기 때문이다.

함수표현식은 함수선언식과는 달리 스크립트 로딩 시점에 변수 객체(VO)에 함수를 할당하지 않고, runtime에 해석되고 실행된다.
즉, 선언과 초기화까지만 하여, undefined를 호출하는 것과 같기 때문에, 에러가 난다.

그래서, 더글러스 크락포드는 '함수표현식'만 사용할 것을 권한다.
왜냐하면, 에러가 나서 미리 호출을 방지하기 때문이다.
최대한, 선언문 이전에 호출하지 않는 것이 좋다.


차이점: 
- 함수 호이스팅: 함수선언문 이전에 함수가 호출이 된다.(함수 선언식으로 함수를 선언했을 경우)
- 변수 호이스팅: 함수표현식으로 함수를 선언했을 경우, 함수표현식 이전에 함수를 호출하면, 에러가 난다. 
  - 왜냐하면, 함수표현식은 변수 호이스팅을 따르기 때문에, 할당은 안되고, 초기화까지만 되기 때문이다.
  - 즉, 초기화까지만 되면 undefined를 호출하는 것과 같기 때문이다. undefiend() 이런형식으로 나온다는 의미이기 때문에, 에러가 난다.

<br>

## 3. First-class object(일급객체)

일급 객체(first-class object): 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미한다.

다음 조건을 만족하면 일급 객체로 간주한다.
- 무명의 리터럴로 표현이 가능하다.
- 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
- 함수의 파라미터로 전달할 수 있다.
- 반환값(return value)으로 사용할 수 있다.


```
// 1. 무명의 리터럴로 표현이 가능하다.(함수명 없이 사용 가능)
// 2. 변수나 데이터 구조안에 담을 수 있다.(변수에 할당 가능)
var increase = function(num) {
  return num + 1;
};

var decrease = function(num){
  return num - 1;
};

var obj = {
  increase: increase,
  decrease: decrease
};

// 3. 함수의 파라미터로 전달 할 수 있다.
function calc(func, num){
  return func(num);
}

console.log(calc(increase, 1));
console.log(calc(decrease, 1));

// 4. 반환값(return value)으로 사용할 수 있다.
function calc(mode){
  var funcs = {
    plus:  function(left, right){ return left + right; },
    minus: function(left, right){ return left - right; }
  };
  return funcs[mode];
}
console.log(calc('plus')(2,1));
console.log(calc('minus')(2,1));
```

Javascript의 함수는 위의 조건을 모두 만족하므로 Javascript의 함수는 일급객체이다. 
따라서 Javascript의 함수는 흡사 변수와 같이 사용할 수 있으며 코드의 어디에서든지 정의할 수 있다.

함수와 다른 객체를 구분 짖는 특징은 호출할 수 있다는 것이다.

<br>

## 4. 매개변수(Parameter, 인자)

매개변수
- 함수내에서 사용하는 지역변수이다.(함수내에서 변수와 동일하게 동작)
- 함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정한다.

<br>

### 4.1 매개변수(parameter, 인자) vs. 인수(argument)

차이점
- 매개변수: 함수내에서 사용되는 지역변수로, 메모리 공간을 차지한다.
- 인수: 함수의 매개변수로 전달할 값이다.

만약 인수를 전달하지 않으면, 매개변수는 undefined로 초기화된다.

```
var foo = function (p1, p2) {
  console.log(p1, p2);
};

foo(1); // 1 undefined
```

<br>

### 4.2 Call-by-Value

Primitives(기본자료형) 인수는 Call-by-value(값에 의한 호출)로 동작한다. 
- 이는 함수 호출 시 기본자료형 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식이다. 
- 이때 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 기본자료형 값은 변경되지 않는다.

```
function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0
```

즉, x는 기본자료형이라서, 값이 복사되어 전달되기 때문에, 원래의 값(x는 0)은 유지된다.

<br>

### 4.3 Call-by-Reference

객체형(참조형) 인수는 Call-by-reference(참조에 의한 호출)로 동작한다. 
- 이는 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식이다. 
- 이때 함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.


```
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
  obj.gender = 'female';
}

var num = 100;
var obj = {
  name: 'Lee',
  gender: 'male'
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}
```


객체의 값은 변경하였다.(재할당하였다 라고 말하지 않음)


즉, 함수 내에 있는 객체를 변경하면, 함수 밖에 있는 객체도 따라 변한다.
(객체의 값을 변경하였다라고 말한다.(재할당하였다 라고 말하지 않음))
그러나, 기본자료형은 함수 밖에서는 변하지 않는다.


- 순수함수: 어떤 외부 상태도 변경하지 않는 함수
- 비순수 함수: 외부 상태도 변경시키는 부수 효과(side-effect)가 발생시키는 함수
  - 객체형 인수는 참조값을 매개변수에 전달하기 때문에 함수 몸체에서 그 값을 변경할 경우 원본 객체가 변경되는 부수 효과(side-effect)가 발생한다. 
  - 이와 같이 부수 효과를 발생시키는 비순수 함수(Impure function)는 복잡성을 증가시킨다. 
  - 비순수 함수를 최대한 줄이는 것은 부수 효과를 최대한 억제하는 것과 같다. 이것은 디버깅을 쉽게 만든다.



<br>

### 5. 반환값

함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다.
- return 키워드는 함수를 호출한 코드(caller)에게 값을 반환할 때 사용한다.
- 함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
- 함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
- 자바스크립트 해석기는 return 키워드를 만나면 함수의 실행을 중단한 후, 함수를 호출한 코드로 되돌아간다. 
- 만일 return 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않는다.

```
function calculateArea(width, height) {
  var area = width * height;
  return area; // 단일 값의 반환
}
console.log(calculateArea(3, 5)); // 15
console.log(calculateArea(8, 5)); // 40

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  return [area, volume]; // 복수 값의 반환
}

console.log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18
```



*데이터를 어떻게 묶을까? -> 자료구조

<br>


## 6. 함수 객체의 프로퍼티


객체는 프로퍼티가 있다. 함수도 객체다. 그래서, 함수도 프로퍼티도 있다.


왜 함수를 객체로 만들었을까?

함수객체는 일반객체와 다르다.(차이점: 함수객체는 호출이 가능하다.)

객체를 찍어볼때, 객체의 프로퍼티가 또 다른 객체를 가질 수 있기 때문에, 객체의 내부까지 확인해볼때: console.dir(square)
그런데, 이것은 비표준이다. ECMAScript에서 사용이 안되고, 크롬에서도 적용이 된다.


전역에서 선언되었기 때문에, 전역함수


함수 객체는 6개의 프로퍼티를 갖는다.

<br>

### 6.1 arguments 프로퍼티

왜 매개변수와 인수의 갯수가 다를까?
- 매개변수를 선언할 수 없는 경우: 몇개 올지 모를 경우


인수 없이 호출하면, 함수의 매개변수는 undefined가 된다. 그래서 NaN/undefined 등을 반환한다.

타언어는 매개변수의 수와 인수의 수가 같아야 호출된다. 자바스크립트는 괜찮다.


arguments: 
- 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회가능한(iterable) 유사 배열 객체(array-like object)이다.
- 함수 객체의 arguments 프로퍼티는 arguments 객체를 값으로 가지며 함수 내부에서 지역변수처럼 사용된다. 즉 함수 외부에서는 사용할 수 없고, 함수 내부에서만 사용가능하다.
- 어떤 인수가 넘어왔는지 알 수 있다.

자바스크립트는 함수 호출 시 함수 정의에 따라 인수를 전달하지 않아도 에러가 발생하지 않는다.



유사배열객체: 순회할수 있다.(for문을 돌릴 수 있다.) 왜냐하면, 프로퍼티에 순서가 있기 때문에(기본적으로 객체는 순서 보장안됨)
(유사배열객체를 만든 이유는 객체인데 순서를 보장하기 위해서, 만듬)
코딩할때: 유사배열객체 -> 배열로 변환하여 사용, 그러나 이게 불편함. 그래서 SE6에서 새롭게 좋은 방법이 추가됨.


```
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

multiply();        // {}
multiply(1);       // { '0': 1 }
multiply(1, 2);    // { '0': 1, '1': 2 }
multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
```

arguments는 { '0': 1, '1': 2, '2': 3 } 이런식으로 순서대로 존재(유사배열객체)

arguments[i]에서 i는 숫자라서, arguments.i가 아니고, arguments[i] 처럼 대괄호 표기법으로 사용해야 한다.


함수는 객체이므로, 함수만의 독특한 프로퍼티가 있고, 그중에 arguments가 있다.


매개변수(parameter)는 인수(argument)로 초기화된다.
- 매개변수의 갯수보다 인수를 적게 전달했을 때(multiply(), multiply(1)) 인수가 전달되지 않은 매개변수는 undefined으로 초기화된다.
- 매개변수의 갯수보다 인수를 더 많이 전달한 경우, 초과된 인수는 무시된다.

이러한 자바스크립트의 특성때문에 런타임 시에 호출된 함수의 인자 갯수를 확인하고 이에 따라 동작을 달리 정의할 필요가 있을 수 있다. 이때 유용하게 사용되는 것이 arguments 객체이다.

- arguments 객체는 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용된다.

```
function sum() {
  var res = 0;

  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6
```


자바스크립트는 함수를 호출할 때 인수들과 함께 암묵적으로 arguments 객체가 함수 내부로 전달된다. arguments 객체는 배열의 형태로 인자값 정보를 담고 있지만 실제 배열이 아닌 유사배열객체(array-like object)이다.

유사배열객체란 length 프로퍼티를 가진 객체를 말한다. 유사배열객체는 배열이 아니므로 배열 메소드를 사용하는 경우 에러가 발생하게 된다. 따라서 배열 메소드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용하여야 하는 번거로움이 있다.

```
function sum() {
  if (!arguments.length) return 0;

  // arguments 객체를 배열로 변환
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

// ES6
// function sum(...args) {
//   if (!args.length) return 0;
//   return args.reduce((pre, cur) => pre + cur);
// }

console.log(sum(1, 2, 3, 4, 5)); // 15
```

<br>


### 6.2 caller

caller 프로퍼티: 자신을 호출한 함수를 의미한다.

```
function foo(func) {
  var res = func();
  return res;
}

function bar() {
  return 'caller : ' + bar.caller;
}

console.log(foo(bar)); // function foo(func) {...}
console.log(bar());    // null (browser에서의 실행 결과)
```


bar는 참조, 그래서 foo(func)에 func에 bar를 참조한다.

<br>

### 6.3 length 프로퍼티

length 프로퍼티는 함수 정의 시 작성된 매개변수 갯수를 의미한다.

```
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
```

<br>

### 6.4 name 프로퍼티

수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 갖는다.

```
// 기명 함수표현식(named function expression)
var namedFunc = function multiply(a, b) {
  return a * b;
};
// 익명 함수표현식(anonymous function expression)
var anonymousFunc = function(a, b) {
  return a * b;
};

console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''
```

<br>

### 6.5 __proto__ 프로퍼티

ECMAScript spec에서는 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다 라고 되어있다. 
크롬, 파이어폭스 등에서는 숨겨진 [[Prototype]] 프로퍼티가 __proto__프로퍼티로 구현되어 있다. 즉, __proto__과 [[Prototype]]은 같은 개념이다.


square() 함수 역시 객체이므로 [[Prototype]] 프로퍼티(__proto__프로퍼티)을 가지며 이를 통해 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.

함수의 프로토타입 객체는 Function.prototype이며 이것 역시 함수이다.

```
function square(number) {
  return number * number;
}

console.log(square.__proto__ === Function.prototype);
console.log(Object.getPrototypeOf(square) === Function.prototype);
```


파스칼 표기법: 생성자 함수 이름 첫글자 대문자로 사용

new: 뭔가 특별한 일을 더해준다.

new가 있을때, 없을때 차이
- new가 있을때: 생성자함수로써, 객체를 만들어낸다.
- new가 없을때: 생성자함수의 종류(String, Number 객체 등)에 맞게 형변환한다.

모든 객체는 자신의 부모 역할을 하는 객체를 가지고 있다. 그 객체는 프로토타입 객체이다.(JS 엔진이 알아서)

내가 new를 한 순간, JS 엔진이 알아서 부모 역할을 하는 객체를 소유하게 한다.


객체지향으로 불리기 위해서는
- 상속(부모의 자산을 자식이 쓸수 있는 것)이 아무때나 가능한 것(부모에서 자식으로의 방향), 항상 부모것을 자식이 사용한다.(부모는 자식것을 못쓴다.)


prototype: 왜 만들었나? 

누가? 

생성자함수로부터 prototype으로 prototype을 가리킨다.
자식 객체로부터 __proto__으로 prototype을 가리킨다.

결국 가리키는 것은 똑같은데, 누구 입장에서 가리키는 것이 다를 뿐이다. 


<br>

### 6.6 prototype 프로퍼티

주의해야 할 것은 함수 객체만이 가지고 있는 prototype 프로퍼티는 프로토타입 객체를 가리키는 [[Prototype]] 프로퍼티(__proto__ 프로퍼티)와는 다르다는 것이다.

prototype 프로퍼티와 [[Prototype]] 프로퍼티는 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.

[[Prototype]] 프로퍼티
- 모든 객체가 가지고 있는 프로퍼티이다.
- 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 Function.prototype를 가리킨다.

prototype 프로퍼티
- 함수 객체만 가지고 있는 프로퍼티이다.
- 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체를 가리킨다.
- 함수가 생성될 때 만들어 지며 constructor 프로퍼티를 가지는 객체를 가리킨다. 이 constructor 프로퍼티는 함수 객체 자신을 가리킨다.

```
function square(number) {
  return number * number;
}

// console.dir(square);
console.dir(square.__proto__);
console.dir(square.prototype);

console.log(square.__proto__ === Function.prototype); // true ①
console.log(square.__proto__ === square.prototype);   // false
console.log(square.prototype.constructor === square); // true ②
console.log(square.__proto__.constructor === square.prototype.constructor); // false
```

[[Prototype]] 프로퍼티는 함수 객체의 부모 객체(Function.prototype)를 가리키며 prototype 프로퍼티는 함수객체가 생성자 함수로 사용되어 객체를 생성할 때 생성된 객체의 부모 객체 역할을 하는 객체를 가리킨다.

<br>

## 7. 함수의 다양한 형태


### 7.1 즉시호출함수표현식(IIFE, Immediately Invoke Function Expression)

함수의 정의와 동시에 실행되는 함수를 말한다.
- 최초 한번만 호출되며 다시 호출할 수는 없다. 
- 이러한 특징을 이용하여 최초 한번만 실행이 필요한 초기화 처리등에 사용할 수 있다.

```
// 기명 즉시실행함수(named immediately-invoked function expression)
(function myFunction() {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 익명 즉시실행함수(immediately-invoked function expression)
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());
```

자바스크립트에서 가장 큰 문제점 중의 하나는 파일이 분리되어 있다하여도 글로벌 스코프가 하나이며 글로벌 스코프에 선언된 변수나 함수는 코드 내의 어디서든지 접근이 가능하다는 것이다.

따라서 다른 스크립트 파일 내에서 동일한 이름으로 명명된 변수나 함수가 같은 스코프 내에 존재할 경우 원치 않는 결과를 가져올 수 있다.

즉시실행함수 내에 처리 로직을 모아 두면 혹시 있을 수도 있는 변수명 또는 함수명의 충돌을 방지할 수 있어 이를 위한 목적으로 즉시실행함수를 사용되기도 한다.

특히 jQuery와 같은 라이브러리의 경우, 코드를 즉시실행함수 내에 정의해 두면 라이브러리의 변수들이 독립된 영역 내에 있게 되므로 여러 라이브러리들은 동시에 사용하더라도 변수명 충돌과 같은 문제를 방지할 수 있다.


```
(function () {
  var foo = 1;
  console.log(foo);
}());

var foo = 100;
console.log(foo);
```


왜 이걸 할까? 단 한번만 호출된다. 

함수 선언문 => 함수 객체 => 호출할 수 있다.


전역이 1개다 -> 파일이 나눠져있을때, 1개로 뭉쳐진 것이랑 똑같다.(변수의 중복) -> 의도치 않게 값을 변경할 수 있음

모듈화를 지원하지 않는다. 
- a.js -> var x;
- b.js -> var x;

전역변수: 애플리케이션이 죽지 않는한, 전역변수는 메모리에 계속 가지고 있다.

유효범위를 지정해서 변수의 생명은 여기서 저기까지다라고 지정하는 것(scope)


즉시호출함수표현식: 인위적으로 스코프를 만들어줘서, 생명주기가 끝나고, 함수 내부에 선언된 변수는 중복될 일이 없다.


함수 내에서 변수를 선언하게 되면, 지역변수이다.
이 지역변수는 함수를 호출하고 내에서 작동한 후, 생명주기가 끝난다.
즉, 메모리를 차지하고 있는 변수의 생명주기가 끝난다.
즉, 메모리를 효율적으로 사용할 수 있다. 
전역변수를 사용하면 안된다.
(변수란? 메모리에 저장하고, 다른 곳에서 여러번 사용하기 위해)

전역변수: 애플리케이션이 죽지 않는한, 전역변수는 메모리에 계속 가지고 있다.



함수는 return이 없으면, undefiend를 리턴한다.

내부 변수는 외부에서 참조할 수 없다.


<br>

### 7.2 내부 함수

함수 내부에 정의된 함수를 말한다.

- 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다. 
- 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.

```
function parent(param) {
  var parentVar = param;
  function child() {
    var childVar = 'lee';
    console.log(parentVar + ' ' + childVar); // Hello lee
  }
  child();
  console.log(parentVar + ' ' + childVar);
  // Uncaught ReferenceError: childVar is not defined
}
parent('Hello');
```

- 내부함수는 부모함수의 외부에서 접근할 수 없다.


```
function sayHello(name){
  var text = 'Hello ' + name;
  var logHello = function(){ console.log(text); }
  logHello();
}

sayHello('lee');  // Hello lee
logHello('lee');  // logHello is not defined
```

<br>

### 7.3 콜백 함수

콜백함수는 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.

콜백함수가 자주 사용되는 대표적인 예는 이벤트 핸들러 처리이다.

```
<!DOCTYPE html>
<html>
<body>
  <button id="myButton">Click me</button>
  <script>
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('button clicked!');
    });
  </script>
</body>
</html>
```

Javascript의 함수는 일급객체이다. 따라서 Javascript의 함수는 흡사 변수와 같이 사용될 수 있다.

콜백 함수는 매개변수를 통해 전달되고 전달받은 함수의 내부에서 어느 특정시점에 실행된다.
setTimeout()의 콜백 함수를 살펴보자. 두번째 매개변수에 전달된 시간이 경과되면 첫번째 매개변수에 전달한 콜백 함수가 호출된다.

```
setTimeout(function () {
  console.log('1초 후 출력된다.');
}, 1000);
```

콜백 함수는 주로 비동기식 처리 모델(Asynchronous processing model)에 사용된다. 
비동기식 처리 모델: 처리가 종료하면 호출될 함수(콜백함수)를 미리 매개변수에 전달하고 처리가 종료하면 콜백함수를 호출하는 것이다.

콜백함수는 콜백 큐에 들어가 있다가 해당 이벤트가 발생하면 호출된다. 콜백 함수는 클로저이므로 콜백 큐에 단독으로 존재하다가 호출되어도 콜백함수를 전달받은 함수의 변수에 접근할 수 있다.

```
function doSomething() {
  var name = 'Lee';

  setTimeout(function () {
    console.log('My name is ' + name);
  }, 100);
}

doSomething(); // My name is Lee
```