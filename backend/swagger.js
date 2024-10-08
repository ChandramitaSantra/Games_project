const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Game CRUD API',
      version: '1.0.0',
      description: 'API for managing games',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Your API base URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API docs
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
