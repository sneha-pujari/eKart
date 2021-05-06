var faker = require('faker');

faker.seed(1024);
const products = [...Array(50).map((item) => ({
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  rating: faker.finance.amount(1, 5, 1),
  category: faker.random.arrayElement([
    "cycling", "hiking", "running",
  ]),
}))];

module.exports = products;