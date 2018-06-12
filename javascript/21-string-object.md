# Javascript String

기본자료형 string을 위한 레퍼객체(String 객체)

자바스크립트는 기본자료형을 객체처럼 사용하려할때, 그 기본자료형을 객체로 만들어, 객체처럼 동작한다.
이때 필요한 것이 생성자 함수이다. 기본자료형이 string이면, String 객체로 만든다.

변수 또는 객체 프로퍼티가 문자열을 값으로 가지고 있다면, String 객체의 별도 생성없이 String 객체의 프로퍼티와 메소드를 사용할 수 있다. 이때, 기본자료형 string이 String 객체의 프로퍼티와 메소드를 호출할 때(사용할 때), 기본자료형 string은 그 기본자료형과 연관된 레퍼객체(String 객체)로 일시적으로 변환되어, 프로토타입 객체를 공유하게 되기 때문이다. 즉, 프로토타입 객체의 프로퍼티와 메소드를 사용할 수 있게 된다.

```
var str = 'hello';
var upperStr = str.toUpperCase();
console.log(upperStr); // 'HELLO'
```

위와 같이, 기본자료형 문자열을 담고 있는 변수 str이 String 객체의 메소드를 호출하게 되면, str은 연관된 레퍼객체인 String 객체로 일시적으로 변환되어, 프로토타입 객체가 가지고 있는 메소드인 'toUpperCase()'를 사용할 수 있게 된다. 즉, 변수 str은 String.prototype.toUpperCase()를 호출하는 것이다. 

<br>

## 1. String Constructor(생성자함수)

String 객체는 String() 생성자 함수를 통해 생성할 수 있는데, 이때 전달된 인자는 모두 문자열로 변환된다.

```
new String(value);
```

<br>

value를 준 이유는?
- value는 초기화 값으로써, 객체의 첫 프로퍼티의 값에 들어간다.


```
var strObj = new String('Kim');
console.log(strObj); // String {0: 'K', 1: 'i', 2: 'm', length: 3, [[PrimitiveValue]]: 'Kim'}
```

<br>

왜 한글자씩 출력될까? 
- 문자열은 객체화됐을때, 기본적으로 유사배열객체이다. 즉, 순서를 보장하기 때문에, 배열처럼 순서대로 각 문자를 나타낸다.

<br>

[[ ]]를 가지고 있으면, 숨겨진 프로퍼티를 의미, 접근하지 말아라.
- 예) [[PrimitiveValue]]

<!-- String_Constructor image -->
![](https://github.com/cheonmro/TIL/blob/master/javascript/images/String_Constructor.png?raw=true)

<br>

```
var strObj = new String(1);
console.log(strObj); // String {0: '1', length: 1, [[PrimitiveValue]]: '1'}
```

![](https://github.com/cheonmro/TIL/blob/master/javascript/images/String_Constructor2.png?raw=true)

<br>

```
var strObj = new String(undefined);
console.log(strObj); // String {0: 'u', 1: 'n', 2: 'd', 3: 'e', 4: 'f', 5: 'i', 6: 'n', 7: 'e', 8: 'd', length: 9, [[PrimitiveValue]]: 'undefined'}`
```

![](https://github.com/cheonmro/TIL/blob/master/javascript/images/String_Constructor3.png?raw=true)



위의 예제들과 같이, String 객체를 생성하기 위해서는 String 생성자 함수 앞에 'new' 연산자를 사용해야 한다.
만약, new 연산자를 사용하지 않고 String() 생성자 함수를 호출하게 되면, 문자열을 반환한다. 이때, 형 변환이 발생할 수 있다.

```
var x = String('Lee');

console.log(typeof x, x); // string Lee
```

<br>

일반적으로 문자열을 사용할 때는, 기본자료형의 문자열을 사용한다.

```
var x = 'Kim';
var y = new String('Kim');

console.log(x == y);  // true
console.log(x === y); // false

console.log(typeof x); // string
console.log(typeof y); // object
```

<br>

## 2. String Property


### 2.1 String.length

'length'는 문자열 내의 문자 갯수를 반환한다.


```
var str = 'Hello';
console.log(str.length); // 5

str = '안녕하세요';
console.log(str.length); // 5
```

ASCII 코드: 영어만(한글이 안됨)

자바스크립트는 유니코드를 쓴다.(ASCII 코드를 안쓴다.)

<br>

## 3. String Method

함수에서 기본자료형을 인수로 넣었을 때, 기본자료형은 변경이 불가능하다.(복사해서 전달하기 때문에)
함수에서 객체형을 인수로 넣었을 때, 객체는 함수내에서 변경하면 변경이 된다.(함수내에서 return을 안써도 원래 객체가 변경됨)

<br>

### 3.1 String.prototype.charAt(pos: number): string

매개변수로 전달한 index 번호에 해당하는 위치의 문자를 반환한다. index 번호는 0 ~ (문자열 길이 - 1) 사이의 정수이다.

```
var str = 'Hello';

console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o

// 지정한 index가 범위(0 ~ str.length-1)를 벗어난 경우 빈문자열을 반환한다.
console.log(str.charAt(5)); // ''

for (var i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

// String 객체는 유사 배열 객체이므로 배열과 유사하게 접근할 수 있다.
for (var i = 0; i < str.length; i++) {
  console.log(str[i]); // str['0']
}
```

유사배열객체니까 -> {'0': 'h',
                '1': 'e',
}

str['0'] 이런방식으로 접근가능하다.

<br>

### 3.2 String.prototype.concat(…strings: string[]): string

매개변수로 전달된 1개 이상의 문자열과 연결하여 새로운 문자열을 반환한다.

concat 메소드를 사용하는 것보다는 assignment operators (+, +=) 연산자를 사용하는 것이 성능상 유리하다.

```
var str = 'Hello ';
var name = 'Lee';

str = str.concat(name); // str = str + name;
console.log(str); // Hello Lee
```

str에 name을 연결한다. -> 대상문자열: concat


str = str + name 이런 방식으로 접근 가능

<br>

### 3.3 String.prototype.indexOf(searchString: string, fromIndex=0): number

매개변수로 전달된 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 곳의 index를 반환한다. 
발견하지 못한 경우 -1을 반환한다.

str에서 'l'의 인덱스는? - > str.indexOf('l')

```
var str = 'Hello World';

console.log(str.indexOf('l'));  // 2
console.log(str.indexOf('or')); // 7
console.log(str.indexOf('or' , 8)); // -1
```

<br>

### 3.4 String.prototype.lastIndexOf(searchString: string, fromIndex=this.length-1): number

매개변수로 전달된 문자 또는 문자열을 대상 문자열에서 검색하여 마지막으로 발견된 곳의 index를 반환한다. 
발견하지 못한 경우 -1을 반환한다.

2번째 인수(fromIndex)가 전달되면 검색 시작 위치를 fromIndex으로 이동하여 역방향으로 검색을 시작한다. 
이때 검색 범위는 0 ~ fromIndex이며 반환값은 indexOf 메소드와 동일하게 발견된 곳의 index이다.

```
var str = 'Hello World';

console.log(str.lastIndexOf('World')); // 6
console.log(str.lastIndexOf('l'));     // 9
console.log(str.lastIndexOf('o', 5));  // 4
console.log(str.lastIndexOf('o', 8));  // 7
console.log(str.lastIndexOf('l', 10)); // 9

console.log(str.lastIndexOf('H', 0));  // 0
console.log(str.lastIndexOf('W', 5));  // -1
console.log(str.lastIndexOf('x', 8));  // -1
```

<br>


중요: 많이 사용 ---> replace
### 3.5 String.prototype.replace(searchValue: string | RegExp, replaceValue: string): string

첫번째 인자에 전달된 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인자에 전달된 문자열로 대체한다. 
원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열을 반환한다.

검색된 문자열이 복수 존재할 경우 첫번째로 검색된 문자열만 대체된다.

```
var str = 'Hello Hello';

// 첫번째로 검색된 문자열만 대체된다.
var replacedStr = str.replace('Hello', 'Lee');

// 결과가 반영된 새로운 문자열을 반환한다.
console.log(replacedStr); // Lee Hello
// 원본 문자열은 변경되지 않는다.
console.log(str);         // Hello Hello

/* 정규표현식
g(Global): 문자열 내의 모든 패턴을 검색한다.
i(Ignore case): 대소문자를 구별하지 않고 검색한다.
*/
replacedStr = str.replace(/hello/gi, 'Lee');

console.log(replacedStr); // Lee Lee
console.log(str);         // Hello Hello
```

첫번째 인자에는 문자열 또는 정규표현식이 전달된다. 문자열의 경우 첫번째 검색 결과만이 대체되지만 정규표현식을 사용하면 다양한 방식으로 검색할 수 있다.

위의 예에서 /hello/는 패턴이라하며 검색할 대상을 의미한다. gi는 flag라 하는데 g(global)는 문자열 내에 패턴과 일치하는 모든 문자열을 검색하라는 의미이고 i(ignore)는 대소문자를 구분하지 않는다는 의미이다.


<br>

### 3.6 String.prototype.split(separator: string | RegExp, limit?: number): string[]

첫번째 인자에 전달된 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다. 원본 문자열은 변경되지 않는다.

인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.

```
var str = 'How are you doing?';

// 공백으로 구분(단어로 구분)하여 배열로 반환한다
var splitStr = str.split(' ');
console.log(splitStr); // [ 'How', 'are', 'you', 'doing?' ]
// 원본 문자열은 변경되지 않는다
console.log(str); // How are you doing?

// 인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
splitStr = str.split();
console.log(splitStr); // [ 'How are you doing?' ]

// 각 문자를 모두 분리한다
splitStr = str.split('');
console.log(splitStr); // [ 'H','o','w',' ','a','r','e',' ','y','o','u',' ','d','o','i','n','g','?' ]

// 공백으로 구분하여 배열로 반환한다. 단 요소수는 3개까지만 허용한다
splitStr = str.split(' ', 3);
console.log(splitStr); // [ 'How', 'are', 'you' ]

// 'o'으로 구분하여 배열로 반환한다.
splitStr = str.split('o');
console.log(splitStr); // [ 'H', 'w are y', 'u d', 'ing?' ]
```

<br>

제일 중요 ---> substring
### 3.7 String.prototype.substring(start: number, end=this.length): string

첫번째 인자에 전달된 index에 해당하는 문자부터 두번째 인자에 전달된 index에 해당하는 문자의 바로 이전 문자까지를 모두 반환한다. 이때 첫번째 인수 < 두번째 인수의 관계가 성립된다.

![](https://poiemaweb.com/img/substring.png)

첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.

```
var str = 'Hello World'; // str.length == 11

var res = str.substring(1, 4);
console.log(res); // ell

// 첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
res = str.substring(4, 1);
console.log(res); // ell

// 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
res = str.substring(4);
console.log(res); // o World

// 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
res = str.substring(-2);
console.log(res); // Hello World

// 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.
res = str.substring(1, 12);
console.log(res); // ello World

res = str.substring(11);
console.log(res); // ''

res = str.substring(20);
console.log(res); // ''

res = str.substring(0, str.indexOf(' '));
console.log(res); // 'Hello'

res = str.substring(str.indexOf(' ') + 1, str.length);
console.log(res); // 'World'
```

<br>

### 3.8 String.prototype.toLowerCase(): string

대상 문자열의 모든 문자를 소문자로 변경한다.

```
var str = 'Hello World!';

var res = str.toLowerCase();
console.log(res); // hello world!
```

<br>

### 3.9 String.prototype.toUpperCase(): string

대상 문자열의 모든 문자를 대문자로 변경한다.

```
var str = 'Hello World!';

var res = str.toUpperCase();
console.log(res); // HELLO WORLD!
```

<br>

### 3.10 String.prototype.trim(): string 

대상 문자열 양쪽 끝에 있는 공백 문자를 제거한 문자열을 반환한다.

```
var str = '   foo  ';
var trimmedStr = str.trim();
console.log(trimmedStr);
console.log(str);
```

이때 해당 문자열 자신은 변경되지 않는다. 문자열은 변경 불가능한 값(immutable value)이기 때문이다.

<br>


## MDN의 각 예제 코드를 분석하면서 공부하기

