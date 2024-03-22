const express = require('express')
const {createPromotion, getAllPromotions} = require('../Controllers/promotionControllers')
const promotionRouter = new express.Router()


promotionRouter.post('/create', createPromotion)
promotionRouter.get('/promotions', getAllPromotions)

module.exports = promotionRouter