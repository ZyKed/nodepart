const express=require('express');
const bodyParser= require('body-parser');
const path=require('path');
const mongoose=require('mongoose');
const config= require('./config/database');
const networkConfig=require('./config/network');

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log("Connected to db "+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log(' database Error '+err);
});

const app=express();

const routes=require('./routes/route');

const port=networkConfig.port;

app.get('/',(req,res)=>{
    res.send('Invalid page/endpoint');
});

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port,()=>{
    console.log('server started on port'+port);
});