//A)Get all the countries from Asia continent /region using Filter function.

var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);

request.send();

request.onload = function () {
  var t = JSON.parse(request.response);
  var res = t.filter((obj) => obj.region == "Asia");
  console.log(res);
};

//B)Get all the countries with a population of less than 2 lakhs using Filter function

var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 0 && xhr.status < 300) {
    var t = JSON.parse(this.response);

    let result = t.filter((t) => t.population < 200000);

    console.log(result);
  } else {
    console.log(xhr.responseText);
  }
};
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();

//c)Print the following details name, capital, flag using forEach function.

var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function () {
  if (xhr.status >= 0 && xhr.status < 300) {
    var t = JSON.parse(this.response);

    t.forEach((element) => {
      for (let key in t) {
        console.log(t[key].name);
        console.log(t[key].region);
        console.log(t[key].subregion);
        console.log(t[key].population);
      }
    });
  } else {
    console.log(xhr.responseText);
  }
};
xhr.send();

//D)Print the total population of countries using reduce function

var  xhr = new XMLHttpRequest();

xhr.onload = function(){

var t = JSON.parse(this.response);

var res=t.reduce((acc,crr)=>{
  return acc+crr.population
},0)
console.log(res)

xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);

xhr.send();

//E)Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();

request.onload = function () {
  var t = JSON.parse(request.response);
  var result = t.filter((obj) => {
    for (i = 0; i < obj.currencies.length; i++) {
      if (obj.currencies[i].code == "USD") {
        return true;
      }
    }
  });
  op = result.map((element) => {
    return element.name;
  });
  console.log(op);
};
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);

request.send();
