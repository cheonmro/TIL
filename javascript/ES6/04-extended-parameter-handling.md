# Javascript Extended Parameter Handling

# 1. 파라미터 기본값 (Default Parameter value)

# 2. Rest 파라미터

## 2.2 arguments와 rest 파라미터
함수 내부에서 arguments 객체를 참조하여 사용할 수 있다.

apply(call) 앞에는 반드시 함수(메소드)이어야 한다. -> slice 등

```
var array = Array.prototype.slice.call(arguments);
```
위에서 slice는 this를 복사한다.

ES6: arguments -> ...rest 를 사용한다.

화살표 함수내에는 arguments가 없다.

화살표 함수 -> 대부분 콜백에서 사용


# 3. Spread 연산자

이터러블: 순회할 수 있다. -> for문으로 돌릴 수도 있다.

유사배열객체(ES5) -> 이터러블 객체(ES6)
이렇게 바꼈으나, 둘은 서로 다르다.


매일 매일의 생산량을 균일하게 만든다. -> 평준화

```
// ES5
var arr1 = [1, 2, 3, 6];
var arr2 = [4, 5];

/*
apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
[3, 0].concat(arr2) → [3, 0, 4, 5]
arr1.splice(3, 0, 4, 5) → arr1[3]부터 0개의 요소를 제거하고 그자리(arr1[3])에 새로운 요소(4, 5)를 추가한다.
*/
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

아래에서, arr1은 this를 가리킨다. 즉, this.splice 식으로 적용된다.

-> arr1.splice(3, 0, 4, 5); (여기서, this -> arr1 이렇게 된다.)
```
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));
```

## 3.3 객체에서 사용하는 경우

```
// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }
```

Object.assign() 대신, 위 merged를 사용하면 된다.

메소드를 사용할 때는 어느 버전 브라우저까지 사용가능한지 확인하고 사용 -> 아니면, babel, typescript 등을 사용한다.

