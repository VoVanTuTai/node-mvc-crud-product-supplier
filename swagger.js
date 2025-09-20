const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Cấu hình Swagger
const options = {
  definition: {
    openapi: "3.0.0",  // Phiên bản OpenAPI
    info: {
      title: "My RESTful API",
      version: "1.0.0",
      description: "API documentation for my project",
    },
    servers: [
      {
        url: "http://localhost:3000", // URL base của API
      },
    ],
  },
  apis: ["./routes/*.js"], // Đường dẫn tới file routes để swagger-jsdoc đọc comment
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
