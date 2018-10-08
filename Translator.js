// Problem : Translate a page so that other people non speaking english 
//Solution : Use the Yandex Api with Node.js to translate all of the website.


const https = require('https');
// API Key for the Yandex API
const API_Key = 'trnsl.1.1.20180903T170447Z.4cc66bef6836d39a.cb892ce3a603d5c1604b6e8f347b784b664a65ca';
// The word that we are currently translating.
var word = 'hello how are you doing today';
// The language which we are currently looking for translated into the language we want.
var language = 'en-ru';

function translate(words){
	const message = 'Translation' +words+ '';
	
}
const request = https.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' +API_Key+ '&text=' +word+ '&lang=' +language+ '', (response)=>{

		console.dir(response.statusCode);
		let body = "";
		response.on("data", data=>{
		body += data.toString();
		});
		response.on('end', () => {
		// Parse the data
		const Language = JSON.parse(body);
		console.log(Language)
		});
	})