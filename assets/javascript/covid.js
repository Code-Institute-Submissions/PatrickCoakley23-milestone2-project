var $covidData = $("#covid-data");
var settings = {
	"url": "https://api.covid19api.com/summary",
	"method": "GET",
	"timeout": 0,
};

//Used Indexing to pull up the appropriate values 
$.ajax(settings).done(function (response) {
	var country = response.Countries[80].Country;
	var cases = response.Countries[80].NewConfirmed;
	var newDeaths = response.Countries[80].NewDeaths;
	var totalDeaths = response.Countries[80].TotalDeaths;
	var totalRecovered = response.Countries[80].TotalRecovered;
	var date = response.Countries[80].Date;
	var totalCases = response.Countries[80].TotalConfirmed;
	var formatted = Date.parse(date);
	var newDate = new Date(formatted);

	//Used the prepend method to manipulate the dom and add the data to the boostrap table in the html
	$covidData.prepend(`<tr><td class="table-data-1"><strong>Country:</strong></td> <td>${country}</td></tr>
                     <tr><td class="table-data-1"><strong>New Confirmed Cases:</strong></td> <td>${cases}</td></tr>
                     <tr><td class="table-data-1"><strong>Confirmed Cases:</strong></td> <td>${totalCases}</td></tr>
                     <tr><td class="table-data-1"><strong>Total Recovered:</strong></td> <td>${totalRecovered}</td></tr>
                     <tr><td class="table-data-1"><strong>New Deaths:</strong></td> <td>${newDeaths}</td></tr>
                     <tr><td class="table-data-1"><strong>Total Deaths:</strong></td> <td>${totalDeaths}</td></tr> 
                     <tr><td class="table-data-1"><strong>Last Updated (GMT+0):</strong></td> <td>${newDate}</td></tr>
                    `);
}).fail(function( jqXHR, textStatus ) {
  $covidData.prepend( "For some reason the Covid-19 table didn't load: " + textStatus );
});

