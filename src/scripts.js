import './styles.css';
import apiCalls from './apiCalls';
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import User from './classes/User.js'
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

//extra
let recipes;
const sampleRecipes = data.sampleRecipe
const sampleIngredients = data.sampleIngredients
recipes = sampleRecipes.map((recipe) => {
  let newRecipe = new Recipe(recipe, sampleIngredients)
  return newRecipe
})

//global variable
let currentRecipeRepo = new RecipeRepository(recipes);
let currentUser;

// querySelectors
const main = document.querySelector('#mainRecipes');
const filter = document.querySelector('#filter')
const filterMenu = document.querySelector('#filterMenu')
const tagCheckBox = document.querySelectorAll('input[type="checkbox"]')
const filterSubmitBtn = document.querySelector('#filterSubmitBtn')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const fullRecipeSection = document.querySelector('#fullRecipeView');
const messageBar = document.querySelector('#messageBar');
const favoritesViewButton = document.querySelector('#favoritesViewButton');
const toCookViewButton = document.querySelector('#toCookViewButton');
const homeButton = document.querySelector('#homeView')

// renderFullRecipeInfo(741603);


// event listeners
window.onload = generateRandomUser();
// window.onload = renderRecipes(currentRecipeRepo.recipes);
window.onload = showHomeView();
searchButton.addEventListener('click', searchThroughRecipes)
filter.addEventListener('click', openFilterMenu)
filterSubmitBtn.addEventListener('click', searchByTag)
main.addEventListener('click', determineRecipeCardAction)
favoritesViewButton.addEventListener('click', showFavoritesView)
toCookViewButton.addEventListener('click', showToCookView)
homeButton.addEventListener('click', showHomeView)


// event handlers

function showFavoritesView() {
  messageBar.innerHTML = `<h2>Your Favorite Recipes</h2>`
  currentRecipeRepo = currentUser.favoriteRecipes.recipes;
  renderRecipes(currentRecipeRepo);
}

function showToCookView() {
  messageBar.innerHTML = `<h2>Your Recipes to Cook</h2>`
  currentRecipeRepo = currentUser.recipesToCook.recipes;
  renderRecipes(currentRecipeRepo);
}

function showHomeView() {
  messageBar.innerHTML = `<h2>Hello ${currentUser.name}</h2>`
  currentRecipeRepo = new RecipeRepository(recipes);
  renderRecipes(currentRecipeRepo.recipes);
}

function determineRecipeCardAction(event) {
  let id = parseInt(event.target.closest('.recipe-card').id);
  let buttonType = event.target.parentElement.className;
  if (buttonType === 'favorite-recipe') {
    addToFavoriteRecipes(id);
  } else if (buttonType === 'this-week-recipe') {
    addToRecipeToCook(id);
  } else {
    showFullRecipeView(id);
  }
}

function addToFavoriteRecipes(id) {
  let recipeToAdd = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  currentUser.addFavoriteRecipe(recipeToAdd);
  console.log(currentUser.favoriteRecipes);
}

function addToRecipeToCook(id) {
  let recipeToAdd = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  currentUser.addRecipeToCookThisWeek(recipeToAdd);
  console.log(currentUser.recipesToCook);
}

function showFullRecipeView(id) {
  renderFullRecipeInfo(id);
  hide(main);
  hide(searchBar);
  hide(searchButton);
  show(fullRecipeSection);
}


function generateRandomUser() {
  let randomNumber = getRandomNumber(data.sampleUsers.length + 1);
  let randomUserInfo = data.sampleUsers.find((user) => {
    return user.id === randomNumber;
  })
  currentUser = new User(randomUserInfo);
}

function searchThroughRecipes() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let uniqueFilteredRecipes = generateFilteredRecipes(convertedUserSearch);
  renderRecipes(uniqueFilteredRecipes);
  console.log('These are filtered', uniqueFilteredRecipes);
}

function generateFilteredRecipes(convertedUserSearch) {
  let filteredRecipesByName = currentRecipeRepo.filterRecipes(convertedUserSearch.name);
  let filteredRecipesByIngredient = currentRecipeRepo.filterRecipes(convertedUserSearch.ingredientNames);
  let allFilteredRecipes = filteredRecipesByName.concat(filteredRecipesByIngredient);
  return [...new Set(allFilteredRecipes)];
}

function convertUserInfo(userSearch) {
  let alteredUserSearch = userSearch.split(' '). map((word) => {
    return word.toLowerCase();
  });
  let convertedUserSearch = determineSearchType(alteredUserSearch);
  return convertedUserSearch;
}

function determineSearchType(alteredUserSearch) {
  let searchInfo = alteredUserSearch.reduce((acc, word) => {
    let allRecipeNames = currentRecipeRepo.generateAllRecipeNames();
    let allIngredientNames = currentRecipeRepo.generateAllIngredientNames();
    if (allRecipeNames.includes(word)) {
      acc.name.query.push(word);
    }
    if (allIngredientNames.includes(word)) {
      acc.ingredientNames.query.push(word);
    }
    return acc;
  }, {name: {type: 'name', query: []}, ingredientNames: {type: 'ingredientNames', query: []}})
  return searchInfo;
}

function renderRecipes(recipes) {
  main.innerHTML = ``;
  recipes.forEach((recipe) => {
    let tags = recipe.tags.map((tag) => {
      return `<h4 class="tags flex-column">${tag}</h4>`
    })
    let recipeNames = recipe.name.map((name) => {
      return name[0].toUpperCase() + name.substring(1);
    }).join(' ');
    main.innerHTML +=
    `
      <article class="recipe-card flex-row" id="${recipe.id}" >
        <img src=${recipe.image} alt="cookies"/>
        <div class="recipe-card-info flex-column">
         <div class="recipe-tag-container flex-column">
            <p class="recipe-name">${recipeNames}</p>
            <div class="tag-container flex-row">
              ${tags}
            </div>
        </div>
        <div class="recipe-card-buttons-container flex-column">
          <button class="favorite-recipe">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="this-week-recipe">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        </article>
    `
  })
}
function convertRecipeToRender(recipeToRender) {
  let tags = recipeToRender.tags.map((tag) => {
    return `<h4 class="tags flex-column">${tag}</h4>`
  })
  let ingredients = recipeToRender.ingredients.map((ingredient) => {
    return `<p class="ingredients flex-column">${ingredient.quantity.amount}${ingredient.quantity.unit} ${ingredient.name}</p>`
  }).join(' ');
  let instructions = recipeToRender.getInstructions();
  let fixedInstructions = instructions.map((instruction) => {
    return `<p class="instructions flex-column">${instruction}</p>`
  }).join('  ');
  let name = recipeToRender.name.map((name) => {
    return name[0].toUpperCase() + name.substring(1);
  }).join(' ');
  let totalCost = convertTotalCost(recipeToRender);
  let recipeToRenderInfo = {tags, ingredients, fixedInstructions, name, totalCost};
  return recipeToRenderInfo;
}

function convertTotalCost(recipeToRender) {
  let totalCost = recipeToRender.getTotalCost();
  let dollars = totalCost / 100;
  return `$${dollars}`;
}

function renderFullRecipeInfo(id) {
  let recipeToRender = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  let recipeToRenderInfo = convertRecipeToRender(recipeToRender);

  messageBar.innerHTML = `<h3>${recipeToRenderInfo.name}</h3>`
  fullRecipeSection.innerHTML =
  ` <div class="tag-container-full flex-row">
    ${recipeToRenderInfo.tags}
  </div>
  
    <article  class="recipe-card-all flex-column" >
   
    <div class="recipe-card flex-row" id="recipeName">
  
      <img src=${recipeToRender.image} alt="cookies"/>
      
      <div class="recipe-card-buttons-container flex-column">
        <button class="favorite-recipe">
          <i class="heart-card fas fa-heart"></i>
        </button>
        <button class="this-week-recipe">
          <i class="calendar-card fas fa-calendar-alt"></i>
        </button>
      </div>
      <div class="total-cost flex-row" id="totalCost">
      <h5>Estimated Cost </h5>
      <p>${recipeToRenderInfo.totalCost}</p>
    </div>
      </div>

    <section class="full-recipe-info flex-column" id="fullRecipeInfo">
    <div class="recipePriceContainer flex-row">
      <div class="ingredients-info" id=ingredientsInfo>
        <h4>Ingredients</h4>
        <p> ${recipeToRenderInfo.ingredients}</p>
      </div>
   
      </div>
      <div class="instructions-info flex-column" id="totalCost">
        <h4>Instructions</h4>
        <p>${recipeToRenderInfo.fixedInstructions}</p>
      </div>
    </section>
    </article>
  `
}


function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max - 1) + 1);
  return number;
}

function  openFilterMenu() {
  show(filterMenu)
}

function searchByTag(e) {
  e.preventDefault();
  let tagSearchInfo = {type: 'tags', query: []}
  tagCheckBox.forEach((tag) => {
    tag.checked ? tagSearchInfo.query.push(tag.value) : null
  })
  hide(filterMenu)
  let uniqueFilteredRecipes = currentRecipeRepo.filterRecipes(tagSearchInfo);
  renderRecipes(uniqueFilteredRecipes);
}

function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}


console.log('Hello world');
