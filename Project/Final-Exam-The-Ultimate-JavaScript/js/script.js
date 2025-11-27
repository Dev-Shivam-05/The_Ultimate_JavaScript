let recipeForm = document.getElementById("recipeForm");
let inputs = document.querySelectorAll("#recipeForm .inputs");
let searchTitlesInputs = document.querySelectorAll("#recipeForm .inputs");
let selectRecipeCuisine = document.getElementById("recipeCuisine");
let searchTitlesRecipeCuisine = document.getElementById("filterCuisine");
let recipeList = document.getElementById("recipeList");
let submitBtn = document.querySelector('#recipeForm #submitBtn');
let cancelBtn = document.querySelector('#recipeForm #cancelBtn');
let editingID = null;
let recipe = JSON.parse(localStorage.getItem("recipeBook")) || [];
let recipeObj = {};
let deleteModal = document.getElementById('deleteModal');

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
  submitBtn.innerHTML = "Add Recipe";
  cancelBtn.classList.add("d-none");
});


function resetInputs() {
  inputs.forEach((input) => {
    input.value = "";
  });
}

function recipeIdGenerator(value) {
  return `${value.slice(0, 3).toUpperCase()}${
    Math.floor(Math.random() * 50) + 1
  }`;
}

const displayBook = () => {
  let emptyState = document.getElementById("emptyState");
  if (recipe != []) {
    emptyState.classList.add("d-none");
  }
  recipeList.innerHTML = "";
  recipe.forEach((recipe) => {
    let {
      recipeCuisine,
      recipeID,
      recipeIngredients,
      recipeTitle,
      recipeInstructions,
    } = recipe;

    let col = document.createElement("div");
    col.classList.add("col-md-6");
    // col.style = 'animation-delay: 0s';
    col.innerHTML = `
            <div class="recipe-card">
                <div class="recipe-card-image cuisine-mexican">
                <span class="cuisine-icon">🌮</span
                ><span class="cuisine-badge">${recipeCuisine}</span>
                </div>
                <div class="recipe-card-body">
                <h3 class="recipe-card-title">${recipeTitle}</h3>
                <div class="recipe-card-section">
                    <div class="recipe-card-section-title">Ingredients</div>
                    <div class="recipe-card-section-content">
                    ${recipeIngredients}
                    </div>
                </div>
                <div class="recipe-card-section">
                    <div class="recipe-card-section-title">Instructions</div>
                    <div class="recipe-card-section-content">
                    ${recipeInstructions}
                    </div>
                </div>
                </div>
                <div class="recipe-card-footer">
                <button
                    class="btn-icon btn-edit"
                    onclick="editRecipe(this)"
                    data-recipe-id="${recipeID}"
                >
                    <i class="bi bi-pencil"></i> Edit</button
                ><button
                    class="btn-icon btn-delete"
                    onclick="confirmDelete(this)"
                    data-recipe-id="${recipeID}"
                >
                    <i class="bi bi-trash"></i> Delete
                </button>
                </div>
            </div>
        `;
    recipeList.appendChild(col);
  });
};

const confirmDelete = (element) => {
  let id = element.getAttribute("data-recipe-id");
  recipe = recipe.filter((value) => {
    return value.recipeID != id;
  });
  localStorage.setItem("recipeBook", JSON.stringify(recipe));
  console.log(recipe);
  displayBook();
};
const editRecipe = (element) => {
  let id = element.getAttribute("data-recipe-id");

  let editData = recipe.find((value) => value.recipeID === id);
  if (!editData) return;

  inputs.forEach((input) => {
    input.value = editData[input.name] || "";
  });

  selectRecipeCuisine.value = editData.cuisine;
  editingID = id;
  submitBtn.innerHTML = "Update Recipe";
  cancelBtn.classList.remove("d-none");
};

const cancelEditing = () => {
  resetInputs();
  cancelBtn.classList.add('d-none');
  submitBtn.innerHTML = 'Add Recipe';
}


// Searching and filtering Code Starts
let 

// Searching and filtering Code Ends

/*
const editRecipe = (id) => {
  const recipe = this.recipes.find((r) => r.id === id);
  if (!recipe) return;

  this.editingId = id;

  document.getElementById("recipeId").value = id;
  document.getElementById("recipeTitle").value = recipe.title;
  document.getElementById("recipeIngredients").value = recipe.ingredients;
  document.getElementById("recipeInstructions").value = recipe.instructions;
  document.getElementById("recipeCuisine").value = recipe.cuisine;

  document.getElementById("formTitle").textContent = "Edit Recipe";
  document.getElementById("submitBtn").innerHTML =
    '<i class="bi bi-check-lg"></i> Save Changes';
  document.getElementById("cancelBtn").classList.remove("d-none");

  document.getElementById("recipeForm").scrollIntoView({ behavior: "smooth" });
  this.showToast("Editing mode - make your changes", "info");
};

<div class="col-md-6" style="animation-delay: 0s">
                <div class="recipe-card">
                  <div class="recipe-card-image cuisine-mexican">
                    <span class="cuisine-icon">🌮</span
                    ><span class="cuisine-badge">Mexican</span>
                  </div>
                  <div class="recipe-card-body">
                    <h3 class="recipe-card-title">Eveniet officia sed</h3>
                    <div class="recipe-card-section">
                      <div class="recipe-card-section-title">Ingredients</div>
                      <div class="recipe-card-section-content">
                        • Velit tempore ipsum
                      </div>
                    </div>
                    <div class="recipe-card-section">
                      <div class="recipe-card-section-title">Instructions</div>
                      <div class="recipe-card-section-content">
                        Iusto sed mollitia r
                      </div>
                    </div>
                  </div>
                  <div class="recipe-card-footer">
                    <button
                      class="btn-icon btn-edit"
                      onclick="editRecipe('mih2384pxbck4dl0qj9')"
                      fdprocessedid="03g5e5"
                    >
                      <i class="bi bi-pencil"></i> Edit</button
                    ><button
                      class="btn-icon btn-delete"
                      onclick="confirmDelete('mih2384pxbck4dl0qj9')"
                      fdprocessedid="0szol"
                    >
                      <i class="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
*/
