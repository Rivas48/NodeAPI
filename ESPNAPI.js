// Problem : Looking for an api that seeks scores for all sports and gives standings with Node.JS
// Solution : Used Node.js to completly get all the information for the sports we would like to recieve. 

const https = require('https');
//API Key for the sports API
const API_Key = 'b3b48254-4427-4c1c-8519-e20a01';
//The sport's score or standing that we are currently looking for.
var league = 'nba';
//The season which we are currently looking for at the moment
var season = 'season';
//The date of the certain sport or league we are currently looking up.
var date = '11152018';

function postScoresAndSchedules(score,schedule,standings){
	const message = "The score of the game was" + score + "on" + schedule + "and they are" +standings+ "";
	console.log(score);
}


var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("1.0", true);

msf.authenticate(API_Key, "<YOUR_ACCOUNT_PASSWORD>");

var data = msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'manu ginobli'});

console.log(data.player);