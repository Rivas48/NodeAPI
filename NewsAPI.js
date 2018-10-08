// Problem : Looking for a certain news article based upon user request 

// Solution : Used Node.js to connect to the NewsAPI to allow us to select the correct new organization to show to user.

// Require https module

const https = require('https');

//API Key for API
module.exports = {
newsAPI_Key : '06f95e43d0fa49fcb45e1a70b7c41dd8',
// Country you would like to recieve news from 
 country : '',
// News Source you would like to recieve new from
 sources : '',
// The Key word that you would like to recieve new based upon this. 
 keyword : 'bitcoin',
// 3 Endpoints either Top Headlines, Everything, and Sources. 
 endpoint :'everything',
 
 newsUrl : 'https://newsapi.org/v2/top-headlines?country=us&apiKey=06f95e43d0fa49fcb45e1a70b7c41dd8',
}






