const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./data/products.json');

dotenv.config();

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    // Optional: clear existing collection
    // await Product.deleteMany({});

    const result = await Product.insertMany(products);
    console.log(`Inserted ${result.length} products`);

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.disconnect();
  }
}

seedDB();
