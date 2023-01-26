var city_name =  document.querySelector(".citynam");
var temp = document.querySelector(".today_temp");
var humidity = document.querySelector(".humid");
var wind = document.querySelector(".wind")
var pressure = document.querySelector(".pressure");
const API_keys = "f6a7f3c1eb1f31372e42af613ac6a740";
document.querySelector("button").addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name.value+'&appid='+API_keys)
     .then(response => response.json())
     .then(data =>{
        document.querySelector(".location").textContent = data['name'];
        temp.innerHTML = data['main']['temp'];
        humidity.innerHTML = data['main']['humidity'];
        wind.innerHTML =data['wind']['speed'];
        pressure.innerHTML = data['main']['pressure'];

     })
    .catch(err=> alert("wrong city name"))
});


