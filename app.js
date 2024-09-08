
//  let apiKey= "8589ae2cca137122b055347b08f319d6";
//  let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=&appid=${apiKey}&units=metric`
let apiURL= "https://api.openweathermap.org/data/2.5/weather?appid=8589ae2cca137122b055347b08f319d6&units=metric&q="

let input=document.querySelector(".search input")
let btn=document.querySelector(".search-btn")



 let checkweather= async(city)=>{
  let response=await fetch(apiURL +city);
  console.log(response);
  let data=await response.json();
  console.log(data);
  
  document.querySelector(".city").innerHTML= data.name
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C"

document.querySelector(".humid-p").innerHTML= data.main.humidity + "%"
document.querySelector(".wind-p").innerHTML= data.wind.speed + "km/hr"

}

btn.addEventListener('click', ()=>{
  checkweather(input.value)
})




// let apiKey= "8589ae2cca137122b055347b08f319d6";
// let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=&appid=${apiKey}&units=metric`

// // let input=document.querySelector(".search input")
// // let btn=document.querySelector(".search-btn")



// let checkweather= async()=>{
//   let response=await fetch(apiURL )
//   // console.log(response);
//   let data= await response.json();
//   console.log(data);


//   // document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C"
//   // document.querySelector(".city").innerHTML= data.name
//   // document.querySelector(".humid-p").innerHTML= data.main.humidity + "%"
//   // document.querySelector(".wind-p").innerHTML= data.wind.speed + "km/hr"
 
// }

// // btn.addEventListener("click", ()=>{
// //   checkweather(input.value)
// // })




// // checkweather();

