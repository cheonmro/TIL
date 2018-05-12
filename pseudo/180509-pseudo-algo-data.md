## Goal

* 본 코드를 작성하기 전 생각의 흐름을 의사코드로 작성하는 방법
* 알고리즘에 대한 이해
* 자료구조에 대한 이해

<br/>

## Pseudocode

의사코드: 프로그램이나 알고리즘이 수행할 내용을 인간이 이해할 수 있는 언어로 작성하는 것


<br/>

## 의사코드 장점

* 프로그램을 설계할 때, 밑그림의 역할을 한다.(스케치)
* 목적과 수행과정이 명확해 코드 수정과 분해가 편리하다.
* comment(주석)의 역할을 수행할 수 있다.
* 표준이 없어, 자신이 작성할 언어의 스타일에 맞춰 작성하면 된다.

***

<br/>

## fizzbuzz

* 1부터 n까지 반복하면서, 
* 3의 배수는 "fizz"
* 5의 배수는 "buzz"
* 15의 배수는 "fizzbuzz"
* 나머지는 숫자



**이것을 나타내는 의사코드를 작성하라!**

<br/>

**fizzbuzz - kor** 

1. 사용자로부터 숫자 하나를 받아 n에 할당한다.(변수 n 사용) i는 1이다.
2. 1부터 n까지 숫자를 진행시키면서,
   1. 만약에 해당숫자(i)가 15의 배수라면, "fizzbuzz"를 출력한다.
   2. 만약에 해당숫자(i)가 3의 배수라면, "fizz"를 출력한다.
   3. 만약에 해당숫자(i)가 5의 배수라면, "buzz"를 출력한다.
   4. 위 3개의 경우를 만족하지 못한 경우, 해당 숫자(i)를 출력한다.



**3의 배수의 숫자가 5의 배수의 숫자보다 더 많아, 시간복잡도를 고려했을 때, 먼저 처리하는 것이 좋다. **

<br/>

**fizzbuzz - Eng**

1. get integer from user ==> num, i == 1
2. WHILE i is less than or equal to num
   1. if i is divisible by 15, print "fizzbuzz"
   2. if i is divisible by 3, print "fizz"
   3. if i is divisible by 5, print "buzz"
   4. else, print i



***

<br/>

## VAT: 부가가치세

제품가격과 국가에 따라 다른 부가가치세를 계산해 그 가격을 보여줘라!

* korea: 10%
* japan: 8%
* UK: 20%

<br/>

VAT - eng

1. get price of item from user => item_price
2. set tax rate for each country(kor == 0.1, jap == 0.08, uk == 0.2)
3. get country code(kor, jap, uk) from user => country_code
   1. if country_code is kor, print item_price(1+0.1)
   2. if country_code is jpa, print item_price(1+0.08)
   3. if country_code is uk, print item_price(1+0.2)
   4. else, print "your country is not found"

<br/>

**필요한 데이터가 있을 경우, 사용자로부터 get하기전에 set(세팅)부터 하고 get을 한다.**

<br/>

##  알고리즘

목표를 달성하거나 결과물을 생산하기 위해 필요한 과정들 



어떤 문제를 해결하기 위해 알고리즘을 작성하는 방법은 다양하다.

중요한 것은, 그 다양한 방법중 가장 효율적인 방법으로 작성하는 것이다.

즉, 가장 효율적인 방법을 찾는 것!

그리고, 얼마나 가독성이 좋은가(읽기 쉬운가), 명확한가(clarity)



**clarity** -> 시간 복잡도: 자료의 수(n)이 증가할 때, 시간의 증가 패턴을 나타낸 것.

<br/>

Big O notation

* 1
* log n
* n
* nlog n
* n^2
* n^3
* 2^n
* n!

<br/>

## O(1): constant

* 값에 대한 키 또는 인덱스를 알고 있을 경우
* 그래서, 값을 1번에 찾는다.
* 어떤 key가 가지고 있는 value를 한번에 찾는다.
* RAM과 같이, key 값을 지정해서 바로 접근해, value를 가져온다.

<br/>

## O(log n): logarithmic

* 배열에서 값을 접근할 때, 앞 또는 뒤에서 접근 선택이 가능할 경우
* 데이터 위치에 따라 방향설정을 한다.



<br/>

## O(n): linear

* 자료의 수와 시도횟수가 1:1 관계인 경우
* 예) 반복문 1번 사용할 경우

```
var sum = 0;
for(var i = 1; i < 10; i++) {
    sum += i
}
return sum;
```

<br/>

## O(n^2): quadratic

* 자료의 참조를 이중으로 하게 될 경우
* for문 안에 for문을 사용할 경우

```
var sum = 0;
for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        sum += j;
    }
}
```

<br/>

## sort algorithms	

* O(n^2)
  * Bubble sort
  * Selection sort
  * Insertion sort(작은 데이터)
* O(n log n)
  * Mearge sort
  * Heap sort
  * Quick sort(큰 데이터): 평균적으로 가장 빠른 방법



배열에 있는 숫자의 상태에 따라, 

O(n^2)이 빠를수도 있고, O(n log n)이 빠를수도 있다.

그러나, 보통은 O(n log n)이 빠르다.



Quick sort가 가장 좋고, 많이 쓰인다.(기술면접 대비를 위해 직접구현해보자)



<br/>

## Data Structure

데이터를 쌓는 방법



Javascript는 모든 객체가 JSON으로 쌓인다.

<br/>

## Data Structures in Web Development

웹개발에서 Data Structure을 고려할 때,

브라우저 파서가 효율적으로 파싱(html 읽는 것) 하는 것을 돕기 위해, 효율적으로 <html>을 작성할 필요가 있다.

이때, DOM을 고려하면서 작성하면 된다.

<br/>

## Data Structures in Web Development

* Binary Tree Search 
  * Stack(DFS, Depth First Search)
  * Queue(BFS, Breadth First Search)


<br/>


## Stack

* 나중에 들어간 것이 먼저 나온다.(LIFO: Last In, First Out)
* 즉, 들어가는 순서와 나가는 순서가 다르다.
* 밑바닥이 닫혀있는 칵테일 잔에 각 종류별 술을 따라 층을 만든다. 그러나 마시는 순서는 가장 마지막에 넣은 술부터 마신다.
* push & pop
  * push: adds an element to collection
  * pop: removes the most recently added element that was not yet removed
* peek(핵심): 가장 마지막 값 찾기



<br/>

**function for Stack**

```

```


<br/>


## Queue

* 먼저 들어간 것이 먼저 나온다.(FIFO: First In First Out)
* 즉, 들어가는 순서와 나가는 순서가 같다.
* 파이프라인
* Enqueue & Dequeue
  * Enqueue: add entities to back position
  * Dequeue: remove entities from front position
* peek(핵심): 0번째 값을 찾기



<br/>

**function for Queue**

```

```



<br/>


## Linked List: Linear Collection

메모리에 쌓이는 값과 다음 행선지를 알려주는 것의 조합을 말한다.



메모리에 정보(값)가 쌓일때는 순서대로 쌓이지 않고, 무작위로 쌓이는데, 각 정보의 옆에는 다음번에 쌓인 정보의 위치를 어딘지를 나타내는 행선지가 표시되는데, 이 정보와 행선지를 Linked List라고 한다.



<br/>

binary: 자식 2명까지 가질 수 있는 것



<br/>

## Tree

* hierarchical

https://camo.githubusercontent.com/1e31c6340ac1873522319eaec65f14314baefa1c/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f662f66372f42696e6172795f747265652e7376672f3132303070782d42696e6172795f747265652e7376672e706e67 



<br/>

- root: 2
- level: (0 ~ 3)
- child of 2: 7,5
- subtree: 6,5,11
- Node: (9)
- edge: (8)





