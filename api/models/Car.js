const mongoose = require('mongoose');

const CarSchema = mongoose.Schema(
    {
        brand: {type: String, required: true},
        model: {type: String, required: true},
        year: {type: Number, required: true},
        color: {type: String, required: true},
        type: {type: String},
        img: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Car', CarSchema);