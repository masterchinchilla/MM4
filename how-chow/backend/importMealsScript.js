const Meal=require('./models/meal.model');
const mealsArray=[
    {
      day: "65353b0964dc8dff25e5450b",
      mealType: "6530a80f007023efd8394e32",
      genRecipe: "6530ad47007023efd8394f6a",
      prepInstructions: "Some alternate prep instructions"
    },
    {
      day: "65353b0964dc8dff25e5450b",
      mealType: "6530a80f007023efd8394e33",
      genRecipe: "6530ad47007023efd8394f79",
    },
    {
      day: "65353b0964dc8dff25e5450c",
      mealType: "6530a80f007023efd8394e35",
      genRecipe: "6530ad47007023efd8394f7b",
    },
    {
      day: "65353b0964dc8dff25e5450d",
      mealType: "6530a80f007023efd8394e34",
      genRecipe: "6530ad47007023efd8394f90",
    },
    {
      day: "65353b0964dc8dff25e5450e",
      mealType: "6530a80f007023efd8394e36",
      genRecipe: "6530ad47007023efd8394f70",
    },
    {
      day: "65353b0964dc8dff25e5450f",
      mealType: "6530a80f007023efd8394e37",
      genRecipe: "6530ad47007023efd8394f97",
    },
    {
      day: "65353b0964dc8dff25e54510",
      mealType: "6530a80f007023efd8394e34",
      genRecipe: "6530ad47007023efd8394fc1",
    }
  ]
  module.exports= function importMeals(){
    for(let i=0;i<mealsArray.length;i++){
        let thisNewMeal=mealsArray[i];
        let thisRecordToAdd=new Meal(thisNewMeal);
        thisRecordToAdd.save()
            .then()
            .catch(err=>{console.log(err)})
    };
}