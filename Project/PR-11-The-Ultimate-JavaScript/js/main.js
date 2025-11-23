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
let covidData = null;

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
    cases > 1000000
      ? "gradient-high"
      : cases > 100000
      ? "gradient-medium"
      : "gradient-low";
  body.classList.add(level);
};

const formatUpdated = (timestamp) => {
  if (!timestamp) {
    return "Last updated time unavailable";
  }
  
  const date = new Date(timestamp);
  
  // Check if the timestamp resulted in a valid date
  if (isNaN(date.getTime())) {
    return "Last updated time unavailable";
  }

  // Define options for a clear, readable format with AM/PM
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  return `Last updated: ${date.toLocaleString(undefined, options)}`;
};

const fetchCovidData = async (query) => {
  if (!covidData || !covidData.regional) {
    throw new Error("Data is not loaded yet. Please wait a moment and try again.");
  }

  const locationData = covidData.regional.find(
    (region) => region.loc.toLowerCase() === query.toLowerCase()
  );

  if (!locationData) {
    throw new Error(`No data was located for "${query}". Please select a valid state from the list.`);
  }

  const activeCases = locationData.totalConfirmed - locationData.discharged - locationData.deaths;

  return {
    location: locationData.loc,
    cases: locationData.totalConfirmed,
    active: activeCases,
    recovered: locationData.discharged,
    deaths: locationData.deaths,
    // Pass the correct timestamp from the main data object
    updated: covidData.lastRefreshed, 
  };
};

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
    { title: "Total Cases", value: cases, icon: "bi-activity", variant: "primary" },
    { title: "Active Cases", value: active, icon: "bi-heart-pulse", variant: "info" },
    { title: "Recovered", value: recovered, icon: "bi-shield-check", variant: "success" },
    { title: "Deaths", value: deaths, icon: "bi-exclamation-triangle", variant: "danger" },
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
    showAlert("Please enter or select a state to continue.", "warning");
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
      error.message || "Unable to fetch data right now. Try again later.",
      "danger"
    );
  } finally {
    toggleLoading(false);
  }
};

const populateQuickSelect = async () => {
  try {
    const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const fullData = await response.json();
    if (!fullData.success) {
      throw new Error("Failed to fetch data from the API.");
    }
    covidData = fullData.data;

    quickSelect.innerHTML = '<option value="" selected>Select a state</option>';
    covidData.regional.forEach((region) => {
      const { loc } = region;
      const option = document.createElement("option");
      option.value = loc;
      option.textContent = loc;
      quickSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Failed to populate location list:", error);
    showAlert("Could not load the list of states. Please refresh the page.", "warning");
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
    document.documentElement.style.setProperty("--glass-bg", "rgba(255, 255, 255, 0.08)");
    document.documentElement.style.setProperty("--glass-border", "rgba(0, 0, 0, 0.12)");
    document.documentElement.style.setProperty("--text-main", "#0b0f1a");
  } else {
    document.documentElement.style.setProperty("--glass-bg", "rgba(10, 15, 30, 0.75)");
    document.documentElement.style.setProperty("--glass-border", "rgba(255, 255, 255, 0.12)");
    document.documentElement.style.setProperty("--text-main", "#f8f9ff");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  populateQuickSelect().then(() => {
    const lastSearch = localStorage.getItem("lastCovidSearch");
    if (lastSearch) {
      manualInput.value = lastSearch;
      const existsInSelect = Array.from(quickSelect.options).some(opt => opt.value === lastSearch);
      if (existsInSelect) {
        quickSelect.value = lastSearch;
        handleSearch(lastSearch);
      }
    }
  });
});