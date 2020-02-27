# JavaScript Classes

## Learning Objectives

By the end of this lesson we will be able to:
- Describe the purpose, and unique features of object oriented programming.
- Construct and practice working with JavaScript classes.

</br> 

You might have heard that JavaScript is an `object-oriented programming` (OOP) language, and at this point we've played
around and created a lot of objects - but why are they so important to the language and to programming in general?

The definition of an OOP language has never been formally defined, so languages that are consider to be OOP languages tend
to fit the following two principles:
1. The language allows data to be defined, organized, and manipulated as objects.
2. The language allows for its code to be modular(can be changed/modified easily) and reusable.

As an example, let's imagine for a minute that we were building a text based game in JavaScript. We want to have
a Player (think back to our Warrior object) with some health, the ability to move around, and the ability to attack. Based
on all the data types we've learned about so far (string, number, etc), an object seems like it would make the most sense
for our Player to juggle all of these responsibilities.

Let's start by creating a player object:

```javascript
const player = {
  health: 100,
  location: {
    x: 0,
    y: 0
  },
  equipment: [],
  walk: function() {
    // ...code to make your player walk around
  },
  attack: function() {
    // ...code to make your player attack
  }
}
```

Perfect! We now have a player object that attacks, walks, has equipment, and health. But a player with no enemies is a
pretty boring game, so let's build an enemy for the player to fight:

```javascript
const enemy = {
  health: 100,
  location: {
    x: 0,
    y: 0
  },
  equipment: [],
  walk: function() {
    // ...code to make the enemy walk around
  },
  attack: function() {
    // ...code to make the enemy attack
  }
}
```

Notice anything? The enemy and the player objects are the exact same! Now imagine the game had multiple players, and a hundred
different enemies - we could end up writing a ton of repetitive code and it would become difficult to track very quickly.

Thankfully, JavaScript's got our back - we can take advantage of something called **prototypal inheritance** to make our
lives so much easier.

## Prototypal Inheritance

Once we realize that we want our player and enemy have all (or many) of the same properties, it's a sign that they can
probably share a common ancestor. Just like a dog and a cat both have fur and legs, they can be classified as *animals*;
our enemy and player both have health, location, equipment, and mobility, therefore they could be classified as *characters*.

And much in the same way that a child inherits characteristics from their parents (eye colour, hair colour, height), objects
inherit characteristics from their parent objects. In JavaScript, this 'shared' parent object is called a `prototype`.

How do we create a `prototype` in JavaScript? Using something called a `Class`:

```javascript
class Character {
  constructor() {
    this.equipment = [];
    this.health = 100;
    this.location = {
      x: 0,
      y: 0
    }
  }
  walk() {
    // ...code to make a character walk around
  }
  attack() {
    // ...code to make a character attack
  }
}
```

**NOTE:** There are no commas in between methods within the constructor - if we try to put one in, we will get a syntax
error!

Think of classes like the blueprint or mould (the technical term is a `prototype`) for building out your various objects.
So in our example, the `Character` class is a blueprint for building players, enemies, basically anything that has health,
a location, can attack, walk, etc. We might have an `Animal` class if we wanted to build out dogs and cats.

Once we have created our classes, we create objects that inherit from that class super easily using the `new` keyword.

```javascript
const player = new Character();
const enemy = new Character();

console.log(player.health); // 100
console.log(enemy.health); // 100
```

Now we have a player object and an enemy object that both have health, equipment, etc. which they have inherited from their
class (Character) without having redefine any of their properties or methods.

Also notice if we change the `health` property of the player, it won't effect the enemy and vice versa!

**NOTE:** You may have noticed that we use capital letters when naming our classes - this is a common coding convention
for defining classes. By capitalizing our classes we signal to other developers using our code that these particular objects
are classes.

When a new feature simplifies the syntax of something that previously existed in a given language, you will
often hear this described as **syntactic sugar** - because it sweetens the way that particular thing is written.

## Customizing our Class Instances
Right now, every time we create a `Character` they will all have the same health. But what if we wanted our player and
our enemy to have different health?

We can refactor our Character's `constructor` function like this:

```javascript
class Character {
  constructor(health) {
    this.health = health;
  }
}
```

And when we create a new monster or player, we can pass in the desired health that we want, like this:

```javascript
const player = new Character(200);
const enemy = new Character(500);

console.log(player.health); // 200
console.log(enemy.health); // 500
```

The `constructor` function is a function that will be invoked whenever we use the `new` keyword to create a new object.
We can think about it as a function that will help *construct* a new object. By using `constructor` functions we are able
to do so much more with our classes and it allows us to make our code more flexible(or modular) so that we can reuse it
in more situations.

## Classes and Extends

Another major benefit of classes is that they can be **extended**. What does this mean? Well let's imagine for a second
that in the game we're making, the player can choose to be either a warrior, a mage, or a dragon. Depending on which
option they choose, the player gains certain benefits and unique special abilities.

By using the `extends` keyword, we can **extend** our Character class into a new class:

```javascript
class Character {
  constructor() {
    this.health = 100;
    this.location = {
      x: 0,
      y: 0
    }
  }
  walk() {
    // ...code to make a character walk around
  }
  attack() {
    // ...code to make a character attack
  }
}

class Dragon extends Character {
  constructor() {
    this.health = 200;
  }
  breatheFire() {
    // ... code that gives our dragon the ability to roast someone with it's breath
  }
}
```

By using `extends`, we can grab all of the properties and methods from our Character class, and add new methods. We can
also modify existing properties (here we've given our `Dragon` a health property of 200 rather than 100 that it would have
inherited from the Character class)

Now if we want to create a new dragon for our game (we shall call him 'drogon'), we use our `new` keyword like before:

```javascript
  const drogon = new Dragon();
```

Oh no! We get an error: `ReferenceError: must call super constructor before using 'this' in derived class constructor`.
We run into this error because `extends` does not provide us access to the `this` keyword right out of the box. We must
include a special keyword called `super()` inside of our Dragon class' constructor function. Using `super()` invokes a
function called the **super constructor**, and must be placed before any references to `this` inside the constructor:

```javascript
class Dragon extends Character {
  constructor() {
    super();
    this.health = 200;
  }
  breatheFire() {
    // ... code that gives our dragon the ability to roast someone with it's breath
  }
}
  const drogon = new Dragon();
```

We have now created a new object called drogon, that has a `health` of 200 and a `breatheFire` method which it has inherited
from the Dragon class, as well as the `location` property, and the `walk` and `attack` methods that it inherited from the
Character class.

Extending Classes is an awesome way to build upon objects that already exist, it helps to keep us from repeating ourselves
and helps to keep our code more organized!

Let's do this as a group, and then you'll try it on your own:
- Think of something that could act as a good class (a car, for example)
- Think of some properties that class might have (wheels, color, doors, drive)
- Create some objects that inherit from that class using the `new` keyword
- Mess around with those objects independently of one another and see what happens!

## Exercises
Let's practice using classes, download <a href="https://hychalknotes.s3.amazonaws.com/classes-game--conEd.html" download>classes.html</a> to get some time working with JS classes! The answer key can be found here <a href="https://hychalknotes.s3.amazonaws.com/classes-game-answer--conEd.html" download>classes-answer.html</a>.

## Additional Resources
- [Let's Learn ES6 - Classes](https://www.youtube.com/watch?v=EUtZRwA7Fqc) is a great overview of the difference between objects and classes and how they work.
- [Better JavaScript with ES6: A Deep Dive Into Class](https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes) which explains some of the differences classes in JavaScript and other languages

## Learning Outcomes

Please use the `Character` and `Dragon` classes to answer the question that follows:

```js
class Character {
  constructor(health=100) {
    this.health = health;
    this.location = {
      x: 0,
      y: 0
    }
  }
}

class Dragon extends Character {
  constructor() {
    super();
    this.health = 5000;
  }
}

const player = new Character();
const drogon = new Dragon();

player.slayDragon(    ) // This is the line in question
```

1. Which of the following can be used as a slayDragon method in the Character class that will work with the above example to slay the mighty Drogon? 

    a. 
    ```js
      slayDragon(dragon) {
        dragon.health -= dragon.health;
      }
    ```  
    b.
    ```js
      slayDragon(dragon) {
        dragon.health -= this.health;
      }
    ```
    c.
    ```js
      slayDragon(dragon) {
        const drogon = Object.assign({}, dragon);
        drogon.health -= drogon.health;
      }
    ```

    <details>
     <summary>Answer</summary>
     <br/>

     **A - can be used to slay the mighty Drogon. This is reducing the health of the proper object.**  
     B - This is close, but `this.health` in this instance is referring to the character health and would only reduce the dragon's health by 100 as a result.  
     C - This would definitely work to slay Drogon's cousin of the same name, but we can modify the passed in object directly without needing to create a copy. Remember the notes on pass by reference and pass by value!   
    </details></br>
