function Person(name) {
  console.log(this);
  // 생성자 함수 코드 실행 전 -- 1
  this.name = name; // -- 2
  // 생성된 함수 반환 -- 3
  console.log(this);
}

var me = Person('Lee');
console.log(me);