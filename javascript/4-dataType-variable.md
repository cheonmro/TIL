# Javascript Data type & variable

프로그래밍: 변수를 통해 값을 저장하고 참조하며 연산자로 값을 연산, 평가하고 조건문과 반복문에 의한 흐름제어로 데이터의 흐름을 제어하고, 함수로 재사용이 가능한 구문의 집합을 만들며, 객체, 배열 등으로 자료를 구조화하는 것

변수는 위치(주소)를 기억하는 저장소이다. 변수를 통해 메모리에 값을 저장하기 위해서는 우선 필요한 저장 단위(byte)를 알아야한다. 이는 값의 종류에 따라 값을 저장하기 위해 확보해야할 메모리의 크기가 다르기 때문인데, 이때 값의 종류를 데이터의 종류, 즉 자료형(Data Type)이라고 한다.

예를 들어, 1byte(8bit)로 표현할 수 있는 값의 총수는 256(2^8)개로 아스키코드(ASCII)를 표현할 수 있는데, 이는 데이터 값이 0 또는 1이기 때문이다.

<br>

## 1. 메모리에 값 저장시 다른 언어와의 차이점

메모리에 데이터를 저장할 때, C나 Java 같은 C-family 언어와 Javascript는 그 특징이 다르다.

C나 Java 같은 언어는 정적 타이핑(Static Typing) 언어로, 변수 선언시 변수에 저장할 값의 종류에 따라 사전에 자료형을 지정(Type annotation)하여야 한다.

```
int num;
```

C 언어에서 int는 4byte 크기라서, 위와 같이 변수를 int로 선언하면, 나중에 할당될 값과는 상관없이 메모리에서 4byte의 공간을 할당해준다. 따라서, 할당될 값은 int 형에 맞는 값이어야 한다.

그러나, Javascript는 동적 타이핑(Dynamic Typing) 언어로, 변수의 Type annotation이 필요없이 값이 할당되는 과정에서 자동으로 자료형이 결정(Type Inference)된다. 따라서, 같은 변수에 여러 자료형의 값을 대입할 수 있다.

*Type Inference(타입 추론): Javascript 엔진이 변수가 어떤 데이터 타입인지, 값을 할당 후, 알게 된다.

```
str라는 변수명에 'hello'라는 문자열을 할당 후, Javascript 엔진은 str 변수가 어떤 문자열 타입인지 알게 된다.
var str = 'hello';
```

<br>

## 2. Data Type(자료형)

모든 프로그래밍 언어의 학습은 자료형을 파악하는 것으로부터 시작된다.

최신 ECMAScript 표준은 7개의 자료형을 정의한다.
- 기본 자료형(primitive data type)
  - Boolean
  - null
  - undefined
  - Number
  - String
  - Symbol(ECMAScript 6에서 추가)
- 객체형(Object type)
  - Object

<br>

기본 자료형과 객체형의 차이
- 기본 자료형
  - 변경 불가능한 값(immutable value)
  - pass-by-value(값으로 접근)
  - 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장
  - 기본 자료형의 경우, 숫자 또는 문자 등으로 크기가 정해져 있기 때문에 고정된 메모리 영역을 점유하고 저장한다.
- 객체형
  - 변경 가능한 값(mutable value)
  - pass-by-reference(참조로 접근)
  - 메모리의 힙 영역(Heap Segment)에 저장
  - 객체의 경우, 크기가 정해져있지 않기 때문에, 다른 영역에 따로 저장을 해야하는 데, 그곳이 바로 Heap 영역이다.

<br>

### 2.1 Boolean

- 논리적인 요소로, true와 false 두가지 값이 있다.
- 비어있는 문자열(''), null, undefined, 숫자 0은 false로 간주된다.

```
var a = true;
var b = false;
```

<br>

### 2.2 null

- null 타입은 딱 한 가지 값, null이다.
- null은 Null 또는 NULL 등과 다르다.(Javascript는 case-sensitive)
- Computer Science에서 null의 의미는 의도적으로 기본형 또는 객체형 변수에 값이 없다는 것을 명시한 것을 말한다. 이는 변수와 메모리 주소의 참조 정보를 제거하는 것을 의미하며 Javascript 엔진은 참조가 없어진 메모리 영역에 대해 가비지 콜렉션을 수행한다.

```
var name = 'kim';
name = null; // 참조 정보가 제거된다.
```

- 설계상의 오류로, null의 데이터 형식을 확인하기 위한 'typeof'를 이용해서 확인해보면, object라고 나온다.

```
var foo = null;
console.log(typeof foo); // object
```

따라서, null 타입 변수인지 확인하기 위해서는, 일치 연산자(===)를 사용해야한다.

```
var foo = null;
console.log(foo === null); // true
console.log(typeof foo === null); // false
```

<br>

### 2.3 undefined

- 값을 할당하지 않은 변수는 기본적으로 undefined 값을 가진다.

```
var foo;
console.log(foo); // undefined
```

- 선언은 되었지만 할당된 적이 없는 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 반환된다.

```
var bar = {
  name: 'kim',
  gender: 'female'
};

console.log(bar); // { name: 'kim', gender: 'female' }
console.log(bar.baz); // undefined
```

<br>

### 2.4 Number

숫자형에 관련해서 C 언어와 Javascript는 다르다.

C 언어는 정수형과 실수형을 구분하여 int, long, float, double 등과 같은 다양한 숫자 자료형이 존재한다.

그러나, Javascript는 하나의 숫자 자료형만 존재한다.

```
var a = 5; // 정수
var a = 5.5; // 실수
var a = -5; // 음의 정수

var foo = 10 / 0;
console.log(foo); // Infinity
console.log(typeof foo); // number

var bar = 1 + 'string';
console.log(bar); // NaN
console.log(typeof bar); number
```

위와 같이, 변수의 값이 정수, 실수, 무한대(Infinity), 또는 'NaN'이라도 변수의 자료형은 항상 'number'이다.  


<br>

### 2.5 String

- 텍스트 데이터로, 0개 또는 그 이상의 유니코드(16비트 부호없는 정수 값) 문자들의 집합이다.
- 작은 따옴표('') 또는 큰 따옴표("") 안에 텍스트를 넣어 생성한다.

```
var str = 'hello'; // single quotes
var str = "hi"; // double quotes
console.log(typeof str); // string
```

- C 언어에서의 문자열은 기본적으로 문자가 몇개가 추가될지 모르기 때문에, 기본자료형으로 취급하지 않는다. 즉, 변경이 가능하다. 그러나, Javascript에서의 문자열은 기본자료형으로 변경이 불가능하다. 이는 한 번 문자열이 생성되면, 그 문자열은 변경할 수 없다는 것을 의미한다.


```
var str = 'string';
str = 'another';
```

- 첫번째 구문이 실행되면, 메모리에 문자열 'string'이 생성되고 식별자 str은 메모리에 문자열 'string'의 메모리 주소를 가리킨다.
- 두번째 구문이 실행되면, 이전에 생성된 문자열 'string'을 수정하는 것이 아니라, 새로운 문자열 'another'를 메모리에 생성하고, 식별자 str은 이것을 가리킨다.
- 이때, 중요한 것은 메모리에 두 문자열다 존재하고 있다는 것이다. 즉, 변수 str은 문자열 'string'을 가리키고 있다가, 문자열 'another'를 가리키도록 변경되었을 뿐이다.


<br>

- 문자열은 유사배열이다.


유사배열이란, 문자열은 배열이 아니지만, 배열처럼 인덱스를 통해 문자열의 각 문자에 접근이 가능하다는 의미이다.

```
var str = 'string';
console.log(str[0], str[1]); // 's', 't'
```

그러나, 이미 생성된 문자열에 새로운 문자를 대입하여 변경시키지는 못한다.

```
str[0] = 'k';
console.log(str); // string
```

문자열은 기본 자료형으로써, 변경 불가능(immutable)하기 때문에 수정은 불가능하다.

그러나, 재할당을 함으로써, 기존 문자열을 수정하는 것이 아닌, 새로운 문자열을 할당이 가능하다.

```
var str = 'string';
console.log(str); // string

str = 'ktring';
console.log(str); // ktring
```


<br>

### 2.6 Symbol

- ES6에서 새롭게 추가된 7번째 기본자료형이다.
- 애플리케이션 전체에서 유일하며, 변경이 불가능하다.
- 주로 객체의 프로퍼티 키(property key)로 사용한다.
- Symbol 값은 애플리케이션 전체에서 유일하기 때문에, Symbol 값을 키로 갖는 프로퍼티는 다른 어떠한 프로퍼티와도 충돌하지 않는다.

```
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
```

<br>

## 3. 변수(Variable)

변수는 다른 사용자가 변수의 존재 목적을 쉽게 이해할 수 있도록, 의미있는 이름을 지정해야 한다.

```
var age = 20; // ok
var k = 10; // NG
```

변수명은 명명 규칙이 존재한다.
- 변수명의 첫 시작은 영문자(특수문자 제외), underscore(_), 또는 달러 기호($)로 시작해야 한다.
- 이어지는 문자에는 숫자(0~9)도 사용할 수 있다.
- Javascript는 대/소문자를 구별하기 때문에, 'A'~'Z'(대문자)와 'a'~'z'(소문자)를 구별해서 사용할 수 있다.

<br>

변수를 선언할 때는, 'var' 키워드를 사용하고, '='를 사용해서 값을 할당한다.

```
var age; // 변수 age 선언 
age = 10; // 변수 age에 값 10을 할당

var age = 10; // 선언과 할당을 동시에
```
<br>

값을 할당하지 않고, 변수 선언만 한다면, 초기값은 undefined이다. 그리고, 미선언 변수에 접근하면, ReferenceError 예외가 발생한다.

```
var foo;
console.log(foo); // undefined
console.log(bar); // ReferenceError
```


<br>

## 변수의 특징

### 3.1 변수의 중복 선언

변수는 중복 선언이 가능하지만, 의도하지 않게 변수의 값을 변경할 수 있으므로 사용하지 않는 것이 좋다.

```
var num = 10;
console.log(num); // 10

// 변수의 중복 선언
var num = 100;
console.log(num); // 100

```

<br>

### 3.2 변수 선언시 var 키워드 생략 허용

변수 선언시 var 키워드를 생략할 수 있지만, 의도하지 않게 변수를 전역화할 수 있기 때문에, 사용하지 않는 것이 좋다.

```
num = 10;
console.log(num);
```

<br>

### 3.3 동적 타이핑(Dynamic Typing)

Javascript는 동적 타입의 언어로, 변수 선언시 데이터 타입을 정해주지 않고, 값을 할당하는 과정에서 자동으로 자료형이 결정된다.
따라서, 같은 변수에 여러 자료형의 값을 대입할 수 있다. 이를 동적 타이핑이라고 한다.


```
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 10;
console.log(typeof foo);  // number

foo = 10.25;
console.log(typeof foo);  // number

foo = 'hello';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean
```


<br>

### 3.4 변수 호이스팅(Variable Hoisting)

C 언어 등 C-family 언어와는 다르게, Javascript의 모든 선언문은 '호이스팅'이 되는 Javascript만의 특징이 있다.

호이스팅이란, Javascript의 모든 선언문(var, let, const, function, function*, class)이 해당 Scope의 최상단으로 옮겨진 것처럼 행동하는 것을 말한다. 즉, Javascript의 모든 선언문이 선언되기 전부터, 변수를 참조할 수 있게 된다.

```
console.log(num); // 1. -> undefined
var num = 100;
console.log(num); // 2. -> 100
{
  var num = 5;
}
console.log(num); // 3. -> 5
```

위 코드를 처음 봤을 때, 첫줄의 출력 값은 Error가 날 것이라고 예상 할 수 있다.
그러나, 위 Javascript의 코드는 변수 호이스팅이 있기 때문에, undefined를 출력한다.

Javascript 엔진이 위 코드를 읽어들일 때, 제일 먼저 선언문부터 읽는다.
그리고, 그 중 제일 첫번째로 선언된 변수를 찾아, 그 변수를 선언하고, 초기화를 한다.
이때, 변수의 호이스팅 때문에, 선언문은 해당 Scope의 최상단, 즉 제일 윗줄로 옮겨진 것처럼 행동하여,
'num'을 출력(console.log(num)) 하기 전에, 변수가 존재하는 것처럼 행동하고, 이 변수는 선언이 되고,
초기화까지 되었기 때문에(변수를 초기화하면, 'undefined'를 메모리에 할당한다.), console.log(num)의 
결과로는 'undefined'가 출력된다.

기본적으로, var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 
변수가 선언이 될 때, 스코프에 Variable Object가 생성이 되고, 여기에 변수가 등록이 되어있어, 
변수 선언문 이전에 변수에 접근해도 에러가 발생하지 않는다.
다만, 초기화 단계에서 변수는 메모리에 공간을 확보한 후, undefined를 저장하기 때문에, undefined를 반환한다.
이후, 변수 할당문에 도달하여 값의 할당이 이루어진다.


<br>

호이스팅 관점에서 다시 코드를 보자.

```
console.log(num); // 1. -> undefined
var num = 100;
console.log(num); // 2. -> 100
{
  var num = 5;
}
console.log(num); // 3. -> 5
```

'1.'이 실행되기 이전에 var num = 100;가 호이스팅되어 '1.' 구문 위에(최상단) var num;가 옮겨진 것처럼 된다.
실제로 변수 선언이 코드 레벨로 옮겨 진것은 아니고, 변수 객체(Variable Object)에 등록되고, undefined로 초기화된 것이다.
그러나, 변수 선언 단계와 초기화 단계가 할당 단계와 분리되어 진행되기 때문에, 이 단계에서는 num에 undefined가 할당되어 있다.
변수 num에 값이 할당되는 것은 두번째 행(var num = 100;)에서 실시된다.

마지막 줄에서는 숫자 5가 출력이 되는데, 이는 코드 블록안에서 새롭게 변수가 중복 선언이 되어 num의 값이 5로 바뀌었기 때문이다.
Javascript는 function-level scope를 갖기 때문에, 변수의 유효범위가 코드 블록에는 영향이 없다.


<br>

### 3.5 Scope

C 언어 등의 C-family가 block-level scope를 갖는 것과는 다르게, Javascript는 function-level scope를 갖는다.

- function-level scope
  - 함수 내부에서 선언된 변수는 함수 내에서만 유효하고, 함수 외부에서는 참조할 수 없다.
  - 함수 내부에서 선언된 변수를 지역 변수라고 하고, 함수 외부에서 선언된 변수는 모두 전역 변수라고 한다.
- block-level scope
  - 코드 블럭('{}') 내에서 선언된 변수는 코드 블럭 내에서만 유효하고, 코드 블럭 외부에서는 참조가 불가능하다.
  - 코드 블럭('{}') 내에서 선언된 변수를 지역 변수라고 하고, 코드 블럭 외부에서 선언된 변수를 모두 전역 변수라고 한다.


<br>

### 3.6 var 키워드로 선언된 변수의 문제점

- Function-level scope로 인한 전역 변수의 남발
  - for loop 초기화식에서 사용한 변수가 for loop 외부 또는 전역에서 전역변수로 사용될 수 있다.
- var 키워드 생략 허용
  - 의도하지 않은 변수가 전역변수로 사용될 수 있다.
- 중복 선언 허용
  - 의도하지 않게 변수의 값이 변경될 수 있다.
- 변수 호이스팅
  - 변수를 선언하기 전에 변수를 참조할 수 있다.

<br>

결국, 대부분의 문제는 전역 변수로 인해 발생한다.
전역변수는 범위(scope)가 넓어서 어디에서 어떻게 사용될지 파악하기 힘들기 때문에, 의도치 않게 변수를 변경시켜 문제가 발생할 수가 있다.
그래서, 간단한 애플리케이션의 경우, 사용이 편리하다는 점을 제외하고는 사용을 제한하는 것이 좋다.

즉, 변수의 범위는 좁을수록 좋다.

이를 보완하기 위해, ES6에서는 'let'과 'const'를 도입했다.
