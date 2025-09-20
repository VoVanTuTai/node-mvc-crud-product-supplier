require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected...");

    // Xóa dữ liệu cũ
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    // Thêm supplier mẫu
    const suppliers = await Supplier.insertMany([
      { name: "Supplier A", address: "Hà Nội", phone: "0123456789" },
      { name: "Supplier B", address: "TP. HCM", phone: "0987654321" },
      { name: "Supplier C", address: "Đà Nẵng", phone: "0911222333" },
    ]);

    console.log("✅ Suppliers inserted");

    // Thêm products mẫu (liên kết với suppliers)
    await Product.insertMany([
      { name: "Product 1", price: 100, quantity: 10, supplier: suppliers[0]._id },
      { name: "Product 2", price: 200, quantity: 5, supplier: suppliers[1]._id },
      { name: "Product 3", price: 150, quantity: 8, supplier: suppliers[2]._id },
    ]);

    console.log("✅ Products inserted");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedData();
