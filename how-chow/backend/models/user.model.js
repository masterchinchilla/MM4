const odmLibrary = require('mongoose');
odmLibrary.Schema.Types.Boolean.convertToFalse.add('');
const Schema = odmLibrary.Schema;
const userSchema = new Schema(
    {
       namePrefix: {type: String, maxLength: 100},
       givenName: {type: String, required: true, maxLength: 100},
       middleName: {type: String, maxLength: 100},
       familyName: {type: String, required: true, maxLength: 100},
       nameSuffix: {type: String, maxLength: 100},
       email: {type: String, required: true, match: /.+\@.+\..+/, unique: true, minLength:5,maxLength: 255},
       password: { type: String, required: true, minLength: 3, maxLength: 1024},
       handle: {type: String, required: true, unique: true, minLength: 3, maxLength: 100},
       photoURL: {type: String, maxLength: 1000},
       certURL: {type: String, maxLength: 1000},
       certName: {type: String, maxLength: 1000},
       verified: {type: Boolean},
       isAdmin:{type:Boolean}
    },
    { timestamps: true }
);
module.exports = odmLibrary.model('User', userSchema);