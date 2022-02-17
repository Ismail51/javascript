// 01 file system

const fs = require("fs");
fs.readFile("jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("Lecture en différé : " + data.toString());
 });

// 02 map double

let array = [1,2,3,4,5];
let double = array.map((Number)=>{
    return Number * 2;
})
console.log(double);

// 03 map names

let longNames = [
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Smith",
    }
]
function shortNames(longNames){
    return longNames.map((compactName) => {
        var name = compactName.firstName + compactName.lastName;
        return name;
        }
    )
}
console.log(shortNames(longNames));