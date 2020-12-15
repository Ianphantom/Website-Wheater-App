import '../assets/css/style.css'
import '../component/ContactMe.js';
import '../component/searchbar.js';
import '../component/weather-bar.js';
const cuaca = {};
const suhu = document.querySelector(".suhu");
const deskripsi = document.querySelector(".description");
const lokasi = document.querySelector(".lokasi");
const pemberitahuan = document.querySelector(".pemberitahuan");

cuaca.temp = {
    satuan : "celcius"
}

const apikey = "0ebf0e29926cc939f557a936228e1129";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(posisi, ifError);
}else{
    pemberitahuan.innerHTML= `<p>Browser Belum Support<p>`;
}

const cuacaTerkini = (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
    fetch(url)
    .then(response => {
        let data = response.json();
        return data;
    })
    .then(data =>{
        cuaca.suhu = Math.floor(data.main.temp - kelvin);
        cuaca.deskripsi = data.weather[0].description;
        cuaca.city = data.name;
        cuaca.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    })
    .catch(error => {
        alert(error);
    });
}

function posisi(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    cuacaTerkini(lat,long);
}

function ifError(error){
    pemberitahuan.innerHTML= `<p>${error.message}<p>`;
}

const kelvin = 273;

const displayWeather = () => {
    suhu.innerHTML=`${cuaca.suhu} °C`;
    deskripsi.innerHTML = cuaca.deskripsi
    lokasi.innerHTML = `${cuaca.city}, ${cuaca.country}`;
}


(function () {
    function cari() {
        const apikey = "0ebf0e29926cc939f557a936228e1129";
        const keyword = document.querySelector("#keyword")
        let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${keyword.value}&appid=${apikey}`
        fetch(url1)
        .then(response => {
            let data = response.json();
            return data;
        })
        .then(data =>{
            cuaca.suhu = Math.floor(data.main.temp - kelvin);
            cuaca.deskripsi = data.weather[0].description;
            cuaca.city = data.name;
            cuaca.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        })
        .catch(error => {
            alert(error);
        });
    }
  
    document.getElementById('button').addEventListener('click', cari, true);
  })();