// Problems to solve using array method

var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]
  var getIdValues = todos.map(function (item) {
    return item.id;
  })
  console.log(getIdValues); // [ 3, 2, 1 ]


// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3
  var max = Math.max.apply(null, getIdValues);
  console.log(max); // 3


// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
  var addTodos = [{ id: 4, content: 'Test', completed: false }].concat(todos);
  console.log(addTodos);
  console.log(todos);


// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
  var delTodos = todos.filter(function(item) {
    return item.id !== 4;
  })
  console.log(delTodos);


// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
  // var completedValue;
  // todos.forEach(function (item) {
  //     if (item.id === 3) item.completed = !item.completed;
  // });
  // // console.log(item.completed); // false
  // console.log(todos);

  // forEach는 답은 나오나, 원본을 바꾸기 때문에, map을 사용한다.
  // forEach는 값을 바꿀 때는 사용하지 말고, 그 값을 활용하여 뭔가 할 때 사용

  // 프로퍼티의 일부 값을 바꿀 때는 Object.assign 이게 좋다.
  var reverse = todos.map(function (todo) {
    return Object.assign({}, todo, { completed: todo.id === 3 ? !todo.completed : todo.completed });
  })
  console.log(todos);
  console.log(reverse);


// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];

var trueTodos = todos.map(function (todo) {
  return Object.assign({}, todo, { completed: true });
})
console.log(trueTodos);



// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라

var numTodos = todos.filter(function (todo) {
  return todo.completed === true
}).length;
console.log(numTodos);


  // 참고 사항
  
  // array.map -> 매핑한다: 1:1 대응한다.(원본이 3개면, 반환값도 3개이다.)

  // 함수에 return이 없으면, undefined를 반환한다.

  // max가 static method라서 this가 의미가 없기 때문에, null 값 준다.
  // var max = Math.max.apply(null, getIds());

  // push, unshift 등은 안 사용하는 것이 좋다. 객체의 값이 변경되기 때문에. 그대신, 어드레스를 바꾼다.(재할당한다.)
  // unshift 등은 원본을 수정한다.
  // concat은 원본을 수정하지 않는다. 그래서 concat을 사용

  // array.filter: 언제 사용? 체크한 버튼만 골라서, 삭제할 때

  // forEach/map/filter가 가장중요