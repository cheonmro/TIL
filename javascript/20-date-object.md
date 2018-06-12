# Javascript Date

날짜와 시간을 위한 built-in 객체

Date 객체:
- 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초(천분의 1초(millisecond, ms)))을 위한 메소드를 제공하는 built-in 객체이다.(기준: ms(밀리세컨))
- 내부적으로 Date 객체는 숫자값을 갖는다. 이 값은 1970년 1월 1일 00:00(UTC)을 기점으로 현재 시간까지의 밀리초를 나타낸다.
- UTC(협정 세계시: Coordinated Universal Time)는 GMT(그리니치 평균시: Greenwich Mean Time)로 불리기도 하는데 UTC와 GMT는 초의 소숫점 단위에서만 차이가 나기 때문에 일상에서는 혼용되어 사용된다. 기술적인 표기에서는 UTC가 사용된다.
- KST(Korea Standard Time)는 UTC/GMT에 9시간을 더한 시간이다. 즉, KST는 UTC/GMT보다 9시간이 빠르다. 예를 들어, UTC 00:00 AM은 KST 09:00 AM이다.
- 일반적으로 UTC 와 GMT는 똑같다.(정확히는 조금 다르긴 하지만), 시간을 UTC로 할 것인가 / KST로 할 것인가
- 현재의 날짜와 시간은 자바스크립트 코드가 동작한 시스템의 시계에 의해 결정된다. 시스템 시계의 설정(timezone, 시간)에 따라 서로 다른 값을 가질 수 있다.
- new Date()를 사용하면, 컴퓨터에 설정된 시간으로 설정된다. 내 컴퓨터가 KTC 또는 UTC로 설정할 수 있다.

<br>

## 1. Date Constructor

생성자를 사용하여 날짜와 시간을 가지는 인스턴스를 생성한다. 생성된 인스턴스는 기본적으로 현재 날짜와 시간을 나타내는 값을 가진다. 다른 날짜와 시간을 다루고 싶은 경우 생성자의 인수에 해당 날짜와 시간 정보를 명시적으로 지정한다. 날짜와 시간을 가지는 Date 객체를 생성하는 방법은 4가지가 있다.

```
new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month[, day, hour, minute, second, millisecond])
```

Date() 생성자 함수를 new 연산자없이 사용하면 Date 객체를 반환하지 않고 결과값을 문자열로 반환한다.

```
var date = new Date();
console.log(typeof date, date); //object Thu May 12 2016 00:51:36 GMT+0900 (KST)

date = Date();
console.log(typeof date, date); // string Thu May 12 2016 00:51:36 GMT+0900 (KST)

console.dir(Date);
```

매개변수에 따라 Date 생성자의 동작은 달라진다.


<br>

## Date 객체를 생성하는 4가지 방법

### 1.1 new Date()

매개변수가 없는 경우 현재 날짜와 시간을 가지는 인스턴스를 반환한다.

```
var d = new Date();
console.log(d); // Thu May 12 2016 15:38:39 GMT+0900 (KST)
```

<br>

### 1.2 new Date(milliseconds)

매개변수에 밀리초를 전달하면 1970년 1월 1일 00:00(UTC)을 기점으로 전달된 밀리초만큼 경과한 날짜와 시간을 가지는 인스턴스를 반환한다.

```
var d = new Date(0);
console.log(d); // Fri Jan 01 1970 09:00:00 GMT+0900 (KST)

var d = new Date(86400000);
console.log(d); // Fri Jan 02 1970 09:00:00 GMT+0900 (KST)
```

86400000ms는 1day를 의미한다

```
1s = 1,000ms
1m = 60s * 1,000ms = 60,000ms
1h = 60m * 60,000ms = 3,600,000ms
1d = 24h * 3,600,000ms = 86,400,000ms
```

KST(Korea Standard Time)는 GMT(그리니치 평균시: Greenwich Mean Time)에 9시간을 더한 시간이다.

<br>

### 1.3 new Date(dateString)

매개변수에 날짜와 시간을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 함수에 전달된 문자열은 parse() 메소드에 의해 인식 가능한 형식이어야 한다.

```
var d = new Date('May 12, 2016 12:13:00');
console.log(d); // Thu May 12 2016 12:13:00 GMT+0900 (KST)

var d = new Date('2017/08/08/20:00:00');
console.log(d); // Tue Aug 08 2017 20:00:00 GMT+0900 (KST)
```

<br>

### 1.4 new Date(year, month[, day, hour, minute, second, millisecond])

매개변수에 년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 년, 월을 반드시 지정하여야 한다. 지정하지 않은 옵션 정보는 0 또는 1으로 초기화된다.

인수는 다음과 같다.

| Argument        | Description           
| ------------- |:-------------:|
| year      | 1900년 이후의 년 | 
| month      | 월을 나타내는 0 ~ 11까지의 정수 (주의: 0부터 시작, 0 = 1월)      |   
| day | 일을 나타내는 1 ~ 31까지의 정수      |
| hour | 시를 나타내는 0 ~ 23까지의 정수      | 
| minute | 분을 나타내는 0 ~ 59까지의 정수      | 
| second | 초를 나타내는 0 ~ 59까지의 정수      | 
| millisecond | 밀리초를 나타내는 0 ~ 999까지의 정수      |  

년, 월을 지정하지 않은 경우 1970년 1월 1일 00:00(UTC)을 가지는 인스턴스를 반환한다.

```
var d = new Date(1999);
console.log(d); // Thu Jan 01 1999 09:00:01 GMT+0900 (KST)

var d = new Date(1999, 1, 3, 11, 33, 30, 0);
console.log(d); // Wed Feb 03 1999 11:33:30 GMT+0900 (KST)

var d = new Date(1999, 1);
console.log(d); // Mon Feb 01 1999 00:00:00 GMT+0900 (KST)

var d = new Date('1999/1/3/11:33:00:00');
console.log(d); // Sun Jan 03 1999 11:33:00 GMT+0900 (KST)
```

<br>

## 2. Date Method

### 2.1 Date.now()

1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

```
var n = Date.now();
console.log(n); // 1528788779872
```

<br>

### 2.2 Date.parse()

1970년 1월 1일 00:00:00(UTC)을 기점으로 매개변수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.

```
var d = Date.parse('Jan 2, 1970 00:00:00 UTC'); // UTC
console.log(d); // 86400000

var d = Date.parse('Jan 2, 1970 09:00:00'); // KST
console.log(d); // 86400000

var d = Date.parse('1970/01/02/09:00:00'); // KST
console.log(d); // 86400000
```

<br>

### 2.3 Date.UTC()

1970년 1월 1일 00:00:00(UTC)을 기점으로 매개변수로 전달된 지정 시간(new Date(year, month[, day, hour, minute, second, millisecond]))의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.

UTC() 메소드는 new Date(year, month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용한다. 하지만 UTC() 메소드의 인수는 local time(KST)가 아닌 UTC로 인식된다.

```
var d = Date.UTC(1970, 0, 2);
console.log(d); // 86400000

var d = Date.UTC('1970/1/2');
console.log(d); // NaN
```

month는 월을 의미하는 0~11까지의 정수이다. 0부터 시작하므로 주의가 필요하다.

<br>

### 2.4 Date.prototype.getFullYear()

해당 연도를 나타내는 4자리 숫자를 반환한다.

```
var today = new Date();
var year = today.getFullYear();

console.log(today); // Tue Aug 08 2017 20:53:24 GMT+0900 (KST)
console.log(year);  // 2017
```

<br>

### 2.5 Date.prototype.setFullYear()

해당 연도를 나타내는 4자리 숫자를 설정한다. 연도 이외 월, 일도 설정할 수 있다.

```
var today = new Date();
today.setFullYear(2000);
var year = today.getFullYear();

console.log(today); // Tue Aug 08 2000 20:54:21 GMT+0900 (KST)
console.log(year);  // 2000

today.setFullYear(1900, 0, 1);
year = today.getFullYear();

console.log(today); // Mon Jan 01 1900 20:54:21 GMT+0900 (KST)
console.log(year);  // 1900
```

<br>

### 2.6 Date.prototype.getMonth()

해당 월을 나타내는 0 ~ 11의 정수를 반환한다. 1월은 0, 12월은 11이다.

var today = new Date();
var month = today.getMonth();

console.log(today); // Tue Aug 08 2017 20:55:41 GMT+0900 (KST)
console.log(month); // 7


<br>

### 2.7 Date.prototype.setMonth()

해당 월을 나타내는 0 ~ 11의 정수를 설정한다. 1월은 0, 12월은 11이다. 월 이외 일도 설정할 수 있다.

```
var today = new Date();
today.setMonth(0); // 1월
var month = today.getMonth();

console.log(today); // Sun Jan 08 2017 20:56:33 GMT+0900 (KST)
console.log(month); // 0

today.setMonth(11, 1); // 12월 1일
month = today.getMonth();

console.log(today); // Fri Dec 01 2017 20:56:33 GMT+0900 (KST)
console.log(month); // 11
```

<br>

### 2.8 Date.prototype.getDate()

해당 날짜(1 ~ 31)를 나타내는 정수를 반환한다.

```
var today = new Date();
var date = today.getDate();

console.log(today); // Tue Aug 08 2017 20:57:19 GMT+0900 (KST)
console.log(date);  // 8
```

<br>

### 2.9 Date.prototype.setDate()

해당 날짜(1 ~ 31)를 나타내는 정수를 설정한다.

```
var today = new Date();
today.setDate(1);
var date = today.getDate();

console.log(today); // Tue Aug 01 2017 20:57:48 GMT+0900 (KST)
console.log(date);  // 1
```

<br>

### 2.10 Date.prototype.getDay()

해당 요일(0 ~ 6)를 나타내는 정수를 반환한다. 반환값은 아래와 같다.

| 요일        | 반환값           
| ------------- |:-------------:|
| 일요일      | 0 | 
| 월요일      | 1 | 
| 화요일      | 2      |   
| 수요일 | 3      |
| 목요일 | 4      | 
| 금요일 | 5      | 
| 토요일 | 6      | 

<br>

### 2.11 Date.prototype.getHours()

해당 시간(0 ~ 23)를 나타내는 정수를 반환한다.

```
var today = new Date();
var hours = today.getHours();

console.log(today); // Tue Aug 08 2017 20:58:48 GMT+0900 (KST)
console.log(hours); // 20
```

<br>

### 2.12 Date.prototype.setHours()

해당 시간(0 ~ 23)를 나타내는 정수를 설정한다. 시간 이외 분, 초, 밀리초도 설정할 수 있다.

```
var today = new Date();
today.setHours(7);
var hours = today.getHours();

console.log(today); // Tue Aug 08 2017 07:59:16 GMT+0900 (KST)
console.log(hours); // 7

today.setHours(0, 0, 0, 0); // 00:00:00:00
hours = today.getHours();

console.log(today); // Tue Aug 08 2017 00:00:00 GMT+0900 (KST)
console.log(hours); // 0
```

<br>

### 2.13 Date.prototype.getMinutes()

해당 분(0 ~ 59)를 나타내는 정수를 반환한다.

```
var today = new Date();
var minutes = today.getMinutes();

console.log(today);   // Tue Aug 08 2017 21:00:05 GMT+0900 (KST)
console.log(minutes); // 0
```

<br>

### 2.14 Date.prototype.setMinutes()

해당 분(0 ~ 59)를 나타내는 정수를 설정한다. 분 이외 초, 밀리초도 설정할 수 있다.

```
var today = new Date();
today.setMinutes(50);
var minutes = today.getMinutes();

console.log(today);   // Tue Aug 08 2017 21:50:45 GMT+0900 (KST)
console.log(minutes); // 50

today.setMinutes(5, 10, 999); // HH:05:10:999
minutes = today.getMinutes();

console.log(today);   // Tue Aug 08 2017 21:05:10 GMT+0900 (KST)
console.log(minutes); // 5
```

<br>

### 2.15 Date.prototype.getSeconds()

해당 초(0 ~ 59)를 나타내는 정수를 반환한다.

```
var today = new Date();
var seconds = today.getSeconds();

console.log(today);   // Tue Aug 08 2017 21:01:57 GMT+0900 (KST)
console.log(seconds); // 57
```

<br>

### 2.16 Date.prototype.setSeconds()

해당 초(0 ~ 59)를 나타내는 정수를 설정한다. 초 이외 밀리초도 설정할 수 있다.

```
var today = new Date();
today.setSeconds(30);
var seconds = today.getSeconds();

console.log(today);   // Tue Aug 08 2017 21:02:30 GMT+0900 (KST)
console.log(seconds); // 30

today.setSeconds(10, 0); // HH:MM:10:000
seconds = today.getSeconds();

console.log(today);   // Tue Aug 08 2017 21:02:10 GMT+0900 (KST)
console.log(seconds); // 10
```

<br>

### 2.17 Date.prototype.getMilliseconds()

해당 밀리초(0 ~ 999)를 나타내는 정수를 반환한다.

```
var today = new Date();
var ms = today.getMilliseconds();

console.log(today); // Tue Aug 08 2017 21:03:01 GMT+0900 (KST)
console.log(ms);    // 681
```

<br>

### 2.18 Date.prototype.setMilliseconds()

해당 밀리초(0 ~ 999)를 나타내는 정수를 설정한다.

```
var today = new Date();
today.setMilliseconds(123);
var ms = today.getMilliseconds();

console.log(today); // Tue Aug 08 2017 21:03:29 GMT+0900 (KST)
console.log(ms);    // 123
```

<br>

### 2.19 Date.prototype.getTime()

1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 반환한다.

```
var today = new Date();
var time = today.getTime();

console.log(today); // Tue Aug 08 2017 21:03:49 GMT+0900 (KST)
console.log(time);  // 1502193829184
```

<br>

### 2.20 Date.prototype.setTime()

1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 설정한다.

```
var today = new Date();
today.setTime(86400000); // Fri Jan 02 1970 09:00:00 GMT+0000 (UTC) +1day
var time = today.getTime();

console.log(today); // Fri Jan 02 1970 09:00:00 GMT+0900 (KST)
console.log(time);  // 86400000
```

<br>

### 2.21 Date.prototype.getTimezoneOffset()

UTC와 지정 로케일(Locale) 시간과의 차이를 분단위로 반환한다.

```
var today = new Date();
var x = today.getTimezoneOffset() / 60; // -9

console.log(today);
console.log(x); // -9
```

KST(Korea Standard Time)는 UTC에 9시간을 더한 시간이다. 즉, UTC = KST - 9h이다.


<br>

### 2.22 Date.prototype.toDateString()

사람이 읽을 수 있는 형식의 문자열로 날짜를 반환한다.

```
var d = new Date('1988/8/17/13:30');

console.log(d.toString());     // Sat Sep 17 1988 13:30:00 GMT+1000 (KDT)
console.log(d.toDateString()); // Sat Sep 17 1988
```

<br>

### 2.23 Date.prototype.toTimeString()

사람이 읽을 수 있는 형식의 문자열로 시간을 반환한다.

```
var d = new Date('1988/8/17/13:30');

console.log(d.toString());     // Wed Aug 17 1988 13:30:00 GMT+1000 (KDT)
console.log(d.toTimeString()); // 13:30:00 GMT+1000 (KDT)
```

<br>

Timer
- setTimeout(callback, miliseconds)
- setInterval

<br>

```
전역 함수(메소드)
setTimeout(printNow, 1000);
```


