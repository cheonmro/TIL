# Javascript Object

## 1. 객체(Object)란 무엇인가

Javascript에서 기본자료형을 제외한 나머지 모든 값(함수,배열, 정규표현식 등)을 객체라고한다.

객체: 데이터와 그 데이터에 관련된 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다.
- 프로퍼티(property): 이름(키)과 값으로 구성된 데이터
- 메소드: 값 대신 동작(함수)을 나타내는 데이터

<br>

### 1.1 프로퍼티(Property)

- 프로퍼티 이름: 빈 문자열('')을 포함하는 문자열과 숫자
- 프로퍼티 값: 'undefined'를 제외한 모든 값


<br>

### 1.2 메소드(Method)

객체에 제한되어 있는 함수를 말한다.
즉, 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.

<br>

## 2. 객체 생성 방법

Java: 클래스가 존재하여, 클래스를 사전에 정의하고 필요한 시점에 new 연산자를 사용하여 instance를 생성하는 방식으로 객체를 생성한다.

Javascript: 클래스라는 개념이 없고, 별도의 객체 생성방법이 존재한다.
(ES6에서 Class가 새로 추가되었는데, Class는 기존 프로토타입 기반 객체지향 프로그래밍보다 Class 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순하고 깨끗한 문법을 제시한다. ES6의 Class가 새로운 객체지향 모델을 제공하는 것이 아니며 Class도 사실 함수이고, 기존 프로토타입 기반 패턴의 Syntactic sugar이다.)

```
*Syntactic sugar:
In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.
```

<br>

### 2.1 객체 리터럴

가장 자주 사용하고, 쉽고 간편한 객체 생성 방식

1개 이상의 프로퍼티 이름(Property name): 프로퍼티 값(Property value)을 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다.

```
var person = {
  name: 'Kim',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'Kim', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee
```

특징: 
- 생성자 함수를 사용한 객체 생성 방식과 달리 new 연산자를 사용할 필요없이 선언과 동시에 instance가 생성된다.
- Javascript 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다. 즉, 객체 리터럴로 객체를 생성할 때, 내장(Built-in) 함수인 Object() 생성자 함수로 객체를 생성하는 것을 단순화 시킨 축약법(short-hand)이다.

<br>

### 2.2 Object() 생성자 함수

new 연산자와 Object() 생성자 함수를 사용하여 빈 객체를 생성하는 방식
빈 객체 생성후, 프로퍼티와 메소드를 추가하여 객체를 완성하는 방법

- 객체의 프로퍼티에 새로운 값을 할당하여, 값을 변경한다.
- 객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면, 해당 객체에 프로퍼티를 추가하고 값을 할당한다.


```
// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Kim';
person.gender = 'male';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // { name: 'Kim', gender: 'male', sayHello: [Function] }

person.sayHello(); // Hi! My name is Lee
```

<br>

### 2.3 생성자 함수

객체를 생성하기 위한 템플릿(클래스)처럼 사용하여, 구성이 동일한 객체 여러개를 간편하게 생성할 수 있는 객체 생성 방식

```
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```

특징
- 생성자 함수임을 인식하도록 하기 위해, 생성자 함수의 이름은 대문자로 시작한다.
- 프로퍼티 또는 메소드명 앞에 기술한 'this'는 생성자 함수가 생성할 instance를 가리킨다.
- this에 연결(바인딩)되어 있는 프로퍼티와 메소드는 public(외부에서 참조 가능)하다.
- 생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다. 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나, 외부에서는 접근할 수가 없다.


```
function Person(name, gender) {
  var married = true;         // private
  this.name = name;           // public
  this.gender = gender;       // public
  this.sayHello = function(){ // public
    console.log('Hi! My name is ' + this.name);
  };
}

var person = new Person('Lee', 'male');

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.gender);  // 'male'
console.log(person.married); // undefined
```

Javascript의 생성자 함수: 객체를 생성하는 함수
- 기존 함수와 동일한 방법으로 생성자 함수를 선언하고, new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.(Java와 같은 클래스 기반 객체지향 언어의 생성자(Constructor)와는 다르다.)
- 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지해야 한다.(생성자 함수가 기존 함수와 동일한 방식으로 선언하기 때문에, 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있기 때문이다.)
- new 연산자와 함께 함수를 호출하면 'this' 바인딩이 다르게 동작한다.

<br>

## 3. 객체 프로퍼티 접근

### 3.1 프로퍼티 이름

- 기본적으로 문자열(빈 문자열('')도 포함)로 작성 가능하다.
- 숫자로도 작성 가능하지만, 암묵적으로 형변환되어 문자열이 된다.
- 프로퍼티 이름의 문자열은 따옴표('' 또는 "")를 사용한다.
- Javascript에서 사용가능한 유요한 이름인 경우, 따옴표를 생략 가능하다.
- 프로퍼티 값은 'undefined'를 제외한 모든 값과 표현식이 올 수 있다.

```
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  1: 10,
  function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};

console.log(person.function);
```

프로퍼티 이름 first-name에는 반드시 따옴표를 사용해야 한다. 
이는 Javascript에서 사용 가능한 유효한 이름이 아니고, 
'-' 연산자가 있는 표현식이기 때문에 '-' 연산자 양쪽에 있는 피연산자(first, name)를
형변환하여 서로 뺄려고 한다. 대신에, first_name은 따옴표를 생략하고, 사용 가능하다.

프로퍼티 이름으로 예약어(키워드)를 따옴표 없이 사용가능하다.
하지만, 예상치 못한 에러가 발생할 수도 있기 때문에, 사용하지 않는 것이 좋다.

```
abstract  arguments boolean break byte
case  catch char  class*  const
continue  debugger  default delete  do
double  else  enum* eval  export*
extends*  false final finally float
for function  goto  if  implements
import* in  instanceof  int interface
let long  native  new null
package private protected public  return
short static  super*  switch  synchronized
this  throw throws  transient true
try typeof  var void  volatile
while with  yield
// *는 ES6에서 추가된 예약어
```

<br>

### 3.2 프로퍼티 값 읽기

객체의 프로퍼티에 접근하는 방법
- 마침표(.) 표기법
- 대괄호([]) 표기법

```
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  1: 10
};

console.log(person);

console.log(person.first-name);    // NaN: undefined-undefined
console.log(person[first-name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'Ung-mo'

console.log(person.gender);    // 'male'
console.log(person[gender]);   // ReferenceError: gender is not defined
console.log(person['gender']); // 'male'

console.log(person['1']); // 10
console.log(person[1]);   // 10 : person[1] -> person['1']
console.log(person.1);    // SyntaxError
```

- 프로퍼티 이름이 유효한 자바스크립트 이름이고 예약어가 아닌 경우: 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용 가능
- 프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우: 프로퍼티 값은 대괄호 표기법으로 읽어야 한다. 대괄호([]) 표기법을 사용하는 경우, 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.

<br>

객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 반환한다.

```
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

console.log(person.age); // undefined
```

<br>

### 3.3 프로퍼티 값 갱신(변경)

객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면, 프로퍼티 값은 갱신(변경)된다.

```
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name'] ); // 'Kim'
```

<br>

### 3.4 프로퍼티 동적 생성

객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면, 해당 프로퍼티를 객체에 추가하고 값을 할당한다.

```
var person = {
  'first-name': 'yongin',
  'last-name': 'Lee',
  gender: 'male',
};

person.age = 10;
console.log(person.age); // 10
```

<br>

### 3.5 프로퍼티 삭제

delete 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다.

```
var person = {
  'first-name': 'yongin',
  'last-name': 'Lee',
  gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'yongin', last-name: 'Lee'}
```

<br>

### 3.6 for-in 문

for-in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프(반복문)를 수행할 수 있다.

```
var person = {
  'first-name': 'yongin',
  'last-name': 'Lee',
  gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: yongin
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/

```


for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법이다. 
즉, 배열에는 사용하지 않는 것이 좋은데, 그 이유는 아래와 같다.

- 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문이다. 배열은 순서를 의식하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.

- 배열 요소들만을 순회하지 않는다.


```
// 배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/

```

이와 같은 for-in 문의 단점을 극복하기 위해 ES6에서 for-of 문이 추가되었다.

```
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/
```

- for–in 문: 객체의 프로퍼티를 순회하기 위해 사용
- for–of 문: 배열의 요소를 순회하기 위해 사용한다.

<br>

## 4. Pass-by-Value vs Pass-by-Reference

Pass-by-Value
- 기본자료형의 값은 값(Value)으로 전달한다.(값이 복사되어 전달된다.)
- 기본자료형의 값은 한번 정해지면 변경할 수 없다.(Immutable)
- 기본자료형의 값은 런타임(변수 할당 시점)에 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장된다.

```
// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false
```

<br>

Pass-by-Reference
- 객체형의 값은 실제 값이 아닌 값을 참조하여 전달한다.(값의 주소(address)를 참조한다.)
- 객체형은 변경 가능(mutable)한 값으로, 프로퍼티를 변경, 추가, 삭제가 가능하다.
- 객체형의 값은 동적으로 변화할 수 있어서 어느 정도의 메모리 공간이 필요한지를 알 수가 없기 때문에, 런타임(변수 할당 시점)에 메모리 공간을 확보하고, 메모리의 힙 영역(Heap Segment)에 저장된다.

```
// Pass-by-reference
var foo = {
  val: 10
}

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true
```

<br>

두 변수사이에 같은 내용을 할당하여도, 각 별개의 객체를 생성하여, 서로 다른 참조값을 가진다.

```
var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);      // true
```

<br>

서로 다른 빈 객체 참조 및 모두 같은 빈 객체 참조(예제)

```
var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true
```

<br>

### 5. 객체의 분류

Object
- Built-in Object: 웹페이지 등을 표현하기 위한 공통의 기능을 제공하는 Javascript 엔진에 내장되어 있는 객체
  - Standard Built-in Object
  - Native Object
    - BOM(Browser Object Model)
    - DOM(Document Object Model)
- Host Object: 사용자가 직접 생성한 객체. Built-in Object를 이용해서 새롭게 생성한 객체.