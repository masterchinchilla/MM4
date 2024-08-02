
const MealIngredient=require('./models/mealIngredient.model');

const mealIngrdntsArray=[
    {genRecipeIngredient: "653317cc007023efd83950ba",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d20"
    },
    {genRecipeIngredient: "653317cc007023efd83950bb",
      qty: 0.50,
      
      meal: "65353d28bba0f64e5d901d20"
    },
    {genRecipeIngredient: "653317cc007023efd83950bc",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d20"
    },
    {genRecipeIngredient: "653317cc007023efd83950bd",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d20"
    },
    {genRecipeIngredient: "653317cc007023efd83950be",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d20"
    },
    {genRecipeIngredient: "653317cc007023efd83950a4",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d21"
    },
    {genRecipeIngredient: "653317cc007023efd83950a5",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d21"
    },
    {genRecipeIngredient: "653317cc007023efd83950a6",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d21"
    },
    {genRecipeIngredient: "653317cc007023efd83950a8",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d22"
    },
    {genRecipeIngredient: "653317cc007023efd83950a9",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d22"
    },
    {genRecipeIngredient: "653317cc007023efd8395103",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d23"
    },
    {genRecipeIngredient: "653317cc007023efd8395104",
      qty: 4.00,
      
      meal: "65353d28bba0f64e5d901d23"
    },
    {genRecipeIngredient: "653317cc007023efd8395105",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d23"
    },
    {genRecipeIngredient: "653317cc007023efd8395106",
      qty: 4.00,
      
      meal: "65353d28bba0f64e5d901d23"
    },
    {genRecipeIngredient: "653317cc007023efd8395197",
      qty: 0.13,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd8395198",
      qty: 0.13,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd8395199",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839519a",
      qty:6.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839519b",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839519c",
      qty: 2.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839519d",
      qty: 0.25,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839519e",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839519f",
      qty: 0.13,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd83951a0",
      qty: 3.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd83951a1",
      qty: 3.00,
      
      meal: "65353d28bba0f64e5d901d24"
    },
    {genRecipeIngredient: "653317cc007023efd839512e",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d25"
    },
    {genRecipeIngredient: "653317cc007023efd839512f",
      qty: 10.00,
      
      meal: "65353d28bba0f64e5d901d25"
    },
    {genRecipeIngredient: "653317cc007023efd83951fe",
      qty: 0.50,
      
      meal: "65353d28bba0f64e5d901d26"
    },
    {genRecipeIngredient: "653317cc007023efd83951ff",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d26"
    },
    {genRecipeIngredient: "653317cc007023efd8395200",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d26"
    },
    {genRecipeIngredient: "653317cc007023efd8395201",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d26"
    },
    {genRecipeIngredient: "653317cc007023efd8395202",
      qty: 1.00,
      
      meal: "65353d28bba0f64e5d901d26"
    },
    {genRecipeIngredient: "653317cc007023efd8395203",
      qty: 3.00,
      
      meal: "65353d28bba0f64e5d901d26"
    },
    {genRecipeIngredient: "653317cc007023efd8395204",
      qty: 5.60,
      
      meal: "65353d28bba0f64e5d901d26"
    }
  ]
  module.exports= function importMealIngrdnts(){
    for(let i=0;i<mealIngrdntsArray.length;i++){
        let thisNewMealIngredient=mealIngrdntsArray[i];
        let thisRecordToAdd=new MealIngredient(thisNewMealIngredient);
        thisRecordToAdd.save()
            .then()
            .catch(err=>{console.log(err)})
    };
}