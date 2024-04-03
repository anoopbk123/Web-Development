const express = require('express')
const {createPromotion, getAllPromotions, editPromotions, deletePromotion} = require('../Controllers/promotionControllers')
const upload = require('../Middlewares/multerConfig')
const promotionRouter = new express.Router()


promotionRouter.post('/create', upload.single('promotionImage'), createPromotion)
promotionRouter.get('/promotions', getAllPromotions)
promotionRouter.put('/edit', editPromotions)
promotionRouter.delete('/delete/:id', deletePromotion)

module.exports = promotionRouter