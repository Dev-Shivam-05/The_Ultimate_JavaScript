/*
    What Is metric?
    What Is imperial?
*/

const myApi = `f9903d64542d704faf3274a7548b8ed9`;
let city;
let getCity = document.getElementById("getCity");
// &units=metric
let baseApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`;

const fetchCity = () => {
  city = getCity.value;

  console.log(city);
  
  async function getWeather() {
    try {
      let response = await fetch(baseApi);
      console.log(response);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
//   setTimeout(async () => {
    
//   }, 00);
  displayCurrentWhether();
};

let showWhether = document.getElementById('showWhether');
function displayCurrentWhether() {
    showWhether.classList.remove('d-none');
    showWhether.innerHTML = '';
    showWhether.innerHTML = '';
}