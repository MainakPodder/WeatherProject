const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const middle_layer = document.getElementById("middle_layer");
submitBtn.addEventListener("click",async (e) => {
    e.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
        city_name.innerText = `Oops!Please write the city name before search...!`;
        middle_layer.classList.add('data_hide');
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=48aa3f972e7b7a44199fb44b43497eb3`;
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerHTML = `${arrData[0].main.temp}<sup class="degree">o</sup>C`;
            // temp_status.innerText = arrData[0].weather[0].main;
            let tempMode = arrData[0].weather[0].main;
            if (tempMode === "Clouds") {
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color:#f1f2f6"></i>`;                 
            }else if(tempMode === "Clear"){
                temp_status.innerHTML = `<i class="fas fa-sun" style="color:#eccc68"></i>`; 
            }else if(tempMode === "Rain"){
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style="color:#a4b0be"></i>`; 
            }else{
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color:#f1f2f6"></i>`; 
            }
            middle_layer.classList.remove('data_hide');
        } catch (error) {
            city_name.innerHTML = `Oops!Enter the city name properly...!`;
            middle_layer.classList.add('data_hide');
        }
        
    }
});