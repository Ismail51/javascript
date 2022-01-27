// exercice 1
let fruits;
fruits = ["mango","lemon","blueberry"];
console.log(fruits);

// exercice 2
let ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// exercice 3
let object = ["pen","book","lamp"];
object.unshift("chair");
console.log(object);
object.pop("lamp");
console.log(object);
object.push("laptop");
console.log(object);
object.shift("chair");
console.log (object);

// exercice 4
let numbers = [ "4","10","8","12","6"];
numbers.reverse([]);
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

// exercice 5
let total = 0;
let limit = 10;
for (total = 0; total <= limit; total++) {
    console.log(total);
}

