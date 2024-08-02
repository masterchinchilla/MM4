var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var mealIngredientSchema = new Schema(
    {
        qty: {type: Number, required: true, maxLength: 100},
        genRecipeIngredient: {type: Schema.Types.ObjectId, ref: 'GenRecipeIngredient', required: true},
        meal: {type: Schema.Types.ObjectId, ref: 'Meal', required: true},
    },
    { timestamps: true }
);

//Export model
module.exports = odmLibrary.model('MealIngredient', mealIngredientSchema);