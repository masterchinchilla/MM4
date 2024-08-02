const router = require(`express`).Router();
let GenRecipeIngredient=require(`../models/genRecipeIngredient.model`);
let Ingredient=require(`../models/ingredient.model`);
let Meal=require(`../models/meal.model`);
let Day=require(`../models/day.model`);
let GenRecipe=require(`../models/genRecipe.model`);
let MealIngredient=require(`../models/mealIngredient.model`);
router.get('/:wmpID',async(req, res)=>{
    const thisWMPID=req.params.wmpID;
    const wmpFetchRspnsObj={
        days:[],
        meals:[],
        mealIngredients:[],
        wmpsGenRcpsArry:[],
        wmpsGenRcpIngrdntsArry: [],
        wmpsIngredientsArry: [],
    }
    try {
        wmpFetchRspnsObj.days=await Day.find({weekMealPlan:thisWMPID}).populate(`dayOfWeek`);
        for(let i=0;i<wmpFetchRspnsObj.days.length;i++){  
            let thisDay=wmpFetchRspnsObj.days[i]
            let thisDaysMeals=await Meal.find({day:thisDay._id}).populate(`mealType`)
            for(let i=0;i<thisDaysMeals.length;i++){
                let thisMeal=thisDaysMeals[i];
                wmpFetchRspnsObj.meals.push(thisMeal);
                let thisMlsGnRcp=await GenRecipe.findById(thisMeal.genRecipe);
                wmpFetchRspnsObj.wmpsGenRcpsArry.push(thisMlsGnRcp);
                let thisMealsMealIngrdnts=await MealIngredient.find({meal:thisMeal._id});
                for(let i=0;i<thisMealsMealIngrdnts.length;i++){
                    let thisMealIngrdnt=thisMealsMealIngrdnts[i];
                    wmpFetchRspnsObj.mealIngredients.push(thisMealIngrdnt);
                    let thisMlIngrdntsGnRcpIngrdnt=await GenRecipeIngredient.findById(thisMealIngrdnt.genRecipeIngredient);
                    // .populate(`genRecipe`);
                    wmpFetchRspnsObj.wmpsGenRcpIngrdntsArry.push(thisMlIngrdntsGnRcpIngrdnt);
                    let thisMlIngrdntsGnRcpIngrdntsIngrdnt=await Ingredient.findById(thisMlIngrdntsGnRcpIngrdnt.ingredient).populate(`user`);
                    wmpFetchRspnsObj.wmpsIngredientsArry.push(thisMlIngrdntsGnRcpIngrdntsIngrdnt);
                }
            }
        }
        res.json(wmpFetchRspnsObj);
    } catch (errs) {
        res.status(500).json([{all:`Records lookup failed, refresh, wait a moment and try again`}])
    }
});
module.exports=router; 