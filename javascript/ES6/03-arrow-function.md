# Javascript Arrow Funciton

arrow function -> 고차함수의 콜백으로 많이 사용

arrow function을 생성자 함수로 사용하면 어떻하지? -> 이걸 막아야겟다. -> 프로토타입 프로퍼티를 없애버리자. -> 그러면, 생성자 함수를 사용 못한다.
-> 그리고, arguemnts를 없애버리자. 그러면 강제적으로 ...rest 파라미터를 사용할 수 밖에 없다.

## 3. this

## 3.1 일반 함수의 this

this의 예외는 총 4개

콜백 함수 === 일반 함수

## 3.2 화살표 함수의 this

map은 두 번째 인자로 this를 줄 수 있다.
이때, this는 매개변수이다.
매개변수의 인자는 호출로 넣어줄 수 있다.

상위 컨텍스트를 this로 함수에 전달

map 안에 있는 this는 상위컨텍스를 가리킨다.

화살표 함수 안에 있는 this는 화살표 위에 잇는 상위컨텍스트(전역이면 window)를 가리킨다.

```
Prefixer.prototype.prefixArray = function (arr) {
  // (A)
  return arr.map(function (x) {
    return this.prefix + ' ' + x; // (B)
  });
};

```

# 4. 화살표 함수를 사용해서는 안되는 경우

## 4.1 메소드

```
// Bad
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi(); // Hi undefined
```

위와 같이 객체 리터럴 방식으로 만들고, Object.prototype.sayHi 이렇게 함부로 Object()를 사용하면 된다.
이건 전체으로 있는 것이라, 건드리면 안된다.

## 4.3 생성자 함수

왜 이렇게 만들었지?
-> 화살표 함수는 주로 콜백에 사용하기 위해 만들었다.

생성자 함수는 ES5 문법대로 만들어라.(일반함수를 쓴다.)


## 4.4 addEventListener 함수의 콜백 함수

내부에서 this를 안 쓸 떄는, 그냥 화살표 함수를 써도 된다.
만약 this를 쓰면, 그냥 function을 사용