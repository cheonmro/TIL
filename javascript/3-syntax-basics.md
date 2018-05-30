# Javascript Syntax Basics

## 1. Interactive language

Javascript는 Interactive한 웹페이지 작성을 가능하게 한다.
Javascript는 이벤트(버튼 클릭, 웹페이지 로딩 완료 등)에 반응하여 HTML 요소에 접근하고 HTML 요소를 조작하여, 
정적인 HTML을 동적으로 변경할 수 있는 유일한 언어이다.

예를 들어, 사용자가 버튼을 클릭하는 이벤트가 발생하면, Javascript는 정적인 HTML에 접근하고 조작하여 HTML을 동적으로 변경한다.

```
<body>
  <h1 id="heading"></h1>
  <button id="btn">click me!</button>

  <script>
    var heading = document.getElementById('heading');
    var myButton = document.getElementById('btn');

    myButton.addEventListener('click', function () {
      heading.innerHTML = 'Hello!';
    });
  </script>
</body>
</html>
```

<br>

## 2. Javascript/HTML/CSS 파일 관리 원칙

각 언어의 역할은 각자가 다르다.
- HTML: 웹페이지의 내용(contents)과 구조(structure)를 담당한다.
- CSS: HTML의 디자인을 담당한다.
- Javascript: HTML을 동적으로 변경하는 것을 담당한다.

위와 같이, 각 언어의 역할(관심사)가 다르면, 각 다른 파일로 분리해서 보관하는 것이 원칙이다. 즉, 분업해서 작업하는 경우가 많기 때문에, 보통 HTML 파일에서 CSS, Javascript를 가져오는 방식으로 관리한다.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello World</title>

  <!-- Get a css file -->
  <link rel="stylesheet" href="style.css"></link>
</head>
<body>
  <h1 id="heading"></h1>
  <button id="btn">click me!</button>

  <!-- Get a javascript file -->
  <script src="main.js"></script>
</body>
</html>
```

<br>

## 3. 브라우저 동작원리 

대부분의 프로그래밍 언어는 운영체제(OS) 위에서 실행된다. 하지만, 웹 애플리케이션의 Javascript는 브라우저의 틀 안에서 HTML, CSS와 함께 실행된다. 따라서, Javascript는 브라우저 환경을 고려할 때 보다 효율적인 프로그래밍이 가능하다.

브라우저 기능의 핵심은 사용자를 위해, 서버와의 요청(Request)과 응답(Response)의 관계이다. 즉, 사용자가 브라우저를 통해 어떤 사이트의 웹페이지를 서버에 요청하게 되면, 그 서버가 요청한 웹페이지를 전달하여 브라우저에 표시하는 방식이다.


<br>

![](https://poiemaweb.com/img/client-server.png)

출처: www.poiemaweb.com

<br>

예)

우리가 브라우저에서 www.naver.com을 치게되면, DNS(Domain Name System)이 브라우저에서 쳤던 도메인에 맞는 서버(Naver 서버)를 찾아서 연결하여, 네이버 서버에 요청하게 된다. 그러면, 네이버 서버에서는 요청한 페이지를 응답하여 브라우저에 전달하게 된다. 이때, 브라우저에서는 parser(해독기) 응답받은 페이지를 한줄씩 읽고 메모리에 저장하는데, HTML/CSS/Javascript는 각각 파서가 존재한다. 그래서 페이지에서 HTML 내용을 읽을 때는 HTML 파서로 읽다가, CSS 내용이 나오면, 읽기를 중단하고 CSS 파서에 제어 권한을 넘긴다. 그리고 Javascript 내용이 나오면, 읽기를 중단하고 Javascript 파서에 제어 권한을 넘긴다. 이때, 서버와의 요청과 응답이 처음에 1번만 하는 것이 아니고, HTML 파일안에 CSS/Javascript 파일이 나올때마다 서버에 요청하여 그 파일을 응답받는 방식으로 진행된다.

이렇게 읽어 들인 것들이 각 DOM tree, CSSOM tree로 변환되고, 최종적으로 렌더 트리로 결합되어, 브라우저에 표시가 된다.

이를 요약하면 다음과 같다.
- HTML 파일을 읽어들이다가, script 요소를 만나면 웹페이지의 파싱을 잠시 중단한다.
- script 요소의 src 어트리뷰트에 정의된 javascript 파일을 로드한 후, 파싱하고 실행한다.
- 중단된 웹페이지의 파싱을 다시 진행한다.

<br>

이를 통해, HTML 파일안에서 script의 위치가 의미가 있다는 것을 알 수 있다.
- HTML 요소들을 한줄씩 읽어들이는데, 중간에 script가 오게 된다면, 파싱을 잠시 중단하고, script를 로딩, 파싱을 해야하기 때문에 렌더링에 지장을 받게 되어 페이지 로딩 시간이 길어질 수 있다.
- DOM이 완성되지 않은 상태에서(모든 html 요소를 읽어들이기 전에), Javascript가 DOM(html 요소)을 조작하려고 한다면, 에러가 발생한다.

<br>

따라서, script 요소는 body가 끝나는 마지막 부분에 위치시키는 것이 좋다.

<br>

*HTTP
- HTTP 1.1:  따로 나눠서 여러번에 보낸다.(현재 버전)
- HTTP 2: 한번에 보낸다.

<br>

*여러개 파일을 적용해도, 마지막에 위치한 파일(script/css)만 적용된다.

<br>

*경로: 어떤 이미지를 불러올 때, 절대경로 또는 상대경로 이용해서 불러온다.
- 절대경로: 이미지의 절대적인 경로(고유경로)로 지정하는 방식
  - 예: 어떤 사이트에서 이미지를 가져올 경우

```
<img src="http://www.homejjang.com/images/tree00.gif>
```


- 상대경로: 이미지를 삽입할 HTML 문서를 기준으로 경로를 지정하는 방식


```

// 아래와 같은 경로로 폴더와 파일들이 있을때, 

index.html

css

ㄴhello.html

ㄴfont.woff

images

ㄴsome.images

// hello.html에서 some.images를 가져오고 싶다면,
../images/some.images

// htllo.html의 위치를 기준으로, 가져올 파일이 속한 경로를 찾아가는 방식으로 작성하면 된다.

```

<br>


## 4. script 태그의 async / defer 어트리뷰트

스크립트 로딩 지연으로 인한 병목 현상을 근본적으로 방지하기 위해, HTML5부터 script 태그에 async와 defer 어트리뷰트가 추가되었다.

<br>

- async
  - 웹페이지 파싱과 외부 스크립트 파일의 다운로드가 동시에 진행된다.
  - 스크립트는 다운로드 완료 직후 실행된다.

```
<script async src="main.js"></script>
```

<br>

- defer
  - 웹페이지 파싱과 외부 스크립트 파일의 다운로드가 동시에 진행된다.
  - 스크립트는 웹페이지 파싱 완료 직후 실행된다.

```
<script defer src="main.js"></script>
```

<br>

## 5. Javascript Syntax Basics

### 1. 구문(Statement)

Statement는 각각의 명령을 의미하며, Statement는가 실행되면 어떤 일이 발생하게 된다.

프로그램(스크립트)은 컴퓨터(웹 브라우저)에 의해 단계별로 수행될 명령들의 집합을 말하기 때문에, 프로그램은 Statement의 집합(모음)이라 할 수 있다.

'단계별로'라는 의미는 코드를 위에서부터 한줄씩 읽는 다는 뜻이고, 각 한줄은 Statement, 즉 명령이라고 할 수 있다.

```
var a = 1;
var b = 2;
var k = a + b;

console.log(k);
```

<br>

Statement는 코드 블록({..})으로 그룹화할 수 있다. 코드 블록이란, Statement들의 집합을 말하며, 각 Statement들을 그룹화하여 함께 실행되어져야 하는 Statement을 따로 정의하기 위해서 코드 블록을 사용한다.

```
// 함수
function myFunction(a, b) {
  return a + b;
}

// if 문
if(a > 0) {
  // do something
}

// for 문
for (var i = 0; i < 5; i++) {
  // do something
}
```

<br>

Statement들은 일반적으로 위에서 아래 순서대로 실행된다. 이러한 실행 순서를 조건문이나 반복문을 통해 제어할 수 있는데, 이를 흐름제어(control flow)라고 한다.


다른 언어의 경우 블록 유효범위(Block-level scope)를 생성하지만, 자바스크립트의 경우, 함수 단위의 유효범위(Function-level scope)만 생성한다.


결국, 코딩이라는 것은 Statement(구문) = 명령을 만든는 것이기 때문에, 이때 나(개발자)의 의도는 무엇인가?에 대해 항상 생각해야 한다.


<br>

### 2. Expression(표현식)

Expression은 하나의 값으로 수렴(평가)될 수 있는 구문(Statement)이다.
이는 값, 변수, 연산자의 조합이며, 이 조합은 연산을 통해 하나의 값을 만든다.

```
1 * 10 // 10
'hello' + ' ' + 'world' // 'hello world'
```

위의 예제에서 1 * 10은 10으로 수렴(평가) 된다.


구문안에 표현식이 포함되어 있다. 즉, 표현식은 구문이 될 수 있지만, 구문은 표현식이 될 수 없다.

```
var x; // 구문

// 구문
if (y >= 10) {  // y >= 10은 표현식
  x = y + 3;
} else {
  x = -y;
}

// 구문
var x = (y >= 0 ? y : -y); // y >= 0 ? y : -y은 표현식
```

<br>

### 3. Variable(변수)

변수란, 위치(주소)를 기억하는 저장소이다. 여기서 위치란, 메모리에서의 주소(address)를 말한다. 즉, 변수란, 어떤 값을 메모리에 저장하기 위한 공간을 말하며, 그 공간(메모리 주소)에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(identifier)이다.

프로그래밍에서 변수는 한번 쓰고 버리는 값이 아닌, 계속해서 필요한 값을 저장하고, 참조하여 사용하기 위한 것이다.

```
var x; // 변수의 선언과 초기화
x = 10; // 정수값(10)의 할당
```

<br>

### 4. Value(값)

```
var x = 10;
```

위에서 10이 '값'이 되고, 값과 리터럴은 같은 말이다.

<br>

*리터럴: 변수 또는 상수에 저장되는 값 자체를 말한다. 변수명은 메모리에 할당된 공간을 가리키는 식별자이며, 리터럴은 이 공간에 저장되는 값을 말한다.

<br>

데이터 타입에 따라, 리터럴의 종류가 있다.
- 숫자 리터럴
- 문자열 리터럴
- 객체 리터럴

등등이 있다.

<br>

*문자와 문자열
- 문자: 1글자를 말한다. 예) 'a'
- 문자열: 1개 이상의 글자를 말한다. 예) 'ab', 'bdc'

Javascript에서는 문자와 문자열을 모두 문자열이라고 부른다.


<br>

### 5. Operator(연산자)

Operator는 하나 혹은 그 이상의 값을 하나의 값으로 만들 때 사용한다.


```
// 대입 연산자
var age = '20';

// 산술 연산자
var area = 10 * 4;

// 문자열 연산자
var str = 'Hi! ' + 'My name is Lee';

// 비교 연산자
var foo = 13 > 25; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4);  // true

// 인스턴스 생성 연산자
var today = new Date();
```

<br>

### 6. Keyword(키워드)

Keyword는 수행할 동작을 규정한 것으로, Javascript 엔진에 기본적으로 저장되어있는 예약어이다.

예를 들어, var 키워드는 브라우저에게 새로운 변수를 생성하라는 예약어이다.

```
// 변수의 선언
var x = 15 + 30;

// 함수의 선언
function foo (arg) {
  // 함수 종료 및 값의 반환
  return ++arg;
}

var i = 0;
// 반복문
while (1) {
  if (i > 15) {
    // 반복문 탈출
    break;
  }
  console.log(i);
  i++;
}
```

<br>

### 7. Comment(주석)

Comment는 작성된 코드의 의미를 설명하기 위해 사용한다. 코드의 가독성을 좋게하기 위해, 코드와 코드에서의 변수명 등을 잘 작성함으로써, 주석없이도 다른 개발자가 쉽게 이해할 수 있게 코드를 짜는 것이 최고 좋은 것이지만, 필요에 따라 주석을 적절하게 잘 사용하는 것도 중요하다.

```
// 여기서 주석을 다른 누군가가 이해할 수 있도록 작성한다.
var age = 10;
```

<br>

*데이터
- bit: 0 또는 1을 가질 수 있는 데이터 단위
- byte: 최소단위로, 1 byte = 8 bit
- 숫자: 모든 숫자의 데이터는 8 byte 이다.
- 문자: 문자 1개는 2 byte로, 만약 'red'이면, 8 byte이다(마지막 2byte 자동추가)