import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Node.js com Swagger",
      version: "1.0.0",
      description: "Documentação da API gerada automaticamente com Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "60f7c0a45b3c3b001c8d3c3e"
            },
            name: {
              type: "string",
              example: "Luan Ricardo"
            },
            email: {
              type: "string",
              example: "luan@example.com"
            },
          },
        },
        UserInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              example: "Luan Ricardo"
            },
            email: {
              type: "string",
              example: "luan@example.com"
            },
            password: {
              type: "string",
              example: "minhaSenhaSegura123"
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
