// function* abc() {
//   yield "vineet";
//   yield "divya";
//   yield "manisha";
//   const value = yield;
//   return value;
// }
// let def = abc();

// console.log(def.next());
// console.log(def.next());
// console.log(def.next());
// console.log(def.next());
// console.log(def.next("vineet gave this value"));

// // for (interable of def) {
// //   console.log(interable);
// // }

// //Iterators

// let i = [1, 2, 3, 4, 5];

// let iterator = i[Symbol.iterator];

// function a(value) {
//   var b = value || "abc";
//   console.log(b);
// }

// a();
// a("ef");

// var x;
// // y = 25;
// x ? console.log("yes") : console.log("no");
// console.log(x && y);
// console.log(typeof x, typeof y);

// console.log([1, 2, 3][(0, 0)]);
// abc = [1, 2, 3];
// abc.length = abc.length - 1;
// console.log(abc);
// abc[100] = 5;
// console.log(abc.length);
// console.log(abc[99]);
// abc[98] = undefined;
// console.log(abc[98] === abc[99]);

// abc["foo"] = "abcdef";
// console.log(abc.length, abc);

// abc["199"] = "vineet";
// console.log(abc.length);

// let a = "abc";
// b = ["a", "b", "c"];
// console.log(a.charAt(1), a == b);
// a += "def";
// // console.log(a);
// var a = 500000000;
// console.log(a.toExponential());

// var a = 52.59;
// console.log(typeof a.toFixed());
// console.log((0.69).toPrecision(2));

// console.log(new Number(42).toExponential());

//console.log(new Number(0o363));

//console.log(typeof (0.1 + 0.2));

// console.log(
//   parseFloat((0.0001).toFixed(2)) + parseFloat((0.0001).toFixed(2)) ===
//     parseFloat((0.0003).toFixed(2))
// );

//console.log(Math.abs(0.0001));

// var abc = {
//   a: "a",
//   b: "b"
// };

// console.log(typeof ("sdawd" * "adad"));
// console.log(isNaN("vineet"));

// console.log(Number.isNaN("vin"));
// console.log(Number.isNaN(23 / "ded"));
// console.log(NaN === NaN);

// console.log(2 / 0);
// console.log(Number.POSITIVE_INFINITY === Infinity);

// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE > Number.POSITIVE_INFINITY);
// console.log(0 / Number.POSITIVE_INFINITY);
// console.log(-1 / Number.POSITIVE_INFINITY);

// console.log(Number("-0"));
// console.log(JSON.stringify(-0));

// console.log(Number(-0) === Number(0));
// console.log(Object.is(Number(-0), Number(0)));

// var c = [1, 2, 3];
// var d = c;
// d.push(5);
// console.log(c, d);
// d = [7, 8, 9];
// console.log(c, d);

// function foo(x) {
//   x.push(4);
//   console.log(x);

//   x.length = 0;
//   x.push(5, 6, 7);
// }
// a = [1, 2, 3];
// console.log(a);
// foo(a.slice());
// console.log(a);

// console.log(new Number(9) === 9);

// function fee(obj) {
//   obj.a = 3;
// }

// var oooo = {
//   a: 2
// };

// fee(Object.assign(oooo));

// console.log(oooo);

// console.log(void 0);

// console.log(typeof new String("HI viNEET "));
// console.log(typeof fee, typeof [1, 2]);
// console.log(new String("hello pooja").valueOf());

// var a = "manisha";

// console.log(Object(a));
// console.log(Object.prototype.toString.call("abc"));

// console.log();

// var a = new Array(3);
// console.log(a, a.length);

// var b = [undefined, undefined, undefined];
// var c = [];
// c.length = 3;

// console.log(a, b, c);
// a.join("-");
// console.log(a.join("-"));

// console.log(a[1] === b[1]);
// var ai = a.map((a, b) => {
//   return b;
// });
// var bi = b.map((a, b) => {
//   return b;
// });
// console.log(ai, bi);

// console.log(Math.max.apply(null, [4, 5, 6]));

// console.log();

// var person = {
//   name: "person",
//   printMyName: function() {
//     console.log(this.name);
//   }
// };

// person.printMyName();

// var Vineet = new Person;
// var vineet = {
//   name: "voneet"
// };

// person.printMyName.apply(vineet, null);

// var o = Array(6);
// console.log(o);
// var p = Array.apply(null, { length: 4 });
// console.log(p);
// console.log(p[2] === o[2]);
// var z = new Array(3, 2);
// console.log(z);

//ways of declaring Objects
// var c = new Object();
// c.a = "a";

// var d = {
//   a: "a"
// };
// console.log(c, d);

// //ways of declaring Functions
// var e = function(a) {
//   return a * 2;
// };

// var f = Function("a", "return a* 2;");

// function g(a) {
//   return a * 2;
// }
// console.log(e(2), f(2), g(2));

// console.log(eval("2*2"));

// var adi = "Adityadi";
// console.log(new RegExp("^di"));
// console.log(adi.match(new RegExp("di")));
// var today = new Date();
// console.log(today.getDate());
// //console.log(new Error());
// console.log(Date.now());

// console.log(new RangeError("x wasnt rpovided"));

// var mysym = Symbol("my own symbol");
// console.log(mysym);
// mysym.toString();
// console.log(typeof mysym);

// var a = {};
// a[mysym] = "foo";
// console.log(a);
// console.log(Object.getOwnPropertySymbols(a));
// console.log();

// var a = "a";
// var b = String("a");
// var c = new String("a");
// console.log(a, b, c);

// console.log(a === b || b === c || a === c);
// console.log("a".toString());
// console.log(JSON.stringify("a"));
// console.log(JSON.stringify([1, 2, 3]));
// console.log(JSON.stringify(null));

// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// console.log(JSON.stringify({ x: 5, y: 6 }));

// var d = {
//   a: "a",
//   b: "b",
//   c: [1, 2, 3]
// };
// console.log("1", JSON.stringify(d, ["a", "b"]));
// console.log(
//   "2",
//   JSON.stringify(
//     d,
//     (k, v) => {
//       console.log(k, v);
//       if (k !== "b") return v;
//     },
//     5
//   )
// );
// console.log(
//   JSON.stringify(null),
//   JSON.stringify(undefined),
//   JSON.stringify({ a: "a" }),
//   JSON.stringify(9),
//   JSON.stringify([1, 2, null, undefined])
// );
// var obj1 = {
//   a: "a"
// };

// console.log(JSON.stringify(obj1), obj1.toString());

/************
//4.2 ---> Coersion: To Number
************/
// console.log(Number(true), Number(false), Number(null), Number(undefined));
// console.log(Number("42") === 42);

// let a = {
//   valueOf: () => {
//     return "42";
//   }
// };

// let b = {
//   toString: () => {
//     return "42";
//   }
// };

// var c = [4, 2];

// c.toString = function() {
//   console.log(this);
//   return this.join("");
// };

// let d;

// console.log(Number(a));
// console.log(Number(b));
// console.log(Number(c));
// console.log(Number(d));
// console.log(Number(""));
// console.log(Number([]));
// console.log(Number(["a", "b"]));

/************
//4.3 ---> Coersion: To Boolean
************/

// console.log(
//   Boolean(undefined),
//   Boolean(null),
//   Boolean(+0),
//   Boolean(-0),
//   Boolean(NaN),
//   Boolean("")
// );

// var a = new Boolean(false);
// var b = new Number(9);
// var c = new String("");
// console.log(Boolean(a && b && c));

// const d = [];
// const e = {};
// const f = () => {};

// console.log(Boolean(d && e && f));

/************
//4.3 ---> Explicit Coercion: STRINGS => NUMBERS
************/

// console.log(typeof new Number(5), typeof Number(5));

// var a = 42;
// var b = a.toString();
// var c = "3.14";
// var d = +c;
// console.log(b, d);

// d = 5 + +c;
// console.log(d);

// //3different ways to get the timestamp
// var d = new Date();
// console.log(+d);

// console.log(new Date().getTime());

// console.log(Date.now());

// console.log(0 | 32); //converting the number to 32bit interger from 64 bit

// console.log(~32); //negation
// console.log(~-1);

// var hello = "hello world";

// console.log(Boolean(~hello.indexOf("wo"))); //true
// console.log(Boolean(~hello.indexOf("wwkdb"))); //false

// console.log(Math.floor(-48.7), ~~-48.7);

// //example of operator precedence
// console.log(~~2000 / 10);
// console.log((2000 | 0) / 10);
// console.log(2000 | (0 / 10));

// //parsing Numeric strings
// var a = "42";
// var b = "42jdsnff";
// console.log(Number(a), parseInt(a, 10));
// console.log(Number(b), parseInt(b, 10));
// console.log(parseInt(true));

// console.log(parseInt(new String("42")));
// console.log(parseInt(1 / 0, 19));
// console.log(parseInt(0.000008));

/************
//4.3 ---> Explicit Coercion: * => BOOLEAN
************/
// var a = "0",
//   b = [],
//   c = {},
//   d = "",
//   e = 0,
//   f = null,
//   g;

// console.log(
//   Boolean(a),
//   Boolean(b),
//   Boolean(c),
//   Boolean(d),
//   Boolean(e),
//   Boolean(f),
//   Boolean(g)
// );

// //unary negate opertor
// console.log(!!a, !!b, !!c, !!d, !!e, !!f, !!g);

// const n = 5;
// const m = 3;

// const chocoArray = [1, 2, 3, 4, 5];
// const combiArray = [];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// chocoArray.forEach((curr, index) => {
//   console.log(curr, index);
//   var currNum = curr;
//   for (i = index + 1; i <= chocoArray.length; i++) {
//     var tempArray = chocoArray.slice(index + 1, i);
//     console.log(tempArray);
//     tempArray.reduce(reducer, currNum) % m == 0
//       ? combiArray.push(tempArray)
//       : null;
//     tempArray = [];
//   }
// });

// console.log(combiArray);

/************
//4.4 ---> Implicit Coercion: Strings-Numbers
************/

// var a = "42",
//   b = "0",
//   c = 42,
//   d = 0;
// console.log(a + b);
// console.log(c + d);

// var e = [1, 2],
//   f = [3, 4];
// console.log(e + f);
// var g = { a: "1" },
//   h = [1, 2, 3];
// console.log(g + h);
// console.log(h + g);

// var i = {
//   valueOf: function() {
//     return 42;
//   },
//   toString: function() {
//     return 4;
//   }
// };

// console.log(i + "");
// console.log(String(i));

// var j = "3.14";
// var h = j - 0;
// console.log(typeof h, h);

// var k = [3],
//   l = [1];
// console.log(typeof (k - l), k - l);

/************
//4.5 ---> Implicit Coercion: Booleans-Numbers
************/

// function vin(a, b) {
//   console.log(arguments);
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += Number(!!arguments[i]);
//   }
//   return sum === 1;
// }
// console.log(vin(2, false, !3));

/************
//4.6 ---> Implicit Coercion: *-Boolean
************/
// var a = 5;
// var b;
// if (a) console.log("a is present");
// else if (!b) console.log("b is not present");

/************
//4.7 ---> Operators:||  and &&
************/

// var a = 42;
// var b = "abc";
// var c = null;

// console.log(a || b);
// console.log(a && b);
// console.log(c || b);
// console.log(c && b);

// console.log(a ? a : b); //similar to ||
// console.log(a ? b : a); //similar to &&

// function foo(a, b) {
//   a = a || "hello";
//   b = b || "world";
//   console.log(a + "" + b);
// }
// foo(2, 3);
// foo(2, "");

// //example of short circuiting
// function fee() {
//   console.log(i);
// }
// var i = 42;
// i && fee();

// //if condition forces the value to coerce implicitly ot true/false
// var x = 42,
//   y = null,
//   z = "foo";
// if (x || (y && z)) {
//   console.log("true");
// }
// //it will be same as
// if (!!x || (!!y && !!z)) {
//   console.log("true");
// }

/************
//4.8 ---> Symbol coersions
************/
//Symbol to String and vice-versa
// var a = Symbol("cool");
// console.log(String(a));
// //console.log(a + "");

// //Symbol to Number and vice-versa
// var a = Symbol(1);
// //console.log(Number(a));
// //console.log(a - 4);

// //Symbol to Boolean and vice-versa
// var a = Symbol(1);
// console.log(Boolean(a));
// console.log(!!a);

/************
//4.8 ---> Loose Equals(==) VS Strict Equals(===)
************/

// console.log(+0 === -0);

// var a = {
//   a: "1"
// };

// var b = {
//   a: "1"
// };
// var c = a;
// console.log(a == b);
// console.log(c == b);
// console.log(c == a);
// console.log(Object.is(a, b));

// var d = 42,
//   e = "42";
// console.log(d == e, d === e);

// var f = "42",
//   g = true;
// console.log(f == g);

// console.log(null == undefined);

// console.log(42 == [42]);

// var h = "abc",
//   i = Object(h);
// console.log(h === i, h == i);

// //same hplds for undefined  and NaN
// var j = null,
//   k = Object(j);

// console.log(j == k);

// //Some crazy Edge cases
// Number.prototype.valueOf = function() {
//   return 3;
// };
// console.log(new Number(2) == 3);

// var l = 2;
// Number.prototype.valueOf = function() {
//   return l++;
// };
// var m = new Number(2);
// console.log(m == 2 && m == 3);

// console.log(
//   "0" == null,
//   "0" == undefined,
//   "0" == false,
//   "0" == NaN,
//   "0" == 0,
//   "0" == "",
//   false == null,
//   false == undefined,
//   false == NaN,
//   false == 0,
//   false == "",
//   false == [],
//   false == {},
//   "" == null,
//   "" == undefined,
//   "" == NaN,
//   "" == 0,
//   "" == [],
//   "" == {},
//   0 == null,
//   0 == undefined,
//   0 == NaN,
//   0 == [],
//   0 == {}
// );

// console.log([] == ![], "" == [null]);
// console.log(String([null]));
// console.log(0 == "\n");

// var x = [42],
//   y = ["43"];

// console.log(x < y);
// console.log(y < x);

// var s = ["42"],
//   t = ["043"];
// console.log(s > t);

// (s = [4, 5, 6]), (t = [5, 6]);
// console.log(s > t);

// (s = { b: 42 }), (t = { b: 43 });
// console.log(s > t, s == t, s < t);

// console.log(a <= b, b >= a);

/************
//4.8 ---> Grammer
************/

if (!console.log("abc")) {
  console.log("undefined");
}
var a, b;
//not possible
// a =  if(true){
// 		b=48;
// }
a = eval(" if(true){	b=48; }");
console.log(a);

//side effets
a = 42;
b = a++;
console.log(a, b);

a = 42;
b = --a;
console.log(a, b);

// console.log(++(++a));
a = 42;
b = (a++, a);
console.log(b);

var obj = {
  a: 42
};

console.log(obj.a);
console.log(delete obj.a);
console.log(obj.a);

//function to match vowels in a string
function voweli(str) {
  var matches;
  //pull out all the vowels
  if (str && (matches = str.match(/[aeiou]/g))) {
    return matches;
  }
}

console.log(voweli("qqqq"));
console.log(voweli("hello world"));

console.log({
  foo: voweli()
});

//console.log(1 % 3);

function JSONP(obj) {
  console.log(obj);
}
JSONP({
  a: 42
});
({} + []); //[] -> "" & {} -> [object Object]
[] + {}; //[] -> "" & {} -> [object Object]

//Object destrucutirng
function destructured() {
  return { a: 1, b: 2 };
}

var { a, b } = destructured();

console.log(a, b);

//Operator precedence

(a = 42), (b = 0);
(b = a++), a;
console.log(a, b);
