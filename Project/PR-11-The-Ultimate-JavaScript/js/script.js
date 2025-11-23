const body = document.body;
const form = document.getElementById("searchForm");
const manualInput = document.getElementById("manualInput");
const quickSelect = document.getElementById("quickSelect");
const loadingState = document.getElementById("loadingState");
const resultsContainer = document.getElementById("results");
const statsGrid = document.getElementById("statsGrid");
const updatedInfo = document.getElementById("updatedInfo");
const alertPlaceholder = document.getElementById("alertPlaceholder");
const modeToggle = document.getElementById("modeToggle");

const severityClasses = ["gradient-low", "gradient-medium", "gradient-high"];

const statsTemplate = (title, value, icon, variant) => `
      <div class="col-12 col-md-6">
        <div class="results-card h-100 p-4 border-${variant} border-opacity-25">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <p class="text-white-50 mb-1 text-uppercase small">${title}</p>
              <div class="stat-value text-${variant}" data-target="${value}" data-format="number">0</div>
            </div>
            <span class="display-6 text-${variant}"><i class="bi ${icon}"></i></span>
          </div>
        </div>
      </div>`;

const showAlert = (message, type = "danger") => {
  alertPlaceholder.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show glass-panel mt-3 mb-0" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
};

const toggleLoading = (show) => {
  loadingState.classList.toggle("visually-hidden", !show);
};

const toggleResults = (show) => {
  resultsContainer.hidden = !show;
  requestAnimationFrame(() => {
    resultsContainer.classList.toggle("show", show);
  });
};

const setBackgroundSeverity = (cases) => {
  body.classList.remove(...severityClasses);
  const level =
    cases > 5000000
      ? "gradient-high"
      : cases > 500000
      ? "gradient-medium"
      : "gradient-low";
  body.classList.add(level);
};

const formatUpdated = (timestamp) => {
  if (!timestamp) return "Last updated time unavailable";
  return `Last updated: ${new Date(timestamp).toLocaleString()}`;
};

const normalizeData = (data, type) => {
  switch (type) {
    case "country":
    case "continent":
      return {
        location: data.country || data.continent,
        cases: data.cases,
        active: data.active,
        recovered: data.recovered,
        deaths: data.deaths,
        updated: data.updated,
      };
    case "state":
      return {
        location: data.state,
        cases: data.cases,
        active:
          data.active || data.cases - (data.deaths + (data.recovered || 0)),
        recovered:
          data.recovered ||
          Math.max(0, data.cases - data.deaths - (data.active || 0)),
        deaths: data.deaths,
        updated: data.updated || Date.now(),
      };
    case "county":
      const stats = data[0];
      return {
        location: `${stats.county}, ${stats.province || stats.state}`,
        cases: stats.stats.confirmed,
        active:
          stats.stats.confirmed - stats.stats.deaths - stats.stats.recovered,
        recovered: stats.stats.recovered,
        deaths: stats.stats.deaths,
        updated: stats.updatedAt,
      };
    default:
      throw new Error("Unknown data type");
  }
};

// const fetchCovidData = async (query) => {
//   const endpoints = [
//     { url: `https://disease.sh/v3/covid-19/countries/${encodeURIComponent(query)}?strict=true`, type: 'country' },
//     { url: `https://disease.sh/v3/covid-19/states/${encodeURIComponent(query)}`, type: 'state' },
//     { url: `https://disease.sh/v3/covid-19/continents/${encodeURIComponent(query)}?strict=true`, type: 'continent' },
//     { url: `https://disease.sh/v3/covid-19/jhucsse/counties/${encodeURIComponent(query)}`, type: 'county' }
//   ];

//   for (const endpoint of endpoints) {
//     try {
//       const response = await fetch(endpoint.url);
//       if (!response.ok) continue;
//       const data = await response.json();
//       if (!data || (Array.isArray(data) && !data.length)) continue;
//       return normalizeData(data, endpoint.type);
//     } catch (error) {
//       console.warn('Endpoint failed', endpoint.url, error);
//     }
//   }
//   throw new Error('No global data was located for the provided entry. Try a different name.');
// };

const animateCount = (element, target, duration = 1400) => {
  const formatter = new Intl.NumberFormat();
  const start = 0;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * (target - start) + start);
    element.textContent = formatter.format(value);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

const renderStats = ({
  location,
  cases,
  active,
  recovered,
  deaths,
  updated,
}) => {
  const metrics = [
    {
      title: "Total Cases",
      value: cases,
      icon: "bi-activity",
      variant: "primary",
    },
    {
      title: "Active Cases",
      value: active,
      icon: "bi-heart-pulse",
      variant: "info",
    },
    {
      title: "Recovered",
      value: recovered,
      icon: "bi-shield-check",
      variant: "success",
    },
    {
      title: "Deaths",
      value: deaths,
      icon: "bi-exclamation-triangle",
      variant: "danger",
    },
  ];

  statsGrid.innerHTML = metrics
    .map(({ title, value, icon, variant }) =>
      statsTemplate(title, value, icon, variant)
    )
    .join("");

  document.querySelectorAll("[data-target]").forEach((cardValue) => {
    cardValue.textContent = "0";
    const target = Number(cardValue.getAttribute("data-target")) || 0;
    animateCount(cardValue, target);
  });

  updatedInfo.textContent = `${location} • ${formatUpdated(updated)}`;
  setBackgroundSeverity(cases);
};

const handleSearch = async (query) => {
  if (!query) {
    showAlert("Please enter or select a location to continue.", "warning");
    return;
  }
  alertPlaceholder.innerHTML = "";
  toggleResults(false);
  toggleLoading(true);
  try {
    const data = await fetchCovidData(query);
    renderStats(data);
    toggleResults(true);
    localStorage.setItem("lastCovidSearch", query);
  } catch (error) {
    showAlert(
      error.message ||
        "Unable to fetch global data right now. Try again later.",
      "danger"
    );
  } finally {
    toggleLoading(false);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = manualInput.value.trim() || quickSelect.value.trim();
  handleSearch(query);
});

quickSelect.addEventListener("change", () => {
  if (quickSelect.value) {
    manualInput.value = quickSelect.value;
  }
});

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.documentElement.style.setProperty(
      "--glass-bg",
      "rgba(255, 255, 255, 0.08)"
    );
    document.documentElement.style.setProperty(
      "--glass-border",
      "rgba(0, 0, 0, 0.12)"
    );
    document.documentElement.style.setProperty("--text-main", "#0b0f1a");
  } else {
    document.documentElement.style.setProperty(
      "--glass-bg",
      "rgba(10, 15, 30, 0.75)"
    );
    document.documentElement.style.setProperty(
      "--glass-border",
      "rgba(255, 255, 255, 0.12)"
    );
    document.documentElement.style.setProperty("--text-main", "#f8f9ff");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const lastSearch = localStorage.getItem("lastCovidSearch");
  if (lastSearch) {
    manualInput.value = lastSearch;
    handleSearch(lastSearch);
  }
});

let selectCity = document.getElementById("quickSelect");

let allCities = [];
let covidData = null;
let currentObj = [];

const fetchCovidData = async (query) => {
  try {
    let response = await fetch(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    covidData = (await response.json()).data;
    covidData = covidData.regional;
    console.log(covidData);

    for (const obj in covidData) {
      let {
        confirmedCasesForeign,
        confirmedCasesIndian,
        deaths,
        totalConfirmed,
        discharged,
        loc,
      } = covidData[obj];

      let option = document.createElement("option");
      option.innerHTML = `
    <option>${loc}</option>
  `;
      selectCity.appendChild(option);
    }
  } catch (error) {
    console.log(error);
  }
};
fetchCovidData();
/*
selectCity.addEventListener("click", () => {
  allCities.forEach((city) => {
    console.log(city);

    let option = document.createElement("option");
    option.innerHTML = `
    <option>${city}</option>
  `;
    selectCity.appendChild(option);
  });
});
*/
