var express = require("express");
var exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
var app = express();
const fs = require('fs');
const cors=require('cors');
const { json } = require("express");

// To run on Different port too
var HTTP_PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({origin:true}))

app.get("/", async function (req, res) {
    try {
        fs.readFile("data.json", (err, data)=>{
            console.log(JSON.parse(data))
            res.status(200).json({ data: JSON.parse(data) });
        })
    } catch (err) {
        console.log(err)
        res.status(503).json({ error: err });
    }

});


app.listen(HTTP_PORT)