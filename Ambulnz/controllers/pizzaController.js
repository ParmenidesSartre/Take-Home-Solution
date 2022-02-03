const pizzas = require('../models/pizzas')

exports.getAllPizzas = async (req, res) => {
    const allPizzas = await pizzas.find({})
    res.status(200).json({
      status: 'success',
      length: allPizzas.length,
      data: allPizzas,
    })
}   