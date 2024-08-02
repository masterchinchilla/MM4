let UnitOfMeasure=require(`../models/unitOfMeasure.model`);
let WeightType=require(`../models/weightType.model`);
let Brand=require(`../models/brand.model`);
let User=require(`../models/user.model`);
let GenRecipeIngredient=require(`../models/genRecipeIngredient.model`);
let GenRecipe=require(`../models/genRecipe.model`);
let Ingredient=require(`../models/ingredient.model`);
let Meal=require(`../models/meal.model`);
let Day=require(`../models/day.model`);
let WeekMealPlan=require(`../models/weekMealPlan.model`);
let MealIngredient=require(`../models/mealIngredient.model`);
let DayOfWeek=require(`../models/dayOfWeek.model`);
let MealType=require(`../models/mealType.model`);
let PantryItem=require(`../models/pantryItem.model`);

const recordAndFieldNameDefs={
      user: {nameSntncCase:`Author`,propTypeForVal:`objRef`,PropObjModel:User,prntRcrdType:null},
      weekMealPlan: {nameSntncCase:`Week Meal Plan`,propTypeForVal:`objRef`,PropObjModel:WeekMealPlan,prntRcrdType:null},
      day: {nameSntncCase:`Day`,propTypeForVal:`objRef`,PropObjModel:Day,prntRcrdType:`weekMealPlan`},
      meal: {nameSntncCase:`Meal`,propTypeForVal:`objRef`,PropObjModel:Meal,prntRcrdType:`day`},
      genRecipe: {nameSntncCase:`Recipe`,propTypeForVal:`objRef`,PropObjModel:GenRecipe,prntRcrdType:null},
      mealIngredient: {nameSntncCase:`Meal Ingredient`,propTypeForVal:`objRef`,PropObjModel:MealIngredient,prntRcrdType:`meal`},
      genRecipeIngredient: {nameSntncCase:`Recipe Ingredient`,propTypeForVal:`objRef`,PropObjModel:GenRecipeIngredient,prntRcrdType:`genRecipe`},
      ingredient: {nameSntncCase:`Base Ingredient`,propTypeForVal:`objRef`,PropObjModel:Ingredient,prntRcrdType:null},
      unitOfMeasure: {nameSntncCase:`UOM`,propTypeForVal:`objRef`,PropObjModel:UnitOfMeasure,prntRcrdType:null},
      weightType: {nameSntncCase:`Weight Type`,propTypeForVal:`objRef`,PropObjModel:WeightType,prntRcrdType:null},
      brand: {nameSntncCase:`Brand`,propTypeForVal:`objRef`,PropObjModel:Brand,prntRcrdType:null},
      name: {nameSntncCase:`Name`,propTypeForVal:`name`,PropObjModel:null,prntRcrdType:null},
      qty: {nameSntncCase:`Qty`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      defaultQty: {nameSntncCase:`Default Qty`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      qtyHave:{nameSntncCase:`Qty Have`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      photoURL: {nameSntncCase:`Photo URL`,propTypeForVal:`url`,PropObjModel:null,prntRcrdType:null},
      dayOfWeek: {nameSntncCase:`Day of Week`,propTypeForVal:`objRef`,PropObjModel:DayOfWeek,prntRcrdType:null},
      mealType: {nameSntncCase:`Meal Type`,propTypeForVal:`objRef`,PropObjModel:MealType,prntRcrdType:null},
      defaultMealType: {nameSntncCase:`Meal Type`,propTypeForVal:`objRef`,PropObjModel:MealType,prntRcrdType:null},
      availableMealType:{nameSntncCase:`Meal Type`,propTypeForVal:`objRef`,PropObjModel:MealType,prntRcrdType:null},
      mealTypeForRecipes:{nameSntncCase:`Meal Type`,propTypeForVal:null,PropObjModel:null,prntRcrdType:null},
      pantryItem:{nameSntncCase:`Pantry Item`,propTypeForVal:`objRef`,PropObjModel:PantryItem,prntRcrdType:null},
      prepInstructions:{nameSntncCase:`Prep Instructions`,propTypeForVal:`textBox`,PropObjModel:null,prntRcrdType:null},
      defaultPrepInstructions: {nameSntncCase:`Prep Instructions`,propTypeForVal:`textBox`,PropObjModel:null,prntRcrdType:null},
      calories: {nameSntncCase:`Calories`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      calsBudget:{nameSntncCase:`Calories Budget`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      carbs: {nameSntncCase:`Carbs`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      carbsBudget: {nameSntncCase:`Carbs Budget`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      protein: {nameSntncCase:`Protein`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      proteinBudget: {nameSntncCase:`Protein Budget`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      fat: {nameSntncCase:`Fat`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      fatBudget: {nameSntncCase:`Fat Budget`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      fiber: {nameSntncCase:`Fiber`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      fiberBudget: {nameSntncCase:`Fiber Budget`,propTypeForVal:`float`,PropObjModel:null,prntRcrdType:null},
      breakfastWeight: {nameSntncCase:`Breakfast Weight`,propTypeForVal:`floatPercent`,PropObjModel:null,prntRcrdType:null},
      snack1Weight: {nameSntncCase:`Snack 1 Weight`,propTypeForVal:`floatPercent`,PropObjModel:null,prntRcrdType:null},
      lunchWeight: {nameSntncCase:`Lunch Weight`,propTypeForVal:`floatPercent`,PropObjModel:null,prntRcrdType:null},
      snack2Weight: {nameSntncCase:`Snack 2 Weight`,propTypeForVal:`floatPercent`,PropObjModel:null,prntRcrdType:null},
      dinnerWeight: {nameSntncCase:`Dinner Weight`,propTypeForVal:`floatPercent`,PropObjModel:null,prntRcrdType:null},
      dessertWeight: {nameSntncCase:`Dessert Weight`,propTypeForVal:`floatPercent`,PropObjModel:null,prntRcrdType:null},
      createdAt: {nameSntncCase:`Date Created`,propTypeForVal:null,PropObjModel:null,prntRcrdType:null},
      updatedAt: {nameSntncCase:`Last Update`,propTypeForVal:null,PropObjModel:null,prntRcrdType:null},
      _id:{nameSntncCase:`ID`,propTypeForVal:null,PropObjModel:null,prntRcrdType:null},
      __v:{nameSntncCase:`V`,propTypeForVal:null,PropObjModel:null,prntRcrdType:null}
}
module.exports={recordAndFieldNameDefs};