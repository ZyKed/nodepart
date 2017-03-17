const express= require('express');
const router=express.Router();
const userRoute=require('./user.route');
const newsRoute=require('./news.route');

router.post('/authenticate',function(req, res){
    userRoute.authenticate(req,res);
});
router.get('/news',newsRoute.news);

module.exports=router;
