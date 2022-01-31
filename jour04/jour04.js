// 01 object
let cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat);
console.log(cat.age);
if(cat.isCute === true){
    console.log("so cute !")
};

// 02 Combine
let cat2 = {
    name: "bibo",
    age: 5, 
    isCute: true,
}
let cats = [
    cat,cat2
];
//cats[0].age;
console.log(cats[0].age);
console.log(cat2.isCute);
    

    
// 03 Even
function checkIfeven(num) { 
    console.log(num % 2)
    if (num % 2 === 0) { 
        console.log("even")
    }
    else {
        console.log("odd")
    }
}

checkIfeven(5)
