const baz = (x, y) => x + y;

const todos = [
  { id: 4, content: 'TEST', completed: true},
  { id: 1, content: 'TEST', completed: true},
  { id: 2, content: 'TEST', completed: false},
  { id: 3, content: 'TEST', completed: true},
];

const res = todos.map(todo => todo.id);

console.log(res);

// 1줄일 때, {}와 return을 사용안함
console.log(todos.filter(todo => todo.id > 2));

const foo = () => { return { a: 1 }; }


// 함수명(bar)은 함수 내부에서만 참조가능, 그래서 호출할 때는 foo로 해야한다.
// var foo = function bar() {};

// var pow = function (x) { return x * x};

// const pow = (x) => x * x;
// console.log(pow(10)); // 100


// ES5
var arr = [1, 2, 3];
// var pow = arr.map(function (x) { // x는 요소값
//   return x * x;
// });

// console.log(pow); // [ 1, 4, 9 ]


const pow = arr.map(x => x * x);
console.log(pow);


// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi(); // Hi undefined