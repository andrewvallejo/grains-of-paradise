class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterRecipes(queryInfo) {
    let totalFilteredRecipes = queryInfo.query.reduce((accumulator, query) => {
      accumulator = accumulator.filter((recipe) => {
        return recipe[queryInfo.type].includes(query)
      })
      return accumulator;
    }, this.recipes);
    return totalFilteredRecipes;
  }
  generateAllRecipeNames() {
    result = this.recipes.reduce((acc, recipe) => {
      recipe.name.forEach((word) => {
        acc.push(word);
      })
    }, acc)
    return result;
  }
  generateAllIngredientNames() {

  }
}

export default RecipeRepository;
