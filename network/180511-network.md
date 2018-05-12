# Network

Net(망) + work: 통신망

컴퓨터간 리소스를 공유 가능하게 만드는 통신망

<br/>

# Network 특징
- 컴퓨터사이의 리소스를 공유
- 네트워크로 연결된 다른 컴퓨터에 접근하여 파일을 생성, 수정, 삭제할 수 있음
- 프린터와 스캐너, 팩스 등의 출력장치에 네트워크를 연결하여 여러 컴퓨터가 동시 접근 가능

<br/>

# Network를 위해 필요한 것
- Network Cable
- Distributor(Switch Hub)
- Router
- Network card(컴퓨터 LAN카드)

<br/>

# 커버 범위에 따른 Network 구분
## LAN
- Local Area Network(근거리 통신망)
- 학교, 회사 등 가까운 지역의 좁은 범위


## WAN
- Wide Area Network(광역 통신망)
- 국가, 대륙 등 넓은 지역을 커버


## MAN
- Metropolitan Area Network(도시권 통신망)
- LAN < MAN < WAN

## WLAN
- Wireless Local Area Network(무선 근거리 통신망)
- IEEE 802.11 표준을 기반

<br/>

## 통신 개념
- 802.11: IEEE에서 개발된 표준 무선 통신 기술
- wifi: 802.11 기술을 사용하는 무선 근거리 통신망 제품(상표)

<br/>

# 다른 방식의 Network
- Lifi: Light(빛)을 이용한 무선 통신 기술, 즉 빛을 공유할 수 있는 곳에서 인터넷 가능(관련기업: 필립스)

<br/>

# Network Topology
- 네트워크를 구성하는 노드와 노드간에 연결 상태에 대한 배치를 의미하며, 통신망 구조를 말한다.
- 대표적으로 Star(성형), Ring(원형), Bus(버스형)이 있다.
- 현재는 하나의 형태로 설명하기는 어렵다.


<br/>

# 국가간 Network 
https://www.submarinecablemap.com/


<br/>

# Ethernet
- 전세계의 사무실이나 가정에서 일반적으로 사용되는 유선 LAN에서 가장 많이 활용되는 기술 규격
- 예) 서울에서 부산까지 유선 LAN이 있고, 데이터가 전송이 되는데, 이때 중간에 대구역에서 확인하여 이 데이터는 부산으로 가는 데이터라는 것을 확인하고 올바른 방향을 제시하는 역할
- ether == 에테르 == 빛의 매질(매질: 파동을 일으키는(움직이게 하는) 것)
- IEEE 802.3 규약 기반
- OSI 7 Layer에서 Data-link Layer에 위치

<br/>

# Network OSI 7 Layer
- Open Systems Interconnection Reference Model
- 국제 표준화기구에서 개발한 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것

<br/>

# Packet
- 데이터를 한번에 전송할 단위로 자른 데이터의 묶음 혹은 그 크기
- 1492~1500 bytes(프로토콜에 따라 다름)
- 네트워크에서는 바이크(byte)라는 표현 대신 옥텟(octet)으로 표현

<br/>

# Network OSI 7 Layer
https://camo.githubusercontent.com/6c2b56b3471651c8b3f282daa8dbfae236068b41/687474703a2f2f70647331332e65676c6f6f732e636f6d2f7064732f3230303930372f32322f36372f64303037383036375f346136363661613733633663372e676966 

<br/>

## Application Layer
- 사용자에게 네트워크 자원에 대한 접근을 제공
- 네트워크 활동들에 대한 모든 기본적인 인터페이스를 제공
- 사용자에게 보이는 유일한 계층(예 web browser)

<br/>

## Presentation Layer
- 응용 계층으로부터 전송 받거나 전달되는 데이터의 인코딩과 디코딩
- 안전하게 데이터를 사용하기 위해 몇 가지 암호화와 복호화 형식 보유

<br/>

## Session Layer
- 두 대의 컴퓨터 사이의 세션이나 대화를 관리
- 모든 통신 장비를 연결하고 관리하며 종료
- 순간적으로 연결이 끊어지는 것을 막고 호스트 사이의 연결을 적절하게 종료시키기 위한 기능과 연결이 단방향인지 양방향인지에 대한 것을 담당.
- 예) 내가(내 컴퓨터) google.com를 입력하고 들어가면, google 서버에서 session ID를 보내준다. 이 session ID를 통해, 내가 구글에서 제공하는 서비스(구글 드라이브, 지메일 등)를 매 서비스마다 로그인을 하지 않아도 사용할 수 있는 것은 구글이 나의 session ID를 알고 있기 때문이다. 그러나, 로그인을 했어도, 30분정도 내가 활동이 없으면 session ID를 제거한다.
- 세션: 서버가 관리
- 쿠키: 사용자의 브라우저가 관리(사용자가 어떤 사이트, 어떤 내용 입력 등을 하면 브라우저가 그 쿠키를 관리하고, 사용자가 그 사이트를 다시 들어가면, 그 사이트는 그 사용자의 쿠키를 기억한다.)


## Transport Layer
- 아래 계층에 신뢰성 있는 데이터를 전송할 수 있게 함
- 실제 전송/수신이 일어나는 곳
- 흐름 제어, 분할, 재조립, 오류 관리를 포함하지만 전송 계층은 지점과 지점간의 오류가 없음을 보장
- 연결 지향적인 프로토콜과 비연결 지향적인 프로토콜을 제공
- 방화벽과 프록시 서버가 이 계층에서 동작
- 하드웨어의 가장 외곽(경계선)
- 방화벽을 해제 하겠습니까? 라는 메세지가 나오는 구간

<br/>

## Network Layer
- 가장 복잡한 OSI 계층 중 하나로, 물리적인 네트워크 사이의 라우팅을 담당하며, 라우터가 이 계층에서 동작(공유기 == 라우터)
- 네트워크 호스트의 논리적인 주소(IP 주소같은)를 관리하고 패킷을 분할해 프로토콜을 식별하는 기능, 오류 탐지 같은 몇 가지 경우를 담당
- 네트워크의 중간역에서 어디로 보낼지 판단하는 곳(큰역으로써, 경로를 계산하는 곳)

<br/>

## Datalink Layer
- 물리적인 네트워크 사이의 데이터 전송을 담당
- 실제 데이터 전송하는 곳
- 물리적인 장비를 식별하는 데 사용되는 주소 지정 체계(Addressing Schema)와 데이터가 변조되지 않았음을 확증하기 위한 오류 확인을 제공
- 브리지와 스위치가 이 계층에서 동작하는 물리적인 장비(작은역으로써, 경로 계산을 안함)


<br/>

## Physical Layer
- 네트워크 데이터가 전송될 때 사용되는 물리적 매개체(네트워크 케이블)
- 전압, 허브, 네트워크 어댑터, 리피터, 케이블 명세서를 포함해 모든 하드웨어의 물리적이고 전자적인 특성을 정의
- 연결을 설정하고 종료하며, 공유된 통신 자원을 제공하고, 아날로그를 디지털로, 디지털을 아날로그로 변환


<br/>

# Network OSI 7 Layer

## 두 컴퓨과 사이의 통신

https://camo.githubusercontent.com/55bdb3a3951bed828b7c7a161f461468750c415a/687474703a2f2f322e62702e626c6f6773706f742e636f6d2f2d582d6c617477536a5968552f557a724d573266325765492f41414141414141414145382f4933386253535a5a546e632f73313630302f6f7369372e676966 

<br/>

## OSI 7 Layer Model & TCP/IP Protocol

https://camo.githubusercontent.com/6367e6a2a50124fb1b771d9b179c66ee3ab4a5ef/687474703a2f2f6366696c6532352e75662e746973746f72792e636f6d2f696d6167652f31333433304634363444413930344534313537374131 

<br/>

## HTTP
HyperText Transfer Protocol
- www상에서 정보를 주고받는 프로토콜
- hypertext를 주고받는 프로토콜(hypertext: 문자가 의미를 내포할 수 있는 것으로써, 진보된 텍스트, 예를 들어 링크 등이 있다.)
- www: html를 기본으로 주고 받는 것
- 인터넷: 정보를 주고 받는 것
- TCP, UDP를 활용함
- HTTP method를 통해 하고 싶은 액션을 정의(GET/POST/PUT/DELETE)

<br/>


## FTP
File Transfer Protocol
- 서버와 클라이언트 사이에 파일전송을 위한 프로토콜
- but, 보안에 매우 취약(패킷 가로채기, 무차별 대입 등)
- 그래서 현재는 FTPS(FTP-SSL), SFTP(simple FTP), SSH(Secure SHell) 등을 사용

<br/>

## SMTP
Simple Mail Transfer Protocol
- Internet에서 메일을 보내기 위한 프로토콜


<br/>

## TCP/IP
Transmission Control Protocol / Internet Protocol
- 전송제어 프로토콜 + 송수신 호스트의 해킷교환을 위한 프로토콜

<br/>

## TCP
- 전송제어 프로토콜
- 근거리 통신망이나 인트라넷, 인터넷에 연결된 컴퓨터에서 실행되는 프로그램 간에 일련의 옥텟(==byte)을 안정적으로, 순서대로, 에러없이 교환할 수 있게 함
- 순서가 중요
- 안정적

<br/>

## STREAM
- 문자형식의 데이터가 열의 형태로 연속성을 띄게 됨 -> TCP(안정적)

<br/>

## DATAGRAM
- 하나의 패킷이 발신지와 수신지 정보를 모두 담고 있는 독립적인 패킷 -> UDP(안정도는 떨어지지만, 빠름, 예) 온라인게임)

<br/>

## STREAM socket
- 연결형 스트림 소켓은 두개의 시스템이 연결된 후 데이터를 교환
- 패킷 순서 신경쓰지 않아도 되어 안정적인 데이터 전송 가능
- 예) 영화 등의 데이터를 잘라서 전달


<br/>

## DATAGRAM socket
- 비연결형 데이터그램 소켓은 명시적으로 연결되지 않은 상태로 데이터를 주고 받음
- 연결과 해제 과정이 없어 빠른 데이터 교환이 가능
- 예) 온라인 게임


<br/>

## IP
- IPv4, IPv6
- 기존에 사용하던 것이 IPv4이고 약 43억개였다. 그러나, 이미 이것 또한 부족하여, IPv6로 양이 증가
- IPv4: 32bit로 구성 / IPv6: 128bit로 구성

<br/>

## DNS
- Domain Name System
- 외우기 힘들며, 더 힘들어질 ip address를 사람이 판별하기 쉬운 url을 매핑하는 시스템
- 예) 내가(내 컴퓨터) daum.net을 입력하면, DNS가 daum의 IP가 뭐야? 라고 물어보는 것

<br/>

## ipconfig / ifconfig
- 현재 컴퓨터와 연결된 네트워크 정보를 확인할 수 있음
- ipconfig: Mac / ifconfig: Windows


<br/>

## UDP
User(Universal) Datagram Protocol
- 데이터그램을 전송하기 위한 프로토콜
- 메시지 수신확인x, 도착순서 예측x
- 빠른 속도, 적은 오버헤드


<br/>

# Web programming

## 웹 개발 패턴의 변화
- 1991~1999: 정적인 컨텐츠들을 중심으로 웹 기술이 발달
- 1999~2009: Linux, Apache, Mysql, Php(LAMP) 중심의 동적인 서버, 정적인 클라이언트 모델이 지속됨
- 2010~현재: Javascript(Dynamic Web Client)

<br/>

## 정적/동적 웹 개발
- 정적: 모든 페이지가 완벽하게 하나씩 필요하고, 각 페이지를 전달하는 방식
- 동적: 구조(레이아웃)은 공통적으로 하나만 있고, 각 컨텐츠만 전달하는 방식

<br/>

# 웹 개발의 현재
Javascript

## Client-side
- HTML/CSS, JAVASCRIPT
- jQuery(이것을 대체하기 위한 아래 Framework가 만들어졌다.), AJAX(URL이 변경안되었는데, 추가적으로 정보를 요청하는 것, 예) 페이스북에서 스크롤을 내리면 정보가 추가적으로 나타나는 방식)
- Front-end Web Framework
    - Angular(가장 많은 것을 포함한 것)
    - React.js(UI에 초점이 맞춰짐)
    - Vue.js(가장 light한 프레임워크)
- CSS Framework
    - Bootstrap(가로길이(Grid)가 12등분에서 사용, 1,2,3,4개로 나뉘는 방식)
    - Foundation(1/n, 1/7 등이 가능)


<br/>

## Server-side
- javascript: Node.js(Express.js)
- Java: Spring
- Python: Django, Flask

<br/>

## Database
- RDBMS
    - MySQL
    - PostgreSQL
    - MariaDB
- noSQL
    - MongoDB
    - CouchDB
    - Redis


<br/>

## etc
- celery(for Distributed Task Queue)
- github, Bitbucket, gitlab(for SCM)
- travis CI, or jenkins(for Continuous Integration)
- slack, trello


<br/>

## URI, URL, URN
URI
- Uniform Resource Information: 자세한 파일이름까지 보여주는 것
- Uniform Resource Locator: 위치지정요소
- Uniform Resource Name: 통신방법 신경 안쓰는 것(http 안 보여줌)


<br/>

## localhost: 내 컴퓨터에서 임시서버로 사용

<br/>

## Notation(표기법)
- Hungarian Notation: 자료형 명시
- snake_case: 바닥에 붙어서 사용, underbar("_")(Python 등에 사용)
- CamelCase: 모든 문자의 첫 알파벳은 대문자(Python에서 사용하는 방식)
- Javascript CamelCase: 맨 앞글자의 첫 알파벳은 소문자이고, 나머지는 모두 대문자(Javascript에서 사용하는 방식)