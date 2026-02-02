const form = document.querySelector('#search-form');
const input = document.querySelector('#input-location');
const sectionWeatherInfo = document.querySelector('#weather-data');
form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!input || !sectionWeatherInfo)
        return;
    const location = input.value;
    if (location.length < 3) {
        alert('O local precisa ter no mínimo 3 caracteres.');
        return;
    }
    const apiKey = "27b62474375505aa254baf5c7ce0de85";
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=pt_br`);
        const data = await response.json();
        const infos = {
            local: data.name,
            temperature: Math.round(data.main.temp),
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind: Math.round(data.wind.speed * 3.6)
        };
        sectionWeatherInfo.innerHTML = `
        <div class="glass-card" id="weather-primary-data">
            <div>
                <h2>${infos.local}</h2>
                <span>${infos.temperature}°</span>
            </div>
            <img src="https://openweathermap.org/img/wn/${infos.icon}@2x.png" alt="${infos.description}">
        </div>
        <div class="glass-card" id="weather-secondary-data">
            <span>${infos.description}</span>
            <span>Umidade: ${infos.humidity}%</span>
            <span>Vento: ${infos.wind} km/h</span>
        </div>`;
    }
    catch (err) {
        console.log('Deu um erro na obtenção dos dados da API.', err);
    }
});
export {};
//# sourceMappingURL=index.js.map