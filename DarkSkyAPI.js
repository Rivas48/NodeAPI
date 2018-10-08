// Problem : We need a simple way to look at a user's weather @ a location he identifies
// Solution : Use Node.js to connect to Dark Sky API to get weather information to print out


// Require https module
const https = require('https');
// Your Dark Sky secret key. EX:0123456789abcdef9876543210fedcba;
module.exports = { 
weatherAPI_Key : 'dfc311f122de2bb3258f0125717a8f31',
// The longitude of a location (in decimal degrees). Positive is east, negative is west. EX: -71.0589;
long : '-122.4233',
// The latitude of a location (in decimal degrees). Positive is north, negative is south. EX:  42.3601; 
latt : '42.3601'
}





