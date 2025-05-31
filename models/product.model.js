const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {
    type: String,
    required: true
}, 
category : {
    type: String,
    required: true
}, 

price : {
    type: Number,
    required: true
}, 
image : {
    type: String,
    required: true
}, 
rating : {
    type: String,
    required: true
}, 
})

const Products = mongoose.model("Products", ProductSchema)

module.exports = Products