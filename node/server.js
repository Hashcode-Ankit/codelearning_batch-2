const express = require('express')
const cors=require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express()
const API = require('./api')
app.use(cors({origin:true}))
app.use(bodyParser.json());
// Before creating any api thinks to remember
// 1. The api endpoint 
// 2. Api Contract 
// 3. What is your success response and error response
// Every api is two way communication  tcp and udp 
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

function isUserLogin(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, 'aks', (err, username) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.name = username;
      next();
    });
}
app.get('/codes-learning/:id',(req,res)=>{  
    const id = req.params["id"]
    console.log("here is id received : ",id)
    res.send("here is data received")
})
app.post('/user-details',isUserLogin,(req,res)=>{
    const data = req.body
    API.storeDataInJsonFile(data)
    res.status(200).json({"message":"success"})
})

app.get('/user-details',isUserLogin,(req,res)=>{
    const data =  API.getAllUsers()
    res.status(200).json({"Users":data})
})
app.post('/register',(req,res)=>{
    try{
        const data = req.body
        API.registerUser(data).then((data)=>{
            res.status(200).json({"message":"success"})
        }).catch((err)=>{
            res.status(401).json({"error":err})
        })
    }catch(err){
        res.status(401).json({"error":"an exception occurs"+err})
    }
    
})
app.get('/login',(req,res)=>{
    res.status(200).json({"message":"login page"})
})
app.post('/login',(req,res,next)=>{
    const data = req.body
    if (API.authenticateUser(data)) {
        const token = jwt.sign({ username: data.name }, 'aks', { expiresIn: '1h' });
        res.status(200).json({"token":token})
    }else{
        res.status(403).json({"Error":"User not authorized"})
    }
})
app.get('/user/:username',(req,res,next)=>{
 API.getUserFromMongo(req.params.username).then((data)=>{
    res.status(200).json({"user":data})
 }).catch((err)=>{
    res.status(401).json({"error":err})
 })
})
app.delete('/user/:username',(req,res,next)=>{
 API.deleteUserFromMongo(req.params.username).then((data)=>{
    res.status(200).json({"user":"user deleted"})
 }).catch((err)=>{
    res.status(401).json({"error":err})
 })
})
app.listen(8080,()=>{
    API.initMongo().then(()=>{
        console.log("listening on port 8080")
    }).catch((err)=>{
        console.log("error initializing mongodb")
    })
})

// -> Register
// -> Login and Register Page (session cookies and Integrating with React forms)
// -> Uploading profile pictures and other user data 
// -> connecting mongo db and storing data/ why mongodb (clients) / postgres sql (sequalize)/ mysql/ dynamodb (aws client)

// -> Product pages

// -> Docker Image Building (Alpine linux) 