// 11. 배열의 최대/최소값 구하기
// 배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
  return Math.max.apply(null, array);
  // 디스럭처링
  // Math.max.apply  
  // argument의 리스트: 두번째 인자인 array
  // array를 인수로 풀어서 준다.
  // (this, array)

  // array의 각 요소가 배열로 묶여있기 때문에, 그거를 각 요소로 풀어주기 위해 apply를 사용.
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7


function getMinValueFromArray(array) {
  return Math.min.apply(null, array);
  
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5