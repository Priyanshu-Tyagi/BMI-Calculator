const mongoose = require("mongoose");

const bmiSchema = new mongoose.Schema({
    BMI:{type:Number,required:true},
    height:{type:Number,required:true},
    weight:{type:Number,required:true},
    user_id:{type:String,required:true}
    },
    {
        timestamps : true
})

const BMImodel = mongoose.model("bmi",bmiSchema)

module.exports = {BMImodel};