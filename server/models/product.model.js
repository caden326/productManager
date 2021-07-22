const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "must input a product"],
		maxLength: [100, "thats not a product thats a paragraph"],
		minLength: [2, "product name must be more than 2 characters"]

	},

	price: {
		type: Number,
		required: [true, "we need a price bro"]
	
	}, 
	description: {
		type: String,
		required: [true, "Product must have a description"],
		minLength: [3, "descrpition must be more than 3 characters"]
	}

},
{ timestamps: true }
);

const Products = mongoose.model("Products", ProductSchema );

module.exports = Products;