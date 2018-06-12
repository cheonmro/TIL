# Javascript Math

수학 상수와 함수를 위한 built-in 객체

Math 객체는 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다. 
Math 객체는 별도의 생성자가 없는 정적(static) 프로퍼티와 메소드이다.

graphic 관련해서 많이 사용된다.

<br>

## 1. Math Property

### 1.1 Math.PI

PI 값(π ≈ 3.141592653589793)을 반환한다.

```
Math.PI; // 3.141592653589793
```

<br>

## 2. Math Method

Math 객체는 다 static method이다.

<br>

### 2.1 Math.abs(x: number): number

반드시 0 또는 양수이어야하는 절댓값(absolute value)을 반환한다.

Math.abs -> static method(객체를 생성하지 않고, 바로 사용)

설계상, 기본적으로 인수를 숫자로 입력하는 게 원칙이다. 하지만, 실제로는 아무거나 입력가능.

```
Math.abs(-1);       // 1
Math.abs('-1');     // 1
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs(null);     // 0
Math.abs(undefined);// NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

<br>

### 2.2 Math.round(x: number): number

숫자를 가장 인접한 정수로 올림/내림한다.

```
Math.round(10.49);  // 10
Math.round(10.5);   // 11
Math.round(-10.5);  // -10
Math.round(-10.51); // -11
Math.round(10);     // 10
```

<br>


### 2.3 Math.sqrt(x: number): number 

양의 제곱근을 반환한다.

```
Math.sqrt(9);  // 3
Math.sqrt(-9); // NaN
Math.sqrt(2);  // 1.414213562373095
Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
```

<br>

### 2.4 Math.ceil(x: number): number

지정된 숫자를 자신보다 큰, 가장 가까운 정수로 올림한다.

```
Math.ceil(1.4);  // 2
Math.ceil(-1.4); // -1
```

<br>

### 2.5 Math.floor(x: number): number

지정된 숫자를 자신보다 작은, 가장 가까운 정수로 내림한다. 즉, 소숫점 이하의 값을 제거한 정수를 취득한다.

```
Math.floor(1.9); // 1
Math.floor(9.1); // 9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
```

<br>

### 2.6 Math.random(): number

0과 1 사이의 임의의 숫자를 반환한다. 이때 0은 포함되지만 1은 포함되지 않는다.

```
console.log(Math.random()); // 0 ~ 1 미만의 소수 (0.8208720231391746)

// 1 ~ 10의 랜덤 정수 취득
var random = Math.floor((Math.random() * 10) + 1);
console.log(random);
```

<br>

### 2.7 Math.pow(x: number, y: number): number

첫번째 인수를 밑(base), 두번째 인수를 지수(exponent)로하여 거듭제곱을 반환한다.

```
Math.pow(2, 8); // 256
```

ES5: Math.pow(2,8);
ES6: 2**8


<br>

중요 --> Math.max
### 2.8 Math.max(…values: number[]): number 

인수 중 가장 큰 수를 반환한다.

var max = Math.max -> 여기까지 하면, 이게 함수다.(max는 프로퍼티)

```
Math.max(1, 2, 3); // 3

var arr = [1, 2, 3];
var max = Math.max.apply(null, arr); // 3

// ES6
var max = Math.max(...arr); // 3
```

<br>

중요 --> Math.min
### 2.9 Math.min(…values: number[]): number

인수 중 가장 작은 수를 반환한다.

```
Math.min(1, 2, 3); // 1

var arr = [1, 2, 3];
var min = Math.min.apply(null, arr); // 1

// ES6
var min = Math.min(...arr); // 1
```


