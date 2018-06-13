# Javascript Array

***코딩 스킬 측면에서 제일 중요한 것: 배열

유사배열객체: ES5
Iterator: ES6(여기서는 유사배열객체 사용 안함)


초기화 값을 숫자(예) 2)를 전달하면, 길이를 2로 하는데, undefined로 만든다.

배열(array)는 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 
자바스크립트의 배열은 length라는 프로퍼티가 있기 때문에 배열도 객체이며, 유용한 내장 메소드를 포함하고 있다.

<br>

## 1. 배열의 생성

### 1.1 배열 리터럴

0개 이상의 값을 쉼표로 구분하여 대괄호([])로 묶는다. 
첫번째 값은 인덱스 ‘0’으로 읽을 수 있다. 존재하지 않는 요소에 접근하면 undefined를 반환한다.

```
var emptyArr = [];

var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(emptyArr[1]); // undefined
console.log(arr[1]);      // 'one'
console.log(emptyArr.length); // 0
console.log(arr.length);  // 10
console.log(typeof arr);  // object
```

<br>

위의 배열을 객체 리터럴로 유사하게 표현하면 다음과 같다.

```
var obj = {
  '0': 'zero',  '1': 'one',   '2': 'two',
  '3': 'three', '4': 'four',  '5': 'five',
  '6': 'six',   '7': 'seven', '8': 'eight',
  '9': 'nine'
};
```

배열 리터럴은 객체 리터럴과 달리 프로퍼티명이 없고 각 요소의 값만이 존재한다. 객체는 프로퍼티에 접근하기 위해 대괄호 표기법과 마침표 표기법을 사용하지만 배열은 대괄호 내에 접근하고자 하는 요소의 인덱스만 넣어주면 된다. 인덱스은 0부터 시작한다.

두 객체의 근본적 차이는 배열 리터럴 arr의 프로토타입 객체는 Array.prototype이지만 객체 리터럴 obj의 프로토타입 객체는 Object.prototype이라는 것이다. Array 객체는 다양한 메소드(e.g. sort)와 프로퍼티(e.g. length)를 제공한다.

<br>

![](https://poiemaweb.com/img/object_array_prototype.png)

<br>

```
var emptyObj = {};
console.dir(emptyObj.__proto__);
```

![](https://github.com/cheonmro/TIL/blob/master/javascript/images/emptyObj.png?raw=true)

<br>

```
var emptyArr = [];
console.dir(emptyArr.__proto__);
```

![](https://github.com/cheonmro/TIL/blob/master/javascript/images/emptyArr.png?raw=true)

<br>

대부분의 언어에서 배열의 요소들은 모두 같은 데이터 타입이어야 하지만, 자바스크립트 배열은 어떤 데이터 타입의 조합이라도 포함할 수 있다.

```
var misc = [
  'string', 98.6, true, false, null, undefined, ['nested', 'array'], {object: true}, NaN, Infinity
];

misc.length   // 10
```

<br>

### 1.2 Array() 생성자 함수

배열은 일반적으로 배열 리터럴 방식으로 생성하지만 배열 리터럴 방식도 결국 내장 함수 Array() 생성자 함수로 배열을 생성하는 것을 단순화시킨 것이다. 
Array() 생성자 함수는 Array.prototype.constructor 프로퍼티로 접근할 수 있다.

Array() 생성자 함수는 매개변수의 갯수에 따라 다르게 동작한다.

<br>

<em>매개변수가 1개이고 숫자인 경우</em>

```
new Array(arrayLength)
```

<br>

매개변수로 전달된 숫자를 length 값으로 가지는 빈 배열 생성

```
var arr = new Array(2);
console.log(arr.length, arr); // 2 [undefined, undefined]
```

<br>

<em>그 외의 경우</em>

```
new Array(element0, element1[, ...[, elementN]])
```

<br>

매개변수로 전달된 값을 요소로 가지는 배열을 생성

```
var arr = new Array(1, 2, 3);
console.log(arr.length, arr); // 3 [1, 2, 3]
```

<br>

## 2. 배열 요소의 추가와 삭제

### 2.1 배열 요소의 추가

객체가 동적으로 프로퍼티를 추가할 수 있는 것처럼 배열도 동적으로 요소를 추가할 수 있다. 이때 순서에 맞게 값을 할당할 필요는 없고 필요한 인덱스 위치에 값을 할당한다. 값이 할당되지 않은 인덱스 위치의 요소의 값은 undefined가 되고 배열의 길이(length)는 최종 인덱스 위치의 기준으로 산정된다.

```
var arr = [];
console.log(arr[0]); // undefined

arr[0] = 'one';
arr[2] = 'three';

console.log(arr); // ["one", undefined, "three"]
```

<br>

### 2.2 배열 요소의 삭제

배열은 객체이기 때문에 배열의 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다. 이때 해당 요소가 삭제되는 것이 아니라 요소 값이 삭제되어 undefined가 된다.

해당 요소를 완전히 삭제하기 위해서는 Array.prototype.splice() 메소드를 사용한다.

```
var numbersArr = ['zero', 'one', 'two'];

// 요소의 값('one')만 삭제되고, undefined로 남는다.
delete numbersArr[1];
console.log(numbersArr); // ['zero', undefined, 'two']

// 요소 일부를 삭제 (시작 인덱스, 삭제할 요소수)
numbersArr.splice(1, 1);
console.log(numbersArr); // ['zero', 'two']
```

<br>

## 3. 배열 요소의 열거

객체의 프로퍼티를 열거할 때 for in 문을 사용한다. 배열 역시 객체이므로 for in 문을 사용할 수 있다

그러나 배열은 객체이기 때문에 프로퍼티를 가질 수 있다. for in 문을 사용하면 불필요한 프로퍼티까지 출력될 수 있고 요소들의 순서를 보장하지 않으므로 배열을 열거하는데 적합하지 않다.

따라서 배열 요소의 열거에는 forEach 메소드 또는 for 문을 사용하는 것이 좋다.

```
var numbersArr = ['zero', 'one', 'two', 'three'];
numbersArr.foo = 10;

for (var prop in numbersArr) {
  console.log(prop, numbersArr[prop]);
  // 0 zero / 1 one / 2 two / 3 three / foo 10
}

numbersArr.forEach((item, i) => console.log(i, item));
// => 0 'zero' / 1 'one' / 2 'two' / 3 'three'

for (var i = 0; i < numbersArr.length; i++) {
  console.log(i, numbersArr[i]);
}
// => 0 'zero' / 1 'one' / 2 'two' / 3 'three'
```

<br>

## 4. Array Property

### 4.1 Array.length

length 프로퍼티는 요소의 갯수(배열의 길이)를 나타낸다. 
이때, length는 undefined를 포함한다.

```
var numArr = ['zero', 'one', 'two', undefined];
numArr.length // 4
```

<br>

Array.length는 양의 정수이며 232(4,294,967,296) 미만이다.

하지만 배열에 요소의 갯수와 요소값이 undefined가 아닌 요소가 반드시 일치하는 것은 아니다. 현재 length 프로퍼티보다 더 큰 인덱스로 항목을 추가하면 length 프로퍼티는 새로운 항목을 추가할 수 있도록 자동으로 늘어난다. 즉, length 프로퍼티는 가장 큰 인덱스에 1을 더한 것과 같다.

```
var myArray = [];
console.log(myArray.length); // 0

myArray[1000] = true;  // [ undefined, undefined, ... , true ]

console.log(myArray.length); // 1001
console.log(myArray[0]);     // undefined
```

<br>

length 프로퍼티는 명시적으로 값을 변경할 수 있다. 만약 length 프로퍼티의 값을 현재 보다 작게 설정하면 설정한 값보다 크거나 같은 인덱스에 해당하는 요소는 모두 삭제된다.

```
var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

// 배열 길이의 명시적 설정
arr.length = 3; // [ 'zero', 'one', 'two' ]

// 배열 끝에 새 요소 추가
arr[arr.length] = 'san'; // [ 'zero', 'one', 'two', 'san' ]

arr.length = 5; // [ 'zero', 'one', 'two', 'san', undefined ]

// 배열 끝에 새 요소 추가
arr.push('go'); // [ 'zero', 'one', 'two', 'san', undefined, 'go' ]
```

<br>

Array.prototype.push 메소드는 매개변수로 전달된 값들을 배열의 마지막에 추가한다. 이것은 결국 배열의 마지막 인덱스 위치에 값을 할당한 것과 같다.

<br>

## 5. Array Method

- ✏️ 메소드는 this를 변경한다.(대상배열을 변경한다.)
- 🔒 메소드는 this를 변경하지 않는다.

<br>

### 5.1 Array.isArray(arg: any): boolean

객체가 배열이면 true, 배열이 아니면 false를 반환한다.

```
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
```

<br>

### 5.2 Array.prototype.indexOf(searchElement: T, fromIndex?: number): number 🔒

indexOf 메소드의 인자로 지정된 요소를 배열에서 검색하여 인덱스를 반환한다. 중복되는 요소가 있는 경우 첫번째 인덱스만 반환된다. 만일 해당하는 요소가 없는 경우, -1을 반환한다.

```
var arr = [1, 2, 2, 3];
console.log(arr.indexOf(2));    // 1
console.log(arr.indexOf(4));    // -1
console.log(arr.indexOf(2, 2)); // 2
```

<br>

### 5.3 Array.prototype.concat(…items: Array<T[] | T>): T[] 🔒

concat 메소드의 인수로 넘어온 값들(배열 또는 값)을 자신의 복사본에 요소로 추가하고 반환한다. 이때 원본 배열은 변경되지 않는다.

두 배열을 풀어서 합친다.

```
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c); // ['a', 'b', 'c', 'x', 'y', 'z']

var d = a.concat('String');
console.log(d); // ['a', 'b', 'c', 'String']

var e = a.concat(b, true);
console.log(e); // ['a', 'b', 'c', 'x', 'y', 'z', true]

// 원본 배열은 변하지 않는다.
console.log(a); // [ 'a', 'b', 'c' ]
```

<br>

### 5.4 Array.prototype.join(separator?: string): string 🔒

배열 요소 전체를 연결하여 생성한 문자열을 반환한다. 구분자(separator)는 생략 가능하며 기본 구분자는 ,이다.

Array.prototype.join() 메소드는 + 연산자보다 빠르다.

```
var arr = ['a', 'b', 'c', 'd'];

var x = arr.join();
console.log(x);  // 'a,b,c,d';

var y = arr.join('');
console.log(y);  // 'abcd'

var z = arr.join(':');
console.log(z);  // 'a:b:c:d'
```

<br>

### 5.5 Array.prototype.pop(): T | undefined ✏️ 

배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. pop 메소드는 대상 배열 자체를 변경한다.

```
var a = ['a', 'b', 'c'];
var c = a.pop();

// 원본 배열이 변경된다.
console.log(a); // a --> ['a', 'b']
console.log(c); // c --> 'c'
```

<br>

만약 빈 배열일 경우 undefined를 반환한다.

```
var b = [];
var d = b.pop();

console.log(b); // []
console.log(d); // undefined
```

<br>

pop은 push와 함께 배열을 스택(LIFO: Last In First Out)처럼 동작하게 한다.

```
var arr = [];

arr.push(1); // [1]
arr.push(2); // [1, 2]
arr.push(3); // [1, 2, 3]

arr.pop(); // [1, 2]
arr.pop(); // [1]
arr.pop(); // []
```

<br>

### 5.6 Array.prototype.push(…items: T[]): number ✏️ 

인자로 전달된 항목을 배열의 마지막에 추가한다. concat 메소드와 다르게 인자로 전달된 항목을 마지막 요소로 추가한다. 반환값은 배열의 새로운 length 값이다. push 메소드는 대상 배열 자체를 변경한다.

```
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

// push는 원본 배열을 직접 변경하고 변경된 배열의 length를 반환한다.
var c = a.push(b);
console.log(a); // a --> ['a', 'b', 'c', ['x', 'y', 'z']]
console.log(c); // c --> 4;

// concat은 원본 배열을 직접 변경하지 않고 복사본을 반환한다.
console.log([1, 2].concat([3, 4])); // [ 1, 2, 3, 4 ]
```

<br>

배열의 마지막에 값을 추가 할 때는 Array.prototype.push, 선두에 추가 할 때는 Array.prototype.unshift, 중간에 추가할 때는 Array.prototype.splice 메소드를 사용한다.

단, push, unshift 메소드는 사용하기 간편하나 performance 면에서는 좋은 방법은 아니다.

```
var arr = [1, 2, 3, 4, 5];

arr.push(6);
arr[arr.length] = 6; // 43% faster in Chrome 47.0.2526.106 on Mac OS X 10.11.1

arr.unshift(0);
[0].concat(arr); // 98% faster in Chrome 47.0.2526.106 on Mac OS X 10.11.1
```

<br>

빈도가 가장 높음 --> reverse()
### 5.7 Array.prototype.reverse(): this ✏️

배열 요소의 순서를 반대로 변경한다. 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

```
var a = ['a', 'b', 'c'];
var b = a.reverse();

// 원본 배열이 변경된다
console.log(a); // [ 'c', 'b', 'a' ]
console.log(b); // [ 'c', 'b', 'a' ]
```


<br>

### 5.8 Array.prototype.shift(): T | undefined

배열에서 첫요소를 제거하고 제거한 요소를 반환한다. 만약 빈 배열일 경우 undefined를 반환한다. shift 메소드는 대상 배열 자체를 변경한다.

```
var a = ['a', 'b', 'c'];
var c = a.shift();

// 원본 배열이 변경된다.
console.log(a); // a --> [ 'b', 'c' ]
console.log(c); // c --> 'a'
```

<br>

shift는 push와 함께 배열을 큐(FIFO: First In First Out)처럼 동작하게 한다.

```
var arr = [];

arr.push(1); // [1]
arr.push(2); // [1, 2]
arr.push(3); // [1, 2, 3]

arr.shift(); // [2, 3]
arr.shift(); // [3]
arr.shift(); // []
```

<br>

Array.prototype.pop()은 마지막 요소를 제거하고 제거한 요소를 반환한다.

```
var a = ['a', 'b', 'c'];
var c = a.pop();

// 원본 배열이 변경된다.
console.log(a); // a --> ['a', 'b']
console.log(c); // c --> 'c'
```

![](https://poiemaweb.com/img/array-method.png)


<br>

활용빈도 높다 --> slice
### 5.9 Array.prototype.slice(start=0, end=this.length): T[] 🔒

배열의 특정 부분에 대한 복사본을 생성한다.

첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 요소 전까지 복사된다.

```
매개변수

start
음수인 경우 배열의 끝에서의 인덱스를 나타낸다. 예를 들어 slice(-2)는 배열의 마지막 2개의 요소를 반환한다.

end
옵션이며 기본값은 length 값이다. 즉, 'start'에 입력된 값의 인덱스부터 배열의 마지막 인덱스까지이다.
```

<br>


```
var items = ['a', 'b', 'c'];

// items[0]부터 items[1] 이전(items[1] 미포함)까지 반환
var res1 = items.slice(0, 1);
console.log(res1);  // [ 'a' ]

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
var res2 = items.slice(1, 2);
console.log(res2);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
var res3 = items.slice(1);
console.log(res3);  // [ 'b', 'c' ]

// 엄청중요
// 모든 요소를 반환 (= 복사본 생성)
var res4 = items.slice();
console.log(res5);  // [ 'a', 'b', 'c' ]

// 원본은 변경되지 않는다.
console.log(items); // [ 'a', 'b', 'c' ]
```

<br>

```
var items = ['a', 'b', 'c'];

// 인자가 음수인 경우 배열의 끝에서 2개의 요소를 반환
var res1 = items.slice(-2);
console.log(res1);  // [ 'b', 'c' ]

// 인자가 음수인 경우, 배열의 마지막 요소부터 거꾸로 계산된다. 즉, -1이면, 마지막 요소부터 3번째 전인 요소까지의 요소를 반환
var res2 = items.slice(-1,3);
console.log(res2);  // [ 'c' ]

// 마지막 요소부터 1번째 요소전까지의 요소를 반환하는데, 인자가 음수인 경우라도 인덱스 계산은 오른쪽 방향으로 한다. 즉, 마지막 요소(-1)부터 오른쪽 방향으로 계산하니까, 이 경우 'c' 부터가 된다. 두번째 인자가 1이니까 1번째 전까지 인덱스인 'a'를 말하고, 그래서 여기서는 겹치는 요소가 없어서 빈 배열을 반환
var res3 = items.slice(-1,1);
console.log(res3);  // [ ]

// 마지막 요소('c')와 0번째 전까지 요소가 없기 때문에, 빈 배열을 반환
var res4 = items.slice(-1,0);
console.log(res4);  // [ ]

// 마지막 요소('c')와 2번째 전까지 요소가 없기 때문에, 빈 배열을 반환
var res5 = items.slice(-1,2);
console.log(res5);  // [ ]

// 마지막에서부터 2번째요소부터 시작하여('b', 'c'), 2번째 전까지 요소 중 겹치는 'b'를 반환
var res6 = items.slice(-2,2);
console.log(res6);  // [ 'b' ]

// 마지막에서부터 2번째요소부터 시작하여('b', 'c'), 1번째 전까지 요소 중에서 겹치는 것이 없기 때문에 빈 배열 반환
var res7 = items.slice(-2,1);
console.log(res7);  // [ ]

// 마지막에서부터 3번째요소부터 시작하여('a', 'b', 'c'), items 배열의 전체 요소와 겹치는 것은 모든 요소이기 때문에, 모든 요소가 포함된 배열이 반환
var res8 = items.slice(-3, items.length);
console.log(res8);  // [ 'a', 'b', 'c' ]

// 원본은 변경되지 않는다.
console.log(items); // [ 'a', 'b', 'c' ]
```

<br>

slice 메소드에 인자를 전달하지 않으면 원본 배열의 복사본을 생성하여 반환한다. 이를 이용하여 arguments, HTMLCollection, NodeList와 같은 유사 배열 객체(Array-like Object)를 배열로 변환할 수 있다.

```
function sum() {
  // 유사 배열 객체 => Array
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr); // [1, 2, 3]

  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1, 2, 3));
```

<br>

ES6에서 유사 배열 객체를 배열로 변환하는 방법은 아래와 같다.

```
// 유사 배열 객체 => Array
function sum() {
  ...
  var arr = [...arguments]; // Spread 연산자
  var arr = Array.from(arguments);
  ...
}
```

<br>

### 5.10 Array.prototype.splice(start: number, deleteCount=this.length-start, …items: T[]): T[] ✏️

기존의 배열의 요소를 제거하고 그 위치에 새로운 요소를 추가한다. 배열 중간에 새로운 요소를 추가할 때도 사용된다.

```
매개변수

start
배열에서의 시작 위치이다

deleteCount
시작 위치(start)부터 제거할 요소의 수이다.

items
삭제한 위치에 추가될 요소들이다. (옵션)

반환값 삭제한 요소들을 가진 배열이다.

```

<br>

이 메소드의 가장 일반적인 사용은 배열에서 요소를 삭제할 때다.


```
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
var res = items.splice(1, 2);

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]
```

<br>

배열에서 요소를 제거하고 제거한 위치에 다른 요소를 추가한다.

```
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 그자리에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
var res = items.splice(1, 2, 'x', 'y');

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'x', 'y', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]
```

<br>

배열 중간에 새로운 요소를 추가할 때도 사용된다.

```
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
var res = items.splice(1, 0, 'x');

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'x', 'two', 'three', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ ]
```

<br>

배열 중간에 배열의 요소들을 해체하여 추가할 때도 사용된다.

```
var items = ['one', 'four'];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 배열를 추가한다. 제거된 요소가 반환된다.
// items.splice(1, 0, ['two', 'three']); // [ 'one', [ 'two', 'three' ], 'four' ]
Array.prototype.splice.apply(items, [1, 0].concat(['two', 'three']));
// ES6
// items.splice(1, 0, ...['two', 'three']);

console.log(items); // [ 'one', 'two', 'three', 'four' ]

```

<br>

### 5.11 Array.prototype.sort(compareFn?: (a: T, b: T) => number): this ✏️

배열의 내용을 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다. 반환된 배열은 복사본이 아닌 원본 배열이다.

```
var fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]
```

<br>

주의할 것은 숫자를 정렬할 때이다. 아래 코드를 살펴보자.

```
var points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5 ]
```

기본 정렬 순서는 문자열 Unicode 코드 포인트 순서에 따른다. 예를 들어 1의 Unicode 코드 포인트는 U+0031, 2의 Unicode 코드 포인트는 U+0032이다. 따라서 1의 Unicode 코드 포인트 순서가 2의 Unicode 코드 포인트 순서보다 앞서므로 1과 2를 sort 메소드로 정렬하면 1이 2보다 앞으로 정렬된다. 하지만 10의 Unicode 코드 포인트는 U+0031U+0030이므로 2와 10를 sort 메소드로 정렬하면 10이 2보다 앞으로 정렬된다.

<br>

이러한 경우, sort 메소드의 인자로 정렬 순서를 정의하는 함수를 전달한다. 이 함수를 생략하면 배열의 각 요소는 문자열로 변환되고 Unicode 코드 포인트 순서에 따라 정렬된다.

```
var points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// compareFunction의 반환값이 0보다 작은 경우, a를 우선한다.
points.sort(function (a, b) { return a - b; });
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// compareFunction의 반환값이 0보다 큰 경우, b를 우선한다.
points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
```

<br>

객체를 요소로 갖는 배열을 정렬하는 예제는 아래와 같다.

```
var todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

// id를 기준으로 정렬
todos.sort(function (a, b) {
  return (a.id > b.id) ? 1: (a.id < b.id) ? -1 : 0;
});
// todos.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0);
console.log(todos);

// content를 기준으로 정렬
todos.sort(function (a, b) {
  return (a.content > b.content) ? 1 : (a.content < b.content) ? -1 : 0;
});
// todos.sort((a, b) => (a.content > b.content) ? 1 : (a.content < b.content) ? -1 : 0);
console.log(todos);
```

<br>

엄청중요 --> forEach
### 5.12 Array.prototype.forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void 🔒 

배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다. 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다. 반환값은 undefined이다.

forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다. 일반 for 구문에 비해 성능이 좋지는 않다. IE 9 이상에서 정상 동작한다.

내부에 for문을 가지고 있다.

```
var total = 0;
var testArray = [1, 3, 5, 7, 9];

// forEach 메소드는 원본 배열을 변경하지 않는다.
testArray.forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  total += item;
});

console.log(total); // 25
console.log(testArray); // [ 1, 3, 5, 7, 9 ]

testArray = [1, 2, 3, 4];

// 원본 배열을 변경하려면 콜백 함수의 3번째 인자를 사용한다.
testArray.forEach(function (item, index, array) {
  array[index] = Math.pow(item, 2);
});

console.log(testArray); // [ 1, 4, 9, 16 ]

// forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
[1, 2, 3].forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  if (item > 1) break; // SyntaxError: Illegal break statement
});
```

<br>

testArray(대상배열)를 순회하면서 각각의 요소 값에 대하여, 이 콜백 함수를 실행한다.(내부 function)
요소 개수만큼 호출한다.

<br>


두번째 인자로 this를 전달할 수 있다.

```
function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  // entry는 array의 배열 요소의 값
  array.forEach(function (entry) {
    this.sum += entry; // 2번째 인자 this를 전달하지 않으면 this === window
    this.count++;
  }, this);
};

var counter = new Counter();
counter.add([2, 5, 9]);
console.log(counter.count); // 3
console.log(counter.sum);   // 16
```

<br>

ES6의 Arrow function를 사용하면 this를 생략하여도 동일한 동작을 한다.

forEach 메소드의 이해를 돕기 위해 forEach의 동작을 흉내낸 myForEach 메소드를 작성해 보자.

```
Array.prototype.myForEach = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출
    f(this[i], i, this);
  }
};

var total = 0;

[0, 1, 2, 3].myForEach(function (item, index, array) {
  console.log(`[${index}]: ${item} of [${array}]`);
  total += item;
});

console.log('Total: ', total);
```

<br>

함수는 짧을수록 좋다.
forEach: 고차함수

<br>

#### 참고내용

```
// prototype method: numbersArr는 array 생성자 함수로부터 만들어진 인스턴스(객체)이다. 이것에 메소드인 forEach를 쓴다는 것은
numbersArr.forEach((item, i) => console.log(i, item));
```

<br>

인수에 함수를 준 것이다. -> (item, i) => console.log(i, item)
numbersArr.forEach(인수)

콜백함수인데, forEach가 이 함수를 실행시킨다. 이때, numbersArr를 순회하면서.


```
Array.prototype.forEach = function(f) {
  f();
}
```


<br>

#### 5.13 Array.prototype.map(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] 🔒

배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값(결과값)으로 새로운 배열을 생성하여 반환한다. 이때 원본 배열은 변경되지 않는다. IE 9 이상에서 정상 동작한다.

forEach()는 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수이며 map()은 배열을 순회하며 요소 값을 다른 값으로 맵핑하기 위한 함수이다.

콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다.

```
var numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
var roots = numbers.map(function (item) {
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// var roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]

numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
roots = numbers.map(function (item) {
  return ++item;  // return하지 않으면 새로운 배열에 반영되지 않는다.
});

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 2, 5, 10 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]
```

<br>

두번째 인자로 this를 전달할 수 있다.

```
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // 콜백함수의 인자로 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달할 수 있다.
  return arr.map(function (x) {
    // x는 배열 요소의 값이다.
    return this.prefix + x; // 2번째 인자 this를 전달하지 않으면 this === window
  }, this);
};

var pre = new Prefixer('-webkit-');
var preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]
```

<br>

ES6의 Arrow function를 사용하면 this를 생략하여도 동일한 동작을 한다.

map 메소드의 이해를 돕기 위해 map의 동작을 흉내낸 myMap 메소드를 작성해 보자.

```
Array.prototype.myMap = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  var result = [];
  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출하고 그 결과를 새로운 배열로 리턴
    result[i] = f(this[i], i, this);
  }
  return result;
};

var result = [1, 4, 9].myMap(function (item, index, array) {
  console.log(`[${index}]: ${item} of [${array}]`);
  return Math.sqrt(item);
});

console.log(result);
```
<br>


#### 5.14 Array.prototype.filter(callback: (value: T, index: number, array: Array) => any, thisArg?: any): T[] 🔒

배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다. 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용한다. 이때 원본 배열은 변경되지 않는다. IE 9 이상에서 정상 동작한다.

콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다.

```
var result = [1, 2, 3, 4, 5].filter(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]
```
<br>

filter()도 map(), forEach()와 같이 두번째 인자로 this를 전달할 수 있다.

filter 메소드의 이해를 돕기 위해 filter의 동작을 흉내낸 myFilter 메소드를 작성해 보자.

```
Array.prototype.myFiter = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  var result = [];
  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출하여 그 결과가 참인 요소만을 리턴
    if (f(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

var result = [1, 2, 3, 4, 5].filter(function (item, index, array) {
  console.log(`[${index}]: ${item} of [${array}]`);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]
```

<br>

### 5.15 Array.prototype.reduce(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U 🔒

배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환한다. IE 9 이상에서 정상 동작한다.

하나의 값으로 수렴된다.

```
/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 순회할 배열
*/
var result = [1, 2, 3, 4, 5].reduce(function (previousValue, currentValue, currentIndex, array) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(result); // 15: 1~5까지의 합
/*
1: 1+2=3
2: 3+3=6
3: 6+4=10
4: 10+5=15
15
*/
```

![](https://poiemaweb.com/img/reduce.png)


<br>

#### 5.16 Array.prototype.some(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 

배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환한다. IE 9 이상에서 정상 동작한다.

콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다.

```
// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
var res = [2, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res); // false

res = [12, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res); // true

// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
res = ['apple', 'banana', 'mango'].some(function (item) {
  return item === 'banana';
});
console.log(res); // true

```

<br>

some()도 map(), forEach()와 같이 두번째 인자로 this를 전달할 수 있다.

<br>

#### 5.17 Array.prototype.every(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒

배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환한다. IE 9 이상에서 정상 동작한다.

콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다.

```
// 배열 내 모든 요소가 10보다 큰 값인지 확인
var res = [21, 15, 89, 1, 44].every(function (item) {
  return item > 10;
});
console.log(res); // false

res = [21, 15, 89, 100, 44].every(function (item) {
  return item > 10;
});
console.log(res); // true
```
<br>

every()도 map(), forEach()와 같이 두번째 인자로 this를 전달할 수 있다.

<br>

#### 5.18 Array.prototype.find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined 🔒

ES6에서 새롭게 도입된 메소드로 Internet Explorer에서는 지원하지 않는다.

배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.

콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다.

filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.

```
var array = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.
var result = array.find(function (item) {
  return item.id === 2;
});

// ES6
// const result = array.find(item => item.id === 2;);

console.log(result); // { id: 2, name: 'Kim' }

// filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.
result = array.filter(function (item) {
  return item.id === 2;
});

console.log(result); // [ { id: 2, name: 'Kim' },{ id: 2, name: 'Choi' } ]
```

<br>

### 참고사항

데이터 구조
- Stack: FILO/LIFO
- Queue: FIFO

이런 데이터 구조를 배열로 구현할 때, pop(), push() 등을 사용



arguments를 배열로 변환하는 행위
```
var arr = Array.prototype.slice.call(arguments);
```




