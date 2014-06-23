#!/usr/bin/env node

/* DATA TYPES */
var Person = function(firstName, lastName, birthDate, hometown, highSchool) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthDate = birthDate;
	this.hometown = hometown;
	this.highSchool = highSchool;

	this.fullName = function() {
		return this.firstName + ' ' + this.lastName;
	}

	this.speak = function(statement) {
		console.log(this.fullName() + ' says: ' + statement);
	}
};

Person.prototype.toString = function() { return this.firstName + ' ' + this.lastName; };


// TODO 1 : Create a variable called welcomeMessage and assign it a string
var welcomeMessage = "Welcome to our awesome node app!"
console.log(welcomeMessage);

// Create a variable called person and initialize it:
var person = new Person("Jack", "Jones", "May 17, 1992", "New Oreans");

// Log the users name and age:
console.log(person);
console.log(person.toString());
person.speak("My hometown is " + person.hometown + "!");



// // Start the prompt:
// prompt.start();

// // prompt the user for two properties: 
// prompt.get(['birthdate', 'hometown'], function (err, input) {
	
// 	// Handle the user's input, available on the input object by the names birthdate and hometown, by addiing them to the user object:
// 	user.birthdate = input.birthdate;
// 	user.hometown = input.hometown;

// 	console.log(user);
// });



// use typeof, array, object, 