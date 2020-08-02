const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const products = [];

app.get("/products", (request, response) => {
  return response.json(products)
});

app.post("/products", (request, response) => {
  const { title, image_url, price } = request.body;

  const product = {
    id: uuid(),
    title,
    image_url,
    price
  }

  products.push(product);

  return response.json(product);
});

module.exports = app;
