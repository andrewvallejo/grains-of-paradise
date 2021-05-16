const expect = require('chai').expect
const Ingredient = require('../src/classes/Ingredient')

describe.only('Ingredient', () => {
  let sampleIngredients, ingredient1, ingredient2 
  beforeEach('Setup', () => {
    sampleIngredients = [{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },
    {
      "id": 19335,
      "name": "sucrose",
      "estimatedCostInCents": 902
    },
    {
      "id": 19206,
      "name": "instant vanilla pudding",
      "estimatedCostInCents": 660
    }]

    ingredient1 = new Ingredient(sampleIngredients[0])
    ingredient2 = new Ingredient(sampleIngredients[1])
  })

  it('should be an instance of ingredient class', () => {
    expect(ingredient1).to.be.an.instanceof(Ingredient)
  })

  it('should have an ID property', () => {
    expect(ingredient1.id).to.equal(sampleIngredients[0].id)
    expect(ingredient2.id).to.equal(sampleIngredients[1].id)
  })
    
})