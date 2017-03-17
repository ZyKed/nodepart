const newsModel= require('../models/news.model');
const News=newsModel.service;
function news(callback){
    News.getNews(callback);
    
}
module.exports.news=news;