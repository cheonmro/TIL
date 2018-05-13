# Computational Thinking

정답이 정해지지 않은 문제에 대한 해답을 일반화하는 과정

-> 정답이 없는 것이 아니고, 정답이 정해져 있지 않은 상황에서 다양한 시나리오별로 경우의 수를 따져서, 하나하나씩 논리적으로 답을 찾아가는 과정.

<br/>

# Process of Computational Thinking
- 문제 조직화(추상화)
- 솔루션 구현(자동화)
- 솔루션 실행 및 평가(분석)

<br/>

# Computational Thinking Process
1. 문제인지: 문제가 무엇인가?
    1. 문제: 배가 고프다.
2. 문제분해 -> 문제 조직화
    1. 뭘 먹긴 먹어야 겠다.
        1. 집에서 먹는다.
            1. 집에 밥이 있나?
            2. 라면은 있나?
        3. 밖에서 먹는다.
            1. 돈이 충분히 있나?
                1. 레스토랑에서 먹는다.
                2. 편의점에서 먹는다.
3. 패턴인지: 아! 배가 고프면 어디에서 뭔가를 먹으면 Hunger가 false가 되는구나.
4. 일반화/추상화: 배가 고프면 {{어디}}에서 {{어떻게}} {{해결함}}
5. 알고리즘: 위 문제 조직화에 따라 순서도(알고리즘)을 작성한다.

<br/>

-> 솔루션 구현(자동화)

<br/>

-> 솔루션 실행 및 평가(분석)
- 솔루션대로 실행해서 나는 배고픔을 인지하고 해결하게 되었다.
- 돈 보유량에 따라 다양한 선택지를 둬야겠다.
- 집에서 밥이 없으면 굶지말고 밥을 해야겠다.


<br/>

# Calculation(calculator) vs. Computation(computer)

Calculation(calculator): Fixed program computer - just calculate
-> (단순) 연산 과정, 단순 연산을 계산하는 기계

Computation(computer): Stored program computer - Stores and Executes instructions
-> 시스템적으로 연산과정을 저장해놓고, 연산과정이 저장되어 있는 상태에서 계산하는 일련의 과정


<br/>

# Basic Computer Architecture

![](https://github.com/ulgoon/wps-se/raw/master/img/cssca1.1.png)


<br/>

*CPU = Control Unit + Arithmetic Logic Unit


<br/>

# 프로세스
1. 컴퓨터에서 Input(입력장치)를 통해 정보(연산과정 등)를 입력하면, Control Unit이 계산해야할 것들을 순서대로 Memory에 저장한다.
2. Arithmetic Logic Unit에서 Memory에 저장된 계산해야할 것들을 참조해서 결과값을 계산한 뒤에, 다시 Memory에 저장한다.
3. 최종 결과값을 Memory에서 참조해서 Output으로 출력한다.


<br/>

# CISC & RISC Architecture

- Complex Instruction Set Computers: 대부분의 컴퓨터
복잡한 명령구조
많은 명령어를 가지고 있어서, 고성능 컴퓨팅에 사용
Intel x86, AMD64
- Reduce Instruction Set Computers: 모바일 프로세서
명령어의 단순화
메모리 접근 횟수가 적음
저전력 프로세싱에 사용
ARM, SPARC


<br/>

# Memory

Memory: 컴퓨터에서 사용할 수 있도록 정보를 저장하는 공간

RAM vs. ROM


RAM: Random Access Memory
- 프로그램이 실행되는 동안 필요한 정보를 저장하는 컴퓨터 메모리.
- 저장된 데이터를 순차적인 아닌 지정해서(같은 시간, 동시에) 접근 할 수 있는 데이터 저장소.
    - 카세트 테이프가 1~18번 트랙이 있으면, 만약 18번에 접근하려하면 1번부터 순차적으로 접근해야 한다. 
    - 그러나, RAM은 지정해서, 같은 시간에 접근 가능하다.
- 자유롭게 읽고 쓸 수 있는 주기억장치
- 메모리의 주소로 그 위치에 접근: 메모리에 저장되는 각 정보는 주소가 있고, 이 주소를 참조해서 사용
- 휘발성 메모리로, 전원을 끄면 모든 정보가 날라간다(사라진다)


<br/>

ROM: Read Only Memory
- 전원이 공급되지 않아도 그 정보를 유지하는 주기억장치
- 비싸거나 느려서 안정적인 정보를 저장해야 할 때 사용
- BIOS, OS, Firmwave 정보 저장에 사용


<br/>

RAM & ROM 차이
- RAM은 읽고 쓰기가 가능하고, ROM은 읽기만 가능하다. ROM은 읽기 전용 메모리
    - 읽기: 메모리에 저장된 정보를 우리가 읽을 수 있다.
    - 쓰기: 필요한 정보를 메모리에 저장(기억) 시킬 수 있다.
- RAM: 휘발성 메모리 / ROM: 비휘발성 메모리
    - 휘발성: 컴퓨터의 전원을 끄면 메모리에 저장된 정보가 지워진다.
    - RAM은 전원을 끄면 저장된 정보가 지워지지만, ROM은 전원이 꺼져도 지워지지 않고 유지된다. 그래서 컴퓨터를 이용해 각종 문서 등을 작성한 정보는 작업이 끝났을 때, 반드시 디스크에 저장하는 단계를 거쳐야 한다.

<br/>

ROM에는 Windows 같은 운영체제를 가동하기 전에, 컴퓨터의 각 구성요소를 점검하기 위한 기본정보들이 들어 있고, 모니터, 키보드, 디스크 드라이브 등이 서로 어떻게 정보를 전달하고, 이용할 것인지를 제어하는 기본 입출력시스템, 즉 BIOS 정보가 들어있다.

이런 것들은 아예 PC가 만들어질 때, 제조회사에서 제공하는 정보인데, 이를 사용자가 임의로 바꾸거나 할 일은 없다.


<br/>

## 왜 메모리에 저장하고 있다가 작업을 끝낸 후 디스크로 옮기는 번거로운 단계를 거칠까?

속도문제 때문이다.
프로세서 입장에서는 더 빠르게 정보를 주고받을 수 있는 기억장치와 어루어져서 작업을 해야 전체적으로 일처리를 빠르게 할 수 있는데, 하드디스크는 디스크를 회전시키고, 헤드를 이동시키는 등 모두 기계적으로 이루어지기 때문에, 전자의 움직임에 의해 정보를 읽고 쓰게 되는 RAM과는 수 십배의 속도차이가 나게 된다.

더 빠른 속도로 업무를 처리하기 위해서는, 계산속도가 빠른 프로세서도 중요하지만, 제아무리 빠른 프로세서를 사용한다고 해도, 처리과정 중 이에 필요한 정보를 참조하고, 또 저장하게 해주는 메로리의 속도가 늦게되면 여기서 빚어지는 병목현상 때문에 컴퓨터의 전체 효율이 떨어지게 된다.


<br/>

# Computer Science & Engineering

- 컴퓨터의 소프트웨어를 다루는 학문
- 컴퓨터라는 물리적 기기를 연구하는 것이 아닌 Computer 의 개념과 구조를 이해하고 구현하는 학문


<br/>

전기전자 공학: 컴퓨터 물리적 기계(하드웨어)
컴퓨터 공학: 컴퓨터 내부 원리(소프트웨어)

<br/>

## 컴퓨터 화면 구조
- LCD
- CRT

<br/>

## 컴퓨터 관련 기계
- 퍼서
- 메인보드


<br/>

직류 v. 교류

컴퓨터: 직류전원


<br/>

## CPU & MicroProcessor

bit: 0과 1로 이루어진 정보(데이터)

8bit: 0과 1로 이루어진 정보를 최대 8개 숫자를 한번에 처리할 수 있다.

16bit: 0과 1로 이루어진 정보를 최대 16개 숫자를 한번에 처리할 수 있다.

80386(386 컴퓨터) -> 32bit

펜티엄

프로세서 변화(이름): Itanium -> Opteron -> Xeon

Xeon은 Core i 시리즈(i5, i7)


<br/>

# OS

Operating System: 운영체제

-> 시스템 하드웨어와 응용 소프트웨어(한글, excel, ..)의 리소스를 관리하는 시스템 소프트웨어
(하드웨어와 응용소프트웨어를 연결해주는 중간자)

<br/>

## Type

- Single-tasking / Multi-tasking
    - 한번에 1개 / n개 의 프로그램을 동시 수행(achieved by time-sharing)
- Single-user / Multi-user
- Distributed


Hardware <--> Operating System <--> Application Software <--> User


<br/>

## OS 역사

UNIX -> LINUX -> WINDOWS


UNIX
Starting in the 1970s by AT&T
Ken Thompson, Denis Ritchie, ..

UNIX -like
- Solaris
- BSD
- MacOS

LINUX
- Unix-clone OS
- GNU/Linux
- Sep 17 1991 by Linus Torvalds

GNU is not Unix


LINUX - like
- Ubuntu
- Fedora
- CentOS
- Debian
- Linux Mint


WINDOWS
- CP/M-DOS -> MS-DOS
- Windows 1
- ..
- Windows 10
- Windows 95
- Windows 98
- Windows 2000

<br/>

## Windows 9x vs Windows NT
MS-DOS based -> 16bit 
WindowsNT Kernel(3.1) (windows 95~xp) based -> 32bit 
WindowsNT Kernel(6.1) (vista~) based -> x86-64(AMD64)

<br/>

## 윈도우가 개발하기 안 좋은 이유
윈도우는 SSH 통신 지원이 안된다.(개발할 때, SSH 통신이 필요)
그러나, Ubuntu를 설치하면 SSH 통신 가능.


<br/>

## Patch & Debug
Patch: 프로그램을 수정한다(업데이트)
Debug: 문제(에러)를 수정한다.

<br/>

## 개발 면접 시 알아야할 컴퓨터 공학문제
-> ~ 차이점 알기
예) RAM & ROM 차이점은?
