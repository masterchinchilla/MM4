var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var genRecipeSchema = new Schema(
    {
        name: {type: String, required: true, unique: true, maxLength: 300},
        availableMealTypes: {type:[{"type":Schema.Types.ObjectId, "ref":"MealType"}], required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        defaultPrepInstructions: {type: String, maxLength: 3000},
        photoURL: {type: String, maxLength: 1000}
    },
    { timestamps: true }
);
module.exports = mongoose.model('GenRecipe', genRecipeSchema);