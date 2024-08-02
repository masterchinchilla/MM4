var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var ingredientSchema = new Schema (
    {
        name: {type: String, required: true, unique: true, maxLength: 300},
        calories: {type: Number, required: true, maxLength: 100},
        carbs: {type: Number, required: true, maxLength: 100},
        protein: {type: Number, required: true, maxLength: 100},
        fat: {type: Number, required: true, maxLength: 100},
        fiber: {type: Number, required: true, maxLength: 100},
        unitOfMeasure: {type: Schema.Types.ObjectId, ref: 'UnitOfMeasure', required: true},
        weightType: { type: Schema.Types.ObjectId, ref: 'WeightType', required: false},
        photoURL: {type: String, maxLength: 1000},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: false},
    },
    {timestamps: true}
);


//Export model
module.exports = odmLibrary.model('Ingredient', ingredientSchema);