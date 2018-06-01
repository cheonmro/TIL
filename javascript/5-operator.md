# Javascript Operator

Operator(연산자): 하나 혹은 그 이상의 값을 하나의 값으로 만들 때 사용한다.

<br>

## 1. 산술 연산자(Arithmetic Operators)

- '+': 덧셈
- '-': 뺄셈
- '*': 곱셈
- '/': 나눗셈
- '%': 나머지
- '++': 증가
- '--': 감소


```
var a = 10;
var b = 5;
var k;


k = a + b;  // 15
k = a - b;  // 5
k = a * b;  // 50
k = a / b;  // 2
k = a % b;  // 0
k = a++;    // 10 선대입후증가
k = ++a;    // 12 선증가후대입
k = a--;    // 12 선대입후감소
k = --a;    // 10 선감소후대입
```

<br>

'+' 연산자는 덧셈 연산과 문자열 연결 연산을 수행한다.
- 연산 대상이 모두 숫자인 경우: 덧셈 연산
- 그 외의 경우: 문자열 연결 연산


```
var str1 = '5' + 5;      // '55'
var str2 = 5 + '5';      // '55'
var str3 = 'hi' + 5;  // 'hi5'
```

<br>

## 2. 대입 연산자(Assignment Operators)

- '=' -> x = y
- '+=' -> x += y(same as x = x + y)
- '-=' -> x -= y(same as x = x - y)
- '*=' -> x *= y(same as x = x * y)
- '/=' -> x /= y(same as x = x / y)
- '%=' -> x %= y(same as x = x % y)


```
var x;

x = 20;   // 20
x += 5;   // 25
x -= 5;   // 20
x *= 5;   // 100
x /= 5;   // 20
x %= 5;   // 0


var str = 'Hello ';
str += 'world'; // What a very nice day
```

<br>

## 3. 비교 연산자(Comparison Operators)

- '==': 동등비교(loose equality) 형변환 후, 비교한다.
- '===': 일치비교(strict equality) 타입까지 일치하여야 true를 반환한다.
- '!=': 부등비교
- '!==': 불일치비교
- '>': 관계비교
- '<': 관계비교
- '>=': 관계비교
- '<=': 관계비교
- '?': 삼항 연산자

```
var x = 5

x == 5    // true
x == '5'  // true
x == 8    // false

x === 5   // true
x === '5' // false

x != 8    // true
x != 5    // false
x != '5'  // false

x !== 8   // true
x !== 5   // false
x !== '5' // true

x > 0     // true
x > 5     // false
x > 8     // false

x < 0     // false
x < 5     // false
x < 8     // true

x >= 0    // true
x >= 5    // true
x >= 8    // false

x <= 0    // false
x <= 5    // true
x <= 8    // true


// 삼항연산자(ternary operator)
// 조건 ? 조건이 ture일때 반환할 값 : 조건이 false일때 반환할 값
var condition = true;
var result = condition ? 'true' : 'false';
console.log(result); // 'true'


// id의 길이가 INPUT_ID_MIN_LEN보다 작으면 에러 메시지를 출력한다.
var id = 'kim';
var INPUT_ID_MIN_LEN = 5;
var errMsg = id.length < INPUT_ID_MIN_LEN ? '아이디는 5자리 이상으로 입력하세요' : '성공';
console.log(errMsg); // '아이디는 5자리 이상으로 입력하세요'
```

<br>

## 4. 논리 연산자(Logical Operators)

논리 연산자: Boolean 값과 함께 사용하여, Boolean 값을 반환하는 것이 일반적이다. 피연산자 중 하나를 반환한다.

- '||': or
- '&&': and
- '!': not

```
// || (논리 합) 연산자
var or1 =  true || true;     // t || t returns true
var or2 = false || true;     // f || t returns true
var or3 =  true || false;    // t || f returns true
var or4 = false || (10 == 20); // f || f returns false


// && (논리곱) 연산자
var and1 =  true && true;     // t && t returns true
var and2 =  true && false;    // t && f returns false
var and3 = false && true;     // f && t returns false
var and4 = false && (10 == 20); // f && f returns false


// ! (논리 부정) 연산자
var not1 = !true;  // false
var not2 = !false; // true
var not3 = !'Cat'; // false
```

<br>

## 5. 단축 평가(Short-Circuit Evaluation)

논리연산자가 Boolean 값(true 또는 false)과 함께 사용되지 않을 경우(아래와 같이, true/false가 아닌 어떤 값), Boolean 값을 반환하지 않고, 어떤 값(anything)을 반환할 수 있다.
이는 논리연산자가 논리연산자 종류('||', '&&')에 따라 양쪽에 있는 피연산자 중 하나를 반환하기 때문이다.
즉, 이것이 true 또는 false가 될수도 있고, 아니면 어떤 값이 될 수도 있다.
논리연산자는 다음의 규칙을 따라서 "단축 평가"로 검사된다.

- 평가식: true || anything // 평가 결과: true
- 평가식: false || anything // 평가 결과: anything
- 평가식: true && anything // 평가 결과: anything
- 평가식: false && anything // 평가 결과: false

평가식에서 Boolean 값으로 평가하기 위해 참조하여야 할 곳까지 진행한 후,
평가를 중지하게된 계기가 된 값을 반환한다.

'||'를 사용했을 때는 이게 'or' 연산자이기 때문에, 연산자 양쪽 두 개의 피연산자 중 하나만 true여도 경우, 결과값이 true가 된다.
이때, 첫번째 값을 참조를 할 때, 이게 true이면, 다음으로 넘어가지 않고, 이 true를 반환하는데, 이때 이 true를 '평가를 중지하게된 계기가 된 값'이라고 한다.

```
var foo = 'hello' || 'hi'; // true || true returns 'hello'
```

위의 경우에서 'hello'가 true로 평가되므로, 평가는 중지되고 'hello'가 반환된다.


'&&'를 사용했을 때는 이게 'and' 연산자이기 때문에, 연산자 양쪽 두 개의 피연산자 모두가 true일 경우에, 결과값이 true가 된다.
이때, 첫번째 값을 참조를 할 때, 이게 false이면, 다음으로 넘어가지 않고, 이 false가 '평가를 중지하게된 계기가 된 값'이 되어, 이 false가 반환된다.

```
var foo = false && 'hi'; // false || true returns false
```

위의 경우에서 첫번째 값을 참조를 할 때, 이게 false이기 때문에, 다음으로 넘어가지 않고, 평가가 중지되며, 이 false가 반환된다.


```
// || (논리 합) 연산자
var or1 = 'hello' || 'hi';    // t || t returns 'hello'
var or2 = false || 'hello';    // f || t returns 'hello'
var or3 = 'hello' || false;    // t || f returns 'hello'


// && (논리곱) 연산자
var and1 = 'hello' && 'hi';    // t && t returns 'hi', 둘 다 true여서 전체적으로 true일 경우에도, '평가를 중지하게된 계기가 된 값'이 마지막에 있는 'hi'이기 때문에, 최종적으로 'hi'가 반환된다.
var and2 = false && 'hello';    // f && t returns false
var and3 = 'hello' && false;    // t && f returns false
```


```
// example
function foo (str) {
  str = str || '';
  // do somethig with str
  console.log(str.length);
}

foo('hi'); // 2
foo();     // 0
```

첫번째 함수 호출처럼 인수를 같이 입력하게 되면, 함수의 parameter에 입력되어 문제없이 함수가 진행된다.
그러나, 두번째 함수 호출처럼 인수를 입력하지 않게 되는 경우, 변수를 빈 문자열('')로 만들어주기 위해
str = str || ''; 이와 같이 사용한다.
즉, 이 경우, parameter가 'undefined'로 인식하기 때문에, str = str || '';에서 첫번째 피연산자 str이 false가 되어,
다음 피연산자로 넘어가게 되어, 결국 str은 ''(빈문자열)이 된다.



```
// example
var obj = {
  // foo: 'hi',
  bar: 'hey'
};

console.log('obj.foo is ' + obj.foo); // obj.foo is undefined


// 객체의 프로퍼티 값이 존재하는지 확인하기 위해, 아래와 같은 방식으로 자주 사용한다.
if (obj && obj.foo) {
  // do somethig with obj.foo
  console.log('obj.foo is ' + obj.foo);
}
```

<br>

## 6. 타입 연산자(Type Operators)

- typeof: 자료형을 확인할 때 사용
- instanceof: 객체가 동일 객체형의 인스턴스이면, true를 반환

```
console.log(typeof '');              // string
console.log(typeof 1);               // number
console.log(typeof NaN);             // number
console.log(typeof true);            // boolean
console.log(typeof []);              // object
console.log(typeof {});              // object
console.log(typeof new Date());      // object
console.log(typeof /test/gi);        // object
console.log(typeof function () {});  // function
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object (설계적 결함)
console.log(typeof undeclared);      // undefined (설계적 결함)


function Person() {}
var me = new Person();
console.log(me instanceof Person); // true
```

<br>

## 7. !!

피연산자를 Boolean 값으로 변환할 때 사용한다.

```
console.log(!!1);         // true
console.log(!!0);         // false
console.log(!!'string');  // true
console.log(!!'');        // false
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!{});        // true
console.log(!![]);        // true
```

- 객체(배열 포함)의 경우 빈 객체라도 존재하기만하면 true로 변환된다.
- 객체의 존재 확인 후 그 결과를 반환해야 하는 경우, !!를 사용하면 강제로 피연산자를 Boolean으로 형 변환 할 수 있다.



```
var obj;
console.log(!!obj); // false

obj = {};
console.log(!!obj); // true
```