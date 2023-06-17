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

app.post('/register',(req,res)=>{
    const data = req.body
    API.storeUser(data)
    res.status(200).json({"message":"success"})
})
app.get('/login',(req,res)=>{
    res.status(200).json({"message":"login page"})
})
app.post('/login',(req,res,next)=>{
    const data = req.body
    if (API.authenticateUser(data)) {
        const token = jwt.sign({ username: data.name }, 'aks', { expiresIn: '1h' });
        res.status(200).json({"token":token})
    }
    res.status(403).json({"Error":"User not authorized"})
})
app.listen(8080,()=>{
    console.log("listening on port 8080")
})

// -> Register
// -> Login and Register Page (session cookies and Integrating with React forms)
// -> Uploading profile pictures and other user data 
// -> connecting mongo db and storing data/ why mongodb (clients) / postgres sql (sequalize)/ mysql/ dynamodb (aws client)

// -> Product pages

// -> Docker Image Building (Alpine linux) 