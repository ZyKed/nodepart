const mongoose= require('mongoose');
const config= require('../config/database');

//user schema
const UserSchema= mongoose.Schema({
      username: {
          type: String,
          required: true
      },
      password: {
          type: String,
          required: true
      },
      location: {
          type: String,
          required: false
      },
      lat: {
          type: Number,
          required: false
      },
      long: {
          type: Number,
          required: false
      }

});

const User=mongoose.model('User',UserSchema,'MyCollection');
checkUserExists= function(username,password,callback){
    const query={username:username,password:password};
    User.findOne(query,callback);
}

//json of method refereces to be exposed
var service={
    checkUserExists:checkUserExists
};

//exporting json
module.exports=service;
