// //01 somme des carré

var num = 0;
for (let i = 5; i <= 10; i++){
    num = i*i + num
    console.log(num);
}

// 02 comptons
var num = 7;
var min = 100;
var max = 1000;
let result = "";
for (i = min; i <= max; i++){
if (i % num === 0) {
    result++;
    }
}
console.log(result);

// 03 Chanceux

let num = 20;
var min = 1;
var max = 5;
let result = "0"
for( let i = 1; i < 20; i++){
    num = Math.random(i)*(max,min ++);
    console.log(num);
}


