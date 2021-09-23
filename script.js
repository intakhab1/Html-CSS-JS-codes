// 1. Js alert() function (pop Up)- just like Print
alert('hello world');

// 2.js prompt() function like input()
prompt('what is your name');

// 3.varibale declaration with var
 var yourname = prompt('what is your name');

//  4 lenght() function to cal no of char in string
var name = 'intakhab';
name.length;

// 5. slice() function to cut from string
var name = 'intakhab';
name.slice(0,1);

// 6. toUpperCase() and toLowerCase() function
var name = 'intakhab';
name.toUpperCase();
name.toLowerCase();
// 7. increament ++ and decrement -- 
var x = 5;
var y = 3;
x++;
op:6

x--;
op:4

x += y;
op:8

// 8. Function
function getmilk() {
  alert('go out');
  alert('move left');
  alert('enter grocery');
  alert('buy milk');
  alert('come home');
}
getmilk();

OR use console.log to print in console and user cannot see it like RETURN
whereas alert is like PRINT wich user can see

function getmilk() {
  console.log('go out');
  console.log('move left');
  console.log('enter grocery');
  console.log('buy milk');
  console.log('come home');
}
getmilk();

// 9. Parameters and Arguments in function
function getmilk(bottles) {
  alert('go out');
  alert('move left');
  alert('enter grocery');
  alert('buy' + bottles + 'of milk');
  alert('come home');
}
getmilk(10);

// 10.ceil() , floor() , round() , random() functions

Math.ceil();
Math.floor();
Math.round();
Math.random(); //0 - 0.999...(16 decimal_places)

console.log(Math.ceil(0.60));  //  1

console.log(Math.floor(0.60));  //  0

console.log(Math.round(2.5));  //  3
console.log(Math.round(2.4));  //  4

console.log(Math.random()*100);  // random no b/w 0-99.999...
var score = Math.floor(Math.random()*100) + 1;  // 0-100


// 11.modula %
var x = 9 % 6; //3

// 12. return keyword

function getmilk(money) {
  console.log('go out');
  console.log('move left');
  // cost per bottle = 2
  console.log('enter grocery');
  console.log('buy' + calbottles(money, 2) + 'bottles of milk');
  console.log('come home');
  return money % 2;
}


function calbottles(startingmoney, costperbottle){

  var numberofbottles = Math.floor(startingmoney / costperbottle;)
  return numberofbottles;
}

function

getmilk(5); // 2 bottles of milk and 1 rupee change 

// 13.comparators and equality

is equal to ===
is not equal to !==
is greater than >
is smaller than <
is greater or equal to >=
is smaller or equal to <=
 
 AND &&
 OR ||
 NOT !
 
//  14. Array
 
var fruits = ['apple', 'banana','mango'];

console.log(fruits.length); // 3
console.log(fruits[0]);

// inser item  at end
fruits.push('lime') // fruits = ['apple', 'banana','mango', 'lime'];
// pop from last
fruits.pop('lime') // fruits = ['apple', 'banana','mango'];




// 15. conditional statements

var fruit_name = prompt('enter a fruit name');

if (fruits.include(fruit_name)) {
   alert('yes');
} else {
   alert('no');
}


































