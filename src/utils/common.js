
const jwt  = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

module.exports = {
    createToken : function (user) {
        return jwt.sign({ id: user.id, email: user.email }, jwtSecret);
    }
}