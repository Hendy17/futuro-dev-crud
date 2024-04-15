// Importando os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

// Criando uma instância do servidor Express
const app = express();

// Definindo o número da porta
const PORT = 3030;

// Aplicando middlewares globais
app.use(bodyParser.json());
app.use(loggerMiddleware);

// Rotas para CRUD de produtos
app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

// Inicializando o servidor para ouvir na porta especificada
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
