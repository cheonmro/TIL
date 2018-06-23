# How to deal with DOM using Javascript

사용자가 브라우저에서 데이터를 새로 추가하거나, 삭제할 때 등 이벤트를 발생시키면 그 데이터(객체)를 변경하고, 그 다음에, 화면에 보이는 데이터를 변경한다.

이벤트 -> 데이터 변경 -> 화면 변경

즉, 데이터와 화면에 있는 데이터가 동일해야 한다.(데이터 === 화면)


# How to do
- DOM 쿼리 접근해서 값을 가져오기: document.querySelector('')
- 이벤트 발생: addEventListner('click', function())
- 객체 데이터 변경
- 화면 데이터 변경
