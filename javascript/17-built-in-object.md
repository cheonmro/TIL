# Javascript Built-in Object

Javascript이 객체는 3개의 종류로 되어있다.
- Native object: 
  - ECMAScript에 정의되어있는 객체(환경에 영향받지 않는 코어영역, 표준), 즉 브라우저 뿐만아니라, 서버(Node.js) 등에서도 사용가능
  - 서버와 클라이언트 사이의 교집합으로써, 어디에서든 사용 가능
- Host object: 
  - 브라우저 환경에서만 작동한다.(환경에 영향을 받는다.)
- User-defined object:
  - 개발자가 직접 작성한 객체

<br>

전역객체: 모든 객체를 품는다.

브라우저: window
서버: global(예) node.js에서 작동된다.)

<br>

## 1. 네이티브 객체

네이티브 객체
- ECMAScript 명세에 정의된 객체를 말한다.
- 애플리케이션 전역의 공통 기능을 제공한다.
- 애플리케이션의 환경과 관계없이 언제나 사용할 수 있다.

<br>

Object, String, Number, Function, Array, RegExp, Date, Math와 같은 객체 생성에 관계가 있는 함수 객체와 메소드로 구성된다.

<br>

s의 차이
- Global Objects: 네이티브 객체
- Global Object: 전역객체

<br>

전역 객체(Global Object): 모든 객체의 최상위 객체를 의미
- Browser-side: window
- Server-side(Node.js): global 객체

<br>

### 1.1 Object

Object() 생성자 함수는 객체를 생성한다. 

- 만약 생성자 인수값이 null이거나 undefined이면 빈 객체를 반환한다.

```
// 변수 o에 빈 객체를 저장한다
var o = new Object();
console.log(typeof o + ': ', o);

o = new Object(undefined);
console.log(typeof o + ': ', o);

o = new Object(null);
console.log(typeof o + ': ', o);
```


- 그 이외의 경우, 생성자 함수의 인수값에 따라 강제 형변환된 객체가 반환된다. 이때 반환된 객체의 [[Prototype]] 프로퍼티에 바인딩된 객체는 Object.prototype이 아니다.

```
// String 객체를 반환한다
// var obj = new String('String');과 동치이다
var obj = new Object('String');
console.log(typeof obj + ': ', obj);
console.dir(obj);

var strObj = new String('String');
console.log(typeof strObj + ': ', strObj);

// Number 객체를 반환한다
// var obj = new Number(123);과 동치이다
var obj = new Object(123);
console.log(typeof obj + ': ', obj);

var numObj = new Number(123);
console.log(typeof numObj + ': ', numObj);

// Boolean 객체를 반환한다.
// var obj = new Boolean(true);과 동치이다
var obj = new Object(true);
console.log(typeof obj + ': ', obj);

var boolObj = new Boolean(123);
console.log(typeof boolObj + ': ', boolObj);
```

- 그러나, 객체를 생성할 경우 특수한 상황이 아니라면 객체리터럴 방식을 사용하는 것이 일반적이다.

```
// 객체리터럴을 사용하는 것이 바람직하다.
var o = {};
```

<br>

### 1.2 Function

자바스크립트의 모든 함수는 Function 객체이다. 다른 모든 객체들처럼 Function 객체는 new 연산자을 사용해 생성할 수 있다.

```
var adder = new Function('a', 'b', 'return a + b');

adder(2, 6);  // 8
```

<br>

### 1.3 Boolean

Boolean 객체는 기본자료형 boolean을 위한 레퍼(wrapper) 객체이다. Boolean 생성자 함수로 Boolean 객체를 생성할 수 있다.

```
var foo = new Boolean(true);    // true
var foo = new Boolean('false'); // true

var foo = new Boolean(false); // false
var foo = new Boolean();      // false
var foo = new Boolean('');    // false
var foo = new Boolean(0);     // false
var foo = new Boolean(null);  // false
```

Boolean 객체와 기본자료형 boolean을 혼동하기 쉽다. Boolean 객체는 true/false를 포함하고 있는 객체이다.

```
var x = new Boolean(false);
if (x) { // x는 객체로서 존재한다. 따라서 참으로 간주된다.
  // . . . 이 코드는 실행된다.
}
```

<br>

### 1.4 Number

<br>

### 1.5 Math

<br>

### 1.6 Date

<br>

### 1.7 String

<br>

### 1.8 RegExp

<br>

### 1.9 Array

<br>

### 1.10 Error

Error 생성자는 error 객체를 생성한다. error 객체의 인스턴스는 런타임 에러가 발생하였을 때 throw된다.


```
try {
  // foo();
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}
```

자바스크립트는 비동기 함수가 많다.(비동기로 로직을 처리할 때가 많다.)
비동기로 처리할때는 에러처리가 잘 안된다.

비동기 처리시 catch가 잘 안된다.
위와 같은 방법을 잘 안쓴다. 


Error 이외에 Error에 관련한 객체는 아래와 같다.

- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

<br>

### 1.11 Symbol

Symbol: 
- ECMAScript 6(Javascript 2015) 에서 추가된 유일하고 변경 불가능한(immutable) 기본자료형이다. 
- Symbol 객체는 기본자료형 Symbol을 위한 레퍼(wrapper) 객체를 생성한다.

<br>

### 1.12 기본자료형과 래퍼객체(Wrapper Object)

각 네이티브 객체는 각자의 프로퍼티와 메소드를 가진다. 
정적(static) 프로퍼티, 메소드는 해당 인스턴스를 생성하지 않아도 사용할 수 있고, prototype에 속해있는 메소드는 해당 prototype을 상속받은 인스턴스가 있어야만 사용할 수 있다.

그런데 기본자료형의 값에 대해 표준 빌트인 객체의 메소드를 호출하면 정상적으로 작동한다.

```
var str = 'Hello world!';
var res = str.toUpperCase();
console.log(res); // 'HELLO WORLD!'

var num = 1.5;
console.log(num.toFixed()); // 2
```

이는 기본자료형의 값에 대해 표준 빌트인 객체의 메소드를 호출할 때, 기본자료형의 값은 연관된 객체(Wrapper 객체)로 일시 변환 되기 때문에 가능한 것이다. 
그리고 메소드 호출이 종료되면 객체로 변환된 기본자료형의 값은 다시 기본자료형의 값으로 복귀한다.

<br>

## 2. 호스트 객체

호스트 객체(Host object):
- 브라우저 환경에서 제공하는 window, XmlHttpRequest, HTMLElement 등의 DOM 노드 객체와 같이 호스트 환경에 정의된 객체를 말한다. 
- 예를 들어 브라우저에서 동작하는 환경과 브라우저 외부에서 동작하는 환경의 자바스크립트(Node.js)는 다른 호스트 객체를 사용할 수 있다.

브라우저에서 동작하는 환경의 호스트 객체
- 전역 객체인 window
- BOM(Browser Object Model)
- DOM(Document Object Model)
- XMLHttpRequest

<br>

### 2.1 전역 객체

전역: 전체

전역 객체: 애플리케이션 전체에서 참조 가능한 객체

브라우저를 시작하자마자 전역객체(window)가 만들어짐

전역 함수: 어디에서든지 호출할 수 있는 것

애플케이션 켜지자마자 메모리에 전역 함수 등이 저장되어 있다.

의도적으로 만들 수 없다. = constructor가 없다.

**중요
전역 변수/함수는 윈도우 객체의 자식이다.

Infinity - > 전역변수로 가지고 있다.

<br>

전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미한다.

```
// in browser console
this === window // true

// in Terminal
node
this === global // true
```

- 전역 객체는 실행 컨텍스트에 컨트롤이 들어가기 이전에 생성이 되며 constructor가 없기 때문에 new 연산자를 이용하여 새롭게 생성할 수 없다. 즉, 개발자가 전역 객체를 생성하는 것은 불가능하다.
- 전역 객체는 전역 스코프(Global Scope)를 갖게 된다.
- 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있다. 예를 들어 document 객체는 전역 객체 window의 자식 객체로서 window.document…와 같이 기술할 수 있으나 일반적으로 전역 객체의 기술은 생략한다.


```
document.getElementById('foo').style.display = 'none';
// window.document.getElementById('foo').style.display = 'none';
```

- 그러나 사용자가 정의한 변수와 전역 객체의 자식 객체 이름이 충돌하는 경우, 명확히 전역 객체를 기술하여 혼동을 방지할 수 있다.

```
function moveTo(url) {
  var location = {'href':'move to '};
  alert(location.href + url);
  // location.href = url;
  window.location.href = url;
}
moveTo('http://www.google.com');
```

- 전역 객체는 전역 변수(Global variable)를 프로퍼티로 가지게 된다. 다시 말해 전역 변수는 전역 객체의 프로퍼티이다.

```
var ga = 'Global variable';
console.log(ga);
console.log(window.ga);
```

- 글로벌 영역에 선언한 함수도 전역 객체의 프로퍼티로 접근할 수 있다. 다시 말해 전역 함수는 전역 객체의 메소드이다.

```
function foo() {
  console.log('invoked!');
}
window.foo();
```

- Standard Built-in Objects(표준 빌트인 객체)도 역시 전역 객체의 자식 객체이다. 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있으므로 표준 빌트인 객체도 전역 객체의 기술을 생략할 수 있다.

```
// window.alert('Hello world!');;
alert('Hello world!');
```

<br>

#### 2.1.1 전역 프로퍼티(Global property)

- 전역 프로퍼티는 전역 객체의 프로퍼티를 의미한다. 
- 애플리케이션 전역에서 사용하는 값들을 나타내기 위해 사용한다. 
- 전역 프로퍼티는 간단한 값이 대부분이며 다른 프로퍼티나 메소드를 가지고 있지 않다.

<br>

#### 2.1.1.1 Infinity

Infinity 프로퍼티는 양/음의 무한대를 나타내는 숫자값 Infinity를 갖는다.

```
console.log(window.Infinity); // Infinity

console.log(3/0);  // Infinity
console.log(-3/0); // -Infinity
console.log(Number.MAX_VALUE * 2); // 1.7976931348623157e+308 * 2
console.log(typeof Infinity); // number
```

<br>

#### 2.1.1.2 NaN

NaN 프로퍼티는 숫자가 아님(Not-a-Number)을 나타내는 숫자값 NaN을 갖는다. NaN 프로퍼티는 Number.NaN 프로퍼티와 같다.

```
console.log(window.NaN); // NaN

console.log(Number('xyz')); // NaN
console.log(1 * 'string');  // NaN
console.log(typeof NaN);    // number
```

<br>

#### 2.1.1.3 undefined

undefined 프로퍼티는 기본자료형 undefined를 값으로 갖는다.

```
console.log(window.undefined); // undefined

var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined
```

<br>

### 2.1.2 전역 함수(Global function)

전역 함수는 애플리케이션 전역에서 호출할 수 있는 함수로서 전역 객체의 메소드이다.

<br>

#### 2.1.2.1 eval()

매개변수에 전달된 문자열 구문 또는 표현식을 평가 또는 실행한다. 
사용자로 부터 입력받은 콘텐츠(untrusted data)를 eval()로 실행하는 것은 보안에 매우 취약하다. 
eval()의 사용은 가급적으로 금지되어야 한다.

```
var foo = eval('2 + 2');
console.log(foo); // 4

var x = 5;
var y = 4;
console.log(eval('x * y')); // 20
```

<br>

#### 2.1.2.2 isFinite()

매개변수에 전달된 값이 정상적인 유한수인지 검사하여 그 결과를 Boolean으로 반환한다. 
매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 변환한 후 검사를 수행한다.

```
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite('Hello'));   // false
console.log(isFinite('2005/12/12'));   // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite('10'));      // true: '10' → 10
console.log(isFinite(null));      // true: null → 0
```

isFinite(null)은 true를 반환하는데 이것은 null을 숫자로 변환하여 검사를 수행하였기 때문이다.

```
// null이 숫자로 암묵적 강제 형변환이 일어난 경우
Number(null)  // 0
// null이 불리언로 암묵적 강제 형변환이 일어난 경우
Boolean(null) // false
```

<br>

#### 2.1.2.3 isNaN()

매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 Boolean으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 변환한 후 검사를 수행한다.

```
isNaN(NaN)       // true
isNaN(undefined) // true: undefined → NaN
isNaN({})        // true: {} → NaN
isNaN('blabla')  // true: 'blabla' → NaN

isNaN(true)      // false: true → 1
isNaN(null)      // false: null → 0
isNaN(37)        // false

// strings
isNaN('37')      // false: '37' → 37
isNaN('37.37')   // false: '37.37' → 37.37
isNaN('')        // false: '' → 0
isNaN(' ')       // false: ' ' → 0

// dates
isNaN(new Date())             // false: new Date() → Number
isNaN(new Date().toString())  // true:  String → NaN
```

<br>

#### 2.1.2.4 parseFloat()

매개변수에 전달된 문자열을 부동소수점 숫자(floating point number)로 변환하여 반환한다.

문자열의 첫 숫자만 반환되며 전후 공백은 무시된다. 그리고 첫문자를 숫자로 변환할 수 없다면 NaN을 반환한다.

```
parseFloat('3.14');     // 3.14
parseFloat('10.00');    // 10
parseFloat('34 45 66'); // 34
parseFloat(' 60 ');     // 60
parseFloat('40 years'); // 40
parseFloat('He was 40') // NaN
```

<br>

#### 2.1.2.5 parseInt()

매개변수에 전달된 문자열을 정수형 숫자(Integer)로 변환하여 반환한다.


문자열의 첫 숫자만 반환되며 전후 공백은 무시된다. 그리고 첫문자를 숫자로 변환할 수 없다면 NaN을 반환한다.

2번째 매개변수에 진법을 나타내는 기수를 지정할 수 있다. 1번째 매개변수 문자열이 0x로 시작되면 기수를 생략하여도 16진수로 인식한다, 하지만 0으로 시작되면 10진수로 인식하므로 8진수로 인식시키기 위해서는 반드시 기수 8을 지정하여야 한다.


```
parseInt('10');       // 10
parseInt('10.33');    // 10
parseInt('34 45 66'); // 34
parseInt(' 60 ');     // 60
parseInt('40 years'); // 40
parseInt('He was 40') // NaN

parseInt('0x20');     // 16진수 0X20 → 10진수 32
parseInt('10', 16);   // 16진수 10 → 10진수 16
parseInt('10', 8);    // 8진수 10 → 10진수 8
```

<br>

#### 2.1.2.6 encodeURI() / decodeURI()

encodeURI()은 매개변수로 전달된 URI(Uniform Resource Identifier)를 인코딩한다.


여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.

- 이스케이프 처리
  - 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 ASCII Character-set로 변환하는 것이다. 
  - UTF-8 특수문자의 경우, 1문자당 1~3byte, UTF-8 한글 표현의 경우, 1문자당 3btye이다. 
  - 예를 들어 특수문자 공백(space)은	%20, 한글 ‘가’는 %EC%9E%90으로 인코딩된다.
- 이스케이프 처리 이유
  - URI 문법 형식 표준 RFC3986에 따르면 URL은 ASCII Character-set으로만 구성되어야 하며 한글을 포함한 대부분의 외국어나 ASCII에 정의되지 않은 특수문자의 경우 URL에 포함될 수 없다. 
  - 따라서 URL 내에서 의미를 갖고 있는 문자(%, ?, #)나 URL에 올 수 없는 문자(한글, 공백 등) 또는 시스템에 의해 해석될 수 있는 문자(<, >)를 이스케이프 처리하여 야기될 수 있는 문제를 예방하기 위함이다.


단 아래의 문자는 이스케이프 처리에서 제외된다.
- 알파벳, 0~9의 숫자, - _ . ! ~ * ‘ ( )

decodeURI()은 매개변수로 전달된 URI을 디코딩한다.

```
encodeURI(URI)
// URI: 완전한 URI
decodeURI(encodedURI)
// encodedURI: 인코딩된 완전한 URI
```

```
var uri = 'http://example.com?name=이웅모&job=programmer&teacher';
var enc = encodeURI(uri);
var dec = decodeURI(enc);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher
```

<br>

#### 2.1.2.7 encodeURIComponent() / decodeURIComponent()

encodeURIComponent()은 매개변수로 전달된 URI(Uniform Resource Identifier) component(구성 요소)를 인코딩한다. 
여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다. 단 아래의 문자는 이스케이프 처리에서 제외된다.
- 알파벳, 0~9의 숫자, - _ . ! ~ * ‘ ( )

decodeURIComponent()은 매개변수로 전달된 URI component(구성 요소)를 디코딩한다.

encodeURIComponent()는 인수를 쿼리스트링의 일부라고 간주한다. 따라서 =, ?, &를 인코딩한다. 
반면 encodeURI()는 인수를 URI 전체라고 간주하며 파라미터 구분자인 =, ?, &를 인코딩하지 않는다.

```
encodeURIComponent(URI)
// URI: URI component(구성 요소)
decodeURIComponent(encodedURI)
// encodedURI: 인코딩된 URI component(구성 요소)
```

```
var uriComp = '이웅모&job=programmer&teacher';

// encodeURI / decodeURI
var enc = encodeURI(uriComp);
var dec = decodeURI(enc);
console.log(enc);
// %EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// 이웅모&job=programmer&teacher

// encodeURIComponent / decodeURIComponent
enc = encodeURIComponent(uriComp);
dec = decodeURIComponent(enc);
console.log(enc);
// %EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher
console.log(dec);
// 이웅모&job=programmer&teacher
```

<br>

#### 체크사항

**
전역객체의 메소드(isNaN): 형변환을 해서, 결과값을 산출 -> 사용 안한다.
Number, Math(isNaN): 형변환을 안하고, 결과값을 산출 -> 이걸 사용한다.


**parseInt()

**
0x20 -> 16진수

URI: 

Port: 번호가 없으면, Port를 한대밖에 못씀.

Path: 서버의 파일구조


HTTP
HTPPS: Secure(암호화)

href="#top": 페이지 요청이 안 일어나는 유일한 애 -> #Intro


<br>


### 2.2 BOM

- 브라우저 객체 모델: 브라우저 탭 또는 브라우저 창의 모델을 생성한다. 
  - 최상위 객체는 window 객체로 현재 브라우저 창 또는 탭을 표현하는 객체이다. 
  - 또한 이 객체의 자식 객체 들은 브라우저의 다른 기능들을 표현한다. 이 객체들은 Standard Built-in Objects가 구성된 후에 구성된다.

<br>

### 2.3 DOM

- 문서 객체 모델: 현재 웹페이지의 모델을 생성한다. 
  - 최상위 객체는 document 객체로 전체 문서를 표현한다. 
  - 또한 이 객체의 자식 객체들은 문서의 다른 요소들을 표현한다. 이 객체들은 Standard Built-in Objects가 구성된 후에 구성된다.



<br>

*object를 만드는 방법중, 마지막 방법 '생성자 함수' 방식이 중요. 클래스의 역할을 함.

