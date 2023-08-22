const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    company: String,
    rating: Number,
    featured: Boolean
})

module.exports = mongoose.model("Product", productSchema)