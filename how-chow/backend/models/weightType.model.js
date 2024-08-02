var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var weightTypeSchema = new Schema(
    {
        name: {type: String, required: true, unique: true, maxLength: 100},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    },
    { timestamps: true }
);

//Export model
module.exports = odmLibrary.model('WeightType', weightTypeSchema);