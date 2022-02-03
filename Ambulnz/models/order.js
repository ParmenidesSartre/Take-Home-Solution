const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Order must have a customer's name"],
    },
    address : {
        type : String,
        required : [true, "Order must have a customer's address"],
    },
    pizzas : [
        { _id: false, pizza : {type: mongoose.Schema.Types.ObjectId, ref: 'Pizza'}, quantity : Number }
    ]
})

module.exports = mongoose.model('Order', orderSchema);