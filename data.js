

let api = '382f4b05cdc9f8c7580c5768ca5f5522';


const data = async ()=>{

    let city = document.getElementById("search").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
  try{
    const res = await axios.get(url)
    const { name } = res.data;
    const { icon, description } = res.data.weather[0];
    const { temp, humidity } = res.data.main;
    const { speed } = res.data.wind;
    document.querySelector('#error').innerHTML = ``;
    document.getElementById('City').innerHTML= name
    document.getElementById('temp').innerHTML=`Temperature : ${temp} °C`;
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
     document.querySelector(".description").innerText = description;
    document.getElementById("Humdity").innerHTML = `Humdity : ${humidity}%`;
    document.getElementById("wind").innerHTML = `Wind : ${speed} km/h`;


  } catch(error){
    if(error){
     document.querySelector('#error').innerHTML = `city not found 😔`;
     
     document.getElementById('City').innerHTML=''
     document.getElementById('temp').innerHTML='';
     document.querySelector(".icon").src ="" ;
      document.querySelector(".description").innerText ='';
     document.getElementById("Humdity").innerHTML ='';
     document.getElementById("wind").innerHTML = ``;
    }
}

}

let searchbtn = document.getElementById('btn');
searchbtn.addEventListener("click", data);
document
  .querySelector("#search")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
     data();
    }
  });

