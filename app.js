
let apiURL= "https://api.openweathermap.org/data/2.5/weather?appid=8589ae2cca137122b055347b08f319d6&units=metric&q="

let input=document.querySelector(".search input");
let btn=document.querySelector(".search-btn");
let weatherImg=document.querySelector(".weather-img");
let errorMsg=document.querySelector(".error")
let weather=document.querySelector(".weather")


 let checkweather= async(city)=>{
  let response=await fetch(apiURL +city);
  if(response.status===404){
    errorMsg.style.display= "block"
    weather.style.display= "none"
  }else{
    let data=await response.json();
    // console.log(data);
    
  document.querySelector(".city").innerHTML= data.name
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C"
  document.querySelector(".humid-p").innerHTML= data.main.humidity + "%"
  document.querySelector(".wind-p").innerHTML= data.wind.speed + "km/hr"
  
  
  if(data.weather[0].main=== "Clouds"){
    weatherImg.src= "cloud.png"
  }else if(data.weather[0].main=== "Clear"){
    weatherImg.src= "clear.png"
  }else if(data.weather[0].main=== "Rain"){
    weatherImg.src= "rain.png"
  }else if(data.weather[0].main=== "snow"){
    weatherImg.src= "snow.png"
  }else if(data.weather[0].main=== "Mist"){
    weatherImg.src= "mist.png"
  }
  
  document.querySelector(".weather").style.display= "block"
  errorMsg.style.display= "none"
  }
  
}
 

btn.addEventListener('click', ()=>{
  checkweather(input.value)
})




