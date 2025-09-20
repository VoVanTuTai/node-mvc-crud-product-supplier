const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: API quản lý nhà cung cấp
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách tất cả nhà cung cấp
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Danh sách nhà cung cấp
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
 *                     example: "Nhà cung cấp A"
 */
router.get('/', supplierController.index);

/**
 * @swagger
 * /suppliers/new:
 *   get:
 *     summary: Hiển thị form thêm nhà cung cấp mới
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Form thêm nhà cung cấp
 */
router.get('/new', supplierController.new);

/**
 * @swagger
 * /suppliers/new:
 *   post:
 *     summary: Tạo nhà cung cấp mới
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       302:
 *         description: Redirect về danh sách nhà cung cấp
 */
router.post('/new', supplierController.create);

/**
 * @swagger
 * /suppliers/{id}/edit:
 *   get:
 *     summary: Hiển thị form chỉnh sửa nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của nhà cung cấp
 *     responses:
 *       200:
 *         description: Form chỉnh sửa nhà cung cấp
 */
router.get('/:id/edit', supplierController.edit);

/**
 * @swagger
 * /suppliers/{id}/edit:
 *   post:
 *     summary: Cập nhật nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       302:
 *         description: Redirect về danh sách nhà cung cấp
 */
router.post('/:id/edit', supplierController.update);

/**
 * @swagger
 * /suppliers/{id}/delete:
 *   get:
 *     summary: Xóa nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirect về danh sách nhà cung cấp
 */
router.get('/:id/delete', supplierController.delete);

module.exports = router;
