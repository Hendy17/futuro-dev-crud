let products = [];
let idCounter = 1;

function createProduct(req, res) {
  const newProduct = { id: idCounter++, ...req.body };
  products.push(newProduct);
  res.json(newProduct);
}

function getAllProducts(req, res) {
  res.json(products);
}

function createProduct(req, res) {
  const { name, ...rest } = req.body;
  const newProduct = { id: idCounter++, name: name || "", ...rest };
  if (!name) {
    newProduct.name = idCounter % 2 === 0 ? "Caixa" : "Plástico";
  }
  products.push(newProduct);  
  res.json(newProduct);
}


function updateProduct(req, res) {
  const id = req.params.id;
  const updatedProduct = req.body;
  const { name, ...rest } = updatedProduct;
  products = products.map(product => {
    if (product.id === parseInt(id)) {
      return { ...product, name: name || product.name, ...rest };
    }
    return product;
  });
  const updatedProductIndex = products.findIndex(product => product.id === parseInt(id));
  res.json(products[updatedProductIndex]);
}

function deleteProduct(req, res) {
  const id = req.params.id;
  products = products.filter(product => product.id !== parseInt(id));
  res.sendStatus(204);
}

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
