simple-node-app
=============

An intro to programming in JavaScript and the Node.js environment

- [Installation:](#user-content-installation)
    - [On runnable.com:](#user-content-on-runnablecom)
    - [On your local computer:](#user-content-on-your-local-computer)
- [Lesson Steps:](#user-content-lesson-steps)
    - [Shebang #!](#user-content-shebang-)
    - [console.log();](#user-content-consolelog)
    - [Working with Variables](#user-content-working-with-variables)
    - [Think in Objects](#user-content-think-in-objects)
    - [Properties : Dot Syntax](#user-content-properties--dot-syntax)
    - [Properties : Array Syntax](#user-content-properties--array-syntax)
    - [Behaviours : Functions as Methods](#user-content-behaviours--functions-as-methods)
    - [Arrays](#user-content-arrays)
    - [Loops](#user-content-loops)

# Installation:

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and paste the following commands:

    git clone https://github.com/jfraboni/simple-node-app.git

...some text will fly by as the repository is cloned locally, then enter or cut and paste:

    cd simple-node-app && ./setup.sh && cd - && rlbs

Great, you're set to roll!

---


# Lesson Steps:

Open up the simple-node-app.js file...

### Shebang #!

You can see our node <a href="https://github.com/jfraboni/simple-node-app/wiki/Shebang" target="_blank">Shebang</a> at the top of the file: `#!/usr/bin/env node` .  You'll see that set of characters often as the very first line in command-line apps; it tells your computer which application it should use to run our script, in this case, we want node to run our app.

### console.log();

A quick note on the function, `console.log()`: <a href="https://github.com/jfraboni/simple-node-app/wiki/ConsoleLog" target="_blank">console.log()</a> is a built-in function, a method that allows us to print text to the screen.  The function is called `log` and it belongs to a built-in Object called `console`.  So, we use console.log() to give feedback to our user at the command-line, or while we're developing, to debug our app by introspecting the value of objects at a particular point in the app.

To call or invoke the log function, that is, to actually print text to the screen, we execute the function by adding the open and closed parentheses `()` after the name of the function, in this case, `log`, and within the parentheses we provide the text, called a String, that we want to print, like so:

```javascript
#!/usr/bin/env node

console.log("Welcome to Operation Spark! So glad you're here!"); // prints: Welcome to Operation Spark! So glad you're here! 
```

### Working with Variables

Let's start by creating a welcome message to display to the user when our program is first run:

**TODO 1 :** Let's create welcome message for our app:
```javascript
#!/usr/bin/env node

// TODO 1 : create variables for prompt and fs by calling require in each respective module:
var welcomeMessage = "Welcome to our awesome node app!"
console.log(welcomeMessage);
```

Switch to the command line, and go ahead and run the app like so:

    $ ./simple-node-app.js
    Welcome to our awesome node app!

Sweet! Our welcomeMessage variable is printed nicely to the screen!  Variables are containers that we name and they hold values. When a computer executes or runs a program, we can ask it _at runtime_ to store a value in a variable so we can access it up by name to use at a later time.  You can read more about them <a href="https://github.com/jfraboni/simple-node-app/wiki/Variables" target="_blank">here</a>, or google "javascript variables".

### Think in Objects

Firstly, when <a href="https://github.com/jfraboni/simple-node-app/wiki/WritingApps" target="_blank">writing programs</a> in JavaScript, it's helpful to remember that in many objected oriented or prototype based programming languages, as JavaScript is, essentially, <a href="http://www.w3schools.com/js/js_objects.asp" target="_blank">everything is an object</a>.


Everything is an object, even the <a href="https://github.com/jfraboni/simple-node-app/wiki/Datatypes" target="_blank">built-in datatypes</a>, and the more detailed or specialized it needs to be, the more we describe it to the runtime.  Objects are basically comprised of two things:
* **Properties**: What the object has, or another way to look at it, it's parts (A car has an engine, wheels, battery, etc). Properties are essentially <a href="https://github.com/jfraboni/simple-node-app/wiki/Variables" target="_blank">variables</a> (or constants - values that cannot change).
* **Behaviours**: What the object can do (A car can go, stop, turn, etc).  Behaviours are essentially <a href="https://github.com/jfraboni/simple-node-app/wiki/Functions" target="_blank">functions</a> or otherwise known as methods.

In JavaScript, the simplest Object is, interestingly, an Object!  Think of an object as a piece of clay that you can shape into anything.  So when you create one, it's blank, empty, and you fill it or shape it as you need, defining what it's made of and what it can do.

To create one, you can simple do:

```javascript
var myObject = {};
```

Here, we are assigning to the variable `myObject` an empty Object.  Objects are literally represented with the curly brackets `{}`, otherwise known as braces. So when we use `= {}`, we're saying, _equals an empty Object_.  This is called an Object literal, and I like to think it's because this is literally how you make an Object.

**TODO 2 :** We'll throw one in our awesome app, find TODO 2:

```javascript
// TODO 2 : Create a variable called person of type Object using the Object literal syntax:
var person = {};
console.log(person);
```

Go ahead and run the app again:

    $ ./simple-node-app.js
    Welcome to our awesome node app!
    {}

Terrific, we have a person Object ...but ...wait, the person is blank!  You can see when we logged the person Object using `console.log(person);`, we were given `{}`, literally a blank, empty Object!

Objects store their values by a String key, the key being the name of the property, and we can use that key to look up the value of property.  The literal syntax for creating properties on an Object looks like this:

```javascript
var myObject = {id: 1, 
                name: "Some Object"};

console.log(myObject.id)   // prints: 1;
console.log(myObject.name) // prints: Some Object;
```

### Properties : Dot Syntax

**TODO 3 :** So, let's give our person a bit of a personality - you can remove the line of code `console.log(person);` if you want, then look for TODO 3, and type:

```javascript
// TODO 3 : Add firstName and lastName properties to our person:
person.firstName = "Jack";
person.lastName = "Jones";
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
```

Run the app:

    $ ./simple-node-app.js
    Welcome to our awesome node app!
    First Name: Jack
    Last Name: Jones

Cool, because objects are dynamic, meaning we can shape them, they can be altered at runtime, and in the above example, we're using _dot notation_ or _dot syntax_ to create properties on our person Object.  We're really saying, 'On the _person_ variable, add or overwrite a property called _nameFirst_, and assign the String "_Jack_" to it'.  So, after this point, we can execute `console.log(person.firstName);`, which prints `Jack`.

### Properties : Array Syntax

**TODO 4 :** So, because the keys of an Object are actually <a href="http://www.w3schools.com/jsref/jsref_obj_string.asp" target="_blank">Strings</a>, we can also use the syntax `myObject["type"] = "Awesome Object";` to create properties, sometimes called Array syntax.  Go ahead and add a city property to our person:

```javascript
// TODO 4 : Add the city property using Array syntax:
person["city"] = "New Orleans";
console.log("City: " + person.city);
```

Alrighty, switch back to the terminal, and run our app again:

    $ ./simple-node-app.js
    Welcome to our awesome node app!
    First Name: Jack
    Last Name: Jones
    City: New Orleans

Sweet, now we're cooking!

### Behaviours : Functions as Methods

Okay, so we've given our person a bit more of a personality in that we've added some properties to the person Object.  What about behaviours?  Remember we said Objects are made of properties _and_ behaviours.  Here we come to <a href="https://github.com/jfraboni/simple-node-app/wiki/Functions" target="_blank">functions</a>, or otherwise known as in the object oriented world, methods.

Functions are a group of statements executed one after another within their own sort of subprogram or closed environment - called a closure - think of them like a program wihtin a program.  And we can store them in memory by assinging them to a variable or constant so that we can run them again and again.  This helps with maintainability, but because they kind of have their own private world when they execute, they are extremely powerful.  Instead of passing around a value, we can pass around a whole set of instructions that perform all kinds of calculations and retrieval of data!

**TODO 5 :** Object oriented programming tries to model objects in a system like objects in the real world.  So, a car has wheels and an engine, that is, properties, and methods by which we can start it, steer it, and stop it - hopefully!  We know what properties are, methods are merely functions we attach to objects to act as methods or behaviours of the object - and here's a tip, methods are most often named using a verb:

```javascript
// TODO 5 : Create a function that prints the firstName, lastName and city of the person:
person.sayHello = function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName + ", I live in " + this.city);  
}
person.sayHello();
```

Above, we're assigning a property to our person object that _is a function_.  The function declaration has the syntax `function(arg, ...args) { // body };`.  We execute the function, that is, make it run, by stating it's name, followed by parentheses `()`.  The body of the function resides between the two curly brackets (yes, besides representing an Object, in the context of a function declaration, the curly brackets represent the body of the function).

There's a couple of important things to note here:
* The keyword <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" target="_blank">this</a>: The `this` keyword is a very important concept, and it usually refers to the Object within who's scope you are presently, at runtime - but in the case of a function body, it depends on _how_ the function was invoked - but we'll cover _this_ context a bit later, hahaha!  You can think if `this` like saying, "who's house am I in?" - that will tell you whose properties are about you!  So in the above example, the `this` in the expression `this.firstName` refers to our person object. 
* In this example, we're also introducing what's called <a href="http://en.wikipedia.org/wiki/Concatenation" target="_blank">_String concatenation_</a> to glue parts of many strings together into one String to print something more meaningful.  We're using the plus operator, `+`, to concatenate the various strings, for example `"Hello, my name is " + this.firstName`, etc.  Here's the full line, and you'll notice we're concatenating 6 strings, including the space, `' '`.

```javascript
"Hello, my name is " + this.firstName + " " + this.lastName + ", I live in " + this.city
```
* Finally, we are invoking, or _calling_ or _executing_, our new function, the method `sayHello`, by the statement `person.sayHello();`.  Addressing the function name, in this case, `sayHello` on the `person` Object, followed immediately by the open and close parentheses, we execute the function.  We're really saying, "On the person object, find the sayHello method and execute it".  In fact, dig this, we've been executing functions since the second line of this app: `console.log('This is a function call!');` is a call to the `log` function on the `console` Object! 

Head back to the command-line and run our app again:

    $ ./simple-node-<app class="js"></app>
    Welcome to our awesome node app!
    First Name: Jack
    Last Name: Jones
    City: New Orleans
    Hello, my name is Jack Jones, I live in New Orleans

Excellent, our call to `person.sayHello();` printed "Hello, my name is Jack Jones, I live in New Orleans"!

### Arrays

Okay, a few more things to check out:

Firstly, lists of data!  Often in applications you're going to have to do some processing of data stored in some kind of <a href="http://en.wikipedia.org/wiki/Data_structure" target="_blank">data structure</a>, and one of the most common data structures is the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Array</a>.  An Array in JavaScript is simply a list of objects of any type.  Arrays are important because they allow us to group items together in some meaningful relationship and handle them in one container.  The contacts in your phone are an example of some kind of Array, and an Array provides an <a href="http://en.wikipedia.org/wiki/Application_programming_interface" target="_blank">API</a>, a set of <a href="http://en.wikipedia.org/wiki/Method_(computer_programming)" target="_blank">_methods_</a> to help search through its items for a match.

Hmm... at set of _methods_, where have we heard that before?  Like the method `sayHello` on our `person` Object?  Indeed!  You might be piecing it together, an Array is an Object too, like our Object, `person`, only the Array exposes a special set of methods for the management of a list of data.  The set of methods exposed by an Object is called its API, application programming interface, that is, the methods programmers can use to make that Object interact with other objects.

**TODO 6 :**  Create an Array of Strings, representing things our person likes:

```javascript
// TODO 6 : Create an Array of likes:
person.likes = ["Music", "Food", "Stuff"];
```

Above, we create a new property on the `person` Object called `likes` and we assign it a literal Array of strings, `["Music", "Food", "Stuff"]` - again, think "this is literally what the Array looks like".

Arrays are zero-indexed lists that hold a collection of anything.  We often use the words _item_ or _element_ to refer to one of the objects in an Array.  When an item or element is added to an Array, it is given an index, that is, a number representing its position in the Array - the thing to remember is that the numbering or indexing of those elements in the Array starts at zero, `0`, and not one, `1`.  You'll get use to this fact, it will make sense as you use the Array.

Imagine you are in a single-file line at school, if you're the first person in line, you're the first element in an Array.  Your index would be zero.  The person behind you in the line would be at index one.  You can think of an Array like a two column table, the first column holds the index of the element, the second column holds the value of the element.  So, this is what that looks like for our `likes` Array of our `person` Object:

| Index  | Value         |
| -------|:-------------:|
| 0      | "Music"       |
| 1      | "Food"        |
| 2      | "Stuff"       |


Say we had an Array called `students`, a list of students in a class: To access elements in an Array, that is, to get a student, we use a square-bracket notation, like this:

```javascript
students[0];
```

This gives us the first student in the Array.

If we wanted to access and print to the screen the first element in the `likes` Array, we'd do:

```javascript
console.log(person.likes[0]); // prints: Music
```

Here, we're saying, "On the `person` object, find the `likes` Array, and then give me the first element in the `likes` Array, which returns "Music";


### Loops

**TODO 7 :**  Now, we'll then loops through that list of things, and print them to the screen by creating another function:

```javascript
// TODO 7 : Create a function on person that prints all of the things the person likes:
person.sayLikes = function() {
    console.log("I like: ");
    for (index in this.likes) {
        console.log("\t" + this.likes[index]);
    }
}
person.sayLikes();
```

Above, we created a new function or method on our person object, called `sayLikes`, and in the body of the sayLikes function, we do a couple of insteresting things.  For starters, notice the `"\t"` - this is a set of special characters that inserts a tab (4 spaces) into a String.  The backslash `\` is called the <a href="http://en.wikipedia.org/wiki/Escape_character" target="_blank">_escape_</a> character, because we're asking interpreter to step out of processing the characters normally, and treat the next character, the `t` as something special, and in this case, the `t` stands for tab.

But what's this _for_ thing?

```javascript
for (index in this.likes) {
    console.log("\t" + this.likes[index]);
}
```

This is called a for-in loop, and <a href="http://www.w3schools.com/js/js_loop_for.asp" target="_blank">loops</a> are a powerful feature allowing us to introspect list-like objects, objects like the Array and Object, and one by one get a hold of the items in the list and do something with them.

The for-in loops cycles through each element in the Array, so if there's 3 items in the Array, the loop will run 3 times.  And at the top of each loop, the value of `index` is updated to the position of the next element in the Array.  In this case, `index` is a variable name, and we can decide to call that variable whatever we like, but we usually follow some convention of either using `i`, which stands for _index_, or something meaningful like `index` or `key`, in the case of looping through an Object.

Remember, Arrays are zero-indexed, which means the index of the first element is _zero_, so to access the first element in the `likes` Array of our `person` Object, we'd do:

```javascript
person.likes[0]; // prints: "Music"
```

You may think this is strange, but you'll get use to it.  Consider this:

```javascript
// create a variable called likes and assign an Array with 3 elements;
var likes = ["Music", "Food", "Stuff"];

// print the value at index 0:
console.log(likes[0]);  // prints: Music 

// print the value at index 1:
console.log(likes[1]);  // prints: Food

// print the value at index 2:
console.log(likes[2]);  // prints: Stuff
```

The for-in loop says: for each `index` in `someList`, give me the current item's `index` so I can look up the value at `someList[index]`.  Or, another way to think of it: give me each index in the Array, one at a time, so I can access the element at each index.

So, it's that time, run the app:

    $ ./simple-node-app.js
    Welcome to our awesome node app!
    First Name: Jack
    Last Name: Jones
    City: New Orleans
    Hello, my name is Jack Jones, I live in New Orleans
    I like:
        Music
        Food
        Stuff


Awesome! Pat yourself on the back - you've written a JavaScript app in the Node.js environment - you flew through some of the basic concepts, wrote an app using _real_ development tools!

Save your apps as you learn: programmers are notorious for remembering where they saved some piece of code, and often go back to snippets of code to remember the exact syntax of some API or to find solution to a repetitous problem.  Keep your work for this reason - it will be not only a great catalogue of your progress, but will give you a reference to solutions.


&copy; John Fraboni 2014
