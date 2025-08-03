
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8c346052bmsh95103877740001ep14fbe9jsn8a21e417a740',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// b1f9911991a1f1aa804f847969109116
