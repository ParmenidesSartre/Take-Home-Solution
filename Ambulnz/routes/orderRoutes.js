const express = require('express')
const orderController = require('../controllers/orderController')
const router = express.Router()

router
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createNewOrders)

router.route('/:id').get(orderController.getOrderById)

module.exports = router
