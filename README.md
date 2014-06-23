simple-node-app
=============

An intro to programming in JavaScript and the Node.js environment


# Installation:

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and paste the following commands:

    git clone https://github.com/jfraboni/simple-node-app.git

...some text will fly by as the repository is cloned locally, then enter or cut and paste:

    cd simple-node-app && ./setup.sh && cd -

###On your local computer:
Open a terminal in the directory into which you want to clone the repository, then enter or cut and paste the following command:

    git clone https://github.com/jfraboni/simple-node-app.git

...some text will fly by as the repository is cloned locally, then enter or cut and paste:

    cd simple-node-app && ./setup.sh
    
Great, you're set to roll!
---


# Lesson Steps:

Open up the simple-node-app.js file...

You can see our node <a href="https://github.com/jfraboni/simple-node-app/wiki/Shebang" target="_blank">Shebang</a> at the top of the file, you'll see that often in command line node apps.

### Variables

Let's create some <a href="https://github.com/jfraboni/simple-node-app/wiki/Variables" target="_blank">variables</a> and print them to the screen


**TODO 1 :** Let's create welcome message for our app:
```javascript
#!/usr/bin/env node

// TODO 1 : create variables for prompt and fs by calling require in each respective module:
var welcomeMessage = "Welcome to our awesome node app!"
console.log(welcomeMessage);
```

© John Fraboni 2014