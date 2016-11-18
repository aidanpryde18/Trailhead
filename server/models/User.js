//Mongoose User Schema Creation

var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type:String, required:'PATH is required!'},
    lastName: {type:String, required:'PATH is required!'},
    username: {
        type:String,
        required:'PATH is required!',
        unique:true
    },
    salt: {type:String, required:'PATH is required!'},
    hashed_pwd: {type:String, required:'PATH is required!'},
    emailHash: String,
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function (role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User', userSchema);

// Creates a Couple of Default User Accounts
exports.createDefaultUsers = function () {
    User.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            var salt, hash, hashed_email;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'aidanpryde18');
            hashed_email = encrypt.hashEmail('aidanpryde18@gmail.com');
            User.create({firstName: 'Billy',lastName:'Wyatt',username:'aidanpryde18@gmail.com', salt: salt, hashed_pwd: hash, emailHash: hashed_email, roles:['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'johndoe');
            hashed_email = encrypt.hashEmail('johndoe@johndoe.com');
            User.create({firstName: 'John',lastName:'Doe',username:'johndoe@johndoe.com', salt: salt, hashed_pwd: hash, emailHash: hashed_email, roles:[]});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'tonyalover1');
            hashed_email = encrypt.hashEmail('tonyalover1@gmail.com');
            User.create({firstName: 'Jeff',lastName:'Gilouly',username:'tonyalover1@gmail.com', salt: salt, hashed_pwd: hash, emailHash: hashed_email});
        }
    })
};