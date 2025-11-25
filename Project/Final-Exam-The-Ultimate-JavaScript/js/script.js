let recipeForm = document.getElementById("recipeForm");
let inputs = document.querySelectorAll("#recipeForm .inputs");
let selectRecipeCuisine = document.getElementById("recipeCuisine");
let recipeList = document.getElementById("recipeList");
let submitBtn = document.querySelector("#recipeForm #submitBtn");
let cancelBtn = document.querySelector("#recipeForm #cancelBtn");
let editingID = null;
let recipe = JSON.parse(localStorage.getItem("recipeBook")) || [];
let deleteModal = document.getElementById("deleteModal");

let searchTitle = document.getElementById("searchTitle");
let searchIngredients = document.getElementById("searchIngredients");
let filterCuisine = document.getElementById("filterCuisine");
let activeFilters = document.getElementById("activeFilters");
let filterBadges = document.getElementById("filterBadges");
let resultsCount = document.getElementById("resultsCount");
let recipeCount = document.getElementById("recipeCount");
let emptyState = document.getElementById("emptyState");

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let recipeObj = {};

  inputs.forEach((input) => {
    recipeObj[input.name] = input.value.trim();
  });

  recipeObj.cuisine = selectRecipeCuisine.value;

  if (editingID !== null) {
    let index = recipe.findIndex((value) => value.recipeID === editingID);
    recipeObj.recipeID = editingID;
    recipe[index] = recipeObj;
  } else {
    recipeObj.recipeID = recipeIdGenerator(recipeObj.cuisine);
    recipe.push(recipeObj);
  }

  localStorage.setItem("recipeBook", JSON.stringify(recipe));
  displayBook();
  resetInputs();

  editingID = null;
  submitBtn.innerHTML = '<i class="bi bi-plus-lg"></i> Add Recipe';
  cancelBtn.classList.add("d-none");
});

function resetInputs() {
  inputs.forEach((input) => {
    input.value = "";
  });
  selectRecipeCuisine.value = "";
}

function recipeIdGenerator(value) {
  let prefix = value ? value.slice(0, 3).toUpperCase() : "RCP";
  return prefix + Math.floor(Math.random() * 1000 + 1);
}

const displayBook = () => {

  searchTitle.value = "";
  searchIngredients.value = "";
  filterCuisine.value = "";
  activeFilters.classList.add("d-none");


  recipe = JSON.parse(localStorage.getItem("recipeBook")) || [];

  recipeList.innerHTML = "";

  if (recipe.length === 0) {
    emptyState.classList.remove("d-none");
    emptyState.innerHTML = `
      <div class="empty-state-icon">📖</div>
      <h4>No Recipes Yet</h4>
      <p>Start building your culinary collection by adding your first recipe!</p>
    `;
    resultsCount.textContent = "";
  } else {
    emptyState.classList.add("d-none");
    resultsCount.textContent = recipe.length + " recipe" + (recipe.length !== 1 ? "s" : "") + " found";

    recipe.forEach((item, index) => {
      let cuisineClass = getCuisineClass(item.cuisine);
      let cuisineIcon = getCuisineIcon(item.cuisine);

      let col = document.createElement("div");
      col.classList.add("col-md-6");
      col.style.animationDelay = index * 0.1 + "s";

      col.innerHTML = `
        <div class="recipe-card">
          <div class="recipe-card-image ${cuisineClass}">
            <span class="cuisine-icon">${cuisineIcon}</span>
            <span class="cuisine-badge">${item.cuisine || "Other"}</span>
          </div>
          <div class="recipe-card-body">
            <h3 class="recipe-card-title">${item.recipeTitle}</h3>
            <div class="recipe-card-section">
              <div class="recipe-card-section-title">Ingredients</div>
              <div class="recipe-card-section-content">${item.recipeIngredients}</div>
            </div>
            <div class="recipe-card-section">
              <div class="recipe-card-section-title">Instructions</div>
              <div class="recipe-card-section-content">${item.recipeInstructions || "No instructions provided"}</div>
            </div>
          </div>
          <div class="recipe-card-footer">
            <button class="btn-icon btn-edit" onclick="editRecipe(this)" data-recipe-id="${item.recipeID}">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn-icon btn-delete" onclick="confirmDelete(this)" data-recipe-id="${item.recipeID}">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      `;

      recipeList.appendChild(col);
    });
  }

  updateRecipeCount();
};

const confirmDelete = (element) => {
  let id = element.getAttribute("data-recipe-id");
  recipe = recipe.filter((value) => {
    return value.recipeID !== id;
  });
  localStorage.setItem("recipeBook", JSON.stringify(recipe));
  displayBook();
};

const editRecipe = (element) => {
  let id = element.getAttribute("data-recipe-id");
  let editData = recipe.find((value) => value.recipeID === id);

  if (!editData) return;

  inputs.forEach((input) => {
    input.value = editData[input.name] || "";
  });

  selectRecipeCuisine.value = editData.cuisine || "";
  editingID = id;
  submitBtn.innerHTML = '<i class="bi bi-check-lg"></i> Update Recipe';
  cancelBtn.classList.remove("d-none");


  recipeForm.scrollIntoView({ behavior: "smooth" });
};

const cancelEditing = () => {
  resetInputs();
  cancelBtn.classList.add("d-none");
  submitBtn.innerHTML = '<i class="bi bi-plus-lg"></i> Add Recipe';
  editingID = null;
};


searchTitle.addEventListener("input", function () {
  filterRecipes();
});

searchIngredients.addEventListener("input", function () {
  filterRecipes();
});

filterCuisine.addEventListener("change", function () {
  filterRecipes();
});

function filterRecipes() {
  let titleSearch = searchTitle.value.toLowerCase().trim();
  let ingredientSearch = searchIngredients.value.toLowerCase().trim();
  let cuisineFilter = filterCuisine.value;


  let allRecipes = JSON.parse(localStorage.getItem("recipeBook")) || [];

  let filteredRecipes = [];

  for (let i = 0; i < allRecipes.length; i++) {
    let item = allRecipes[i];
    let matchesTitle = true;
    let matchesIngredient = true;
    let matchesCuisine = true;

  
    if (titleSearch !== "") {
      matchesTitle = item.recipeTitle.toLowerCase().indexOf(titleSearch) !== -1;
    }

  
    if (ingredientSearch !== "") {
      matchesIngredient = item.recipeIngredients.toLowerCase().indexOf(ingredientSearch) !== -1;
    }

  
    if (cuisineFilter !== "") {
      matchesCuisine = item.cuisine === cuisineFilter;
    }

  
    if (matchesTitle && matchesIngredient && matchesCuisine) {
      filteredRecipes.push(item);
    }
  }

  displayFilteredRecipes(filteredRecipes, titleSearch, ingredientSearch);
  updateActiveFilters(titleSearch, ingredientSearch, cuisineFilter);
  updateRecipeCount();
}

function displayFilteredRecipes(filteredRecipes, titleSearch, ingredientSearch) {
  recipeList.innerHTML = "";

  if (filteredRecipes.length === 0) {
    let hasFilters = searchTitle.value || searchIngredients.value || filterCuisine.value;

    emptyState.classList.remove("d-none");

    if (hasFilters) {
      emptyState.innerHTML = `
        <div class="empty-state-icon">🔍</div>
        <h4>No Recipes Found</h4>
        <p>Try adjusting your search criteria or clear the filters.</p>
      `;
    } else {
      emptyState.innerHTML = `
        <div class="empty-state-icon">📖</div>
        <h4>No Recipes Yet</h4>
        <p>Start building your culinary collection by adding your first recipe!</p>
      `;
    }

    resultsCount.textContent = "0 recipes found";
    return;
  }

  emptyState.classList.add("d-none");
  resultsCount.textContent = filteredRecipes.length + " recipe" + (filteredRecipes.length !== 1 ? "s" : "") + " found";

  filteredRecipes.forEach((item, index) => {
    let cuisineClass = getCuisineClass(item.cuisine);
    let cuisineIcon = getCuisineIcon(item.cuisine);

    let col = document.createElement("div");
    col.classList.add("col-md-6");
    col.style.animationDelay = index * 0.1 + "s";

  
    let displayTitle = highlightText(item.recipeTitle, titleSearch);
    let displayIngredients = highlightText(item.recipeIngredients, ingredientSearch);

    col.innerHTML = `
      <div class="recipe-card">
        <div class="recipe-card-image ${cuisineClass}">
          <span class="cuisine-icon">${cuisineIcon}</span>
          <span class="cuisine-badge">${item.cuisine || "Other"}</span>
        </div>
        <div class="recipe-card-body">
          <h3 class="recipe-card-title">${displayTitle}</h3>
          <div class="recipe-card-section">
            <div class="recipe-card-section-title">Ingredients</div>
            <div class="recipe-card-section-content">${displayIngredients}</div>
          </div>
          <div class="recipe-card-section">
            <div class="recipe-card-section-title">Instructions</div>
            <div class="recipe-card-section-content">${item.recipeInstructions || "No instructions provided"}</div>
          </div>
        </div>
        <div class="recipe-card-footer">
          <button class="btn-icon btn-edit" onclick="editRecipe(this)" data-recipe-id="${item.recipeID}">
            <i class="bi bi-pencil"></i> Edit
          </button>
          <button class="btn-icon btn-delete" onclick="confirmDelete(this)" data-recipe-id="${item.recipeID}">
            <i class="bi bi-trash"></i> Delete
          </button>
        </div>
      </div>
    `;

    recipeList.appendChild(col);
  });
}

function highlightText(text, searchTerm) {
  if (!text) return "";
  if (!searchTerm) return text;

  let escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let regex = new RegExp("(" + escapedTerm + ")", "gi");
  return text.replace(regex, '<mark style="background-color: #fff3cd; padding: 0 2px; border-radius: 2px;">$1</mark>');
}

function updateActiveFilters(titleSearch, ingredientSearch, cuisineFilter) {
  let hasFilters = titleSearch || ingredientSearch || cuisineFilter;

  if (!hasFilters) {
    activeFilters.classList.add("d-none");
    return;
  }

  activeFilters.classList.remove("d-none");

  let badgesHtml = "";

  if (titleSearch) {
    badgesHtml += '<span class="filter-tag">';
    badgesHtml += "Title: " + titleSearch;
    badgesHtml += '<button onclick="clearFilter(\'title\')">&times;</button>';
    badgesHtml += "</span>";
  }

  if (ingredientSearch) {
    badgesHtml += '<span class="filter-tag">';
    badgesHtml += "Ingredient: " + ingredientSearch;
    badgesHtml += '<button onclick="clearFilter(\'ingredients\')">&times;</button>';
    badgesHtml += "</span>";
  }

  if (cuisineFilter) {
    badgesHtml += '<span class="filter-tag">';
    badgesHtml += "Cuisine: " + cuisineFilter;
    badgesHtml += '<button onclick="clearFilter(\'cuisine\')">&times;</button>';
    badgesHtml += "</span>";
  }

  filterBadges.innerHTML = badgesHtml;
}

function clearFilter(type) {
  if (type === "title") {
    searchTitle.value = "";
  } else if (type === "ingredients") {
    searchIngredients.value = "";
  } else if (type === "cuisine") {
    filterCuisine.value = "";
  }
  filterRecipes();
}
function clearAllFilters() {
  searchTitle.value = "";
  searchIngredients.value = "";
  filterCuisine.value = "";
  filterRecipes();
}
function updateRecipeCount() {
  let allRecipes = JSON.parse(localStorage.getItem("recipeBook")) || [];
  recipeCount.textContent = allRecipes.length;
}

function getCuisineClass(cuisine) {
  let classes = {
    Indian: "cuisine-indian",
    Mexican: "cuisine-mexican",
    Italian: "cuisine-italian",
    Chinese: "cuisine-chinese",
    Japanese: "cuisine-japanese",
    Thai: "cuisine-thai",
    American: "cuisine-american",
    French: "cuisine-french",
    Mediterranean: "cuisine-mediterranean",
    Other: "cuisine-other"
  };
  return classes[cuisine] || "cuisine-other";
}
function getCuisineIcon(cuisine) {
  let icons = {
    Indian: "🍛",
    Mexican: "🌮",
    Italian: "🍝",
    Chinese: "🥡",
    Japanese: "🍣",
    Thai: "🍜",
    American: "🍔",
    French: "🥐",
    Mediterranean: "🥗",
    Other: "🍽️"
  };
  return icons[cuisine] || "🍽️";
}

window.addEventListener("load", function () {
  displayBook();
});