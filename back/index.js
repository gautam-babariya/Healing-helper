const express = require("express");
const app = express();
const port = 5500;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Userdata = require('./model/Userdata');
require('dotenv').config();


app.use(cors())
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongo connection..........................
const connect = async () => {
    try {
        const mongourl = process.env.VITE_MONGO_URL;
        const database = await mongoose.connect(mongourl)
        console.log("mongo conneted!");
    } catch (error) {
        console.log("error mongo" + error);
    }
}
connect();

app.get('/', async (req, res) => {
    res.send("done");
})
app.get(`/userdata`, async (req, res) => {
    // /
    try{

        Userdata.find().then(productdata => res.json(productdata))
        .catch(err => console.log(err))
    }
    catch{
            res.send("data not catch")
    }
})

app.post('/createaccount', async (req, res) => {
    var userdata = new Userdata({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
        symptoms: req.body.symptoms,
        BloodPressure: req.body.BloodPressure,
        Weight: req.body.Weight,
        Height: req.body.Height,
        AnyMedicineCurrentTake: req.body.AnyMedicineCurrentTake,
        BodyTemperature: req.body.BodyTemperature,
        SleepTime: req.body.SleepTime,
        age: req.body.age,
        bloodgroup: req.body.bloodgroup,
        gender: req.body.gender
    });
    const savedUser = await userdata.save();
    if(savedUser){
        res.send(savedUser)
    }
    else{
        res.send("0");;
    }
});
app.post('/login', async (req, res) => {
    password = req.body.password;
    username = req.body.name;
    let user = await Userdata.findOne({ password, username}).select("-email");
    if(user){
        res.send(user);
    }
    else{
        res.send("0");
    }
})
app.post('/renderbmi', async (req, res) => {
    all = req.body;
    console.log(all);
})

// listening port..........................
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));