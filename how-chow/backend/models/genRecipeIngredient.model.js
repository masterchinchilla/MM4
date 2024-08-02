var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var genRecipeIngredientSchema = new Schema(
    {
        defaultQty: {type: Number, required: true, maxLength: 100},
        ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient', required: true},
        genRecipe: {type: Schema.Types.ObjectId, ref: 'GenRecipe', required: true},
        defaultPrepInstructions: {type: String, maxLength: 3000},
    },
    { timestamps: true }
);

//Export model
module.exports = odmLibrary.model('GenRecipeIngredient', genRecipeIngredientSchema);