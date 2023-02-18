const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05c5a7042cmsh14da597f9684c3ep1167c8jsne24f0f2f36ec',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));