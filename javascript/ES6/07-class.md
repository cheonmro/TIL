# ES6 Class

Q: super keyword?

ES5의 생성자 함수의 대용이다.(replacement)


자바스크립트는 프로토타입 기반 객체지향 언어인데, 클래스를 써도, 내부에서는 프로토타입 기반이다.
그래서 문법적 설탕이고, 클래스 기반처럼 사용할 뿐이다.

클래스랑 비슷한 것이 생성자 함수였다.

클래스가 왜 도입되었나?


css는 레이아웃이 중요하다 -> float, position: fixed, absolute, (그리고: center로 이동시키는 법: 공식이 있다.)


## 1. 클래스 정의 (Class Definition)


<!-- 외부에 공개하지 말아야 할 프로퍼티: _name('_' 이것을 쓰게 되면) -->

```
 // public method
  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };
```
위와 같이하면, 프로토타입 객체에 메소드를 추가하는 방식

순서
- 클래스가 있어야 한다.(클래스를 생성을 먼저해야, 객체를 생성할 수 있다.)
- 그 다음, 객체를 생성한다.

```
sayHi() {
  console.log(`Hi! ${this._name}`);
}
```
위는, 프로토타입에 메소드를 정의하는 방식이다.


```
const me = new Person('Lee');
me.sayHi(); // Hi! Lee
```
new를 사용하지 않으면, error가 난다.(ES5에서는 error가 나지 않았다.)



```
const Foo = class MyClass {};
```
위는 일반적인 방법이 아님.(가능은 하지만)



클래스는 왜 만들지?(목적): 객체를 생성하기 위해서.(생성자함수와 같은 목적)



객체를 생성하는 방식 3가지 + 1가지(class 이용)




## 2. 인스턴스의 생성

```
class Foo {}

const foo = new Foo();
```
위에서 new 다음에 Foo는 Foo 클래스 안에 있는 생성자 함수(constructor)를 말한다.


클래스는 생성자 함수와 대응관계라, 생성자 함수대신, 클래스를 사용한다. 
그러나, 객체 리터럴 방식은 사용할 수 있다. 클래스 내부에서도.


함수의 매개변수가 3개이상이라면, 일반적으로 사용했던 각 값을 매개변수로 주는 것이 아니고,
객체로 자료구조를 만들어, 객체로 할당한다. 왜냐, 객체는 순서가 상관이 없기 때문이다.



## 4. 클래스 프로퍼티(=== 멤버 변수(자바))

클래스가 만들 객체의 프로퍼티


## 5. 호이스팅


## 6. getter, setter: 메소드(활용도가 있다.)

### 6.1 getter

클래스 메소드를 참조하는 것과 아닌것의 차이:
- this를 사용하냐/안하냐의 차이

클래스 프로퍼티를 볼려면, this를 사용한다.
클래스 프로퍼티를 안볼려면, this를 사용안해도 된다.


this를 왜 써야하나? 안쓰면 어떻게 되나?
안써도 되지만, 써야할 때가 있다.


클래스 내부에서 사용하는 this는 항상 클래스 자신을 가리킨다.


메소드 내부에서 this를 사용한다면, 클래스 프로퍼티를 보겠다.
만약, this를 사용안했다면, 클래스 프로퍼티를 보지 않겠다.

getter 특징
- 파라미터가 없다. 
- 반드시 무언가를 반환해야 한다.


var x = foo.firstElem
x()

-> 함수호출패턴에 따른 this가 바뀐다.

```
class Foo {
  constructor(arr = []) {
    this._arr = arr;
  }

  // getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
  get firstElem() {
    // getter는 반드시 무언가를 반환해야 한다.
    return this._arr.length ? this._arr[0] : null; // 
  }
}

const foo = new Foo([1, 2]);
// 프로퍼티 firstElem에 접근하면 getter가 호출된다.
console.log(foo.firstElem); // 1
```

getter & setter 사용하는 경우
- todos 앱에서 오른쪽 옆 'clear' 버튼과 items left의 값을 표현할 때 사용

innerHTML은 getter & setter로 거의 만들어졌을 것이다.

### 6.2 setter


### 7. 정적 메소드

클래스 바디에 메소드를 추가하면 -> 


*아주 중요
### 8. 클래스 상속

클래스를 왜 쓰나? 상속 때문에 사용한다.

```
// 자식 클래스
class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }

  // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
  getArea() {
    // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
    return (this.height * super.getPerimeter()) + (2 * super.getArea());
  }

  // 원통의 부피
  getVolume() {
    return super.getArea() * this.height;
  }
}
```
위에서, 
super()를 반드시 호출해야 한다.
- 함수처럼 사용할 때:부모의 컨스트럭터를 호출한다. -> 부모의 인스턴스를 만들어야 한다.
- 키워드처럼: this와 유사하게, 부모의 this를 가리킨다.

선언할 때 쓸 때는 super() 사용

static method도 상속이 가능하다.

