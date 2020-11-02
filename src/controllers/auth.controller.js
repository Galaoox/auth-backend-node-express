const { findUserByEmail, registerUser } = require('../models/auth.model');
const controller = {};

controller.login = async function (req,res) {
    
    res.json({nombre:"erick"});
    
}

controller.register = async function (req,res) {
    res.json({nombre:"erick"});
}

module.exports = controller;