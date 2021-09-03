function onGeoOk(position) {
    // console.log(position);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log("You live in", lat, lng);

    // API
    url = "";
    // console.log(url);
    fetch(url).then(respones => respones.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoErr() {
    alert("Can't find you. Np weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

// openweathermap.org
