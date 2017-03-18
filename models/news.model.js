const mongoose= require('mongoose');
const config= require('../config/database');

//newsSchema
const NewsSchema= mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    },
    shares: {
        type: Number,
        required: true
    },
    imagepath: {
        type: String,
        required: false
    }
    
});

const News=mongoose.model('News',NewsSchema,'collection2');

getNews=function(callback){
    News.find({},function(err,result){
        if(!err)
            callback(null,result);
        else 
            callback(err,null);

    });
}

var service={};

service.getNews=getNews;

module.exports=service;