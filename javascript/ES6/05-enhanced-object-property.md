# ES6 Enhanced Object Property

key를 알면, key의 값을 가져와서 사용할 수 있다.(변수명과 같다.)

```
';' 구문의 종료를 알린다.
object- > ; 를 붙인다.
표현식-> ; 를 붙인다.

둘다 구문이기 떄문에 붙인다.

선언식: 선언문이기 때문에, -> ;를 안 붙인다.
```

```
// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

위에서 this는 상위컨택스트를 가리킨다. 이때, 상위컨택스트는 전역이다.
왜냐면, 함수레벨로 컨텍스트가 정해지기 때문에,
obj는 스코프가 아니다.


띄어쓰기(intent) 어떻게 할까?


[[Prototype]]: 숨겨진 의미 -> 우리가 자체적으로 바꾸지 말라는 뜻

```
const child = {
  // child 객체의 프로토타입 객체에 parent 객체를 바인딩하여 상속을 구현한다.
  __proto__: parent,
  name: 'child'
};
```
위와 같은 방식으로 사용하지 말자. -> 대신, class를 사용하자.

상속은 아주 특별한 경우에서만 사용한다.