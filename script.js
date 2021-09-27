// 1. alert() function (pop Up)- just like Print
alert('hello world');

// 2. prompt() function like input()
prompt('what is your name');

// 3. varibale declaration with var
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
// 16. Leap year

function isleap (year) {
  if (year%4 ===0) {

    if (year%100 ===0){

      if (year%400 === 0){

          return 'leap year';

      } else {
         return 'nota leap year';
      }

    } else{
      return ' a leap year';
    }

  } else {
    return 'not a leap year';
  }

}

// 17. fizzbuzz

var output = [];
var count = 1;

function fizzbuzz() {
  
     if (count%3===0 && count%5===0){
       output.push('fizzbuzz');
     }
     else if (count++ % 3 ===0){
       output.push('fizz');
     } 
     else if (count%5===0) {
      output.push('buzz');
     }
     else{
       output.push(count);
     }
  count++;
  console.log(output);
}

// 18. who's buying lunch

var name = ['a','b','c','d','e'];

function whospaying(name){

  var numberofpeople = name.length();
  var randompersonposition = Math.floor(Math.random()*numberofpeople;
  var randomperson  = names[randompersonposition];
  
  return randomperson;

}

// 19. while (control statement)

while (something is true) {
 //do this
}
 
// FizzBuzz from 1-100

var output = [];
var count = 1;

function fizzbuzz() { 
   while (count <= 100) {
   if (count%3===0 && count%5===0){
        output.push('fizzbuzz');
      }else if (count++ % 3 ===0){
        output.push('fizz');
      }else if (count%5===0) {
        output.push('buzz');
      }else{
        output.push(count);
      }
   count++;
   }
   console.log(output);
}

 
// 20. For Loops

      start    end   change
for( var i=0 ; i<2 ;  i++   ) {
   
   console.log(i);
}

// FizzBuzz from 1-100 using for loop

var output = [];

function fizzbuzz() { 
 
   for ( var count = 1; count <= 100; count++; ) {
    
   if (count%3===0 && count%5===0){
        output.push('fizzbuzz');
      }else if (count++ % 3 ===0){
        output.push('fizz');
      }else if (count%5===0) {
        output.push('buzz');
      }else{
        output.push(count);
      }
   }
   console.log(output);
}

// 21.Fibonacchi sequence
   every no, is sum of previous 2 no.
   
   
//   22. DOM
   
//   1. Inline js
       using onload
    <body onload="alert('hello')">

// 2. Internal js
      using script
<script type="text/javascript">

  alert('hello');
  
</script>
    
// 3. external js
     by making index.js file and linking to index.html using scriptsrc like styles.css

     using scriptsrc

<script src="index.js" charset="utf-8"></script>

// 4. properties
      .innerHTML
      .style
      .firstchild
      .lastchild

// 5. Methods
       .click()
       .appendChild()
       .setAttribute()

https://www.w3schools.com/jsref/dom_obj_style.asp

// 23. Construstor ( first letter of this function should be capital ex BellBoy)

function BellBoy ( name, age, workPermit, languages ) {

  this.name = name;
  this.age = age;
  this.workPermit = workPermit;
  this.laguages = languages;

}

// 24. Initialise object

var bellBoy1 = new BellBoy ('intakhab', 20, true, ['eng' , 'hindi']);
var bellBoy2 = new BellBoy ('vishal', 20, true, ['eng' , 'hindi']);


// example

function BellBoy ( name, age, workPermit, languages ) {

  this.name = name;
  this.age = age;
  this.workPermit = workPermit;
  this.laguages = languages;
  this.moveSuitcase = function () {
    alert ('may i have your suitcase');
    pickUpSuitcase();
    move();
  }
}

// example
function Audio (fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function () {
      //check file at file location
      //play file
  }
}
 var tom = new Audio ('sounds/abc.mp3');
 tom.play();


//25. for loop alternative

<% posts.forEach(function(post) { %>    // from blog website
<h1><%= post.title %></h1>
<p><%= post.content %></p>
<% }); %>

or
 for (var i = 0; i< posts.length; i++) { 
 console.log(posts[i].title );
 };                                
 
 //26. Express Routing and Parameter
                                 
 app.get('/posts/:postName' , function(req,res){             // rexpress routing and parameter
 const requestedTitle = _.lowerCase(req.params.postName);       //using _.lowerCase from LODASH module

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

