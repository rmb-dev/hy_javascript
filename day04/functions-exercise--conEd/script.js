// a javascript object called an array with types of soup in it
const typesOfSoup = [
"minestrone",
"tomato",
"chick 'n' noodle",
"butternut squash",
"french onion",
"miso",
"clam chowder",
"broccoli cheddar",
"split pea",
];

// an array of cities in Canada
const citiesInCanada = [
"Toronto",
"Winnipeg",
"Vancouver",
"Regina",
"Quebec City",
"Halifax",
"St. John's",
"Montreal",
"Edmonton",
"Ottawa",
"Iqaluit"
];

// we're going to practice writing some functions that perform difference tasks for us. Remember, functions are just places to write blocks of code that we want to execute when we call that function.

// First, let's write a function declaration called myFunction() that does nothing. We just want to write the framework of the actual function for now, and we'll worrying about the contents of the function later.

// Now let's put something in there to see if it works! write an alert that sends a message to the user on page load.





// Is the function doing what it's supposed to do? Why not? What do we have to write every time we want a function to execute the code inside of it? Write that code and see if you can get the alert to run.



// Coolcoolcool. Now let's see if we can pass an argument into a function. Write out a new function declaration called sendAlert(). This function will be the same as the last function except that you're going to write a parameter in the function, and pass that pass that parameter into the alert method so that when the function is called, it's going to alert whatever argument is passed into that function call.

// First write the function declaration. Then add the parameter into the function and the alert.





// Now call the function two times, and each time pass in a different string that you want to be alerted to the user.




// Okay great! Now let's console.log() the two arrays above. Since the array is stored in a variable, you can just console.log that variable and see what you get!



// Great! Now instead of just having the console.log out here in the middle of nowhere(!), let's write two function expressions, one called displaySoups() and one called displayCities(). Place each console.log inside each function. Use the function keyword to write these functions.









// Now, you can call each function to make the code execute. You can call both functions in this script file or in the console, both will call the function and execute the code inside of them. Try one or both.





// Great! But this doesn't seem terribly efficient. These two functions are performing basically the same action, but with different information inside of each of them. Let's write a new function expression called displayList(). We can call this function twice, pass the typesOfSoup and citiesInCanada arrays as arguments into each of the two function calls and write parameters in the function to be console.logged out.










// The above is a great example of how we can use arguments and parameters in functions in order to make the more reusable.

// Now let's write another function expression called setRandomNumber() that gets us a random number between 0 - 10. Look back in the notes for the Math methods that allow us to do this




// if you call the function inside of a console.log() the return of the function will display in the console. Try it out!



// Now let's rewrite that function and this time we'll just call it randomNumber, and this time let's write it so that it can be passed an argument of any number, rather than having the static number hard coded inside of the function. Write the new function below and this time write it out with a parameter that is used in place of the number.

// BONUS if you wrote the function with the function keyword the first time, try writing it as an arrow function this time and vice versa!





// Now let's call the randomNumber function inside of a console.log again, but this time we need to pass it a number as an argument.



// you can also pass expressions as arguments. Let's try passing the built in array property called .length into a function.

// write a function expression called getLength() that returns a string with the length of an array as a parameter. Pass the length of one of the arrays at the top of the file into the function call as an argument. you might have to do some googling to discover how to write out the .length property in order to pass it into the function.

// NOTE: You can store the length of the array in a variable and pass that variable into the function call, or you can just pass the length property directly into the function call. both are totally valid!











// Amazing job! Now it's BONUS time! Let's put it all together for one mighty finale. Write a function that returns a random soup or city from the array that is passed into it using two things called bracket notation and an index number. An example of how to get an item out of an array would be if we wanted to display the first index in the citiesInCanada array, "Toronto", we would write it as citiesInCanada[0] (it is a 0 and not a 1 because array's are zero indexed, something we'll be looking at in the next module of this course.).

// HINT: You can use the randomNumber function we wrote earlier to retrieve a random index number you need.
// NOTE: This is super hard so don't feel bad if you can't get it all the way! Just try to break it down into as small a steps as you can, and write down what you can, and ask for help when you can't get any further.








