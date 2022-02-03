const orders = require('../models/order')

exports.getAllOrders = async (req, res) => {
    const allOrders = await orders.find({})
    res.status(200).json({
      status: 'success',
      length: allOrders.length,
      data: allOrders,
    })
  }
  
exports.createNewOrders = async (req, res) => {
    const newOrder = await orders.create(req.body)
    res.status(201).json({
      status: 'success',
      data: newOrder,
    })
  }

exports.getOrderById = async (req, res) => {
    const order = await orders.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: order,
    })
}