# What is Javascript?

## 1. Introduction

- Javascript는 HTML, CSS와 함께 웹을 구성하는 요소중 하나로 웹브라우저에서 동작하는 유일한 언어이다. 1995년 Brendan Eich가 Netscape Navigator 2를 위하여 개발한 웹페이지에 포함되는 스크립트 언어이다.

- 초창기에는 웹페이지 제작을 보조해주는 정도로 사용되었다가, 과거 웹서버에서 수행되던 많은 역할들이 클라이언트로 이동해 오면서 아주 중요한 역할을 하게 되었다.

- C-family language로, C, Java에서 많은 문법을 차용했다.

- Interpreter Language이기 때문에, compile이 필요없고, HTML 파일 안에 직접 기술이 가능하다.

- 멀티-패러다임 언어로, 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향형 언어다.

- 구글 Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임 환경(Runtime Environment)인 Node.js의 등장으로 Javascript는 웹 브라우저를 벗어나 서버 사이드 애플리케이션 개발에서도 사용되는 Full stack 개발 언어가 되었다.

- 크로스 플랫폼을 위한 모바일 웹/앱 개발 분야에서도 가장 중요한 언어로 주목받고 있다.
  - 모바일 하이브리드 앱: PhoneGap/Sencha Touch/Ionic
  - 서버 사이드: NodeJS
  - Desktop: Electron/AppJS
  - 로봇 제어: Cylon.js/NodeBots

- SPA(Single Page Application) 웹 앱이 대중화되면서 Angular, React, Vue.js 등 다양한 SPA Framework/Library 또한 많은 사용층을 확보하고 있다.



<br>


## 2. History

Ecma International에서 Javascript를 표준화하고, ECMAScript로 명명했다. 

ECMAScript Version History
- ECMAScript 3(ES3) - 1999년
  - 가장 범용적으로 지원되는 버전
- ECMAScript 5(ES5) - 2009년
  - HTML5와 함께 출현한 표준안
  - JSON과 Strict Mode가 추가
  - IE9 이상(85%)이나 그 외 브라우저에서만 작동
- ECMAScript 6(ES6) - 2015년
  - 기능 상의 변화(let, const 키워드/Arrow function 등)

<br>

웹의 초창기는 주로 웹사이트(회사 홈페이지 등 간단한 사이트) 등을 제작했으나, 점점 웹 애플리케이션(데스크탑 애플리케이션과 같은 복잡한 로직을 가진 애플리케이션)을 제작하게 되었다. 이런 웹 애플리케이션이 웹 브라우저에서 돌아가기 시작했는데, 그러다보니 브라우저에서 이런 웹 애플리케이션을 동작하는데 어려움이 생기게 되었다. 그래서 이 부분을 보안하기 위해 '플러그인' 등을 사용했다.


*플러그인: 외부프로그램을 웹 브라우저에 설치하여 브라우저에서 프로그램이 잘 돌아가게 하기 위한 것


그러나, 플러그인을 사용하면서, 보안문제 등의 이슈가 생겼고, 이를 해결하기 위해 HTML5가 등장했고, Javascript까지 발전하게 되었다. 여기에 Javascript를 좀 더 쉽게 도와주는 jQuery가 등장하게 되었다.


한동안, jQuery는 엄청 인기가 있었으나, jQuery는 SPA에 적합하지 않다. 현재는 주로 SPA로 웹 애플리케이션을 개발하게 됨으로써, 단순 jQuery를 잘 사용하는 사람보다, 기본적인 Javascript를 깊고 자세하게 알고있는 사람들에 대한 수요가 생기게 되었다.


