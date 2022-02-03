const express = require('express');
const pizzaController = require('../controllers/pizzaController');
const router = express.Router()


router.route('/').get(pizzaController.getAllPizzas)

module.exports = router