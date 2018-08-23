// Problem : We need a simple way to look at a user's weather @ a location he identifies
// Solution : Use Node.js to connect to Dark Sky API to get weather information to print out


// Require https module
const https = require('https');
// Your Dark Sky secret key. EX:0123456789abcdef9876543210fedcba;
var API_Key = 'dfc311f122de2bb3258f0125717a8f31';
// The longitude of a location (in decimal degrees). Positive is east, negative is west. EX: -71.0589;
var long    = '-122.4233';
// The latitude of a location (in decimal degrees). Positive is north, negative is south. EX:  42.3601; 
var latt    = '42.3601';

	// Function to print message to console 
	function printMessage(desc, temperature, wind){
		const message = "Today weather is "+ desc +" @ temperature of "+ temperature + " with winds of "+ wind +".";
		console.log(message);
	}

// Connect to the API URL (https://api.darksky.net/forecast//37.8267,-122.4233)
try{
	const request = https.get('https://api.darksky.net/forecast/' + API_Key + '/' + latt + ',' + long + '', (response) =>{

		console.dir(response.statusCode);
		let body = "";
		//Read the data
			response.on('data', data =>{
			body += data.toString();
			});
			response.on('end', () => {
		// Parse the data
		const weather = JSON.parse(body);
		var summary = weather.currently.summary;
		var temp = weather.currently.temperature;
		var wind = weather.currently.windSpeed;
		// Print the data 
		printMessage(summary,temp,wind);					
						})
});