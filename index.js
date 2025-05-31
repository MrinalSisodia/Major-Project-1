const express = require("express")

const app = express()
const {initializeDatabase} = require("./db/db.connect")
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
initializeDatabase()

const Products = require("./models/product.model")


async function readAllProducts() {
    try{
const allProducts = await Products.find()
    return allProducts;
    } catch (error){
        throw error
    }

        
}

app.get("/", async (req, res) =>{
    try {
          const products = await readAllProducts()
          res.status(200).json({products})
    } catch (error) {
        res.status(500).json({error: "Failed to fetch products."})
    }

})

async function readProductById(productId) {
    try{
const productById = await Products.findById(productId)
    return productById;
    } catch (error){
        throw error
    }

        
}

app.get("/products/:productId", async (req, res) =>{
    try {
          const product = await readProductById(req.params.productId)
          res.status(200).json({product})
    } catch (error) {
        res.status(500).json({error: "Failed to fetch product."})
    }

})

async function readProductByName(productName) {
    try{
const productByName = await Products.find(productName)
    return productByName;
    } catch (error){
        throw error
    }

        
}

app.get("/products/by-name/:productName", async (req, res) =>{
    try {
          const product = await readProductByName(req.params.productName)
          res.status(200).json({product})
    } catch (error) {
        res.status(500).json({error: "Failed to fetch product."})
    }

})

async function readProductsByCategory(productCategory) {
    try{
const productsByCategory = await Products.find(productCategory)
    return productsByCategory;
    } catch (error){
        throw error
    }

        
}

app.get("/products/category/:productCategory", async (req, res) =>{
    try {
          const product = await readProductsByCategory(req.params.productCategory)
          res.status(200).json({product})
    } catch (error) {
        res.status(500).json({error: "Failed to fetch products."})
    }

})


async function createProduct(newProduct){
    try {
        const product = new Products(newProduct)
        const saveProduct = await product.save()
        return saveProduct
    } catch (error) {
        throw error
    }
}

app.post("/products", async (req,res) => {
    try {
       const product = await createProduct(req.body)
        res.status(201).json({message: "Product seeded to database.", product: product})
    } catch (error) {
        res.status(500).json({error: "Failed to add product"})
    }
})


  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});