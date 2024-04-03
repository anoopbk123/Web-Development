const promotionModel = require("../models/promotion").promotionModel;
const fs = require('fs')

module.exports.createPromotion = async (req, res) => {
    console.log(req.file)
    const { promotionName, promotionPrice, promotionDescription } = req.body;
    // console.log('body',req.body)
    try {
        const existingPromotion = await promotionModel.findOne({ name:promotionName });
        if (existingPromotion) {
            return res.json({
                message: 'Promotion already exists',
                status: false,
            });
        } else {
            console.log(req.file)
            const newPromotion = new promotionModel({
                name:promotionName, price:Number(promotionPrice), description:promotionDescription, image: req.file.path
            })
            await newPromotion.save()
            return res.json({
                message:'new promotion created',
                status: true
            })
        }
    } catch (err) {
        // Handle errors appropriately
        console.error(err);
        res.status(500).json({
            message: err,
            status: false,
        });
    }
};

module.exports.getAllPromotions = async(req, res)=>{
    try{
        const promotions = await promotionModel.find()
        if(!promotions){
            return res.json({
                message:'no promotions available',
                status:false
            })
        }
        res.json({
            promotions,
            status:true
        })
    }
    catch(err){
        res.json({
            message:err,
            status:false
        })
    }
}

module.exports.editPromotions = async (req, res) => {
    const{_id, price, description} = req.body
    console.log('before edit',_id, price, description)
    try{
        const edited = await promotionModel.findByIdAndUpdate(_id, {price, description})
        if(edited){
            console.log('edited',edited)
            return res.json({
                message:'promotion edited',
                status:true
            })
        }
        res.json({
            message:'failed to edit data',
            status:false
        })
    }
    catch(err){
        console.log(err)
        res.json({
            message:err,
            status:false
        })
    }

}
module.exports.deletePromotion = async (req, res) => {
    const {id} = req.params
    try{
        const deleted = await promotionModel.findByIdAndDelete(id)
        console.log(deleted)
    if(deleted){
        fs.unlink(deleted.image, (err)=>{
            if(err){
                console.log(err)
                return res.json({
                    message:'promotion deleted but cannot delete image',
                    status: true
                })
            }
        })
        console.log(deleted)
        return res.json({
            message:'deleted success fully',
            status: true
        })
    }
    }
    catch(err){
        console.log(err)
        res.json({
            message:'deletion unsuccessful',
            status:false
        })
    }
}