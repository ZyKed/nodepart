const userService=require('../services/user.service');
function authenticate(req,res){
    const username=req.body.username;
    const password= req.body.password;
    userService.authenticate(username,password,function(err,user){
            console.log(err);
            if(err) 
                return res.json({success: false, message:'some error'+err});
            if(!user){
                return res.json({success: false, message: 'user not found'}); 
            }else{
                return res.json({success: true,message:'done'});
            }

        });
}
module.exports=authenticate;