# Node MVC CRUD Product Supplier

## Giới thiệu
Dự án Node.js sử dụng mô hình MVC để quản lý **Product** và **Supplier** với CRUD đầy đủ.

## Công nghệ
- Node.js + Express
- MongoDB + Mongoose
- EJS (View Engine)
- Bootstrap (UI)
- Swagger (API docs)

## Cấu trúc thư mục
- `models/` : Mongoose models (Product, Supplier)
- `controllers/` : Controller xử lý logic
- `routes/` : Định nghĩa routes cho Product & Supplier
- `views/` : View EJS với Bootstrap
- `public/` : File CSS/JS tĩnh
- `.env` : Cấu hình kết nối DB & PORT

## Cài đặt
```bash
git clone https://github.com/VoVanTuTai/node-mvc-crud-product-supllier.git
cd node-mvc-crud-product-supllier
npm install
npm run start
