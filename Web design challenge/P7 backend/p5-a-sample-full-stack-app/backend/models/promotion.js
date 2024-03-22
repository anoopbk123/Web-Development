const mongoose = require('mongoose')
const promotionSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    price:{
        required:true,
        type:Number,
    },
    description:{
        required:true,
        type:String,
    },
},
{
    timestamps:true,
},)

module.exports.promotionModel = mongoose.model('promotion', promotionSchema)