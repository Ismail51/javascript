// 01 - Hello world
console.log("Hello world !");

// 02 - String
var test = 'My name is ismail'
console.log(test);

//03 name
var name = 'ismail'
console.log('Nice to meet you ' + name);

//04 string lenght
var testLenght = "I'm very long !";
console.log(testLenght);

//05 replace
var food = "croissant is meh";
food = food.replace("meh","so good");
console.log(food);

//06 up and down
var basic = "this is cool";
var basicUp = basic.toUpperCase();
var basicDown= basic.toLowerCase();
console.log(basic + " " + basicUp + " " + basicDown);

//07 split
var word = "banana";
var letters = word.split("");
console.log(letters);

//08 template
var age = "27";
var template = "I'm __ years old";
template = `I'm ${age} years`;
console.log(template);