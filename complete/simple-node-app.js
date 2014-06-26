#!/usr/bin/env node

// TODO 1 : Create a variable called welcomeMessage and assign it a string
var welcomeMessage = "Welcome to our awesome node app!"
console.log(welcomeMessage);


// TODO 2 : Create a variable called person of type Object using the Object literal syntax:
var person = {};
console.log(person);


// TODO 3 : Add firstName and lastName properties to our person:
person.firstName = "Jack";
person.lastName = "Jones";
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);


// TODO 4 : Add the city property using Array syntax:
person["city"] = "New Orleans";
console.log("City: " + person.city);


// TODO 5 : Create a function that prints the firstName, lastName and city of the person:
person.sayHello = function() {
	console.log("Hello, my name is " + this.firstName + " " + this.lastName + ", I live in " + this.city);	
}
person.sayHello();


// TODO 6 : Create an Array of likes:
person.likes = ["Music", "Food", "Stuff"];


// TODO 7 : Create a function on person that prints all of the things the person likes:
person.sayLikes = function() {
	console.log("I like: ");
	for (index in this.likes) {
		console.log("\t" + this.likes[index]);
	}
}
person.sayLikes();
