// Problem : We need a simple way to display all the changes in the stocks we invested on.
// Solution: Use Node.js to allow us to see all the changes within the stocks and display them in the console.

// Require https module
const https = require('https');
// Your API key. Claim your free API key from https://www.alphavantage.co/support/#api-key
var API_Key = '';
// The name of the equity of your choice DEMO: AAPL ;
var stockKey = '';
// The time series of your choice DEMO: TIME_SERIES_WEEKLY ; 
var functionKey = '';

//Connect to the API URL DEMO: https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo ; 
const request = https.get('https://www.alphavantage.co/query?function=' + functionKey + '&symbol=' + stockKey +'&apikey=' + API_Key + '', (response) =>{
	console.dir(response.statusCode);
	let body = "";
	// Read the Data 
	response.on('data', data =>{
		body += data.toString();
	
	});

	response.on('end', () =>{
		// Parse the Data 
		const stock = JSON.parse(body);
		var symbol = stock['Meta Data']['2. Symbol'];
		var lastRefreshed = stock['Meta Data']['3. Last Refreshed'];
		console.log(" " + symbol + " was last checked on " + lastRefreshed + ". ");
	});

});