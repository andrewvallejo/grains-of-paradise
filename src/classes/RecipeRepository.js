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
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.name.forEach((word) => {
        acc.push(word);
      })
      return acc;
    }, [])
    return result;
  }
  generateAllIngredientNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.ingredientNames.forEach((ingredient) => {
        let separatedNames = ingredient.split(' ')
        separatedNames.forEach((name) => {
          acc.push(name);
        })
      })
      return acc;
    }, [])
    return result;
  }
}

export default RecipeRepository;
