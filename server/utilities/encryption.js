// Encryption methods. Create salts and has passwords for security
var crypto = require('crypto');

exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPwd = function(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
};

exports.hashEmail = function(email) {
    var mail = email.toLowerCase();
    var mailHash = crypto.createHash('md5').update(mail).digest("hex");
    return mailHash;
}