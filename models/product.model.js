const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {
    type: String,
    required: true
}, 
category : {
    type: String,
    enum: ["Mens", "Womens", "Kids", "Electronics", "Home"],
    required: true
}, 

price : {
    type: Number,
    required: true
}, 
imageUrl : {
    type: String,
    required: true
}, 
rating : {
    type: String,
    required: true
},
subCategory: {
    type: String,
    required: true
} 
})

const Products = mongoose.model("Products", ProductSchema)

module.exports = Products