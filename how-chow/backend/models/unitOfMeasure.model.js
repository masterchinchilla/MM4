var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var UOMSchema = new Schema(
    {
        name: {type: String, required: true, unique: true, maxLength: 100},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    },
    { timestamps: true }
);
module.exports = odmLibrary.model('UnitOfMeasure', UOMSchema);