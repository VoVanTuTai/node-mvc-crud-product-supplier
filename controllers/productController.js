const Product = require('../models/Product');
const Supplier = require('../models/Supplier');
// controllers/productController.js

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('supplier'); // thêm populate
    res.render('products/index', { products });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Form thêm mới
exports.new = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render('products/new', { suppliers });
};

// Thêm mới
exports.create = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/products');
};

// Form chỉnh sửa
exports.edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const suppliers = await Supplier.find();
  res.render('products/edit', { product, suppliers });
};

// Cập nhật
exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/products');
};

// Xóa
exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};
