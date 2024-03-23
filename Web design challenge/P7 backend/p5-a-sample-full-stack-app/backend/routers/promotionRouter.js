const express = require('express')
const {createPromotion, getAllPromotions, editPromotions, deletePromotion} = require('../Controllers/promotionControllers')
const promotionRouter = new express.Router()


promotionRouter.post('/create', createPromotion)
promotionRouter.get('/promotions', getAllPromotions)
promotionRouter.put('/edit', editPromotions)
promotionRouter.delete('/delete/:id', deletePromotion)

module.exports = promotionRouter