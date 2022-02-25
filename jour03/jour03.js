// // exercice 1
// let fruits;
// fruits = ["mango","lemon","blueberry"];
// console.log(fruits);

// // exercice 2
// let ingredients = ["eggs","milk","butter"];
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("butter"));

// // exercice 3
// let object = ["pen","book","lamp"];
// object.unshift("chair");
// console.log(object);
// object.pop("lamp");
// console.log(object);
// object.push("laptop");
// console.log(object);
// object.shift("chair");
// console.log (object);

// // exercice 4
// let numbers = [ "4","10","8","12","6"];
// numbers.reverse();
// console.log(numbers);
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// // exercice 5
// let total = 0;
// let limit = 10;
// for (let i = 0; i <= limit; i++) {
//       total = total + i;
     
// }console.log(total);

// // Exercice 6
// let sentance = "Hello Konexio!";             
// let result = "";
// for (let i = sentance.length -1; i >= 0; i-- ) {
//     console.log(sentance[i]);

// }


//  01 Array

// let fruits = ["mango","lemon","blue"];
// console.table(fruits)


//  02 Access

// let ingredients = ["eggs","milk","butter"]
// console.log(ingredients.indexOf("butter"))


// 03 Add and Remove

// let objects = ["pen","book","lamp"];
// objects.unshift("chair");
// console.log(objects);
// objects.pop();
// console.log(objects);
// objects.push("laptop");
// console.log(objects);
// objects.shift();
// console.log(objects);



// 4 Order

// let numbers = [4,10,8,12,6]
// numbers.reverse()
// numbers.sort((a,b) => a - b)
// console.log(numbers);

// 05 Boucle

// let total = 0
// let limit = 10
// for (let i = 0; i <= limit; i++) {
//     total+= i
// console.log(total);
// }

// 06 Reverse
// let sentance = "Hello Konexio !"
// let myArray = sentance.split("");
// let result = []
// console.log(myArray)
// for (let i= 0; i <myArray.length; i++) {
// let item = myArray[i];
// result.unshift(item)
// }
// console.log(result.join(""));


// Bonus 
var limit = 100
for( let i = 0; i <= limit; i++){
    if (i% 3 === 0 ){
        // console.log("fizz",i);
    }
    // else if (i % 5 === 0){
    //     // console.log("buzz",i);
    if (i % 3 === 0 || i % 5 === 0){
        console.log("fizzbuzz",i);
    }  
}
   

    