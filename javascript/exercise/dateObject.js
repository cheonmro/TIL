// 1. Date Constructor

// 1.1 new Date()

var d = new Date();
console.log(d); // 2018-06-04T12:22:44.238Z


// 1.2 new Date(milliseconds)

var d = new Date(0);
console.log(d); // 1970-01-01T00:00:00.000Z

var d = new Date(86400000);
console.log(d); // 1970-01-02T00:00:00.000Z


// 1.3 new Date(dateString)

var d = new Date('May 12, 2016 12:13:00');
console.log(d); // 2016-05-12T03:13:00.000Z

var d = new Date('2017/08/08/20:00:00');
console.log(d); // 2017-08-08T11:00:00.000Z


// 1.4 new Date(year, month[, day, hour, minute, second, millisecond])

var d = new Date(1999);
console.log(d); // 1970-01-01T00:00:01.999Z

var d = new Date(1999, 1, 3, 11, 33, 30, 0);
console.log(d); // 1999-02-03T02:33:30.000Z

var d = new Date(1999, 1);
console.log(d); // 1999-01-31T15:00:00.000Z

var d = new Date('1999/1/3/11:33:00:00');
console.log(d); // 1999-01-03T02:33:00.000Z


// 2. Date Method


// 2.1 Date.now()

var n = Date.now();
console.log(n); // 1528115778113


// 2.2 Date.parse()

var d = Date.parse('Jan 2, 1970 00:00:00 UTC'); // UTC
console.log(d); // 86400000

var d = Date.parse('Jan 2, 1970 09:00:00'); // KST
console.log(d); // 86400000

var d = Date.parse('1970/01/02/09:00:00'); // KST
console.log(d); // 86400000


// 2.3 Date.UTC()

var d = Date.UTC(1970, 0, 2);
console.log(d); // 86400000

var d = Date.UTC('1970/1/2');
console.log(d); // NaN


// 2.4 Date.prototype.getFullYear()

var today = new Date();
var year = today.getFullYear();

console.log(today); // 2018-06-04T12:39:18.487Z
console.log(year);  // 2018


// 2.5 Date.prototype.setFullYear()

var today = new Date();
today.setFullYear(2000);
var year = today.getFullYear();

console.log(today); // 2000-06-04T12:40:02.492Z
console.log(year);  // 2000

today.setFullYear(1900, 0, 1);
year = today.getFullYear();

console.log(today); // 1900-01-01T12:40:02.492Z
console.log(year);  // 1900


// 2.6 Date.prototype.getMonth()

var today = new Date();
var month = today.getMonth();

console.log(today); // 2018-06-04T12:40:46.113Z
console.log(month); // 7


// 2.7 Date.prototype.setMonth()

var today = new Date();
today.setMonth(0); // 1월
var month = today.getMonth();

console.log(today); // 2018-01-04T12:42:05.676Z
console.log(month); // 0

today.setMonth(11, 1); // 12월 1일
month = today.getMonth();

console.log(today); // 2018-12-01T12:42:05.676Z
console.log(month); // 11


// 2.8 Date.prototype.getDate()

var today = new Date();
var date = today.getDate();

console.log(today); // 2018-06-04T12:44:01.669Z
console.log(date);  // 8


// 2.9 Date.prototype.setDate()

var today = new Date();
today.setDate(1);
var date = today.getDate();

console.log(today); // 2018-06-01T12:44:01.669Z
console.log(date);  // 1


// 2.10 Date.prototype.getDay()

var today = new Date();
var day = today.getDay();

console.log(today); // 2018-06-04T12:44:55.780Z
console.log(day);   // 2


// 2.11 Date.prototype.getHours()

var today = new Date();
var hours = today.getHours();

console.log(today); // 2018-06-04T12:45:21.956Z
console.log(hours); // 20


// 2.12 Date.prototype.setHours()

var today = new Date();
today.setHours(7);
var hours = today.getHours();

console.log(today); // 2018-06-03T22:46:11.012Z
console.log(hours); // 7

today.setHours(0, 0, 0, 0); // 00:00:00:00
hours = today.getHours(); 

console.log(today); // 2018-06-03T15:00:00.000Z
console.log(hours); // 0


// 2.13 Date.prototype.getMinutes()

var today = new Date();
var minutes = today.getMinutes();

console.log(today);   // 2018-06-04T12:47:41.566Z
console.log(minutes); // 47


// 2.14 Date.prototype.setMinutes()

var today = new Date();
today.setMinutes(50);
var minutes = today.getMinutes();

console.log(today);   // 2018-06-04T12:50:19.987Z
console.log(minutes); // 50

today.setMinutes(5, 10, 999); // HH:05:10:999
minutes = today.getMinutes();

console.log(today);   // 2018-06-04T12:05:10.999Z
console.log(minutes); // 5


// 2.15 Date.prototype.getSeconds()

var today = new Date();
var seconds = today.getSeconds();

console.log(today);   // 2018-06-04T12:49:54.560Z
console.log(seconds); // 54


// 2.16 Date.prototype.setSeconds()

var today = new Date();
today.setSeconds(30);
var seconds = today.getSeconds();

console.log(today);   // 2018-06-04T12:50:30.934Z
console.log(seconds); // 30

today.setSeconds(10, 0); // HH:MM:10:000
seconds = today.getSeconds();

console.log(today);   // 2018-06-04T12:50:10.000Z
console.log(seconds); // 10


// 2.17 Date.prototype.getMilliseconds()

var today = new Date();
var ms = today.getMilliseconds();

console.log(today); // 2018-06-04T12:51:11.149Z
console.log(ms);    // 149


// 2.18 Date.prototype.setMilliseconds()

var today = new Date();
today.setMilliseconds(123);
var ms = today.getMilliseconds();

console.log(today); // Tue Aug 08 2017 21:03:29 GMT+0900 (KST)
console.log(ms);    // 123


// 2.19 Date.prototype.getTime()

var today = new Date();
var time = today.getTime();

console.log(today); // 2018-06-04T12:52:11.047Z
console.log(time);  // 1528116731047


// 2.20 Date.prototype.setTime()

var today = new Date();
today.setTime(86400000); // 2018-06-04T12:52:43.239Z +1day
var time = today.getTime();

console.log(today); // 1970-01-02T00:00:00.000Z
console.log(time);  // 86400000


// 2.21 Date.prototype.getTimezoneOffset()

var today = new Date();
var x = today.getTimezoneOffset() / 60; // -9

console.log(today); // 2018-06-04T12:53:56.930Z
console.log(x); // -9


// 2.22 Date.prototype.toDateString()

var d = new Date('1988/8/17/13:30');

console.log(d.toString());     // Wed Aug 17 1988 13:30:00 GMT+1000 (KDT)
console.log(d.toDateString()); // Wed Aug 17 1988


// 2.23 Date.prototype.toTimeString()

var d = new Date('1988/8/17/13:30');

console.log(d.toString());     // Wed Aug 17 1988 13:30:00 GMT+1000 (KDT)
console.log(d.toTimeString()); // 13:30:00 GMT+1000 (KDT)