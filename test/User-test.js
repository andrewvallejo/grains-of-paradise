/* eslint-disable max-len */
import { expect } from 'chai';
import User from '../src/classes/User';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

describe.only('User', () => {
  let recipes, recipeRepository, user1;
  beforeEach('Setup', () => {
    const sampleRecipes = data.sampleRecipe
    const sampleIngredients = data.sampleIngredients
    recipes = sampleRecipes.map((recipe) => {
      let newRecipe = new Recipe(recipe, sampleIngredients)
      return newRecipe
    })
    recipeRepository = new RecipeRepository([])
    user1 = new User(recipeRepository, 'Bob');
  })

  it('Should be an instance of a user class', () => {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('Should have a name', () => {
    expect(user1.name).to.equal('Bob');
  })

  it('Should have a favorite recipes array which is an instance of a recipe repository', () => {
    expect(user1.favoriteRecipes).to.be.an.instanceOf(RecipeRepository);
    expect(user1.favoriteRecipes.recipes).to.deep.equal([])
  })

  it('Should have a recipes to cook array which is an instance of a recipe repository', () => {
    expect(user1.recipesToCook).to.be.an.instanceOf(RecipeRepository);
    expect(user1.recipesToCook.recipes).to.deep.equal([])
  })

  it('Should have a method to favorite recipes', () => {
    expect(user1.recipesToCook).to.be.an.instanceOf(RecipeRepository);
    expect(user1.recipesToCook.recipes).to.deep.equal([])
  })

  it('Should have a method to only favorite unique recipes', () => {
    expect(user1.recipesToCook).to.be.an.instanceOf(RecipeRepository);
    expect(user1.recipesToCook.recipes).to.deep.equal([])
  })

  it('Should have a method to unFavorite recipes', () => {
    expect(user1.recipesToCook).to.be.an.instanceOf(RecipeRepository);
    expect(user1.recipesToCook.recipes).to.deep.equal([])
  })
})
