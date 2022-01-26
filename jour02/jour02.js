// 01 number
var integer = 102;
var float = 13.9;
console.log(integer, float);

// 02 convert
var basic = 34;
var stringified = (basic);
console.log(stringified);

// 03 round
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// 04 arithmétique
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test * bis);
console.log(test - bis);
console.log(test % bis);
console.log(test / bis);


// 05 comparaison
var test = 50;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

//06 condition 
var limit = 50;
var score = 45;
if (score >= limit) {
console.log("ok good!");  
}
else {
    console.log("Oh nooo...")
};

//07 condition II
var password = "azer";
if (password.length > 5) {
    console.log("The password is secure")
}
else{
    console.log("wsh");
}

//08 condition III
if (score >= limit  && password.length > 5)
{
    console.log("Everything is good")
} else if (score >= limit  || password.length > 5) {
    console.log("Something is good")
} 
else{ console.log("Nothing is good");
}




//bonus
 var random = 6;
 if (random === 6) {
     console.log("Yes I win!")
 }
 else { console.log("So close")

 }
