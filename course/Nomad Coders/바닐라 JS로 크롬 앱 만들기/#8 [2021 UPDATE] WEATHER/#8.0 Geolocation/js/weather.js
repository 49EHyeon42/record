function onGeoOk(position) {
    // console.log(position);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}

function onGeoErr() {
    alert("Can't find you. Np weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

// openweathermap.org