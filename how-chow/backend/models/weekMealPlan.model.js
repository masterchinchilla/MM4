var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var weekMealPlanSchema = new Schema(
    {
        name: {type: String, required: true, unique: true, minLength: 3, maxLength: 300},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        //data type in MongoDb for weights is Int32
        breakfastWeight:{type: Number, required: true},
        snack1Weight:{type: Number, required: true},
        lunchWeight:{type: Number, required: true},
        snack2Weight:{type: Number, required: true},
        dinnerWeight:{type: Number, required: true},
        dessertWeight:{type: Number, required: true},
        //data type in MongoDb for budgets is Double
        calsBudget:{type: Number, required: true},
        carbsBudget:{type: Number, required: true},
        proteinBudget:{type: Number, required: true},
        fatBudget:{type: Number, required: true},
        fiberBudget:{type: Number, required: true},
    },
    {timestamps: true}
);

//Export model
module.exports = odmLibrary.model('WeekMealPlan', weekMealPlanSchema);