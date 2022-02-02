// 1 format
function formatDate(dateText){
    let date = new Date(dateText);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    
console.log(day + "/" + month + "/" + year)
}
formatDate("2022-02-01")

// 2 age
function calculateAge(dateBirth) {
    let date = new Date();
    let age = date.getFullYear() - dateBirth;

    console.log(age);
}
calculateAge("2000")

// 03 validator




