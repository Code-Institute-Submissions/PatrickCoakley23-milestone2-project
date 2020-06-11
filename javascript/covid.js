var $covidData = $("#covid-data")
var settings = {
  "url": "https://api.covid19api.com/summary",
  "method": "GET",
  "timeout": 0,
};


$.ajax(settings).done(function (response) {
  var country = response.Countries[80].Country;
  var cases = response.Countries[80].NewConfirmed;
  var newDeaths = response.Countries[80].NewDeaths;
  var totalDeaths = response.Countries[80].TotalDeaths;
  var totalRecovered = response.Countries[80].TotalRecovered;
  var date = response.Countries[80].Date;

  $covidData.prepend(`<tr><td><strong>Country:</strong></td> <td>${country}</td></tr>
                     <tr><td><strong>New Confirmed Cases:</strong></td> <td>${cases}</td></tr>
                     <tr><td><strong>New Deaths:</strong></td> <td>${newDeaths}</td></tr>
                     <tr><td><strong>Total Deaths:</strong></td> <td>${totalDeaths}</td></tr>
                     <tr><td><strong>Total Recovered:</strong></td> <td>${totalRecovered}</td></tr>
                     <tr><td><strong>Last Updated (GMT+0):</strong></td> <td>${date}</td></tr>
                    `)
                    
});

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();