let btn=document.querySelector(".search-btn");

let apiKey= "8589ae2cca137122b055347b08f319d6";
let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=${apiKey}&units=metric`



let checkweather= async()=>{
  let response=await fetch(apiURL)
  // console.log(response);
  let data= await response.json();
  console.log(data);
  
}

