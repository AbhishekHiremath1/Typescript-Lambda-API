
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

 
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Lambda API',
      version: '1.0.0',
    },
    paths: {
      '/hello': {
        get: {
          summary: 'Returns a greeting message',
          parameters: [
            {
              name: 'name',
              in: 'query',
              required: false,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: {
              description: 'A greeting message',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: { type: 'string' },
                    },
                    example : {
                      message: "Hello Abhi"
                    }
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/handler.ts'],
};

const specs = swaggerJsdoc(options);
const app = express();

app.get('/hello', (req, res) => { 
  const name = req.query.name || 'World';
   res.json({ message: `Hello, ${name}` });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(3000, () => console.log('Swagger docs available at http://localhost:3000/api-docs'));


