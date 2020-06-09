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

  $covidData.append(`<li>Country : ${country}</li>
                    <li>New Confirmed Cases: ${cases}</li>
                    <li>New Deaths: ${newDeaths}</li>
                    <li>Total Deaths: ${totalDeaths}</li>
                    <li>Total Recovered: ${totalRecovered}</li>
                    <li>Date & Time GMT+0: ${date}</li>
                    `)
                    


});