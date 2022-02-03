const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({   
    name : {
        type : String,
        required: [true, 'A pizza must have a name'],
        unique: true,
        trim: true,
    },
    price : {
        type : Number,
        required: [true, 'A pizza must have a price'],
    },
    ingredients : {
        type : [String],
        required: [true, 'A pizza must have ingredients'],
    }
})

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;