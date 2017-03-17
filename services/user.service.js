const userModel= require('../models/user-model');
const User=userModel.service;

function authenticate(username, password,callback){
    User.checkUserExists(username,password,callback);
}