# ES6 Features

## Learning Objectives

By the end of this lesson you will be able to:

- Have a good understanding of some of the features introduced to the JavaScript Spec in ES6.

</br>

Let's take some time to review concepts and learn a couple of new tricks provided to us in ES6 and be grateful for this ever-evolving spec!

## Block Scoped Variables

As you'll see in many of the examples below, before ES6 we only had the `var` keyword to declare variables. There are some serious benefits that came with the introduction of `let` and `const`. Firstly with var there was no way to prevent re-assigning values. The convention for handling constants (variables that should be treated as immutable) was to use uppercase text, but you could still reassign the value, and there would be nothing stopping you, no console warnings!

```js
var HOURS = 24;
HOURS = 12;

//  => returns 12, NO ERRORRRRRR 😩!!!
```

Now with the introduction of `const` we cannot reassign the value of these constant variables.

```js
const hours = 24;
hours = 12;

// => gives us the error: TypeError: invalid assignment to const hours.
```  
The `let` keyword allows us to reassign the value of the variable in cases where this is desirable. But both `let` and `const` are **block scoped** whereas `var` is **function scoped** (or globally scoped if not inside a function).

So what does this mean for us? It means we can only re-assign the value of a `let` variable within a block of code. Reminder that a block is whatever is inside a set of `{}`.

Because `var` variables are not block scoped, this could lead to some very unexpected bugs! For example you can re-declare `var` variables in the same scope:

```js
var age = 17;
var age = 52;

// => NO ERRORRRRRR 😩!!!

vs

let age = 17;
let age = 52;

// => gives us the error: SyntaxError: redeclaration of let age;
```

Also `var` variables can be reassigned and redeclared even with nested scopes. You might want to have different values depending on the scope, which `let` makes available to us.

```js
var age = 17;

if(someCondition){
  var age = 52;
  console.log(age);

  // =>returns 52;
};

console.log(age); // NOTE: This is the Global Scope!

// => returns 52;

vs

let age = 17;

if(someCondition){
  let age = 52;
  console.log(age);

  // => returns 52
};

console.log(age); // NOTE: this is the Global Scope!

// => returns 17;
```

## Template Literals

Before ES6 concatenating and using variables within strings was quite cumbersome. Historically we did something like this:

```js
var name = 'Esperanza Spalding';
var instrument = 'bass';

var sentence = 'One of my favourite musicians is' + ' ' + name + ' ' + 'she plays the' + ' ' + instrument;
```

Now using template literal strings we can be much more concise:

```js
let name = 'Esperanza Spalding';
let instrument = 'bass';

let sentence = `One of my favourite musicians is ${name} she plays the ${instrument}`;
```

## Multi-line Strings

Before ES6 multiline strings were also tricky little things! Let's check out how we would handle this haiku by Kobayashi Issa in the old days:

```js
var haiku = 'O snail\n\
Climb Mount Fuji,\n\
But slowly, slowly!'
```

Imagine you had many lines, this could become pretty painful! Now we can simply utilize backticks without needing explicit line breaks:

```js
var haiku = `O snail
Climb Mount Fuji,
But slowly, slowly!`
```

## String Searching

In our class on built in functions we talked about some cool string methods, _including_ `includes()`. This is how we can search a string for a set of characters anywhere within it. This string searching feature is new as of ES6!

```js
const myString = `I really enjoy eating pizza`;

myString.includes('pizza');

// => returns true
```

There are other new string methods in ES6 that help us search for things, here are two we find very useful:

### startsWith()

This method allows us to check if a string begins with a given set of characters:

```js
const myString = `I really enjoy eating pizza`;
myString.startsWith('pizza');

// => returns false
```

### endsWith()

This method allows us to check if a string ends with a given set of characters:

```js
const myString = `I really enjoy eating pizza`;
myString.endsWith('pizza');

// => returns true
```

## Arrow Functions + "Lexical This"

For a review of the syntax and variants of arrow functions head on back to the functions lesson! Here we will revisit arrow functions to see how they affect the keyword `this`.

There is **no** `this` keyword defined within an arrow function! This makes it behave like any other variable that is not assigned a value within a function's scope. It will "lexically resolve" meaning looking to an enclosing scope for it's value. This means if things are nested it will go up as far as it needs to in layers of scope until it finds a scope with a definition of `this`. Sometimes `this` refers to the window object, and sometimes it refers to another object or function's definition of `this`.

With arrow functions, the value of `this` is _inherited_ from the enclosing scope, so long as this is not another arrow function.


## Default Parameters

Before ES6 we could set default parameters by assigning values within a function like:

```js
var name = function(firstName, lastName, job){
  if (firstName === undefined) {
    var firstName = 'Vaidehi';
  };

  if (lastName === undefined) {
    var lastName = 'Joshi';
  };

  if (job === undefined) {
    var job = 'programmer';
  }
  // more code
}
```

**Note:** The use of `var` above is because we did not have the `let` and `const` options before ES6.

The code above sets default values for the parameters, but we now have the opportunity to set those values directly where the parameters are set. 

```js
let name = function(firstName = 'Vaidehi', lastName = 'Joshi', job = 'programmer') {
  // more code
}
```

In either approach we can pass different values in as arguments when we call the function and these will take precedence over the default parameter values.

## Destructuring

Destructuring allows us to extract or "pluck" data from arrays and object (as well as maps and sets which are data structures not covered in the course) and save these values in their own variables. 

Before ES6 we might do something like this:

```js
var perfectPizza = {
  crust: 'thin',
  sauce: 'tomato',
  cheese: 'mozzarella',
  toppings: {
    topping1: 'ham',
    topping2: 'pineapple',
    topping3: 'bacon'
  }
}

var crust = perfectPizza.crust;
var sauce = perfectPizza.sauce;
var cheese = perfectPizza.cheese;

// etc...
```

Now we can pluck out values and store them as variables in a single line with a little ES6 syntactic sugar called destructuring:

```js
const { crust, sauce, cheese } = perfectPizza;
```
We can also destructure from nested objects, let's use our inner toppings object as an example:

```js
const { topping1, topping2, topping3 } = perfectPizza.toppings
```

**Note** that the assignment on the right hand side is using dot notation to target the inner object.

To read on destructuring arrays check out this article from [dev.to](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f) 


## Rest Parameters

Rest parameters allow us to represent an _indefinite_ number of arguments as an array. It uses `...` syntax. The dots essentially mean "gather _the rest_ of the parameters into an array".

so we can have a function like this:

```js
const myCoolFunction = (...arguments) => {
  console.log(arguments);
}

myCoolFunction(1,2,3,4,5,'this is cool');

//  returns => Array(6) [ 1, 2, 3, 4, 5, "this is cool" ]
```
This is pretty handy! You might not know how many arguments or the order to mock out as parameters in the function definition, or there could just be so many. Another handy thing about rest parameters is that you can use any array method on them since they are represented as an array!

**Note** you can use the `rest parameter` as the last parameter if you do want to be explicit about every possible parameter being passed into your function. However, know that any parameters before the `...` will not be included in the array.

```js
someFunction(a, b, c, ...args){
  // Do something.
}
```
In this case a, b, and c get their own variables and the rest of the arguments will be represented as an array called args.

## Spread Operator

The spread operator allows us to represent all of the items in an iterable (such as an array or string). The spread operator also uses `...` syntax. A common use case for this is passing an array of values as the arguments to a function. This "spreads" each value from the array into the arguments as a comma separated list.

Here's an example to help us understand:

```js
const addNumbers = (a,b,c) => {
  return a + b + c;
}

const numbersArray = [1,2,3];

console.log(addNumbers(...numbersArray));

// returns => 6
```

Here's an example of the spread operator with a string:

```js
const queen = 'Beyoncé';
const queenChars = [...queen];

console.log(queenChars);

// returns => Array(7) [ "B", "e", "y", "o", "n", "c", "é" ]
```

For a good comparison of rest parameters and the spread operator check out this article from [JavaScript.Info](https://javascript.info/rest-parameters-spread-operator)

There are many other great features that were introduced in ES6 and we would encourage you to learn more!

Here are some additional resources you can explore in your own time:

- [Let's Learn ES6 videos](https://www.youtube.com/playlist?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX)
- [ES6 Features](http://es6-features.org/#Constants)
- [ES6 for Everyone](https://es6.io/)
