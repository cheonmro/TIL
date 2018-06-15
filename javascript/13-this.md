# Javascript this

this는 다음과 같은 규칙을 따른다.

```
기본적으로, this는 전역객체(window)를 가리킨다.

예외1: 생성자 함수내의 this는 생성자 함수가 생성한 객체를 가리킨다.

예외2: 메소드 내에서 this는 메소드를 호출한(소유한) 객체를 가리킨다.

그외는 this는 언제나 window를 가리킨다.

또는, 명시적으로 this를 바꿀 수 있다.(apply() & call() 메소드 사용)
```
<br>
자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, arguments 객체와 this를 암묵적으로 전달 받는다.

```
function square(number) {

  console.log(arguments);
  console.log(this);

  return number * number;
}

var result = square();
```
<br>

Javascript v. Java(타언어)
- 자바스크립트: 해당 함수 호출 패턴에 따라 this에 바인딩되는 객체가 달라진다.
- Java: this는 인스턴스 자신(self)을 가리키는 참조변수이다. this가 객체 자신에 대한 참조 값을 가지고 있다는 뜻이다. 주로 매개변수와 객체 자신이 가지고 있는 멤버변수명이 같을 경우 이를 구분하기 위해서 사용된다. 즉, this에 바인딩되는 객체는 한가지이다.

```
public Class Person {

  private String name;

  public Person(String name) {
    this.name = name;
  }
}
```
<br>

## 함수 호출 패턴과 this 바인딩

자바스크립트의 경우 함수 호출 패턴에 따라 어떤 객체를 this에 바인딩할 지가 결정된다. 즉, 함수 호출 패턴에 따라 this의 참조값이 달라진다.

함수 호출 패턴은 아래와 같다.

1. 함수 호출 패턴(Function Invocation Pattern)
2. 메소드 호출 패턴(Method Invocation Pattern)
3. 생성자 호출 패턴(Constructor Invocation Pattern)
4. apply 호출 패턴(Apply Invocation Pattern)
<br>

## this를 가리키는 용어 정리

가리킨다 === 바인딩한다(된다) === 묶는다

this가 나오면, 이 this가 참조하는 것이 뭐지?
- 어떤 객체는 this를 가리킨다.
- 어떤 객체를 this에 바인딩한다.(this는 어떤 객체에 바인딩된다.)
- 어떤 객체는 this로 묶는다.


<br>

## 1. 함수 호출 패턴

전역객체(Global Object)는 모든 객체의 유일한 최상위 객체를 의미하며, 환경(브라우저, 로컬서버 등)에 따라 전역객체가 다르다.
- Browser-side: window
- Server-side(Node.js): global

```
// in browser console
this === window // true

// in Terminal
node
this === global // true
```
<br>

vscode에서 code runner를 이용해서 코드를 실행하는 것은 node.js가 실행시키는 것(브라우저에서는 js엔진)

브라우저의 탭 1개당 window 객체가 1개씩이다.

전역객체는 전역 스코프(Global Scope)를 갖는 전역변수(Global variable)를 프로퍼티로 소유한다. 글로벌 영역에 선언한 함수는 전역객체의 프로퍼티로 접근할 수 있는 전역 변수의 메소드이다.
전역변수를 선언하면, window 객체의 프로퍼티가 된다.
이때, window 객체는 생략이 가능하다.

```
var ga = 'Global variable';

console.log(ga);
console.log(window.ga);

function foo() {
  console.log('invoked!');
}
window.foo();
```
<br>

기본적으로 this는 전역객체(Global object)에 바인딩된다. 
- 전역함수는 물론이고 심지어 내부함수의 경우도 this는 외부함수가 아닌 전역객체에 바인딩된다.
- 메소드의 내부함수일 경우에도 this는 전역객체에 바인딩된다.
- 콜백함수의 경우에도 this는 전역객체에 바인딩된다.

<br>

### 전역함수는 물론이고 심지어 내부함수의 경우도 this는 외부함수가 아닌 전역객체에 바인딩된다.

```
function foo() {
  console.log("foo's this: ",  this);  // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();
```

<br>

### 메소드의 내부함수일 경우에도 this는 전역객체에 바인딩된다.

```
var value = 1;

var obj = {
  value: 100,
  foo: function() { // 이게 메소드다.
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() { // 이건 내부함수이지, 메소드는 아니다.
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  }
};

obj.foo();
```
<br>

내부함수는 메소드가 아니고, 그냥 함수일 뿐이다.
그래서, 내부함수의 this는 window를 가리킨다.


### 콜백함수의 경우에도 this는 전역객체에 바인딩된다.

```
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    setTimeout(function() { // 콜백함수는 메소드가 아니다. 그래서 this는 window를 가리킨다.
      console.log("callback's this: ",  this);  // window
      console.log("callback's this.value: ",  this.value); // 1
    }, 100);
  }
};

obj.foo();
```
<br>

더글라스 크락포드는 “이것은 설계 단계의 결함으로 메소드가 내부함수를 사용하여 자신의 작업을 돕게 할 수 없다는 것을 의미한다” 라고 말한다. 내부함수의 this가 전역객체를 참조하는 것을 회피방법은 아래와 같이 that을 써서 해결한다.

```
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    var that = this;  // Workaround : this === obj

    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1

      console.log("bar's that: ",  that); // obj
      console.log("bar's that.value: ", that.value); // 100
    }
    bar();
  }
};

obj.foo();
```
<br>

![](https://poiemaweb.com/img/Function_Invocation_Pattern.png)


<br>

메소드 호출 패턴이든 함수 호출 패턴이든 내부함수의 this는 모두 전역객체에 바인딩된다. 이러한 문제를 해소하기 위해 자바스크립트는 this 바인딩을 명시적으로 할 수 있는 call, apply 메소드를 제공한다.



<br>

## 2. 메소드 호출 패턴(Method Invocation Pattern)

this를 사용하는 이유: 자신이 소속된 객체의 프로퍼티를 가리키기 위해 


### 함수가 객체의 프로퍼티이면 메소드 호출 패턴으로 호출된다. 이때 메소드 내부의 this는 해당 메소드를 소유한 객체 즉 해당 메소드를 호출한 객체에 바인딩된다.

```
var obj1 = {
  name: 'Lee',
  sayName: function() {
    console.log(this.name);
  }
}

var obj2 = {
  name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName(); // 'Lee'
obj2.sayName(); // 'Kim'
```
<br>

![](https://poiemaweb.com/img/Method_Invocation_Pattern.png)

<br>

### 프로토타입 객체도 메소드를 가질 수 있다. 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩된다.


```
function Person(name) {
  this.name = name; // 
}

Person.prototype.getName = function() {
  return this.name; // this는 Person.prototype
}

var me = new Person('Lee');
console.log(me.getName()); // 뭐가 앞에 오느냐(이경우, 'me')가 중요하다.

Person.prototype.name = 'Kim';
console.log(Person.prototype.getName());
```
<br>

![](https://poiemaweb.com/img/prototype_metthod_invocation_pattern.png)

<br>

## 3. 생성자 호출 패턴

Javascript에서의 생성자 함수는 기존 함수에 new 연산자를 붙여서 호출하면, 해당 함수가 생성자 함수로 동작을 한다.
즉, 생성자 함수가 아닌 일반 함수에 new 연산자를 붙여서 호출해도 생성자 함수처럼 동작할 수 있다.
따라서, 혼란을 방지하기 위해, 생성자 함수명은 첫문자를 대문자로 기술한다.

new 연산자와 함께 생성자 함수를 호출하면, this 바인딩이 메소드나 함수 호출 때와는 다르게 동작한다.

<br>

### 3.1 생성자 함수 동작 방식

new가 하는일:(new를 붙였을 때, 생성자 함수가 하는 일)
- 생성자함수 첫라인에 빈객체를 만든다.
- this가 그 빈객체를 가리키도록 바인딩한다.
- this를 리턴한다.(생성된 객체가 리턴된다.)

<br>

new 연산자와 함께 생성자 함수를 호출하면 다음과 같은 수순으로 동작한다.

```
1. 빈 객체 생성 및 this 바인딩

생성자 함수의 코드가 실행되기 전 빈 객체가 생성된다. 이 빈 객체가 생성자 함수가 새로 생성하는 객체이다. 이후 생성자 함수 내에서 사용되는 this는 이 빈 객체를 가리킨다. 그리고 생성된 빈 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.

2. this를 통한 프로퍼티 생성

생성된 빈 객체에 this를 사용하여 동적으로 프로퍼티나 메소드를 생성할 수 있다. this는 새로 생성된 객체를 가리키므로 this를 통해 생성한 프로퍼티와 메소드는 새로 생성된 객체에 추가된다.

3. 생성된 객체 반환

- 반환문이 없는 경우, this에 바인딩된 새로 생성한 객체가 반환된다. 명시적으로 this를 반환하여도 결과는 같다.
- 반환문이 this가 아닌 다른 객체를 명시적으로 반환하는 경우, this가 아닌 해당 객체가 반환된다. 이때 this를 반환하지 않은 함수는 생성자 함수로서의 역할을 수행하지 못한다. 따라서 생성자 함수는 반환문을 명시적으로 사용하지 않는다.
```
<br>

```
function Person(name) {
  // 생성자 함수 코드 실행 전 -------- 1
  this.name = name;  // --------- 2
  // 생성된 함수 반환 -------------- 3
}

var me = new Person('Lee');
console.log(me.name); // 'Lee'
```
<br>

![](https://poiemaweb.com/img/constructor.png)

<br>

다음의 또 다른 예제를 보자.

```
function Person(name, age, gender) {

  this.name = name;
  this.gender = gender;
  this.age = age;

}

var me = new Person('Lee', 20, 'male');
```
<br>

위의 예제에서, new를 붙인 Person 생성자 함수가 하는 일의 순서는?
1. 빈객체 { }를 생성
2. this는 생성된 빈객체를 가리킨다.
3. new를 사용한 Person 생성자 함수의 인수를 매개변수로 값들을 할당한다.
4. (자식) 객체(인스턴스)를 반환한다.(이 경우, 'me')

<br>

### 3.2 객체 리터럴 방식과 생성자 함수 방식의 차이

객체 리터럴 방식과 생성자 함수 방식의 차이는 프로토타입 객체([[Prototype]])에 있다.
- 객체 리터럴 방식의 경우, 생성된 객체의 프로토타입 객체는 Object.prototype이다.
- 생성자 함수 방식의 경우, 생성된 객체의 프로토타입 객체는 Person.prototype이다.

```
// 객체 리터럴 방식
var foo = {
  name: 'foo',
  gender: 'male'
}

console.dir(foo);

// 생성자 함수 방식
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var me  = new Person('Lee', 'male');
console.dir(me);

var you = new Person('Kim', 'female');
console.dir(you);
```
<br>

### 3.3 생성자 함수에 new 연산자를 붙이지 않고 호출할 경우

일반함수와 생성자 함수에 특별한 형식적 차이는 없으며 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.

그러나 객체 생성 목적으로 작성한 생성자 함수를 new 없이 호출하거나 일반함수에 new를 붙여 호출하면 오류가 발생할 수 있다. 일반함수와 생성자 함수의 호출 시 this 바인딩 방식이 다르기 때문이다.

<br>

일반함수 v. new 연산자와 함께한 생성자 함수
- 일반 함수를 호출하면 this는 전역객체에 바인딩된다.
- new 연산자와 함께 생성자 함수를 호출하면 this는 생성자 함수가 암묵적으로 생성한 빈 객체에 바인딩된다.

```
function Person(name) {
  // new없이 호출하는 경우, 전역객체에 name 프로퍼티를 추가
  this.name = name;
};

// 일반 함수로서 호출되었기 때문에 객체를 암묵적으로 생성하여 반환하지 않는다.
// 일반 함수의 this는 전역객체를 가리킨다.
var me = Person('Lee');

console.log(me); // undefined
console.log(window.name); // Lee
```
<br>

생성자 함수를 new 없이 호출한 경우, 함수 Person 내부의 this는 전역객체를 가리키므로 name은 전역변수(window)에 바인딩된다. 또한 new와 함께 생성자 함수를 호출하는 경우에 암묵적으로 반환하던 this도 반환하지 않으며, 반환문이 없으므로 undefined를 반환하게 된다.

<br>

#### Scope-Safe Constructor

일반함수와 생성자 함수에 특별한 형식적 차이는 없기 때문에 일반적으로 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지하려는 노력을 한다. 그러나 이러한 규칙을 사용한다 하더라도 실수는 발생할 수 있다.

이러한 위험성을 회피하기 위해 사용되는 패턴(Scope-Safe Constructor)은 다음과 같다. 이 패턴은 대부분의 라이브러리에서 광범위하게 사용된다.

참고로 대부분의 빌트인 생성자(Object, Regex, Array 등)는 new 연산자와 함께 호출되었는지를 확인한 후 적절한 값을 반환한다.

다시 말하지만 new 연산자와 함께 생성자 함수를 호출하는 경우, 생성자 함수 내부의 this는 생성자 함수에 의해 생성된 인스턴스를 가리킨다. 따라서 아래 A 함수가 new 연산자와 함께 생성자 함수로써 호출되면 A 함수 내부의 this는 A 생성자 함수에 의해 생성된 인스턴스를 가리킨다.

```
함수명: callee

// Scope-Safe Constructor Pattern
function A(arg) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈객체를 생성하고 this에 바인딩한다.

  /*
  this가 호출된 함수(arguments.callee, 본 예제의 경우 A)의 인스턴스가 아니면 new 연산자를 사용하지 않은 것이므로 이 경우 new와 함께 생성자 함수를 호출하여 인스턴스를 반환한다.
  arguments.callee는 호출된 함수의 이름을 나타낸다. 이 예제의 경우 A로 표기하여도 문제없이 동작하지만 특정함수의 이름과 의존성을 없애기 위해서 arguments.callee를 사용하는 것이 좋다.
  */
  if (!(this instanceof arguments.callee)) { // arguments.callee 함수명 참조
    return new arguments.callee(arg);
  }

  // 프로퍼티 생성과 값의 할당
  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
```
<br>

생성자 함수에서 new 연산자를 사용하지 않는 경우에는 new와 함께 생성자 함수를 호출하여 인스턴스를 반환하도록 코드를 작성한다.

<br>


## 4. apply 호출 패턴

apply 호출 패턴: 명시적으로 this를 바꾸고 싶을때 사용

this에 바인딩될 객체는 함수 호출 패턴에 의해 결정된다. 이는 자바스크립트 엔진이 수행하는 것이다. 
또한, this를 특정 객체에 명시적으로 바인딩하는 방법도 제공되는데, 이것을 가능하게 하는 것이 Function.prototype.apply, Function.prototype.call 메소드이다.

이 메소드들은 모든 함수 객체의 프로토타입 객체인 Function.prototype 객체의 메소드이다.

```
func.apply(thisArg, [argsArray])

// thisArg: 함수 내부의 this에 바인딩할 객체
// argsArray: 함수에 전달할 argument의 배열
```
<br>

apply: 함수를 호출하는게 주 목적

기억해야 할 것은 apply() 메소드를 호출하는 주체는 함수이며 apply() 메소드는 this를 특정 객체에 바인딩할 뿐 본질적인 기능은 함수 호출이라는 것이다.

```
var Person = function (name) {
  this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }
```
<br>

빈 객체 foo를 apply() 메소드의 첫번째 매개변수에, argument의 배열을 두번째 매개변수에 전달하면서 Person 함수를 호출하였다. 이때 Person 함수의 this는 foo 객체가 된다. Person 함수는 this의 name 프로퍼티에 매개변수 name에 할당된 인수를 할당하는데 this에 바인딩된 foo 객체에는 name 프로퍼티가 없으므로 name 프로퍼티가 동적 추가되고 값이 할당된다.

<br>

### apply() 메소드의 대표적인 용도
- arguments 객체와 같은 유사 배열 객체에 배열 메소드를 사용하는 경우
- 콜백 함수의 this를 위해서 사용되기도 한다.

<br>

### arguments 객체와 같은 유사 배열 객체에 배열 메소드를 사용하는 경우

유사배열객체를 왜 배열로 변환할까?

arguments 객체는 배열이 아니기 때문에 slice() 같은 배열의 메소드를 사용할 수 없으나 apply() 메소드를 이용하면 가능하다.

```
function convertArgsToArray() {
  console.log(arguments);

  // arguments 객체를 배열로 변환
  // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
  var arr = Array.prototype.slice.apply(arguments); // arguments.slice
  // var arr = [].slice.apply(arguments);

  console.log(arr);
  return arr;
}

convertArgsToArray(1, 2, 3);
```
<br>

Array.prototype.slice.apply(arguments)의 의미
- Array.prototype.slice() 메소드를 호출하라.
- 단 this는 arguments 객체로 바인딩하라

결국 Array.prototype.slice() 메소드를 arguments 객체 자신의 메소드인 것처럼 arguments.slice()와 같은 형태로 호출하라는 것이다.

<br>

![](https://poiemaweb.com/img/apply.png)

<br>

apply() & call() 메소드
- 두 메소드의 기능은 같지만, apply() 메소드의 두번째 인자는 배열 형태로 넘기는데, call() 메소드의 두번째 인자는 각각 하나의 인자로 넘긴다.

```
Person.apply(foo, [1, 2, 3]);

Person.call(foo, 1, 2, 3);
```
<br>

### apply()와 call() 메소드는 콜백 함수의 this를 위해서 사용되기도 한다.

```
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if(typeof callback == 'function') {
    // --------- 1
    callback();
  }
};

function foo() {
  console.log(this.name); // --------- 2
}

var p = new Person('Lee');
p.doSomething(foo);  // undefined
```
<br>

1의 시점에서 this는 Person 객체이다. 그러나 2의 시점에서 this는 전역 객체 window를 가리킨다. 콜백함수를 호출하는 외부 함수 내부의 this와 콜백함수 내부의 this가 상이하기 때문에 문맥상 문제가 발생한다. 따라서 콜백함수 내부의 this를 콜백함수를 호출하는 함수 내부의 this와 일치시켜 주어야 하는 번거로움이 발생한다.

```
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    callback.call(this);
  }
};

function foo() {
  console.log(this.name);
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'
```
<br>

ES5에 추가된 Function.prototype.bind를 사용하는 방법도 가능하다. Function.prototype.bind는 함수에 인자로 전달한 this가 바인딩된 새로운 함수를 리턴한다. 즉, Function.prototype.bind는 Function.prototype.apply, Function.prototype.call 메소드와 같이 함수를 실행하지 않기 때문에 명시적으로 함수를 호출할 필요가 있다.


<br>

## 참고사항

static에서는 this가 왜 의미가 없을까? 
- this는 생성될 객체와 관련이 있다.
- static은 객체를 생성안한다.

Math 객체는 static method이다.

스프레드 연산자: (...array): 배열을 푼다.