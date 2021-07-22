const Products = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Products.find()
    .then(allDaProducts => res.json({ products: allDaProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



module.exports.createProduct = (req, res) => {
  Products.create(req.body)
    .then(newProduct => res.json({ products: newProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingProduct = (req, res) => {
  Products.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true })
    .then(updatedProduct => res.json({ products: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Products.deleteOne({ _id: req.params.productId})
    .then(result => res.json({ products: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



module.exports.findOneSingleProduct = (req, res) => {
	Products.findOne({ _id: req.params.productId })
		.then(oneSingleProduct => res.json({ products: oneSingleProduct}))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


  