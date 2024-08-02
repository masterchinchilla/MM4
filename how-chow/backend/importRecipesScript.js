const GenRecipe=require('./models/genRecipe.model');

const recipesArray=[
    {
      name: "12 Inch Roasted Chicken Subway Sandwich",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "72 Percent Dark Solid Chocolate Bar",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Bacon with Eggs and Toast",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Toast",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Crackers and Loks with Blueberry Honey and Yogurt Protein Smoothie",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "Blend blueberries, protein powder, yogurt, honey and water",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Dark Chocolate and York Peppermint Patties",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "High Fiber Oatmeal with Blueberries and Yogurt and Bacon with Eggs",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Scramble eggs",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Larabar with an Orange",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Mini York Peppermint Patties",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Pan Fried Fish with Rice and Side Salad",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Season rice with lemon juice, butter and salt",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Peanut Butter and Banana Protein Smoothie with Nature Valley Bar",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Rice Chex Cereal with Almond Milk",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Salmon Avocado and Cucumber Maki from Deli with a Mandarin",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Salmon Avocado and Cucumber Maki from Deli with Almond Butter",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Salmon Avocado and Cucumber Maki from Deli with an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Salmon with Rice and Salad",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Season and fry salmon in a non-stick pan. Season rice with lemon juice and salt",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Skinny Cow Ice Cream",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Soup with Salad and an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Almond Milk Protein Shake with Grapes",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Apple",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Apple with Peanut Butter",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Apple with Protein Enhanced Yogurt Dip",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "Mix protein and yogurt and use as a dip",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Apple with Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Arroz y Frijoles con Ensalada",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Avocado Toast",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Toast",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Banana",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Banana Protein Smoothie",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "Blend",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Banana with Peanut Butter",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Bean Marinara",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Saute all ingredients and top them with marinara",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Beans and Avocado Toast",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Beef Tacos",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Shred lettuce and cheese",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Blueberry Bowl",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Blueberry Protein Shake",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "Blend",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Blueberry Yogurt Smoothie",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Breakfast Burrito",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Shred cheese",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Breakfast Taco Bowl",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Crush tortilla chips and use as a topping. Scamble the eggs",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Brownie",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Burrito with an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "Grill/Broil then slice",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Pasta with Peppers",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Cut broccoli into florets. Dice zucchini. Saute chicken, vegetables and oil, then add sauce and pasta",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Pasta with Spinach",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Cut broccoli into florets. Dice zucchini. Saute chicken, vegetables and oil, then add sauce and pasta",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Primavera",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Dice zucchini",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Salad with a Banana",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Sandwich with a Pickle and Mandarin",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Stir Fry with Rice",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken Tacos",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Shred cheese",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chicken with Potato and Broccoli",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Season and saute chicken in oil",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chickpea Salad",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chickpea Tacos",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Shred cabbage. Saute chickpeas with seasoning and oil, then mash slightly with a fork",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chocolate and Strawberries",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Chocolate Chip Prepared Cookies",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Dried Apricots and Almonds",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Dried Figs",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Eggplant Primavera with Chicken",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Heat marinara sauce. Cut broccoli into small florets. Cut eggplant into thin slices, then quarter them. Slice onions, bell peppers and mushrooms. Saute Vegetables, half the spices and oil until eggplant is translucent. Cube chicken and saute with other half of spices and oil",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Eggs and a Banana",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Eggs and a Peach",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Eggs with Toast and a Banana",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Toast",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Fish Tacos",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Shred cabbage",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Fruit Sorbet",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Grilled Chicken with Almond Alfredo",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Cut spaghetti squash in two, put open side down in a dish lined with a little water, bake 45 mins at 375 degrees until a fork can pierce its skin, then use a fork to pull out pasta-like strands: Yields 5 cups \"spaghetti.\" Food process almonds and half the water until it is a paste. Blend garlic and other half of water with almond paste until smooth. Add salt and pepper to and then cook almond garlic cream on medium heat, stirring every 30 secs until it thickens. Keep almond garlic cream warm while making chicken and vegetables. Saute vegetables in oil until eggplant is almost translucent. Dice chicken, then add to the pan with the vegetables and finish cooking everything",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Hummus Salad",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Hummus Sandwich with a Pickle and Almonds",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Jerk Chicken with Potato and Broccoli",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Bake potato, steam broccoli and grill or broil chicken with seasoning",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Kale Tuna Salad",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Lentil Soup with Broccoli and Walnuts",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Lentil Stir Fry with Rice",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Mandarin Orange",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Mandarin with Jerky",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Mandarin with Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Mixed Greens Tuna Salad with an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Non Fat Frozen Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e37"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Oatmeal and Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Oatmeal with Protein Enhanced Yogurt and a Banana",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Oatmeal with Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Oatmeal with Yogurt and a Banana",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Peanut Butter Jam Sandwich with an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Peanut Butter Protein Shake",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "Blend",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Pineapple",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Enhanced Blueberry Oatmeal with Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Enhanced Cinnamon Raisin Oatmeal with Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Enhanced Cinnamon Walnut Oatmeal",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Enhanced Oatmeal",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Enhanced Quinoa with Nuts and Berries",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "Crush walnuts",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Shake",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Protein Shake with Grapes",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Raspberry Protein Smoothie ",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "Blend",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Roasted Vegetable and Grilled Chicken Salad",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Cut 1 cup's worth of cucumber. Slice and cook chicken. Cube sweet potato, skin on. Peel and cube beet. Toss tubers with half the spices, vinegar and oil, then spread evenly in a pan lined with parchment paper and bake for 75 mins at 380 degrees. Cube onion and bell pepper, then toss with other half of spices, vinegar and oil and add to oven for last 30 mins of tuber cook time",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Salmon Salad with a Mandarin",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Strawberry Protein Shake",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "Blend",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Strawberry Yogurt Smoothie",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Sweet Strawberry Oatmeal",
      availableMealTypes: ["6530a80f007023efd8394e32"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Tilapia Lettuce Wraps with an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "Chop green bell pepper, then saute with onion and oil",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "TJs Lemon Pepper Grilled Chicken Salad",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "TJs Rosemary Grilled Chicken Salad",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Tuna Salad and a Mandarin with Almond Butter",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "Mix tuna, greens and dressing and spread almond butter onto orange",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Tuna Salad with an Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "Mix tuna, greens and dressing",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Turkey Burgers with Pepper Relish",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Cut onion. Slice bell peppers thinly. Shred cabbage. Season, form and cook turkey burger patties. Saute vegetables in oil until soft. Saute softened vegetables with vinegar and salt until liquid is gone and they are carmelized, then use as a relish for burgers. Serve burgers on leaves",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Turkey Pasta",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Dice zucchini and saute meat, vegetables and oil",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Turkey Sandwich with a Pickle and Apple",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Turkey Sandwich with a Pickle and Banana",
      availableMealTypes: ["6530a80f007023efd8394e34"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Turkey Tacos",
      availableMealTypes: ["6530a80f007023efd8394e36"],
      defaultPrepInstructions: "Shred cheese and lettuce",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    },
    {
      name: "Yogurt",
      availableMealTypes: ["6530a80f007023efd8394e33","6530a80f007023efd8394e35"],
      defaultPrepInstructions: "",
      user: "65299d39ec3985b27231c2d0",
      photoURL: ""
    }
  ]
module.exports= function importRecipes(){
    for(let i=0;i<recipesArray.length;i++){
        let thisNewRecipe=recipesArray[i];
        let thisRecordToAdd=new GenRecipe(thisNewRecipe);
        thisRecordToAdd.save()
            .then()
            .catch(err=>{console.log(err)})
    };
}