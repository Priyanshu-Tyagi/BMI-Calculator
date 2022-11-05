const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { Usermodel } = require("./models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { authentication } = require("./middleware/authentication");
const { BMImodel } = require("./models/BMI.model");
require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const isUser = await Usermodel.findOne({ email })
    if (isUser) {
        res.send({ "msg": "User already exists, try logging in" })
    }
    else {
        bcrypt.hash(password, 4, async function (err, hash) {
            if (err) {
                res.send({ "msg": "something went wrong, please try again" })
            }
            const new_user = new Usermodel({
                name,
                email,
                password: hash
            })
            try {
                await new_user.save()
                res.send({ "msg": "Sign up successful" })
            } catch (err) {
                res.send({ "msg": "Something went wrong, please try again" })
            }

        })
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Usermodel.findOne({ email })
    const hashed_password = user.password;
    const user_id = user._id;
    bcrypt.compare(password, hashed_password, function (err, result) {
        if (err) {
            res.send({ "msg": "something went wrong, please try again" })
        }
        if (result) {
            const token = jwt.sign({ user_id }, process.env.Secret_KEY)
            res.send({ message: "login successfull", token })
        }
        else {
            res.send({ "msg": "Login failed" })
        }
    })
})

app.get("/getProfile", authentication, async (req, res) => {
    const { user_id } = req.body
    const user = await Usermodel.findOne({ _id: user_id })
    console.log(user)
    const { name, email } = user
    res.send({ name, email })
})

app.post("/calculateBMI", authentication, async (req, res) => {
    const { height, weight, user_id } = req.body;
    const height_in_metre = Number(height) * 0.3048
    const BMI = Number(weight) / (height_in_metre) ** 2
    const new_bmi = new BMImodel({
        BMI,
        height: height_in_metre,
        weight,
        user_id
    })
    await new_bmi.save()
    res.send({ BMI })
})

app.get("/getcalculation", authentication, async (req, res) => {
    const { user_id } = req.body
    const all_bmi = await BMImodel.find({ user_id: user_id })
    res.send(all_bmi)
})

app.listen(process.env.PORT, async (req, res) => {
    try {
        await connection;
        console.log({"msg":"Connected to DB successfully"})
    } catch (err) {
        console.log({"msg":"Connection to DB failed"})
        console.log(err)
    }
    console.log(`listening on http://localhost:${process.env.PORT}`)
})