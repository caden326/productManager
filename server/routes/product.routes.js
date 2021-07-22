const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/products/", ProductController.findAllProducts);

  app.post("/api/products/new/", ProductController.createProduct);

  app.get("/api/products/find/:productId", ProductController.findOneSingleProduct);

  app.put("/api/products/update/:productId", ProductController.updateExistingProduct);

  app.delete("/api/products/delete/:productId", ProductController.deleteAnExistingProduct);
};


