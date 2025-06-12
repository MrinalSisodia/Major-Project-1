const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Products = require("./models/product.model");
const products = require("./data/products.json");

const MONGODB_URI = process.env.MONGODB;

async function seedDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    await Products.deleteMany({});

    const result = await Products.insertMany(products);
    console.log(`Inserted ${result.length} products`);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding data:", error);
    await mongoose.disconnect();
  }
}

seedDB();
