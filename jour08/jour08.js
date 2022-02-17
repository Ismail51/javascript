// 01 countries

const request = require("request");
const { resourceLimits } = require("worker_threads");
const apiBase = "https://restcountries.com/v3.1/all";
let countriesNames = [];
request.get (apiBase,(err,res,body) =>{
    // console.log(body);
    let countries = JSON.parse(body);
    // console.log(countries[0].name.common);
    for (var i = 0;i<countries.length;i++){
        var b = countries[i].name.common
        countriesNames.push(b)
        console.log(countriesNames);
        
    }
})

console.log("request");

// 02 Chuck Norris

const getFacts = () => {
    const url = "https://api.chucknorris.io/"
    request.get(url, (err, response, data ))
}

