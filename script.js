const apiKey="27ebcfa7f086e2d7b8109c3ad23b83af";
const apiUrl="https://api.openweathermap.org/data/2.5/weather";

const locationInput=document.getElementById("locationInput");
const searchButton=document.getElementById("searchButton");
const temperatureElement=document.getElementById("temperature");
const locationElement=document.getElementById("location");
const descriptionElement=document.getElementById("description");




searchButton.addEventListener("click",()=>{
    const location=locationInput.value;
    if(location){
       fetchWeather(location)
    }else{
      alert('Please Enter a location')
    }
    
});

function fetchWeather(location){
  const url=`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`


  fetch(url)
 .then(res=>res.json())
 .then((data)=>{
   locationElement.textContent=data.name;
   temperatureElement.textContent=`${Math.round(data.main.temp)}C`;
   descriptionElement.textContent=data.weather[0].description;
 })
 .catch((err)=>{
    console.log(err)
    console.error("Error fetching weather data",err)
  })
}
