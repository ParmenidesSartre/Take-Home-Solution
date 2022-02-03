const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// Routes
const pizzaRoutes = require('./routes/pizzaRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Routers
app.use('/api/pizzas', pizzaRoutes)
app.use('/api/orders', orderRoutes)

module.exports = app
