/**
 * CONFIGURATION
 * Working Weather App with OpenWeatherMap API
 */

// --- Data Lists ---
import cityNames from "../utilities/getCity.js";

console.log("City Names:", cityNames);

const myAPI_KEY = `a4e8b29088ce467eb77c405ae424ecb2`;

// --- DOM Elements ---
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const bgImage = document.getElementById("bg-image");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("error-msg");
const weatherResult = document.getElementById("weather-result");
const autocompleteList = document.getElementById("autocomplete-list");
const historyContainer = document.getElementById("search-history");
const cityListDropdown = document.getElementById("city-list-dropdown");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  populateCityDropdown();
  loadHistory();

  // Tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Default search on load
  fetchWeatherByCity("London");
});

// --- Theme Handling ---
themeToggle.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";
  setTheme(!isDark);
});

function setTheme(isDark) {
  if (isDark) {
    body.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    body.removeAttribute("data-theme");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") setTheme(true);
  else setTheme(false);
}

// --- City Dropdown & Autocomplete ---
function populateCityDropdown() {
  cityNames.forEach((city) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("dropdown-item");
    a.href = "#";
    a.textContent = city;
    a.onclick = (e) => {
      e.preventDefault();
      cityInput.value = city;
      fetchWeatherByCity(city);
    };
    li.appendChild(a);
    cityListDropdown.appendChild(li);
  });
}

// Debounce function for typing
let debounceTimer;
cityInput.addEventListener("input", function () {
  clearTimeout(debounceTimer);
  const val = this.value;

  if (!val) {
    closeAutocomplete();
    return;
  }

  debounceTimer = setTimeout(() => {
    const matches = cityNames.filter((c) =>
      c.toLowerCase().startsWith(val.toLowerCase())
    );
    showAutocomplete(matches);
  }, 300);
});

function showAutocomplete(matches) {
  closeAutocomplete();
  if (matches.length === 0) return;

  matches.forEach((city) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${city.substr(
      0,
      cityInput.value.length
    )}</strong>${city.substr(cityInput.value.length)}`;
    div.addEventListener("click", function () {
      cityInput.value = city;
      closeAutocomplete();
      fetchWeatherByCity(city);
    });
    autocompleteList.appendChild(div);
  });
}

function closeAutocomplete() {
  autocompleteList.innerHTML = "";
}

// Click outside to close autocomplete
document.addEventListener("click", function (e) {
  if (e.target !== cityInput) {
    closeAutocomplete();
  }
});

// --- Search & Geolocation Actions ---
searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim()) {
    fetchWeatherByCity(cityInput.value.trim());
  }
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && cityInput.value.trim()) {
    closeAutocomplete();
    fetchWeatherByCity(cityInput.value.trim());
  }
});

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    showLoading();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        showError("Location access denied or failed.");
        loader.style.display = "none";
      }
    );
  } else {
    showError("Geolocation is not supported by this browser.");
  }
});

// --- Core Weather Functions ---

// Fetch weather by city name
async function fetchWeatherByCity(city) {
  showLoading();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPI_KEY}&units=metric`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found!");
      }
      throw new Error("Weather data unavailable");
    }
    
    const data = await response.json();
    console.log("Weather data:", data);
    
    renderWeatherUI(data);
    addToHistory(data.name);
    updateBackground(data.weather[0].main);
    
    // Hide loader after successful load
    loader.style.display = "none";
    
  } catch (err) {
    showError(err.message);
  }
}

// Fetch weather by coordinates (for geolocation)
async function fetchWeatherByCoords(lat, lon) {
  showLoading();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myAPI_KEY}`
    );
    
    if (!response.ok) {
      throw new Error("Unable to fetch weather for this location");
    }
    
    const data = await response.json();
    console.log("Weather data by coords:", data);
    
    renderWeatherUI(data);
    addToHistory(data.name);
    updateBackground(data.weather[0].main);
    
    // Update input field with city name
    cityInput.value = data.name;
    
    // Hide loader after successful load
    loader.style.display = "none";
    
  } catch (err) {
    showError(err.message);
  }
}

function showLoading() {
  loader.style.display = "block";
  errorMsg.style.display = "none";
  weatherResult.style.display = "none";
  document.getElementById("alert-container").style.display = "none";
}

function showError(msg) {
  errorMsg.style.display = "block";
  document.getElementById("error-text").innerText = msg;
  loader.style.display = "none";
  weatherResult.style.display = "none";
}

function renderWeatherUI(data) {
  // Smooth scroll to result
  weatherResult.style.display = "flex";
  weatherResult.classList.remove("fade-in");
  void weatherResult.offsetWidth; // Trigger reflow
  weatherResult.classList.add("fade-in");

  // Populate Fields
  document.getElementById(
    "city-name"
  ).innerText = `${data.name}, ${data.sys.country}`;
  
  document.getElementById("current-date").innerText =
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    
  document.getElementById("temp-val").innerText = Math.round(data.main.temp);
  document.getElementById("weather-desc").innerText = data.weather[0].description;
  document.getElementById("humidity-val").innerText = `${data.main.humidity}%`;
  document.getElementById("wind-val").innerText = `${Math.round(data.wind.speed * 3.6)} km/h`; // Convert m/s to km/h

  // Convert Unix to Time
  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.getElementById("sunrise-val").innerText = sunriseTime;
  document.getElementById("sunset-val").innerText = sunsetTime;

  // Icon
  const iconCode = mapIcon(data.weather[0].main);
  document.getElementById(
    "weather-icon"
  ).innerHTML = `<i class="fas ${iconCode}"></i>`;

  // Recommendations
  const recText = getRecommendation(data.weather[0].main, data.main.temp);
  document.getElementById("recommendation-text").innerText = recText;

  // Alerts
  if (data.weather[0].main === "Rain" || data.weather[0].main === "Thunderstorm") {
    const alertBox = document.getElementById("alert-container");
    alertBox.style.display = "block";
    document.getElementById("alert-text").innerText =
      "Rain advisory in effect. Roads may be slippery.";
  } else {
    document.getElementById("alert-container").style.display = "none";
  }

  // Forecast
  renderForecast(generateMockForecast(data.main.temp));
}

function renderForecast(forecastData) {
  const container = document.getElementById("forecast-container");
  container.innerHTML = "";

  forecastData.forEach((day) => {
    const div = document.createElement("div");
    div.className =
      "forecast-card glass d-flex justify-content-between align-items-center";
    div.innerHTML = `
      <div class="fw-bold">${day.day}</div>
      <div class="fs-4 text-info"><i class="fas ${day.icon}"></i></div>
      <div><span class="fw-bold">${day.temp}°C</span> <small class="text-muted">${day.desc}</small></div>
    `;
    container.appendChild(div);
  });
}

// --- Search History ---
function addToHistory(city) {
  let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
  if (!history.includes(city)) {
    history.unshift(city);
    if (history.length > 5) history.pop();
    localStorage.setItem("weatherHistory", JSON.stringify(history));
    loadHistory();
  }
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
  historyContainer.innerHTML = "";
  if (history.length > 0) {
    historyContainer.innerHTML =
      '<small class="d-block text-muted mb-2">Recent Searches:</small>';
    history.forEach((city) => {
      const chip = document.createElement("span");
      chip.className = "history-chip";
      chip.textContent = city;
      chip.onclick = () => fetchWeatherByCity(city);
      historyContainer.appendChild(chip);
    });
  }
}

// --- Helpers ---
function updateBackground(condition) {
  let imgUrl =
    "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1920&auto=format&fit=crop";

  condition = condition.toLowerCase();
  if (condition.includes("cloud"))
    imgUrl = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1920";
  else if (condition.includes("rain"))
    imgUrl = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1920";
  else if (condition.includes("clear") || condition.includes("sun"))
    imgUrl = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1920";
  else if (condition.includes("snow"))
    imgUrl = "https://images.unsplash.com/photo-1477601370302-687106d788e9?q=80&w=1920";
  else if (condition.includes("mist") || condition.includes("fog"))
    imgUrl = "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1920";

  // Preload then switch
  const tempImg = new Image();
  tempImg.src = imgUrl;
  tempImg.onload = () => {
    bgImage.src = imgUrl;
    bgImage.classList.add("active");
  };
}

function mapIcon(condition) {
  condition = condition.toLowerCase();
  if (condition.includes("cloud")) return "fa-cloud";
  if (condition.includes("rain")) return "fa-cloud-showers-heavy";
  if (condition.includes("sun") || condition.includes("clear")) return "fa-sun";
  if (condition.includes("snow")) return "fa-snowflake";
  if (condition.includes("thunder")) return "fa-bolt";
  return "fa-cloud-sun";
}

function getRecommendation(condition, temp) {
  condition = condition.toLowerCase();
  if (temp < 5) return "It's freezing! Wear a heavy coat.";
  if (condition.includes("rain")) return "Don't forget your umbrella today!";
  if (condition.includes("sun") && temp > 25)
    return "Great day for the beach! Stay hydrated.";
  if (condition.includes("cloud")) return "Good weather for a run.";
  return "Enjoy your day!";
}

function generateMockForecast(currentTemp) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().getDay();
  let forecast = [];

  for (let i = 1; i <= 3; i++) {
    const dIndex = (today + i) % 7;
    const conditions = ["fa-sun", "fa-cloud", "fa-cloud-rain"];
    const randIcon = conditions[Math.floor(Math.random() * conditions.length)];

    forecast.push({
      day: days[dIndex],
      temp: Math.round(currentTemp + (Math.random() * 6 - 3)),
      icon: randIcon,
      desc:
        randIcon === "fa-sun"
          ? "Sunny"
          : randIcon === "fa-cloud"
          ? "Cloudy"
          : "Rainy",
    });
  }
  return forecast;
}