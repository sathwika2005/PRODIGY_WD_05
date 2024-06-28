const apiKey = "f51c1e75803196004b878fe780bae84a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather(){
	const response = await fetch(apiUrl + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data);
}

checkWeather();