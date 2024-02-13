// 1.   Install Node.js, TypeScript and VS Code on your computer.INSTALLED
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”
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
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famousQuote = 'Steve Jobs once said, "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."';
console.log(famousQuote);
