var exports = module.exports = {};
var express = require('express');
var router = express.Router();
// Problem : We need a simple way to display all the changes in the stocks we invested on.
// Solution: Use Node.js to allow us to see all the changes within the stocks and display them in the console.
module.exports = { 
// Your API key. Claim your free API key from https://www.alphavantage.co/support/#api-key
stockAPI_Key :'8FQDD1CE9EFAQAU2',
// The name of the equity of your choice DEMO: AAPL ;
apple  : 'AAPL',
google : 'GOOG',
NKE    : 'NKE',
msft   : 'MSFT',
nyse   : 'NYSE',
// The time series of your choice DEMO: TIME_SERIES_WEEKLY ; 
functionKey :'TIME_SERIES_WEEKLY'
 };