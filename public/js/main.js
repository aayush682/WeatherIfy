const submitBtn = document.getElementById('submitBtn');
const city_nameDisplay = document.getElementById('city_nameDisplay');
const temp = document.getElementById('temp');
const weatherCondition = document.getElementById('weatherCondition');
const cityNameInput = document.getElementById('cityName');
const getInfo = async (event) => {
    event.preventDefault();
    cityName = cityNameInput.value;
    let API_key = "05d22a4f1e0d490446e5879abf8b9976"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_key}`

    try {
        // Show loading animation
        document.getElementById('loading').style.opacity = 1;

        const response = await fetch(url);
        const data = await response.json();

        // Hide loading animation
        document.getElementById('loading').style.opacity = 0;
        console.log(data);
        if (data.name === undefined) {
            alert("Please enter a valid city name");
        }
        city_nameDisplay.innerText = data.name;
        temp.innerText = Math.round(data.main.temp) + "°C";
        weatherCondition.innerText = data.weather[0].main;
        //background Image change
        switch (weatherCondition.innerText) {
            case "Snow":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            case "Clouds":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            case "Fog":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            case "Mist":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://i.gifer.com/1PSm.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            case "Rain":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            case "Clear":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
                document.getElementById("wrapper-bg").style.color = "black";
                break;
            case "Thunderstorm":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            case "Haze":
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://i.gifer.com/srG.gif')";
                document.getElementById("wrapper-bg").style.color = "white";
                break;
            default:
                document.getElementById("wrapper-bg").style.backgroundImage =
                    "url('https://i.gifer.com/1PSm.gif')";
                document.getElementById("wrapper-bg").style.color = "black";
                break;
        }

    } catch (error) {
        console.log(error);
    }

}

// Add an event listener to handle form submission
submitBtn.addEventListener('click', (event) => {
    getInfo(event);
});

// Add an event listener for when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set default city to Kolkata
    cityNameInput.value = "Howrah";
    // Call the getInfo function
    getInfo(new Event('click'));
    cityNameInput.value = "";
});


document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const amPm = hours >= 12 ? 'PM' : 'AM';
        console.log(amPm);
        const formattedHours = (hours % 12) || 12;

        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dayName = dayNames[now.getDay()];
        const day = now.getDate().toString().padStart(2, '0');
        const monthName = months[now.getMonth()];
        const year = now.getFullYear();

        timeElement.textContent = `${formattedHours}:${minutes} ${amPm}`;
        // document.getElementById('am_pm').innerHTML = amPm;
        dateElement.textContent = `${dayName}, ${day} ${monthName} ${year} `;
    };

    // Update time every second
    setInterval(updateTime, 1000);
});