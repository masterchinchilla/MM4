const router = require(`express`).Router();
const _ = require('lodash');

const authenticate=require(`../middleware/authenticate`);

const Meal=require(`../models/meal.model`);
const Day=require(`../models/day.model`);
const WeekMealPlan=require(`../models/weekMealPlan.model`);
const MealIngredient=require(`../models/mealIngredient.model`);

router.post(`/copy/:recordType/:id`,authenticate,async(req,res)=>{
    const origWMPId=req.params.id;
    const thisUser=req.currentUser;
    let origWMP;
    try {
        origWMP=await WeekMealPlan.findById(origWMPId);
    } catch (errs) {
        res.status(500).json([{all:JSON.stringify(errs)}])
        return;
    }
    const newWMP=_.omit(origWMP,[`_id`,`__v`,`createdAt`,`updatedAt`,`user`,`name`]);
    newWMP.user=thisUser;
    let newWMPsName=`${thisUser.handle}'s Copy of ${origWMP.name}`;
    let sameNameWMPs;
    try {
        sameNameWMPs=await WeekMealPlan.find({name:new RegExp(newWMPsName,`i`)});
    } catch (errs) {
        res.status(500).json([{all:JSON.stringify(errs)}])
        return;
    }
    if(sameNameWMPs.length>0){
        let nameUnique=false;
        let nameDupsCount=1;
        while(!nameUnique){
            let newWMPNameOption=`${newWMPsName} ${nameDupsCount++}`;
            let matchingNameWMPs;
            try {
                matchingNameWMPs=await WeekMealPlan.find({name:new RegExp(newWMPNameOption,`i`)});
                if(matchingNameWMPs.length<1){
                    newWMPsName=newWMPNameOption;
                    nameUnique=true;
                }    
            } catch (errs) {
                res.status(500).json([{all:JSON.stringify(errs)}])
                return;
            } 
        }
    }
    newWMP.name=newWMPsName;
    let savedNewWMP;
    try {
        savedNewWMP=await WeekMealPlan.create(newWMP);
    } catch (errs) {
        res.status(500).json([{all:JSON.stringify(errs)}])
        return;
    }
    let savedNewWMPId=savedNewWMP._id;
    let origWMPsDays;
    try {
        origWMPsDays=await Day.find({weekMealPlan:origWMPId}).populate(`dayOfWeek`);
    } catch (errs) {
        res.status(500).json([{all:JSON.stringify(errs)}])
        return;
    }
    for(let i=0;i<origWMPsDays.length;i++){
        let thisOrigWMPDay=origWMPsDays[i];
        let thisOrigWMPDayOfWeek=thisOrigWMPDay.dayOfWeek;
        let copyOfThisDay={
            dayOfWeek:thisOrigWMPDayOfWeek._id,
            weekMealPlan:savedNewWMPId,
            name:`${newWMPsName} - ${thisOrigWMPDayOfWeek.name}`
        };
        let savedCopyOfThisDay;
        try {
            savedCopyOfThisDay=await Day.create(copyOfThisDay);
        } catch (errs) {
            res.status(500).json([{all:JSON.stringify(errs)}])
            return;
        }
        let savedDayCopyId=savedCopyOfThisDay._id;
        let thisOrigWMPDayId=thisOrigWMPDay._id;
        let thisOrigDaysMeals;
        try {
            thisOrigDaysMeals=await Meal.find({day:thisOrigWMPDayId}).populate(`mealType`);
        } catch (errs) {
            res.status(500).json([{all:JSON.stringify(errs)}])
            return;
        }
        for(let i=0;i<thisOrigDaysMeals.length;i++){
            let thisOrigMeal=thisOrigDaysMeals[i];
            let thisOrigMealId=thisOrigMeal._id;
            let thisMealCopy=_.pick(thisOrigMeal,[`genRecipe`,`mealType`]);
            thisMealCopy.day=savedDayCopyId;
            let savedCopyOfThisMeal;
            try {
                savedCopyOfThisMeal=await Meal.create(thisMealCopy);
            } catch (errs) {
                res.status(500).json([{all:JSON.stringify(errs)}])
                return;
            }
            let savedMealCopyId=savedCopyOfThisMeal._id;
            let origMealsIngrdnts;
            try {
                origMealsIngrdnts=await MealIngredient.find({meal:thisOrigMealId});
            } catch (errs) {
                res.status(500).json([{all:JSON.stringify(errs)}])
                return;
            };
            for(let i=0;i<origMealsIngrdnts.length;i++){
                let thisOrigMealIngrdnt=origMealsIngrdnts[i];
                let thisMealIngrdntCopy=_.pick(thisOrigMealIngrdnt,[`qty`,`genRecipeIngredient`]);
                thisMealIngrdntCopy.meal=savedMealCopyId;
                let savedMealIngrdntCopy;
                try {
                    savedMealIngrdntCopy=await MealIngredient.create(thisMealIngrdntCopy);
                } catch (errs) {
                    res.status(500).json([{all:JSON.stringify(errs)}])
                    return;
                }
            }
        }
    }
    res.json(savedNewWMP)
});
module.exports=router;