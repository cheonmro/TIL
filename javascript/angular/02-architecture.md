# Angular Architecture

angular -> package.json에서
zone.js -> angular의 핵심; 변화감지(상태가 변한 것들을 연결하는 것, 연결하기 위해 변화를 감지하는 역할)
=> app.component.html이 app.component.ts의 코드가 변하는 것을 감지하기 위해 계속 지켜보고, 변하면 같이 변한다.

angular.json -> angular를 관리하는 설정파일

컴포넌트별 css의 스코프가 존재하여 서로 영향을 안 미치게 할 수 있다.

assets -> images, fonts, etc..

main.ts -> 진입점: 애플리케이션 소스가 돌 때, 가장먼저 도는 파일

reset css: 각 브라우저별로 가지고 있는 default css가 있어서, 다 다르다.
그래서, css를 기본적으로 고정시켜줘야 한다.


componenet가 angular의 절반이다.
하나의 화면을 만드는데, 이 화면을 재사용하고 싶다.


ng serve -> watch mode!: 서버 기동
ng serve -o: browser open


구성요소들(서비스, 디렉티브 등)은 모듈(app.module.ts)의 일원(소속)이어야 한다.

컴포넌트들은 태그들과 같이 사용된다. 즉, 부자관계를 가진다.
가장 부모: 루트 컴포넌트

모듈도 부자관계를 가진다.
가장 부모:루트 모듈

컴포넌트: 하나의 커스텀한 태그

데코레이터: 뒤에 오는 클래스의 생성자를 조작하는 함수


관심사의 분리에 따라 파일을 나누고, 분업을 한다.
전통적으로는 관심사의 분리에 따라 나누는게 좋으나,


Angular에서 Component 관점에서 봤을 때는,
나눴을 때 편하냐, 합쳤을 때 편하냐
템플릿/스타일이 간단하면, 한 파일에 그냥 작성해도 된다.
복잡하면(약 100줄 이상?), 따로 나눠서 작업한다.


spec.ts 파일(test file) 안만드는 방법

view: 화면 전환의 단위


view의 관심사
service의 관심사
directive의 관심사

각각의 관심사가 모두 다르다.

-> 재사용성과 유지보수를 위해서 분리하는게 좋다.

<br>

## 2. Angular 애플리케이션의 처리 흐름

1. index.html -> main.ts -> root Module 기동 -> root Component 기동 -> data binding

<br>


# 13.4 Angular Component - Basics

Component는 view에 관심이 있다.

<br>

## 1. 컴포넌트 소개

## 1.1 웹 컴포넌트(표준)

컴포넌트
- 동작 가능한 하나의 부품
- 눈에 보여지는 화면


조합해서 만들어 나가는 것: 컴포넌트 개발 방법

상태 정보의 흐름: 부자관계


root component: app.component.ts

Angular Module(ng) v. ES6 Module


Component를 만들때는, 그 위에 데코레이터를 추가하고, 그 데코레이터 안에는 설정정보를 추가해야 한다.
style이 없는 경우 생략가능하고, 템플릿은 항상 존재하기 때문에, 생략이 불가능하다.
selector도 생략 불가능


Angualr는 양방향 바인딩을 공식적으로 지원하지 않는다.
실제로는 두 단방향을 하나로 묶어서 양방향 바인딩처럼 행동

상태 데이터

componenet decorator가 있어야 component가 된다.
그게 없으면, 그냥 클래스이다.