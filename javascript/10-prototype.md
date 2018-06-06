# Javascript Prototype

## 1. 프로토타입 객체

- 타언어(Java, C++): 클래스 기반 객체지향 프로그래밍 언어
  - 객체 생성 이전에 클래스를 정의하고 이를 통해 객체(인스턴스)를 생성한다.
- Javascript: 프로토타입 기반 객체지향 프로그래밍 언어
  - 클래스 없이도 객체를 생성할 수 있다.(ECMAScript 6에서는 클래스가 추가됨)

따라서, 자바스크립트의 동작원리를 이해하기 위해서는 프로토타입의 개념을 잘 이해해야 한다.

<br>

프로토타입 객체(또는 프로토타입):
- 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있는데, 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 되는데, 여기서 부모 객체를 프로토타입 객체 또는 프로토타입이라고 한다.
- 프로토타입 객체는 생성자 함수에 의해 생성된 각각의 객체에 공유 프로퍼티를 제공하기 위해 사용한다.
- '프로토타입 객체'라고 부르는 게 더 정확하다.(프로토타입 말고)

```
var student = {
  name: 'Kim',
  score: 100
}

// Object.prototype.hasOwnProperty()
console.log(student.hasOwnProperty('name')); // true

console.dir(student); // 'dir'을 사용하면, 객체의 내부까지 살펴볼 수 있다.
```

위에서 'student' 객체를 생성하고, 'hasOwnProperty' 메소드를 사용해도, 에러가 나지 않고 작동이 된다.
왜 그럴까?
그 이유는 'student' 객체가 자신의 부모 객체인 Object.prototype이 가지고 있는 'hasOwnProperty' 메소드를 상속받아 사용할 수 있기 때문이다.

<br>

*student __proto__프로퍼티 관련된 이미지 추가할 것

<br>

- ECMAScript spec에서는 자바스크립트의 모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다.
- 그러나, 크롬 파이어폭스 등에서는 숨겨진 [[Prototype]] 프로퍼티가 __proto__프로퍼티로 구현되어 있다.
- 즉, [[Prototype]]와 __proto__프로퍼티는 같은 개념이다.


위에서, 'student' 객체는 __proto__프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고 있다.

```
var student = {
  name: 'Kim',
  score: 100
}
console.log(student.__proto__ === Object.prototype); // true
```

객체를 생성하게 되면, 각 객체의 프로토타입 객체가 결정되고, 그 프로토타입 객체는 다른 임의의 객체로 변경이 가능하다.
이것은 부모 객체인 프로토타입 객체를 동적으로 변경할 수 있다는 것을 의마하고, 이런 특징을 활용하여 객체의 상속을 구현할 수 있다.

<br>

## 2. [[Prototype]] 프로퍼티 vs prototype 프로퍼티


[[Prototype]] 프로퍼티
- 자신의 프로토타입 객체를 가리키는 숨겨진 프로퍼티를 말한다.
- 실제로 크롬, 파이어폭스 등에서는 __proto__프로퍼티로 구현되어 있어, [Prototype]]와 __proto__프로퍼티는 같은 개념이다.
- 함수를 포함한 모든 객체가 가지고 있는 프로퍼티이다.
- 객체의 입장에서, 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 Function.prototype을 가리킨다.


```
console.log(Person.__proto__ === Function.prototype);
```

<br>

prototype 프로퍼티
- 함수 객체만 가지고 있는 프로퍼티이다.
- 함수 객체가 생성자로 사용될 때, 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.

```
console.log(Person.prototype === foo.__proto__);
```

<br>

[[Prototype]] 프로퍼티와 prototype 프로퍼티의 차이점
- 두 프로퍼티 모두 프로토타입 객체를 가리킨다. 다만, '어디서'([[Prototype]] 프로퍼티 또는 prototype 프로퍼티) 프로토타입 객체를 가리키냐의 차이다.
- [[Prototype]] 프로퍼티는 함수를 포함한 모든 객체가 가지고 있지만, prototype 프로퍼티는 함수 객체만 가지고 있다.

```
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // Person은 함수 객체이므로, prototype 프로퍼티가 있다.
console.dir(foo);    // foo는 일반(자식) 객체이므로, prototype 프로퍼티가 없다.
```

객체는 프로퍼티를 가지고 있는데, 함수도 객체이므로, 함수도 객체를 가지고 있어, 다른 모든 객체와 마찬가지로 [[Prototype]] 프로퍼티를 가진다.
그러나, 다른 일반 객체와 달리 함수 객체는 prototype 프로퍼티도 가지고 있다.

<br>

## 3. constructor 프로퍼티

constructor 프로퍼티: 객체의 입장에서 자신을 생성한 객체를 가리킨다.
- 프로토타입 객체는 constructor 프로퍼티를 갖는다.

예를 들어 Person() 생성자 함수에 의해 생성된 객체를 foo라 하자. 이 foo 객체를 생성한 객체는 Person() 생성자 함수이다. 이때 foo 객체 입장에서 자신을 생성한 객체는 Person() 생성자 함수이며, foo 객체의 프로토타입 객체는 Person.prototype이다. 따라서 프로토타입 객체 Person.prototype의 constructor 프로퍼티는 Person() 생성자 함수를 가리킨다.

```
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);
```

프로토타입 객체(Person.prototype)는 constructor를 가지고 있다. 자기자식을 생성한 함수를 가리킴
foo.constructor를 사용하면, 바로 Person() 생성자함수를 찾아갈 수 있다.

<br>

## 4. Prototype chain

자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면,
[[Prototype]] 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다. 
이것을 프로토타입 체인이라 한다.

```
var student = {
  name: 'Lee',
  score: 90
}
console.dir(student);
console.log(student.hasOwnProperty('name')); // true
console.log(student.__proto__ === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
```

'student' 객체에 접근하려는 'hasOwnProperty' 메소드 없었기 때문에, 부모 역할을 하는 프로토타입 객체(Object.prototype)의
메소드 'hasOwnProperty'를 호출하였기 때문에 가능했다.

<br>

### 4.1 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인

객체 리터럴 방식으로 생성된 객체는 결국 내장 함수(Built-in)인 Object() 생성자 함수로 객체를 생성하는 것을 단순화시킨 것이다. 
자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다.

Object() 생성자 함수는 물론 함수이다. 따라서 함수 객체인 Object() 생성자 함수는 일반 객체와 달리 prototype 프로퍼티가 있다.
- prototype 프로퍼티는 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다.
- [[Prototype]] 프로퍼티는 객체의 입장에서 자신의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다.

결국, 객체 리터럴 방식으로 객체를 생성한 경우, 자바스크립트 엔진이 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성하는 것이다.
이때, 그 생성된 객체의 프로토타입 객체는 Object.prototype이다.


<br>

### 4.2 생성자 함수로 생성된 객체의 프로토타입 체인

객체를 생성하는 방식은 총 3가지가 있다.
- 객체 리터럴
- Object() 생성자 함수
- 생성자 함수

이중에서 생성자 함수로 객체를 생성하기 위해서는, 생성자 함수를 정의해야 한다.
생성자 함수 또한 함수이기 때문에, 함수를 정의하는 방식은 총 3가지가 있다.
- 함수선언식
- 함수표현식
- Function() 생성자 함수

종류를 나누면 3가지이지만, 사실 함수선언식이나 함수표현식이나 결국, 모두 함수 리터럴 방식을 사용하는 것이다.
함수 리터럴 방식은 Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것이다.

즉, 3가지 함수 정의 방식은 결국 Function() 생성자 함수를 통해 함수 객체를 생성한다.

즉, 함수 객체를 생성하는 것은, Function() 생성자 함수이기 때문에, 
어떠한(모든) 함수 객체의 프로토타입 객체는 Function.prototype이다.

그래서, 생성자 함수 또한 함수 객체이므로, 이 생성자 함수의 프로토타입 객체는 Function.prototype이다.

<br>

이때, 객체를 생성하는 방식에 의해 생성된 (인스턴스)자식 객체의 프로토타입 객체를 정리해 보면 다음과 같다.


| 객체 생성 방식        | 엔진의 객체 생성           | 인스턴의 프로토타입 객체  |
| ------------- |:-------------:| -----:|
| 객체 리터럴      | Object() 생성자 함수 | Object.prototype |
| Object() 생성자 함수      | Object() 생성자 함수      |   Object.prototype |
| 생성자 함수 | 생성자 함수      |    생성자 함수 이름.prototype |

<br>

객체 리터럴 방식으로 객체를 생성하게 되면 그 객체의 프로토타입 객체는 Object.prototype이지만, 생성자 함수 방식으로 객체를 생성하게 되면, 그 객체의 프로토타입 객체는 생성자 함수 이름.prototype이고, 이 생성자 함수 이름.prototype의 프로토타입 객체로 Object.prototype가 있다.


```
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! my name is ' + this.name);
  };
}

var foo = new Person('Lee', 'male');

console.dir(Person);
console.dir(foo);

console.log(foo.__proto__ === Person.prototype);                // ① true
console.log(Person.prototype.__proto__ === Object.prototype);   // ② true
console.log(Person.prototype.constructor === Person);           // ③ true
console.log(Person.__proto__ === Function.prototype);           // ④ true
console.log(Function.prototype.__proto__ === Object.prototype); // ⑤ true
```

foo 객체의 프로토타입 객체 Person.prototype 객체와 Person() 생성자 함수의 프로토타입 객체인 Function.prototype의 프로토타입 객체는 모두 Object.prototype이다.

Object.prototype를 프로토타입 체인의 종점이라고 하는데, 이는 객체 리터럴 방식이나 생성자 함수 방식이나 상관없이 모든 객체의 부모 객체인 Object.prototype 객체에서 프로토타입 체인이 끝나기 때문이다.

<br>

## 5. 프로토타입 객체의 확장

프로토타입 객체도 객체이므로 일반 객체와 같이 프로퍼티를 추가/삭제할 수 있다. 
그리고, 이렇게 추가/삭제된 프로퍼티는 즉시 프로토타입 체인에 반영된다.

```
function Person(name) {
  this.name = name;
}

var foo = new Person('Kim');

Person.prototype.sayHello = function(){
  console.log('Hi! my name is ' + this.name);
};

foo.sayHello();
```

위 코드의 프로세스
- Person() 생성자 함수로 객체를 만든다.
- new 연산자를 이용해서 foo 객체라는 인스턴스를 생성하는데, 이때 초기값으로 'Kim'을 넣는다.
- 그러면, foo 객체의 부모 역할을 하는 프로토타입 객체(Person.prototype)가 존재하게 된다.
- 그런데, 만약 Person.prototype에 sayHello라는 메소드를 추가하게 되면, 프로토타입 체인에 반영이 된다.
- 따라서, 생성자 함수 Person에 의해 생성된 모든 객체는 프로토타입 체인에 의해 부모객체인 Person.prototype의 메소드를 사용할 수 있게 된다.


<br>

## 6. 기본자료형(Primitive data type)의 확장

자바스크립트에서는 기본자료형과 객체가 유사하게 동작하는 경우가 있다.

```
// 기본자료형: string 문자열(str)
var str = 'test';
console.log(typeof str);                 // string
console.log(str.constructor === String); // true, 문자열 str이 가리키는 생성자 함수는 String이다.
console.dir(str);                        // test

// 객체: string 객체(strObj)
var strObj = new String('test');
console.log(typeof strObj);                 // object
console.log(strObj.constructor === String); // true
console.dir(strObj);
// {0: "t", 1: "e", 2: "s", 3: "t", length: 4, __proto__: String, [[PrimitiveValue]]: "test" }

// 기본자료형인 문자열과 string 객체 둘다 메소드에 접근하여 사용 가능하다.
console.log(str.toUpperCase());    // TEST
console.log(strObj.toUpperCase()); // TEST
```

기본자료형은 객체가 아니므로, 프로퍼티나 메소드를 가질 수 없다.
그러나, 기본자료형은 프로퍼티나 메소드를 호출할 때, 기본자료형과 연관된 객체(레퍼객체: String 객체, Number 객체 등)로 일시적으로 변환되어, 
프로토타입 객체를 공유하게 된다.

기본자료형은 객체가 아니므로, 프로퍼티나 메소드를 직접 추가할 수 없다.


즉, 기본자료형은 프로퍼티나 메소드를 가질 수도 없고, 직접 추가할 수도 없다.
단지, 프로퍼티나 메소드를 호출할 때, 기본자료형과 연관된 객체로 일시적 변환이 되고, 그때에 프로토타입 객체가 가지고 있는 프로퍼티나 메소드를 공유하는 것이다.
여기서 프로퍼티나 메소드를 호출한다는 것은, '.'점을 찍는다는 말이고, '.'를 찍게 될때, 기본자료형이 레퍼객체로 일시적으로 변환되어 프로토타입 객체가 가지고 있는 프로퍼티나 메소드를 공유하여 사용할 수 있게 된다.

```
var str = 'test';

// 에러가 발생하지 않는다.
str.myMethod = function () {
  console.log('str.myMethod');
};

str.myMethod(); // Uncaught TypeError: str.myMethod is not a function
```

다음 코드를 보면서 전체 그림을 이해하면 된다.

```
var str = 'test';

String.prototype.myMethod = function() { // String.prototype에 메소드를 추가한다.
  return 'myMethod';
}

console.log(str.myMethod()); // 기본자료형인 문자열(str)에서 String.prototype의 메소드를 사용 가능
console.dir(String.prototype); // String 객체에서 String.prototype의 메소드를 사용 가능

console.log(str.__proto__ === String.prototype);                 // ① 'str' 문자열의 프로토타입 객체는 String.prototype이다.
console.log(String.prototype.__proto__  === Object.prototype);   // ② String.prototype의 프로토타입 객체는 Object.prototype이다.
console.log(String.prototype.constructor === String);            // ③ String.prototype를 생성한 객체는 String 생성자 함수이다.
console.log(String.__proto__ === Function.prototype);            // ④ String 생성자 함수의 프로토타입 객체는 Function.prototype이다.
console.log(Function.prototype.__proto__  === Object.prototype); // ⑤ Function.prototype의 프로토타입 객체는 Object.prototype이다.
```

String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면, 기본자료형과 객체 모두에서 메소드를 사용할 수 있다.

기본적으로, String.prototype에 미리 만들어 놓은 내장객체, 즉 String.prototype의 프로퍼티와 메소드가 있다.

<br>

## 7. 프로토타입 객체의 변경

프로토타입 객체는 다른 임의의 객체로 변경이 가능하다.

다음 예를 보자.

```
function Person(name) { // Person() 생성자 함수로 객체를 생성한다.
  this.name = name;
}

var foo = new Person('Lee'); // new 연산자로 (자식) 객체 'foo'를 생성한다. 이때 자동적으로, 프로토타입 객체인 Person.prototype가 생성된다.

// 프로토타입 객체의 변경
Person.prototype = { gender: 'male' };

var bar = new Person('Kim'); // 프로토타입 객체를 변경 후, (자식) 객체 'bar'를 생성한다.

console.log(foo.gender); // undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); // ① Person(name)
console.log(bar.constructor); // ② Object()
```

프로토타입 객체(Person.prototype)를 변경하게 되면,
- 변경 전에 생성된 객체('foo')는 변경전 프로토타입 객체(Person.prototype)를 [[Prototype]]으로 가리킨다. 즉, 변경전 프로토타입 객체(Person.prototype)에 들어있었던 값을 공유하게 된다.
  - 위에서, foo.gender를 하게 되면, 변경전 프로토타입 객체(Person.prototype)에 'gender'가 없었기 때문에, 'undefined'를 출력한다.
  - 기본적으로 (자식) 객체 constructor 프로퍼티는 생성자 함수를 가리킨다. 이때는, 프로토타입 객체가 변경전이기 때문에, foo.constructor를 하게 되면, Person(name) 생성자 함수를 가리킨다.
- 변경 후에 생성된 객체('bar')는 변경후 프로토타입 객체(Person.prototype)를 [[Prototype]]으로 가리킨다. 즉, 변경후 프로토타입 객체(Person.prototype)에 들어있었던 값을 공유하게 된다.
  - 위에서, bar.gender를 하게 되면, 변경후 프로토타입 객체(Person.prototype)에 'gender'가 있기 때문에, 'male'을 출력한다.
  - 프로토타입이 변경되면, Person() 생성자 함수의 Prototype 프로퍼티가 가리키는 프로토타입 객체를 일반 객체로 변경하면서 Person.prototype.constructor 프로퍼티도 삭제된다. 따라서 프로토타입 체인에 의해 bar.constructor의 값은 프로토타입 체이닝에 의해 Object.prototype.constructor 즉 Object() 생성자 함수가 된다.

<br>


## 8. 프로토타입 체인 동작 조건

객체의 프로퍼티를 참조를 하려고 할때, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작하여, 프로토타입 객체의 프로퍼티를 참조한다.

만약, 객체의 프로퍼티에 값을 할당하게 되면, 프로토타입 체인이 동작하지 않는다. 이때,
- 객체에 해당 프로퍼티가 이미 있는 경우: 이 객체에 값을 재할당하고, 이 객체의 프로퍼티를 참조하기 때문에, 프로토타입 체인이 동작을 안한다.
- 객체에 해당 프로퍼티가 없는 경우: 해당 객체에 프로퍼티를 동적으로 추가하고, 이 객체의 프로퍼티를 참조하기 때문에, 프로토타입 체인이 동작을 안한다.


```
function Person(name) {
  this.name = name;
}

Person.prototype.gender = 'male'; // ①

var foo = new Person('Lee');
var bar = new Person('Kim');

console.log(foo.gender); // ① 'male'
console.log(bar.gender); // ① 'male'

// 1. foo 객체에 gender 프로퍼티가 없으면 프로퍼티 동적 추가
// 2. foo 객체에 gender 프로퍼티가 있으면 해당 프로퍼티에 값 할당
foo.gender = 'female';   // ②

console.log(foo.gender); // ② 'female'
console.log(bar.gender); // ① 'male'
```

<br>

## 체크사항

일반함수도 프로토타입을 가지고 있으나, 의미가 없다.

의미가 있을려면, 생성자 함수일때 의미가 있다.

생성자 함수가 동작하는 것은 'new'와 함께 쓸때, 생성자 함수라고 한다.

자신 내부에서 찾는다.
부모에서 찾는다.
조상에서 찾는다.
만약, 위로 쭉 올라갔을때(수직방향), 없으면 못 찾는다. -> 포로토타입 체인 -> 여기(object.prototype)까지 찾았는데도 없으면, 에러가 나온다.

어떤 객체도 object.prototype를 따른다.

object.prototype: 프로토타입의 종점

```
var student = {
  name: 'Lee',
  score: 90
}

// Object.prototype.hasOwnProperty()
console.log(student.hasOwnProperty('name')); // true
```

위 student 객체는 결국 Object() 생성자 함수가 만들었다.


리터럴과 생성자 함수로 만들었때 차이

동일한 함수과 있다면, 각 객체별로 따로 만드는 것이 아니라, 부모 역할을 하는 곳에 한번만 만들어놔서, 상속해서 사용한다.


리터럴로 만든다는 것은 1개의 객체만 만드다는 것.


아래와 같이 작성하여 만든다.
  Person.prototype.sayHello = function(){
  console.log('Hi! my name is ' + this.name);
};

```
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

Person.prototype.sayHello = function(){
  console.log('Hi! my name is ' + this.name);
};

foo.sayHello();
```

Object()에는 함부로 메소드 추가하면 안된다. 이것은 전체 애플리케이션에 적용되기 때문이다.


str를 생성한 constructor는 생성자 함수는 String이다.
```
console.log(str.constructor === String);
```

String: string 객체를 만드는 생성자 함수

wrapper 함수: String, Number 객체를 만드는 생성자 함수


기본자료형의 문자열은 어떻게 사용?
