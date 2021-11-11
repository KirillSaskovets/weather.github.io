
let vvod = document.getElementById("vvod");
let button = document.getElementById("button");
let mainframe = document.getElementById("mainframe");
let secondframe = document.getElementById("secondframe");


let data = document.getElementsByClassName("currentdate");

let icon=document.getElementsByClassName("currenticon")[0];
let temp=document.getElementsByClassName("currenttemp")[0];
let ddate=document.getElementsByClassName("currentdate")[0];
let cityname=document.getElementsByClassName("cityname")[0];

let onHourDiv1 = document.getElementsByClassName("onHourDiv1")[0];
let onHourDiv2 = document.getElementsByClassName("onHourDiv2")[0];
let onHourDiv3 = document.getElementsByClassName("onHourDiv3")[0];
let onHourDiv4 = document.getElementsByClassName("onHourDiv4")[0];


let day1 = document.getElementsByClassName("day1")[0];
let day2 = document.getElementsByClassName("day2")[0];
let day3 = document.getElementsByClassName("day3")[0];
let day4 = document.getElementsByClassName("day4")[0];
let day5 = document.getElementsByClassName("day5")[0];

let temp_max1 = document.getElementsByClassName("maxtemp1")[0];
let temp_max2 = document.getElementsByClassName("maxtemp2")[0];
let temp_max3 = document.getElementsByClassName("maxtemp3")[0];
let temp_max4 = document.getElementsByClassName("maxtemp4")[0];
let temp_max5 = document.getElementsByClassName("maxtemp5")[0];

let temp_min1 = document.getElementsByClassName("mintemp1")[0];
let temp_min2 = document.getElementsByClassName("mintemp2")[0];
let temp_min3 = document.getElementsByClassName("mintemp3")[0];
let temp_min4 = document.getElementsByClassName("mintemp4")[0];
let temp_min5 = document.getElementsByClassName("mintemp5")[0];

let icon1 = document.getElementsByClassName("icon1")[0];
let icon2 = document.getElementsByClassName("icon2")[0];
let icon3 = document.getElementsByClassName("icon3")[0];
let icon4 = document.getElementsByClassName("icon4")[0];
let icon5 = document.getElementsByClassName("icon5")[0];
let daySOST;
showWeather('Minsk');

button.addEventListener("click", ()=>{
    if(document.getElementById("vvod").value===""){
        showWeather('Minsk');
    }else{
        showWeather(document.getElementById("vvod").value);
    }
    
});


// onHourDiv.forEach((el, index) => {
//     innerHTML = Math.round(data.list[index + 1].main.temp) + "°";
//   })

//   onHour.forEach((el, index) => {
//     innerText = data.list[index + 1].dt_txt.split(" ")[1].split(":")[0] + ":" + "00";

//   });

async function showWeather(city) {
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=66b3c3e1676ddd60a73d8a3160445061`;
    let response = await fetch(api);
    let data = await response.json();


    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png">`;
    cityname.innerHTML = data.city.name;
    temp.innerHTML = Math.floor(data.list[0].main.temp-273,15)+"℃";
    createDate((Math.floor(data.list[0].dt)*1000));
    daySOST = checkDaytime(data.list[0].dt,data.city.sunrise,data.city.sunset);

    temp_max1.innerHTML = Math.floor(data.list[8].main.temp_max-273,15)+"°";


    onHourDiv1.innerHTML = Math.floor(data.list[8].main.temp_max-273,15)+"°";
    onHourDiv2.innerHTML = Math.floor(data.list[8].main.temp_max-273,15)+3+"°";
    onHourDiv3.innerHTML = Math.floor(data.list[8].main.temp_max-273,15)+4+"°";
    onHourDiv4.innerHTML = Math.floor(data.list[8].main.temp_max-273,15)+1+"°";

    temp_max1.innerHTML = Math.floor(data.list[8].main.temp_max-273,15)+"°";
    temp_min1.innerHTML = Math.floor(data.list[8].main.temp_min-273,15)+"°";   
    console.log(data.list[8].weather[0].main); 
    icon1.innerHTML = `<img src="./pic/${choosePicture(data.list[8].weather[0].id)}.png">`;

    temp_max2.innerHTML = Math.floor(data.list[16].main.temp_max-273,15)+"°";
    temp_min2.innerHTML = Math.floor(data.list[16].main.temp_min-273,15)+"°";
    console.log(data.list[16].weather[0].main);
    icon2.innerHTML = `<img src="./pic/${choosePicture(data.list[16].weather[0].id)}.png">`;

    temp_max3.innerHTML = Math.floor(data.list[24].main.temp_max-273,15)+"°";
    temp_min3.innerHTML = Math.floor(data.list[24].main.temp_min-273,15)+"°";
    console.log(data.list[24].weather[0].main);
    icon3.innerHTML = `<img src="./pic/${choosePicture(data.list[24].weather[0].id)}.png">`;

    temp_max4.innerHTML = Math.floor(data.list[32].main.temp_max-273,15)+"°";
    temp_min4.innerHTML = Math.floor(data.list[32].main.temp_min-273,15)+"°";
    console.log(data.list[32].weather[0].main);
    icon4.innerHTML = `<img src="./pic/${choosePicture(data.list[32].weather[0].id)}.png">`;

    temp_max5.innerHTML = Math.floor(data.list[39].main.temp_max-273,15)+"°";
    temp_min5.innerHTML = Math.floor(data.list[39].main.temp_min-273,15)+"°";
    console.log(data.list[39].weather[0].main);
    icon5.innerHTML = `<img src="./pic/${choosePicture(data.list[39].weather[0].id)}.png">`;

    checkDaytime(data.list[0].dt,data.city.sunrise,data.city.sunset);
    setDays(); 
    //await new Promise((resolve, reject) => setTimeout(resolve, 3000));
}
function checkDaytime(dt,sunrise,sunset){
    if((Math.floor(sunrise-dt)<5000 && Math.floor(sunrise-dt)>0) || (Math.floor(dt-sunrise)<5000 && Math.floor(dt-sunrise)>0)){
        
        return 'morning';
    }else if(Math.floor(dt)>Math.floor(sunrise+5000) && Math.floor(dt)<Math.floor(sunset-5000)){
        
        return 'day';
    }else{
       
        return 'night';
        
    }
}
function setDays(){
    var d = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        day1.innerHTML = days[d.getDay()+1];
        day2.innerHTML = days[d.getDay()+2];
        day3.innerHTML = days[d.getDay()+3];
        day4.innerHTML = days[d.getDay()+4];
        day5.innerHTML = days[d.getDay()+5];
}
function choosePicture(id){
    if(id>199 && id<300){
        return 'heavyrain';
    }
    if(id>299 && id<550){
        return 'rainy';
    }
    if(id>599 && id<650){
        return 'snow';
    }
    if(id>699 && id<790){
        return 'mist';
    }
    if(id==800){
        if(daySOST==='day' ||daySOST==='morning'){
            return 'day'
        }else{
            return 'night'
        }
    }
    if(id==801){
        if(daySOST==='day' ||daySOST==='morning'){
            return 'cloudssun'
        }else{
            return 'cloudsnight'
        }
    }  
    if(id>801){
        return 'cloud'
    }    
}

function createDate(d){
    const nd = new Date(d);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var den=nd.getDay()+7;
    ddate.innerHTML = ""+months[nd.getMonth()] +" "+den+", "+nd.getFullYear();
}