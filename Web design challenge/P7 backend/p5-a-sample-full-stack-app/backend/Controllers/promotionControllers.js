const promotionModel = require("../models/promotion").promotionModel;

module.exports.createPromotion = async (req, res) => {
    const { promotionName, promotionPrice, promotionDescription } = req.body;
    console.log('body',req.body)
    try {
        const existingPromotion = await promotionModel.findOne({ name:promotionName });
        if (existingPromotion) {
            return res.json({
                message: 'Promotion already exists',
                status: false,
            });
        } else {
            const newPromotion = new promotionModel({
                name:promotionName, price:Number(promotionPrice), description:promotionDescription
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
            message: 'Internal server error',
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