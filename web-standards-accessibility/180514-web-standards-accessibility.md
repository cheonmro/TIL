# Internet Service
- Telnet
- e-mail
- Usenet: 커뮤니티
- FTP: 파일
- IRC: 메신저
- Archie/Gopher: 검색(전문)

--> 이 모든 것이 통합되어, 현재는 WWW 사용.

# Web Standards
- 웹 표준: 웹기술(HTML/CSS/JS)을 표준화하여 사용하고, 계속 버전이 업데이트 됨.
- 예전에는 주로 W3C에서 주도했으나, 현재는 벤더(웹브라우저 만든 회사들)가 이끌어가는 중
- 웹 브라우저 벤더: Mozilla, Apple, Google, MS, Opera
- 참고할 책: 제프리 젤드만의 웹표준 가이드


# Web Accessibility
- 누구에게나 편리하게 접근가능하고, 편리하게 사용할 수 있게 개발(웹의 철학)
- '기술' 뿐만 아니라 '사람'을 고려
- 장애에 대한 이해가 필요
- 환경에 대한 이해
  - 다양한 Platform
  - Cross Browsing
  - SEO
  - 성능: 저사양 


## Web 설계시
Web 표준기술을 제대로 준수해서 사용하고, Web 접근성을 고려하는 것
장애인에게 정보를 동등하게 접근, 이용할수 있는 필요한 수단을 제공해야 함
누구든지 신체적, 기술적 여건과 관계없이 웹 사이트를 통하여 원하는 서비스를 이용할 수 있도록 접근성이 보장되는 웹 사이트를 제공해야 함
차별을 하지말아야 함


## Web 접근성 보장 및 개선하는 방법
- 가이드라인 준수(WCAG 2.0: Web Content Accessibility Guidelines)
- Web Accessibility Initiative


## 4가지 원칙
- Perceivable: 인지, 자각
- Operable: 운용
- Understandable: 이해
- Robust: 탄탄한, 견고한


# Adds-on(Extensions) for web development
웹사이트 분석시 필요한 확장기능으로써, google web store에서 다운로드해서 사용

- web developer(chrome, firefox)
- headingsmap(chrome, firefox)
- open wax(chrome)
- viewport resizer(chrome)


# HTML5(새로운 표준)
- W3C vs. 웹 벤더회사(애플, 모질라 재단, 오페라 등)
- 처음에는 W3C에서 웹 표준을 주도했으나, 2004년 웹 벤더회사들이 웹의 표준을 직접 제정하기 위해, 공동으로 설립한 공개 그룹인 WHATWG(Web Hypertext Application Technology Working Group)가 W3C와 별개로 Web Application 1.0과 Web Forms 2.0을 만들어 냄.
- 결국, W3C가 개발했었던 XHTML 2.0의 실패를 인정한 후 새롭게 HTML을 개발하기로 결정하면서 WHATWG의 표준안을 대부분 수용하여 HTML5가 탄생하게 됨.


# HTML4.01, XHTML1.0 -> HTML5의 차이점
- 예전 HTML은 마크업이었다면, HTML5는 마크업 이상으로써, API 등을 사용할 수 있을 정도로 많은 발전이 있었다.
- HTML4.01과 XHTML1.0은 동일한 스펙이고, 약간의 문법만 다르다. HTML5는 두 분법을 모두 허용한다.
- 표준이 총 3개로 아무거나 사용해도 상관없지만, HTML5가 가장 최신이라, 권장된다.
- Contents Models(새롭게 등장한 콘텐츠 모델)


# HTML5의 Contents Models
- 명확한 정보 구조 설계 및 구성을 위해, 카테고리를 정의하여 각 요소별로 비슷한 성격을 가지고 있는 것끼리 그룹화 하는 것.


## Contents Models's Category
- Sectioning Root
- Metadata Content
- Flow Content
- Sectioning Content
- Heading Content
- Phrasing Content
- Embedded Content
- Interactive Content
- Palpable Content
- Script-supporting Elements
- Transparent Content
- 하나의 요소가 여러 그룹에 속해 있을 수도 있고, 그렇지 않을 수도 있음


### Sectioning Root
- 여기에 속하는 요소는 <section>이나 <article> 요소와 같이 장이나 절과 같은 계층 구조로 구분되지 않고 독립적인 콘텐츠로 분리되기 때문에 아웃라인에 영향을 주지 않음.


### Metadata Contents
- 문서의 정보를 포함하는 메타데이터, 스타일 표현을 위한 "style" 요소, 행동을 설정하는 "script" 요소들을 나타냄.
- 웹 브라우저에 직접적으로 표시되지 않으며, 문서(document)와 문서 간의 관계를 설정함.


### Flow Content
- 메타데이터 콘텐츠 요소 중 일부를 제외하고, 문서 본문에 해당하는 "body" 요소에 들어가는 대부분의 요소들이 여기에 속함.
- 특히, "<area>", "<link>", "<meta>", "style" 요소는 조건부로 플로우 콘텐츠가 됨.


### Sectioning Content
- 대부분 HTML5에서 새롭게 추가된 요소들이며, 제목과 그 내용을 포함한 범위를 지정하는 콘텐츠를 나타냄.
- 모든 섹셔닝 콘텐츠는 헤딩과 아웃라인을 가짐.


### Heading Content
- 헤딩 콘텐츠는 섹션의 제목을 나타냄.
- 문서의 아웃라인을 고려하여 사용해야 함.
- "<h1>", "<h2>" ~ "<h6>"

### Phrasing Content
- 문서의 텍스트를 나타내며, 그 텍스트를 문단 내부 레벨로 마크업하는 요소들임.
- 프레이징 콘텐츠가 모여 문단을 구성함.
- "<a>" 요소와 같은 일부 요소들은 콘텐츠로 다른 요소를 포함하지 않는다는 전제하에 조건부로 프레이징 콘텐츠가 되기도 함.
- 프레이징 콘텐츠로 분류되는 요소의 대부분은 플로우 콘텐츠 전체를 포함할 수 없으며, 프레이징 콘텐츠로 분류된 요소만을 포함할 수 있음.
- 텍스트 이외에 임베디드 콘텐츠를 포함할 수 있음.


### Embedded Content
- '포함된'이라는 뜻을 가지고 있으며, 문서 안에 외부 자원('외부 리소스'라고 불리기도 함) 또는 HTML이 아닌 다른 언어로 표현되는 콘텐츠를 말함.
- 외부 자원: 이미지, 동영상, 플러그인, 아이프레임 콘텐츠 등이 있음
- 다른 언어로 된 콘텐츠에는 수학 공식을 표현하는 MathML과 SVG 등이 있음.


### Interactive Content
- 사용자가 어떤 기능을 조작할 수 있는 (상호 작용) 콘텐츠를 말함.
- "<audio>", "<img>" 등의 쇼요소는 이러한 특성을 바탕으로 조건부 인터랙티브 콘텐츠가 됨.


### Palpable Content
- 기존 콘텐츠 모델에 새롭게 추가된 개념으로 구체적으로 보여지고 이해할 수 있는 콘텐츠 요소를 말함.
- 최소한 하나 이상의 요소가 존재해야 하고 이떄 해당 요소는 숨김 상태여서는 안됨.


# 아웃라인 알고리즘
- 웹 페이지의 정보 구조를 판별할 수 있는 개념으로, 책의 목차와 비슷
- HTML5에서는 정보 구조를 명확히 할 수 있도록 '아웃라인 알고리즘'이라는 개념이 도입되었음
- HTML5에서 추가된 많은 요소들은 대부분 아웃라인 알고리즘과 관련이 있으며, 그 중에서도 직접적으로 아웃라인을 구성하는 요소에는 헤딩 콘텐츠, 섹셔닝 콘텐츠, 그리고 섹셔닝 루트 요소 등이 있음.


# HTML5의 API
- HTML5에서는 API가 추가 됨.
- 자바스크립트 기술을 좀 더 편리하게 이용할 수 있도록 다양한 API를 지원


## 오프라인 웹 구현을 위한 API









## VS Code shortcuts



## VS Code Extensions

