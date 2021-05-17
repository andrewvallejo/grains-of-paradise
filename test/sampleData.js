/* eslint-disable max-len */
let updatedInstructions, updatedRecipeIngredients, sampleRecipe, sampleIngredients, recipe1, ingredient1, ingredient2, ingredient3;

sampleRecipe = [
  {
    "id": 595736,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ],
    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  }, {
    "id": 678353,
    "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    "ingredients": [
      {
        "id": 1009016,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 9003,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 20027,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1002046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 1,
          "unit": "clove"
        }
      },
      {
        "id": 1012046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 19911,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 16112,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 10010062,
        "quantity": {
          "amount": 24,
          "unit": "ounce"
        }
      },
      {
        "id": 1102047,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 16124,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }
    ],
    "name": "Maple Dijon Apple Cider Grilled Pork Chops",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 412309,
    "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
    "ingredients": [
      {
        "id": 1002030,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 8,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 2031,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 5100,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 2009,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 6168,
        "quantity": {
          "amount": 8,
          "unit": "cups"
        }
      },
      {
        "id": 9176,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2026,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 1.5,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
        "number": 1
      }
    ],
    "name": "Dirty Steve's Original Wing Sauce",
    "tags": [
      "sauce"
    ]
  },
  {
    "id": 741603,
    "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 18371,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 9040,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 20011,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 2,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 6,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1230,
        "quantity": {
          "amount": 2,
          "unit": "cups"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "id": 19296,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 16098,
        "quantity": {
          "amount": 12,
          "unit": "servings"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 1,
          "unit": "teaspoon"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Watch how to make this recipe.",
        "number": 1
      },
      {
        "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
        "number": 2
      },
      {
        "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
        "number": 3
      },
      {
        "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
        "number": 4
      },
      {
        "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
        "number": 5
      },
      {
        "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
        "number": 6
      },
      {
        "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
        "number": 7
      }
    ],
    "name": "Elvis Pancakes",
    "tags": [
      "side dish"
    ]
  },
  {
    "id": 562334,
    "image": "https://spoonacular.com/recipeImages/562334-556x370.jpg",
    "ingredients": [
      {
        "id": 2048,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 18371,
        "quantity": {
          "amount": 0.3333333333333333,
          "unit": "teaspoon"
        }
      },
      {
        "id": 20090,
        "quantity": {
          "amount": 1.125,
          "unit": "cup"
        }
      },
      {
        "id": 93784,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 1124,
        "quantity": {
          "amount": 3,
          "unit": "large"
        }
      },
      {
        "id": 93625,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 12220,
        "quantity": {
          "amount": 2,
          "unit": "Tablespoons"
        }
      },
      {
        "id": 10118375,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 19304,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      },
      {
        "id": 11413,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.75,
          "unit": "teaspoon"
        }
      },
      {
        "id": 93696,
        "quantity": {
          "amount": 0.75,
          "unit": "cup"
        }
      },
      {
        "id": 93760,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 14412,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 93626,
        "quantity": {
          "amount": 2,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Grease or spray oil a 9×5 inch loaf pan.Preheat oven to 170 – 200°F (lowest possible).",
        "number": 1
      },
      {
        "instruction": "Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds.",
        "number": 2
      },
      {
        "instruction": "Whisk together the dry ingredients; set aside.",
        "number": 3
      },
      {
        "instruction": "Add the oil, vinegar and yeast mixture to the egg whites and blend on low for a few seconds.",
        "number": 4
      },
      {
        "instruction": "Add dry ingredients all at once and mix on low speed until all dry ingredients are moistened. Then beat on high for 1 minute.",
        "number": 5
      },
      {
        "instruction": "Add dough batter to prepared pan and distribute and smooth the top using a rubber spatula. You'll want to meet all sides of the pan. If you miss the corners that will still be okay. It will fill in upon rising. To even out top, drop a few drops of filtered water on top, and spread evenly with a rubber spatula, or dip spatula in water several times.",
        "number": 6
      },
      {
        "instruction": "Place the bread pan in the oven. Turn oven off. Allow the dough to rise until the center is about 1/2” over the top of the pan, about 22 minutes. It will rise more while the oven is heating and during baking.",
        "number": 7
      },
      {
        "instruction": "Remove pan from oven and preheat oven to 375°F.",
        "number": 8
      },
      {
        "instruction": "Place the pan on the center of the rack in the center of the oven and bake for about 45 minutes or more.",
        "number": 9
      },
      {
        "instruction": "Remove the loaf from the oven and immediately remove it from the pan (careful it will be hot), and set the loaf on a cooling rack to cool. If you do not remove it right away the steam will make the crust soggy.Slice off the two ends to allow the steam to escape, or it will begin to sink in on the sides and bottom.Once cooled, it will shrink a little bit. Slice it with an electric slicer, electric knife or serrated knife. You'll get about 13-16, depending upon how thick you slice it.",
        "number": 10
      }
    ],
    "name": "Mock Udi’s Gluten Free Whole Grain Bread",
    "tags": []
  }
]
  
sampleIngredients = [
  {
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
  }
]

recipe1 = new Recipe(sampleRecipe, sampleIngredients);


updatedRecipeIngredients = [
  {
    id: 20081,
    quantity: { amount: 1.5, unit: 'c' },
    name: 'wheat flour',
    estimatedCostInCents: 142
  },
  {
    id: 18372,
    quantity: { amount: 0.5, unit: 'tsp' },
    name: 'bicarbonate of soda',
    estimatedCostInCents: 582
  },
  {
    id: 1123,
    quantity: { amount: 1, unit: 'large' },
    name: 'eggs',
    estimatedCostInCents: 472
  }
]

updatedInstructions = [
  '1. In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
  '2. Add egg and vanilla and mix until combined.',
  '3. Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
  '4. Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
  '5. Bake for 9 to 10 minutes, or until you see the edges start to brown.',
  '6. Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.'
]


// TAYLOR

const sampleRecipe = [
  {
    id: 595736,
    image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    ingredients: [
      {
        id: 20081,
        quantity: {
          amount: 1.5,
          unit: 'c',
        },
      },
      {
        id: 18372,
        quantity: {
          amount: 0.5,
          unit: 'tsp',
        },
      },
      {
        id: 1123,
        quantity: {
          amount: 1,
          unit: 'large',
        },
      },
    ],
    instructions: [
      {
        instruction:
          'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
        number: 1,
      },
      {
        instruction: 'Add egg and vanilla and mix until combined.',
        number: 2,
      },
      {
        instruction:
          'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
        number: 3,
      },
      {
        instruction:
          'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
        number: 4,
      },
      {
        instruction:
          'Bake for 9 to 10 minutes, or until you see the edges start to brown.',
        number: 5,
      },
      {
        instruction:
          'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.',
        number: 6,
      },
    ],
    name: 'Loaded Chocolate Chip Pudding Cookie Cups',
    tags: [
      'antipasti',
      'starter',
      'snack',
      'appetizer',
      'antipasto',
      "hor d'oeuvre",
    ],
  },
  {
    id: 678353,
    image: 'https://spoonacular.com/recipeImages/678353-556x370.jpg',
    ingredients: [
      {
        id: 1009016,
        quantity: {
          amount: 1.5,
          unit: 'cups',
        },
      },
      {
        id: 9003,
        quantity: {
          amount: 2,
          unit: '',
        },
      },
      {
        id: 20027,
        quantity: {
          amount: 1,
          unit: 'tablespoon',
        },
      },
      {
        id: 1002046,
        quantity: {
          amount: 1,
          unit: 'tablespoon',
        },
      },
      {
        id: 11215,
        quantity: {
          amount: 1,
          unit: 'clove',
        },
      },
      {
        id: 1012046,
        quantity: {
          amount: 1,
          unit: 'tablespoon',
        },
      },
      {
        id: 19911,
        quantity: {
          amount: 0.25,
          unit: 'cup',
        },
      },
      {
        id: 16112,
        quantity: {
          amount: 1,
          unit: 'tablespoon',
        },
      },
      {
        id: 10010062,
        quantity: {
          amount: 24,
          unit: 'ounce',
        },
      },
      {
        id: 1102047,
        quantity: {
          amount: 4,
          unit: 'servings',
        },
      },
      {
        id: 16124,
        quantity: {
          amount: 1,
          unit: 'tablespoon',
        },
      },
      {
        id: 1016168,
        quantity: {
          amount: 1,
          unit: 'tablespoon',
        },
      },
    ],
    instructions: [
      {
        instruction:
          'Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!',
        number: 1,
      },
    ],
    name: 'Maple Dijon Apple Cider Grilled Pork Chops',
    tags: ['lunch', 'main course', 'main dish', 'dinner'],
  },
  {
    id: 412309,
    image: 'https://spoonacular.com/recipeImages/412309-556x370.jpeg',
    ingredients: [
      {
        id: 1002030,
        quantity: {
          amount: 4,
          unit: 'teaspoons',
        },
      },
      {
        id: 19334,
        quantity: {
          amount: 8,
          unit: 'tablespoons',
        },
      },
      {
        id: 1001,
        quantity: {
          amount: 2,
          unit: 'cups',
        },
      },
      {
        id: 4582,
        quantity: {
          amount: 4,
          unit: 'servings',
        },
      },
      {
        id: 2031,
        quantity: {
          amount: 4,
          unit: 'teaspoons',
        },
      },
      {
        id: 5100,
        quantity: {
          amount: 1,
          unit: 'pound',
        },
      },
      {
        id: 2009,
        quantity: {
          amount: 4,
          unit: 'teaspoons',
        },
      },
      {
        id: 1022020,
        quantity: {
          amount: 4,
          unit: 'teaspoons',
        },
      },
      {
        id: 6168,
        quantity: {
          amount: 8,
          unit: 'cups',
        },
      },
      {
        id: 9176,
        quantity: {
          amount: 0.5,
          unit: 'cup',
        },
      },
      {
        id: 2026,
        quantity: {
          amount: 4,
          unit: 'teaspoons',
        },
      },
      {
        id: 1042047,
        quantity: {
          amount: 1.5,
          unit: 'tablespoons',
        },
      },
      {
        id: 1042047,
        quantity: {
          amount: 4,
          unit: 'teaspoons',
        },
      },
    ],
    instructions: [
      {
        instruction:
          'Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.',
        number: 1,
      },
    ],
    name: "Dirty Steve's Original Wing Sauce",
    tags: ['sauce'],
  },
  {
    id: 741603,
    image: 'https://spoonacular.com/recipeImages/741603-556x370.jpeg',
    ingredients: [
      {
        id: 20081,
        quantity: {
          amount: 1,
          unit: 'cup',
        },
      },
      {
        id: 18371,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
      {
        id: 9040,
        quantity: {
          amount: 12,
          unit: 'servings',
        },
      },
      {
        id: 20011,
        quantity: {
          amount: 1,
          unit: 'cup',
        },
      },
      {
        id: 1001,
        quantity: {
          amount: 2,
          unit: 'tablespoons',
        },
      },
      {
        id: 1001,
        quantity: {
          amount: 6,
          unit: 'tablespoons',
        },
      },
      {
        id: 1230,
        quantity: {
          amount: 2,
          unit: 'cups',
        },
      },
      {
        id: 1123,
        quantity: {
          amount: 2,
          unit: '',
        },
      },
      {
        id: 19296,
        quantity: {
          amount: 12,
          unit: 'servings',
        },
      },
      {
        id: 16098,
        quantity: {
          amount: 12,
          unit: 'servings',
        },
      },
      {
        id: 2047,
        quantity: {
          amount: 1,
          unit: 'teaspoon',
        },
      },
      {
        id: 19335,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
    ],
    instructions: [
      {
        instruction: 'Watch how to make this recipe.',
        number: 1,
      },
      {
        instruction:
          'In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.',
        number: 2,
      },
      {
        instruction:
          'In another large bowl mix together all-purpose flour and buckwheat flour.',
        number: 3,
      },
      {
        instruction:
          'Slowly add flour into the wet ingredients mixing with a whisk.',
        number: 4,
      },
      {
        instruction:
          'Mix until there are no lumps and the batter is smooth and velvety.',
        number: 5,
      },
      {
        instruction:
          'In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.',
        number: 6,
      },
      {
        instruction:
          'Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.',
        number: 7,
      },
    ],
    name: 'Elvis Pancakes',
    tags: ['side dish'],
  },
  {
    id: 562334,
    image: 'https://spoonacular.com/recipeImages/562334-556x370.jpg',
    ingredients: [
      {
        id: 2048,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
      {
        id: 18371,
        quantity: {
          amount: 0.3333333333333333,
          unit: 'teaspoon',
        },
      },
      {
        id: 20090,
        quantity: {
          amount: 1.125,
          unit: 'cup',
        },
      },
      {
        id: 93784,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
      {
        id: 4582,
        quantity: {
          amount: 0.25,
          unit: 'cup',
        },
      },
      {
        id: 1124,
        quantity: {
          amount: 3,
          unit: 'large',
        },
      },
      {
        id: 93625,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
      {
        id: 12220,
        quantity: {
          amount: 2,
          unit: 'Tablespoons',
        },
      },
      {
        id: 10118375,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
      {
        id: 19304,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
      {
        id: 11413,
        quantity: {
          amount: 0.75,
          unit: 'cup',
        },
      },
      {
        id: 2047,
        quantity: {
          amount: 0.75,
          unit: 'teaspoon',
        },
      },
      {
        id: 93696,
        quantity: {
          amount: 0.75,
          unit: 'cup',
        },
      },
      {
        id: 93760,
        quantity: {
          amount: 0.25,
          unit: 'cup',
        },
      },
      {
        id: 14412,
        quantity: {
          amount: 1,
          unit: 'cup',
        },
      },
      {
        id: 93626,
        quantity: {
          amount: 2,
          unit: 'teaspoons',
        },
      },
    ],
    instructions: [
      {
        instruction:
          'Grease or spray oil a 9×5 inch loaf pan.Preheat oven to 170 – 200°F (lowest possible).',
        number: 1,
      },
      {
        instruction:
          'Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds.',
        number: 2,
      },
      {
        instruction: 'Whisk together the dry ingredients; set aside.',
        number: 3,
      },
      {
        instruction:
          'Add the oil, vinegar and yeast mixture to the egg whites and blend on low for a few seconds.',
        number: 4,
      },
      {
        instruction:
          'Add dry ingredients all at once and mix on low speed until all dry ingredients are moistened. Then beat on high for 1 minute.',
        number: 5,
      },
      {
        instruction:
          "Add dough batter to prepared pan and distribute and smooth the top using a rubber spatula. You'll want to meet all sides of the pan. If you miss the corners that will still be okay. It will fill in upon rising. To even out top, drop a few drops of filtered water on top, and spread evenly with a rubber spatula, or dip spatula in water several times.",
        number: 6,
      },
      {
        instruction:
          'Place the bread pan in the oven. Turn oven off. Allow the dough to rise until the center is about 1/2” over the top of the pan, about 22 minutes. It will rise more while the oven is heating and during baking.',
        number: 7,
      },
      {
        instruction: 'Remove pan from oven and preheat oven to 375°F.',
        number: 8,
      },
      {
        instruction:
          'Place the pan on the center of the rack in the center of the oven and bake for about 45 minutes or more.',
        number: 9,
      },
      {
        instruction:
          "Remove the loaf from the oven and immediately remove it from the pan (careful it will be hot), and set the loaf on a cooling rack to cool. If you do not remove it right away the steam will make the crust soggy.Slice off the two ends to allow the steam to escape, or it will begin to sink in on the sides and bottom.Once cooled, it will shrink a little bit. Slice it with an electric slicer, electric knife or serrated knife. You'll get about 13-16, depending upon how thick you slice it.",
        number: 10,
      },
    ],
    name: 'Mock Udi’s Gluten Free Whole Grain Bread',
    tags: [],
  },
];

const ingredientsData = [
  {
    id: 20081,
    name: 'wheat flour',
    estimatedCostInCents: 142,
  },
  {
    id: 18372,
    name: 'bicarbonate of soda',
    estimatedCostInCents: 582,
  },
  {
    id: 1123,
    name: 'eggs',
    estimatedCostInCents: 472,
  },
  {
    id: 19335,
    name: 'sucrose',
    estimatedCostInCents: 902,
  },
  {
    id: 19206,
    name: 'instant vanilla pudding',
    estimatedCostInCents: 660,
  },
  {
    id: 19334,
    name: 'brown sugar',
    estimatedCostInCents: 559,
  },
  {
    id: 2047,
    name: 'salt',
    estimatedCostInCents: 280,
  },
  {
    id: 1012047,
    name: 'fine sea salt',
    estimatedCostInCents: 528,
  },
  {
    id: 10019903,
    name: 'semi sweet chips',
    estimatedCostInCents: 253,
  },
  {
    id: 1145,
    name: 'unsalted butter',
    estimatedCostInCents: 617,
  },
  {
    id: 2050,
    name: 'vanilla',
    estimatedCostInCents: 926,
  },
  {
    id: 1009016,
    name: 'apple cider',
    estimatedCostInCents: 468,
  },
  {
    id: 9003,
    name: 'apple',
    estimatedCostInCents: 207,
  },
  {
    id: 20027,
    name: 'corn starch',
    estimatedCostInCents: 236,
  },
  {
    id: 1002046,
    name: 'dijon style mustard',
    estimatedCostInCents: 619,
  },
  {
    id: 11215,
    name: 'whole garlic clove',
    estimatedCostInCents: 220,
  },
  {
    id: 1012046,
    name: 'whole grain dijon mustard',
    estimatedCostInCents: 867,
  },
  {
    id: 19911,
    name: 'maple',
    estimatedCostInCents: 349,
  },
  {
    id: 16112,
    name: 'miso',
    estimatedCostInCents: 978,
  },
  {
    id: 10010062,
    name: 'pork chop',
    estimatedCostInCents: 834,
  },
  {
    id: 1102047,
    name: 's&p',
    estimatedCostInCents: 524,
  },
  {
    id: 16124,
    name: 'soy sauce',
    estimatedCostInCents: 486,
  },
  {
    id: 1016168,
    name: 'sriracha sauce',
    estimatedCostInCents: 576,
  },
  {
    id: 1002030,
    name: 'black pepper',
    estimatedCostInCents: 441,
  },
  {
    id: 1001,
    name: 'butter',
    estimatedCostInCents: 618,
  },
  {
    id: 4582,
    name: 'oil',
    estimatedCostInCents: 807,
  },
  {
    id: 2031,
    name: 'red pepper powder',
    estimatedCostInCents: 583,
  },
  {
    id: 5100,
    name: 'chicken wing',
    estimatedCostInCents: 593,
  },
  {
    id: 2009,
    name: 'red chili powder',
    estimatedCostInCents: 499,
  },
  {
    id: 1022020,
    name: 'garlic powder',
    estimatedCostInCents: 344,
  },
  {
    id: 6168,
    name: 'tabasco sauce',
    estimatedCostInCents: 859,
  },
  {
    id: 9176,
    name: 'mangoes',
    estimatedCostInCents: 425,
  },
  {
    id: 2026,
    name: 'onion powder',
    estimatedCostInCents: 597,
  },
  {
    id: 1042047,
    name: 'seasoned salt',
    estimatedCostInCents: 334,
  },
  {
    id: 18371,
    name: 'baking powder',
    estimatedCostInCents: 346,
  },
  {
    id: 9040,
    name: 'ripe banana',
    estimatedCostInCents: 331,
  },
  {
    id: 20011,
    name: 'buck wheat flour',
    estimatedCostInCents: 865,
  },
  {
    id: 1230,
    name: 'buttermilk',
    estimatedCostInCents: 773,
  },
  {
    id: 19296,
    name: 'runny honey',
    estimatedCostInCents: 742,
  },
  {
    id: 16098,
    name: 'peanut butter',
    estimatedCostInCents: 490,
  },
  {
    id: 2048,
    name: 'apple cider vinegar',
    estimatedCostInCents: 532,
  },
  {
    id: 20090,
    name: 'brown rice flour',
    estimatedCostInCents: 667,
  },
  {
    id: 93784,
    name: 'brown rice syrup',
    estimatedCostInCents: 126,
  },
  {
    id: 1124,
    name: 'egg albumen',
    estimatedCostInCents: 304,
  },
  {
    id: 93625,
    name: 'evaporated cane juice',
    estimatedCostInCents: 118,
  },
  {
    id: 12220,
    name: 'flax meal',
    estimatedCostInCents: 296,
  },
  {
    id: 10118375,
    name: 'instant yeast',
    estimatedCostInCents: 383,
  },
  {
    id: 19304,
    name: 'unsulfured molasses',
    estimatedCostInCents: 925,
  },
  {
    id: 11413,
    name: 'Potato Starch Flour',
    estimatedCostInCents: 895,
  },
  {
    id: 93696,
    name: 'tapioca starch',
    estimatedCostInCents: 656,
  },
  {
    id: 93760,
    name: 'Whole Grain Teff Flour',
    estimatedCostInCents: 539,
  },
  {
    id: 14412,
    name: 'ice water',
    estimatedCostInCents: 625,
  },
  {
    id: 93626,
    name: 'xanthan gum',
    estimatedCostInCents: 625,
  },
  {
    id: 19350,
    name: 'corn syrup',
    estimatedCostInCents: 441,
  },
  {
    id: 9099,
    name: 'fruit cocktail',
    estimatedCostInCents: 953,
  },
  {
    id: 12061,
    name: 'whole almonds',
    estimatedCostInCents: 1029,
  },
  {
    id: 12104,
    name: 'coconut',
    estimatedCostInCents: 918,
  },
  {
    id: 12115,
    name: 'coconut cream',
    estimatedCostInCents: 304,
  },
  {
    id: 4047,
    name: 'coconut oil',
    estimatedCostInCents: 152,
  },
  {
    id: 10019071,
    name: 'dark chocolate morsels',
    estimatedCostInCents: 632,
  },
  {
    id: 8212,
    name: 'granola cereal',
    estimatedCostInCents: 381,
  },
  {
    id: 8121,
    name: 'oatmeal',
    estimatedCostInCents: 659,
  },
  {
    id: 12142,
    name: 'pecan',
    estimatedCostInCents: 314,
  },
  {
    id: 93740,
    name: 'blanched almond flour',
    estimatedCostInCents: 986,
  },
  {
    id: 1125,
    name: 'egg yolks',
    estimatedCostInCents: 889,
  },
  {
    id: 12023,
    name: 'sesame seeds',
    estimatedCostInCents: 886,
  },
  {
    id: 1015062,
    name: 'chicken tenders',
    estimatedCostInCents: 657,
  },
  {
    id: 10011109,
    name: 'slaw mix',
    estimatedCostInCents: 681,
  },
  {
    id: 10116098,
    name: 'creamy peanut butter',
    estimatedCostInCents: 152,
  },
  {
    id: 2064,
    name: 'mint',
    estimatedCostInCents: 575,
  },
  {
    id: 2021,
    name: 'powdered ginger',
    estimatedCostInCents: 783,
  },
  {
    id: 9160,
    name: 'juice of lime',
    estimatedCostInCents: 477,
  },
  {
    id: 9266,
    name: 'pineapple',
    estimatedCostInCents: 834,
  },
  {
    id: 11135,
    name: 'cauliflower',
    estimatedCostInCents: 486,
  },
  {
    id: 6172,
    name: 'chicken stock',
    estimatedCostInCents: 454,
  },
  {
    id: 93632,
    name: 'ghee',
    estimatedCostInCents: 370,
  },
  {
    id: 12120,
    name: 'hazelnut',
    estimatedCostInCents: 812,
  },
  {
    id: 93690,
    name: 'nutritional yeast flakes',
    estimatedCostInCents: 969,
  },
  {
    id: 11282,
    name: 'onions',
    estimatedCostInCents: 439,
  },
  {
    id: 10010123,
    name: 'proscuitto',
    estimatedCostInCents: 217,
  },
  {
    id: 11096,
    name: 'rapini',
    estimatedCostInCents: 846,
  },
  {
    id: 6150,
    name: 'bar b que sauce',
    estimatedCostInCents: 966,
  },
  {
    id: 6194,
    name: 'chicken broth',
    estimatedCostInCents: 983,
  },
  {
    id: 93627,
    name: 'liquid smoke',
    estimatedCostInCents: 412,
  },
  {
    id: 2028,
    name: 'paprika',
    estimatedCostInCents: 302,
  },
  {
    id: 10072,
    name: 'pork shoulder',
    estimatedCostInCents: 969,
  },
  {
    id: 6971,
    name: 'worcestershire',
    estimatedCostInCents: 57,
  },
  {
    id: 93607,
    name: 'almondmilk',
    estimatedCostInCents: 787,
  },
  {
    id: 18942,
    name: 'graham cracker crust',
    estimatedCostInCents: 655,
  },
  {
    id: 1012010,
    name: 'ground cinnamon',
    estimatedCostInCents: 742,
  },
  {
    id: 2025,
    name: 'nutmeg powder',
    estimatedCostInCents: 480,
  },
  {
    id: 43274,
    name: 'low fat cream cheese',
    estimatedCostInCents: 1048,
  },
  {
    id: 8120,
    name: 'whole grain rolled oats',
    estimatedCostInCents: 98,
  },
  {
    id: 11424,
    name: 'canned pumpkin',
    estimatedCostInCents: 852,
  },
  {
    id: 9016,
    name: 'apple juice',
    estimatedCostInCents: 710,
  },
  {
    id: 18047,
    name: 'raisin bread',
    estimatedCostInCents: 222,
  },
  {
    id: 1089003,
    name: 'grannysmith apple',
    estimatedCostInCents: 459,
  },
  {
    id: 1077,
    name: 'full-fat milk',
    estimatedCostInCents: 276,
  },
  {
    id: 11297,
    name: 'flat leaf parsley leaves',
    estimatedCostInCents: 1030,
  },
  {
    id: 1032009,
    name: 'dried red chili',
    estimatedCostInCents: 1015,
  },
  {
    id: 15152,
    name: 'jumbo shrimp',
    estimatedCostInCents: 804,
  },
  {
    id: 11294,
    name: 'vidalia onion',
    estimatedCostInCents: 595,
  },
  {
    id: 11007,
    name: 'artichokes',
    estimatedCostInCents: 203,
  },
  {
    id: 9150,
    name: 'lemon',
    estimatedCostInCents: 766,
  },
  {
    id: 9156,
    name: 'lemon peel',
    estimatedCostInCents: 630,
  },
  {
    id: 18069,
    name: 'gluten-free white sandwich bread',
    estimatedCostInCents: 863,
  },
  {
    id: 1033,
    name: 'parmesan cheese',
    estimatedCostInCents: 398,
  },
  {
    id: 2027,
    name: 'oregano',
    estimatedCostInCents: 835,
  },
  {
    id: 1034053,
    name: 'extra virgin olive oil',
    estimatedCostInCents: 305,
  },
  {
    id: 2004,
    name: 'bay leaves',
    estimatedCostInCents: 785,
  },
  {
    id: 19336,
    name: 'powdered sugar',
    estimatedCostInCents: 603,
  },
  {
    id: 11143,
    name: 'celery',
    estimatedCostInCents: 840,
  },
  {
    id: 1129,
    name: 'hardcooked eggs',
    estimatedCostInCents: 882,
  },
  {
    id: 4641,
    name: 'reduced fat mayo',
    estimatedCostInCents: 697,
  },
  {
    id: 1011256,
    name: 'skim greek yogurt',
    estimatedCostInCents: 263,
  },
  {
    id: 11944,
    name: 'hotdog relish',
    estimatedCostInCents: 391,
  },
  {
    id: 10011282,
    name: 'red onion',
    estimatedCostInCents: 638,
  },
  {
    id: 11353,
    name: 'idaho potato',
    estimatedCostInCents: 742,
  },
  {
    id: 10211821,
    name: 'bell pepper',
    estimatedCostInCents: 741,
  },
  {
    id: 10020048,
    name: 'brown minute rice',
    estimatedCostInCents: 386,
  },
  {
    id: 93651,
    name: 'italian cheese blend',
    estimatedCostInCents: 233,
  },
  {
    id: 7927,
    name: 'sweet italian turkey sausage',
    estimatedCostInCents: 216,
  },
  {
    id: 11549,
    name: 'canned tomato sauce',
    estimatedCostInCents: 622,
  },
  {
    id: 10120129,
    name: 'bread flour',
    estimatedCostInCents: 114,
  },
  {
    id: 1053,
    name: 'cream',
    estimatedCostInCents: 645,
  },
  {
    id: 4053,
    name: 'pure olive oil',
    estimatedCostInCents: 705,
  },
  {
    id: 19912,
    name: 'agave syrup',
    estimatedCostInCents: 642,
  },
  {
    id: 10020080,
    name: 'pastry flour',
    estimatedCostInCents: 497,
  },
  {
    id: 10019334,
    name: 'dark brown sugar',
    estimatedCostInCents: 501,
  },
  {
    id: 93814,
    name: 'lightly sweetened whipped cream',
    estimatedCostInCents: 88,
  },
  {
    id: 11206,
    name: 'cucumber',
    estimatedCostInCents: 262,
  },
  {
    id: 20035,
    name: 'quinoa',
    estimatedCostInCents: 514,
  },
  {
    id: 11529,
    name: 'heirloom tomatoes',
    estimatedCostInCents: 321,
  },
  {
    id: 14242,
    name: 'cranberry juice cocktail',
    estimatedCostInCents: 335,
  },
  {
    id: 14130,
    name: 'cream soda',
    estimatedCostInCents: 585,
  },
  {
    id: 19177,
    name: 'gelatine',
    estimatedCostInCents: 1011,
  },
  {
    id: 93645,
    name: 'halloween sprinkles',
    estimatedCostInCents: 293,
  },
  {
    id: 14051,
    name: 'grey goose vodka',
    estimatedCostInCents: 373,
  },
  {
    id: 1054,
    name: 'whipped cream',
    estimatedCostInCents: 689,
  },
  {
    id: 93828,
    name: 'marinated artichoke hearts',
    estimatedCostInCents: 982,
  },
  {
    id: 11266,
    name: 'crimini mushrooms',
    estimatedCostInCents: 150,
  },
  {
    id: 1017,
    name: 'cream cheese',
    estimatedCostInCents: 955,
  },
  {
    id: 1019,
    name: 'feta',
    estimatedCostInCents: 1003,
  },
  {
    id: 1022027,
    name: 'mixed italian herbs',
    estimatedCostInCents: 253,
  },
  {
    id: 1082047,
    name: 'kosher salt',
    estimatedCostInCents: 972,
  },
  {
    id: 10011457,
    name: 'spinach',
    estimatedCostInCents: 336,
  },
  {
    id: 2044,
    name: 'basil',
    estimatedCostInCents: 203,
  },
  {
    id: 7036,
    name: 'italian sausage links',
    estimatedCostInCents: 1010,
  },
  {
    id: 10111549,
    name: 'marinara sauce',
    estimatedCostInCents: 171,
  },
  {
    id: 1038,
    name: 'pecorino romano cheese',
    estimatedCostInCents: 50,
  },
  {
    id: 11304,
    name: 'peas',
    estimatedCostInCents: 768,
  },
  {
    id: 11677,
    name: 'shallots',
    estimatedCostInCents: 696,
  },
  {
    id: 11020420,
    name: 'pasta shells',
    estimatedCostInCents: 862,
  },
  {
    id: 1001026,
    name: 'shredded mozzarella',
    estimatedCostInCents: 184,
  },
  {
    id: 93630,
    name: 'skim milk ricotta cheese',
    estimatedCostInCents: 395,
  },
  {
    id: 14106,
    name: 'white wine',
    estimatedCostInCents: 675,
  },
  {
    id: 11463,
    name: 'frozen spinach',
    estimatedCostInCents: 830,
  },
  {
    id: 1025,
    name: 'pepperjack',
    estimatedCostInCents: 212,
  },
  {
    id: 10014623,
    name: 'blackberry juice',
    estimatedCostInCents: 256,
  },
  {
    id: 9302,
    name: 'raspberry',
    estimatedCostInCents: 247,
  },
  {
    id: 9354,
    name: 'pineapple with juice',
    estimatedCostInCents: 926,
  },
  {
    id: 9070,
    name: 'sweet cherries',
    estimatedCostInCents: 184,
  },
  {
    id: 14181,
    name: 'chocolate syrup',
    estimatedCostInCents: 530,
  },
  {
    id: 10018617,
    name: 'graham cracker crumbs',
    estimatedCostInCents: 205,
  },
  {
    id: 12135,
    name: 'nuts',
    estimatedCostInCents: 978,
  },
  {
    id: 9037,
    name: 'haas avocados',
    estimatedCostInCents: 275,
  },
  {
    id: 16057,
    name: 'garbanzos',
    estimatedCostInCents: 85,
  },
  {
    id: 2045,
    name: 'dillweed',
    estimatedCostInCents: 162,
  },
  {
    id: 1256,
    name: 'greek yogurt',
    estimatedCostInCents: 231,
  },
  {
    id: 9152,
    name: 'lemon juice',
    estimatedCostInCents: 274,
  },
  {
    id: 11291,
    name: 'spring onions',
    estimatedCostInCents: 55,
  },
  {
    id: 9236,
    name: 'peaches',
    estimatedCostInCents: 109,
  },
  {
    id: 19095,
    name: 'icecream',
    estimatedCostInCents: 447,
  },
  {
    id: 10862,
    name: 'cooked bacon strips',
    estimatedCostInCents: 868,
  },
  {
    id: 5114,
    name: 'roasted chicken',
    estimatedCostInCents: 708,
  },
  {
    id: 11333,
    name: 'green peppers',
    estimatedCostInCents: 303,
  },
  {
    id: 1026,
    name: 'fresh mozzarella',
    estimatedCostInCents: 290,
  },
  {
    id: 10211529,
    name: 'italian tomato',
    estimatedCostInCents: 978,
  },
  {
    id: 1011009,
    name: 'white cheddar',
    estimatedCostInCents: 709,
  },
  {
    estimatedCostInCents: 205,
  },
  {
    id: 98998,
    name: 'balsamic glaze',
    estimatedCostInCents: 759,
  },
  {
    id: 8030,
    name: 'fruit loops',
    estimatedCostInCents: 191,
  },
  {
    id: 19116,
    name: 'marshmallow',
    estimatedCostInCents: 425,
  },
  {
    id: 16158,
    name: 'hummus',
    estimatedCostInCents: 491,
  },
  {
    id: 2046,
    name: 'prepared yellow mustard',
    estimatedCostInCents: 300,
  },
  {
    id: 1214,
    name: 'evaporated milk',
    estimatedCostInCents: 95,
  },
  {
    id: 9214,
    name: 'orange juice concentrate',
    estimatedCostInCents: 379,
  },
  {
    id: 9216,
    name: 'orange peel',
    estimatedCostInCents: 882,
  },
  {
    id: 10123,
    name: 'bacon slices',
    estimatedCostInCents: 817,
  },
  {
    id: 11052,
    name: 'string beans',
    estimatedCostInCents: 502,
  },
  {
    id: 11959,
    name: 'baby arugula leaves',
    estimatedCostInCents: 207,
  },
  {
    id: 1004,
    name: 'blue cheese',
    estimatedCostInCents: 646,
  },
  {
    id: 9252,
    name: 'pear',
    estimatedCostInCents: 467,
  },
  {
    id: 43408,
    name: 'pear juice',
    estimatedCostInCents: 163,
  },
  {
    id: 2049,
    name: 'fresh thyme leaves',
    estimatedCostInCents: 681,
  },
  {
    id: 12155,
    name: 'walnut halves',
    estimatedCostInCents: 895,
  },
  {
    id: 10011693,
    name: 'canned tomato',
    estimatedCostInCents: 171,
  },
  {
    id: 11124,
    name: 'carrots',
    estimatedCostInCents: 136,
  },
  {
    id: 2012,
    name: 'coriander',
    estimatedCostInCents: 52,
  },
  {
    id: 1002014,
    name: 'comino',
    estimatedCostInCents: 547,
  },
  {
    id: 11913,
    name: 'frozen corn',
    estimatedCostInCents: 558,
  },
  {
    id: 11477,
    name: 'zucchini squash',
    estimatedCostInCents: 742,
  },
  {
    id: 10220445,
    name: 'steamed rice',
    estimatedCostInCents: 1040,
  },
  {
    id: 2003,
    name: 'ground basil',
    estimatedCostInCents: 198,
  },
  {
    id: 16018,
    name: 'canned black beans',
    estimatedCostInCents: 356,
  },
  {
    id: 99223,
    name: 'canned chipotle chilies in adobo',
    estimatedCostInCents: 299,
  },
  {
    id: 11165,
    name: 'cilantro',
    estimatedCostInCents: 159,
  },
  {
    id: 10218364,
    name: 'flour tortilla',
    estimatedCostInCents: 653,
  },
  {
    id: 10611282,
    name: 'white onions',
    estimatedCostInCents: 449,
  },
  {
    id: 11457,
    name: 'baby spinach leaves',
    estimatedCostInCents: 668,
  },
  {
    id: 11268,
    name: 'dried shiitake mushroom',
    estimatedCostInCents: 806,
  },
  {
    id: 10020005,
    name: 'farro',
    estimatedCostInCents: 286,
  },
  {
    id: 10511282,
    name: 'yellow onion',
    estimatedCostInCents: 241,
  },
  {
    id: 2069,
    name: 'balsamic vinegar',
    estimatedCostInCents: 118,
  },
  {
    id: 11250,
    name: 'boston bibb lettuce',
    estimatedCostInCents: 61,
  },
  {
    id: 11156,
    name: 'fresh chive',
    estimatedCostInCents: 728,
  },
  {
    id: 4025,
    name: 'mayonnaise',
    estimatedCostInCents: 630,
  },
  {
    id: 11119,
    name: 'napa cabbage',
    estimatedCostInCents: 1009,
  },
  {
    id: 11112,
    name: 'red cabbage',
    estimatedCostInCents: 659,
  },
  {
    id: 98962,
    name: 'sweet chili sauce',
    estimatedCostInCents: 1001,
  },
  {
    id: 2042,
    name: 'dried thyme',
    estimatedCostInCents: 307,
  },
  {
    id: 1002020,
    name: 'granulated garlic',
    estimatedCostInCents: 228,
  },
  {
    id: 10023572,
    name: 'ground chuck',
    estimatedCostInCents: 600,
  },
  {
    id: 10011250,
    name: 'butterhead lettuce leaves',
    estimatedCostInCents: 341,
  },
  {
    id: 5064,
    name: 'baked chicken breast',
    estimatedCostInCents: 1020,
  },
  {
    id: 2015,
    name: 'curry seasoning',
    estimatedCostInCents: 312,
  },
  {
    id: 1009159,
    name: 'lime peel',
    estimatedCostInCents: 435,
  },
  {
    id: 98991,
    name: 'mint chutney',
    estimatedCostInCents: 927,
  },
  {
    id: 9316,
    name: 'strawberry',
    estimatedCostInCents: 292,
  },
  {
    id: 11090,
    name: 'broccoli crowns',
    estimatedCostInCents: 256,
  },
  {
    id: 10011821,
    name: 'sweet orange pepper',
    estimatedCostInCents: 968,
  },
  {
    id: 10218,
    name: 'pork tenderloin',
    estimatedCostInCents: 845,
  },
  {
    id: 19157,
    name: 'mini m&m',
    estimatedCostInCents: 552,
  },
  {
    id: 98871,
    name: 'hawaiian sweet rolls',
    estimatedCostInCents: 535,
  },
  {
    id: 1055062,
    name: 'boneless skinless chicken breasts',
    estimatedCostInCents: 897,
  },
  {
    id: 10019151,
    name: 'reese pieces',
    estimatedCostInCents: 721,
  },
  {
    id: 1041009,
    name: 'cheese',
    estimatedCostInCents: 850,
  },
  {
    id: 10018413,
    name: 'flatbread',
    estimatedCostInCents: 326,
  },
  {
    id: 10111529,
    name: 'grape tomato',
    estimatedCostInCents: 168,
  },
  {
    id: 9019,
    name: 'unsweetened apple sauce',
    estimatedCostInCents: 154,
  },
  {
    id: 18079,
    name: 'dry breadcrumbs',
    estimatedCostInCents: 167,
  },
  {
    id: 16069,
    name: 'legumes',
    estimatedCostInCents: 903,
  },
  {
    id: 9079,
    name: 'dried cranberries',
    estimatedCostInCents: 921,
  },
  {
    id: 11935,
    name: 'catsup',
    estimatedCostInCents: 666,
  },
  {
    id: 12151,
    name: 'pistachio',
    estimatedCostInCents: 813,
  },
  {
    id: 11821,
    name: 'red sweet peppers',
    estimatedCostInCents: 1027,
  },
  {
    id: 6615,
    name: 'vegetable stock',
    estimatedCostInCents: 613,
  },
];

//ingredientsData
//sampleRecipe
const sampleIngredients = ingredientsData.filter((ingredient) => {
  return sampleRecipe.map(())
});
