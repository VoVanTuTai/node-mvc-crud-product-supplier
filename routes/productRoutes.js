const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API quản lý sản phẩm
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy danh sách tất cả sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "64f9c0b2e0d7a1a2b0c8a123"
 *                   name:
 *                     type: string
 *                     example: "Sản phẩm A"
 *                   supplier:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "64f9c0b2e0d7a1a2b0c8a123"
 *                       name:
 *                         type: string
 *                         example: "Nhà cung cấp A"
 */
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('supplier');
    res.render('products/index', { products });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi server');
  }
});

/**
 * @swagger
 * /products/new:
 *   get:
 *     summary: Trang thêm sản phẩm mới
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Form thêm sản phẩm
 */
router.get('/new', async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('products/new', { suppliers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi server');
  }
});

/**
 * @swagger
 * /products/new:
 *   post:
 *     summary: Tạo sản phẩm mới
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               supplier:
 *                 type: string
 *     responses:
 *       302:
 *         description: Redirect về danh sách sản phẩm
 */
router.post('/new', async (req, res) => {
  try {
    const { name, address, phone, supplier } = req.body;
    const product = new Product({ name, address, phone, supplier });
    await product.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi server');
  }
});

module.exports = router;
