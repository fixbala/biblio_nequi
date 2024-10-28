const express = require('express');
const sequelize = require('./config/database');
const categoryRoutes = require('./routes/categoryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Biblioteca',
            version: '1.0.0',
            description: 'API para gestionar libros y categorías en una biblioteca',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./routes/*.js'], // Archivos donde se encuentran las anotaciones de Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas para categorías y libros
app.use('/categories', categoryRoutes);
app.use('/books', bookRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
            console.log(`Documentación de Swagger disponible en http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(err => {
        console.error('Error al sincronizar con la base de datos:', err);
    });
  