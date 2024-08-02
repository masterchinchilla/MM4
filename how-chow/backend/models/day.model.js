var odmLibrary = require('mongoose');
var Schema = odmLibrary.Schema;
var daySchema = new Schema(
    {
        dayOfWeek: {type: Schema.Types.ObjectId, ref: 'DayOfWeek', required: true},
        weekMealPlan: {type: Schema.Types.ObjectId, ref: 'WeekMealPlan', required: true},
    },
    { timestamps: true }
);
//Export model
module.exports = odmLibrary.model('Day', daySchema);