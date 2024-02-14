// 1.   Install Node.js, TypeScript and VS Code on your computer.INSTALLED
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personName = "Sajid Ali";
console.log("Hello " + personName + ", would you like to learn some TypeScript today?");
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName2 = "sAjid aLi";
var lowerCaseName = personName2.toLocaleLowerCase();
console.log(lowerCaseName);
var upperCaseName = personName2.toUpperCase();
console.log(upperCaseName);
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(titlecaseName);
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famousQuote = 'Steve Jobs once said, "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."';
console.log(famousQuote);
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousPerson = "Albert Einstein";
var famousQuote2 = 'A person who never made a mistake never tried anything new.';
var message = "".concat(famousPerson, " once said, \"").concat(famousQuote2, "\"");
console.log(message);
// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
//  so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personNameWithWhitespace = "\t\n   Sajid Ali   \t\n";
console.log("Name with whitespace:", personNameWithWhitespace);
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 
//8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// 8.You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNumber = 8;
console.log("My favourotite Number Is : " + favNumber);
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Function to perform subtraction
function add(a, b) {
    return a - b;
}
// Example usage
console.log(add(5, 3)); // Output: 8
// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 4)); // Output: 6
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Ali", "Hasan", "Ahmed", "Arif", "Imran"];
// Printing each person's name by accessing each element in the list, one at a time
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var name_2 = names_2[_a];
    console.log("Hello " + name_2 + " How Are You?");
}
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportationModes = ["car", "motorcycle", "bicycle", "bus", "train"];
for (var _b = 0, transportationModes_1 = transportationModes; _b < transportationModes_1.length; _b++) {
    var mode = transportationModes_1[_b];
    console.log("I would like to own a ".concat(mode, "."));
}
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Ali", "Hasan", "Ahmed", "Arif", "Imran"];
for (var _c = 0, guests_1 = guests; _c < guests_1.length; _c++) {
    var guest = guests_1[_c];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely, [Sajid Ali]"));
}
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestCantMakeIt = "Hasan";
console.log("".concat(guestCantMakeIt, " can't make it to dinner."));
// New person to invite
var newGuest = "Adil";
// Replace the guest who can't make it with the new person
var index = guests.indexOf(guestCantMakeIt);
if (index !== -1) {
    guests[index] = newGuest;
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner at my place on Saturday night. Please let me know if you can make it.\nSincerely,\n[Sajid Ali]\n"));
});
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
guests.unshift("Basit");
// Add one new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Grace");
// Add one new guest to the end of the list using push()
guests.push("Bilal");
// Print new set of invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner at my place on Saturday night. Please let me know if you can make it.\nSincerely,\n[Sajid Ali]\n"));
});
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Inform about the bigger dinner table
// Print new set of invitation messages
console.log("You can invite only two people for dinner.");
// Remove guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print invitation for the two remaining guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are still invited to dinner at my place on Saturday night.\nSincerely,\n[Your Name]\n"));
});
// Remove the last two names from the list
guests.splice(0, 2);
// Print the list to ensure it's empty
console.log("Remaining guest list:", guests);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Define an array of places to visit
var placesToVisit = ["Tokyo", "Paris", "New York", "Malaysia", "Thailand"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order
console.log("\nOriginal order (still):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal order (still):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("Remaining guest list:", guests);
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array containing different types of fruits
var fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry", "Watermelon"];
// Print the list of fruits
console.log("List of fruits:");
fruits.forEach(function (fruit) {
    console.log(fruit);
});
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// TypeScript objects representing different types of cars
var car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
var car2 = {
    make: "Honda",
    model: "Civic",
    year: 2019
};
var car3 = {
    make: "Ford",
    model: "Mustang",
    year: 2021
};
// Print the details of each car
console.log("Car 1:");
console.log("Make:", car1.make);
console.log("Model:", car1.model);
console.log("Year:", car1.year);
console.log("\nCar 2:");
console.log("Make:", car2.make);
console.log("Model:", car2.model);
console.log("Year:", car2.year);
console.log("\nCar 3:");
console.log("Make:", car3.make);
console.log("Model:", car3.model);
console.log("Year:", car3.year);
// 22. console.log(fruits[10]); // Accessing index 10 which doesn't exist in the array
// Corrected code accessing an existing index
console.log("Corrected:", fruits[2]); // Accessing index 2 which exists in the array
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
var number = 5;
console.log("Is number > 3? I predict True.");
console.log(number > 3); // True
var color = 'blue';
console.log("Is color != 'red'? I predict True.");
console.log(color != 'red'); // True
var age = 25;
console.log("Is age >= 21? I predict True.");
console.log(age >= 21); // True
var isRaining = false;
console.log("Is it not raining? I predict True.");
console.log(!isRaining); // True
var fruit = 'apple';
console.log("Is fruit === 'banana'? I predict False.");
console.log(fruit === 'banana'); // False
var temperature = 10;
console.log("Is temperature < 0? I predict False.");
console.log(temperature < 0); // False
var day = 'Monday';
console.log("Is day === 'Friday'? I predict False.");
console.log(day === 'Friday'); // False
var isAdmin = true;
console.log("Is isAdmin not true? I predict False.");
console.log(isAdmin !== true); // False
var month = 'December';
console.log("Is month !== 'December'? I predict False.");
console.log(month !== 'December'); // False
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var city = 'New York';
console.log("Is city equal to 'New York'? I predict True.");
console.log(city === 'New York'); // True
var country = 'Canada';
console.log("Is country not equal to 'USA'? I predict True.");
console.log(country !== 'USA'); // True
// Tests using the lower case function
var userInput = 'HELLO';
console.log("Is userInput in lowercase 'hello'? I predict False.");
console.log(userInput.toLowerCase() === 'hello'); // False
// Numerical tests
var x = 5;
var y = 10;
console.log("Is x less than y? I predict True.");
console.log(x < y); // True
var temperature1 = 25;
var temperature2 = 30;
console.log("Is temperature1 not equal to temperature2? I predict True.");
console.log(temperature1 !== temperature2); // True
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = false;
console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm); // False
var isRainy = true;
var isCold = true;
console.log("Is it rainy or cold? I predict True.");
console.log(isRainy || isCold); // True
// Test whether an item is in an array
var fruits2 = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits2.includes('banana')); // True
// Test whether an item is not in an array
var vegetables = ['carrot', 'spinach', 'broccoli'];
console.log("Is 'tomato' not in the vegetables array? I predict True.");
console.log(!vegetables.includes('tomato')); // True
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = 'red'; // or 'yellow'
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
    var alien_color2_1 = 'red'; // or 'yellow'
}
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color4 = 'yellow';
if (alien_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color4 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color4 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color5 = 'red';
if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color5 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var ages = 30; // You can change the value of age to test different scenarios
if (ages < 2) {
    console.log("The person is a baby.");
}
else if (ages >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (ages >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (ages >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (ages >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Array of favorite fruits
var favorite_fruits = ["banana", "apple", "strawberry"];
// Check if each fruit is in the array
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
else {
    console.log("You don't like oranges as much.");
}
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
else {
    console.log("You don't like grapes as much.");
}
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// Array of usernames
var usernames = ["admin", "Ali", "Hasan", "Ahmed", "Arif", "Imran"];
// Loop through the array and print a greeting to each user
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames2 = []; // Empty array of usernames
// Check if the list of users is not empty
if (usernames2.length > 0) {
    // Loop through the array and print a greeting to each user
    usernames2.forEach(function (username) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current usernames
var current_users = ["john", "alice", "bob", "charlie", "emma"];
// List of new usernames
var new_users = ["mike", "sarah", "Alice", "david", "John"];
// Loop through the new_users list to check for uniqueness
new_users.forEach(function (new_username) {
    // Convert the new username to lowercase for case-insensitive comparison
    var lowercase_new_username = new_username.toLowerCase();
    // Check if the lowercase version of the new username exists in the current_users list
    if (current_users.map(function (username) { return username.toLowerCase(); }).includes(lowercase_new_username)) {
        console.log("Sorry, the username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
});
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// Array of numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print the proper ordinal ending for each number
numbers.forEach(function (number) {
    var ordinal_ending;
    if (number === 1) {
        ordinal_ending = "st";
    }
    else if (number === 2) {
        ordinal_ending = "nd";
    }
    else if (number === 3) {
        ordinal_ending = "rd";
    }
    else {
        ordinal_ending = "th";
    }
    console.log("".concat(number).concat(ordinal_ending));
});
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// Array of favorite pizza names
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Loop through the array and print the name of each pizza
console.log("Printing pizza names:");
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// Modify the loop to print a sentence using the name of the pizza
console.log("\nPrinting sentences about pizza:");
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
// Print a statement about how much you like pizza
console.log("\nI really love pizza!");
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Array of animals with a common characteristic
var animals = ["Dog", "Cat", "Rabbit"];
// Loop through the array and print the name of each animal
console.log("Printing animal names:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Modify the loop to print a statement about each animal
console.log("\nPrinting statements about animals:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i].toLowerCase(), " would make a great pet."));
}
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Define the make_shirt function
function make_shirt(size, message) {
    console.log("A ".concat(size, " shirt will be printed with the message: \"").concat(message, "\"."));
}
// Call the function
make_shirt("medium", "Hello, world!");
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Define the make_shirt function with default parameters
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " shirt will be printed with the message: \"").concat(message, "\"."));
}
// Call the function to make a large shirt with the default message
make_shirt2();
// Call the function to make a medium shirt with the default message
make_shirt2("medium");
// Call the function to make a shirt of any size with a different message
make_shirt("small", "Hello, world!");
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// Define the describe_city function with a default parameter for the country
function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("London", "United Kingdom");
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Define the city_country function
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with "Lahore" and "Pakistan"
var result = city_country("Lahore", "Pakistan");
console.log(result); // Output: Lahore, Pakistan
// 40. Call your function with at least three city-country pairs, and print the value that’s returned.
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Define the make_album function with an optional parameter for number of tracks
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three different albums
var album1 = make_album("Taylor Swift", "Fearless");
var album2 = make_album("Ed Sheeran", "Divide", 16);
var album3 = make_album("Adele", "21");
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define the show_magicians function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
// Call the function and pass the array of magician's names
show_magicians(magicians);
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the show_magicians function
function show_magicians2(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define the make_great function
function make_great(magicians2) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magicians2 = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
// Call make_great function to modify the array of magicians
make_great(magicians);
// Call show_magicians to see the modified list
show_magicians2(magicians);
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
