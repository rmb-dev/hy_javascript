// console.log("Hello there!");
// setTimeout(function () {
//   console.log("How you doing?");
// }, 2000);
// console.log("Goodbye!");

// jQuery has built-in Ajax capabilities via the $.ajax() method. Making a request can be as simple as passing the method a URI and processing the response asynchronously.

// $.ajax("https://restcountries.eu/rest/v2/region/africa")
//   .then(function (response) {
//     response.forEach(function (country) {
//       $("ol").append(`<li>${country.name}: ${country.capital}</li>`);
//     })

//   })



// function reqListener() { console.log(this.responseText); }
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://restcountries.eu/rest/v2/region/africa"); oReq.send();


$.ajax("https://restcountries.eu/rest/v2/region/europe")
  .then(function (response) {
    response.forEach(function (country) {
      $("ol").append(`<li>${[51]}</li>`);
    });

  });