# API Biblioteca

## Descripción

Este proyecto es una API RESTful para la gestión de una biblioteca, desarrollada con **Node.js** y **Express**. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para libros y categorías, almacenando los datos en una base de datos relacional. La documentación de la API se ha realizado utilizando **Swagger**, lo cual facilita la consulta y prueba de los endpoints.

## Funcionalidades del Proyecto

### Funcionalidades básicas

La API permite realizar las siguientes operaciones:

1. **Categorías**:
   - Crear una nueva categoría.
   - Listar todas las categorías.
   - Obtener una categoría por su ID.
   - Actualizar una categoría.
   - Eliminar una categoría.

2. **Libros**:
   - Crear un nuevo libro asociado a una categoría.
   - Listar todos los libros.
   - Obtener un libro por su ID.
   - Actualizar un libro.
   - Eliminar un libro.

### Funcionalidades adicionales implementadas

Para hacer el proyecto más robusto y llamativo, se han agregado algunas funcionalidades adicionales:

- **Campos adicionales en Categorías**: Las categorías tienen un campo `description`, que permite dar más detalles sobre la categoría.
- **Manejo de errores mejorado**: Se ha implementado un manejo de errores adecuado para casos comunes como la creación de libros en categorías inexistentes, búsqueda de IDs que no existen, etc.
- **Documentación con Swagger**: La API está completamente documentada con Swagger, permitiendo visualizar y probar cada endpoint de manera interactiva.
- **Estructuración clara del código**: El proyecto sigue buenas prácticas de organización de código y está documentado para que sea fácil de entender y mantener.

## Tecnologías Utilizadas

- Node.js
- Express
- Sequelize (ORM para la base de datos relacional)
- SQLite (como base de datos para almacenamiento)
- Swagger (para la documentación interactiva de la API)
- Postman (para pruebas de API)

## Documentación de Swagger

La documentación de Swagger se encuentra disponible en `http://localhost:3000/api-docs` una vez que la API está en ejecución. Swagger proporciona una interfaz gráfica donde se pueden probar todos los endpoints de la API.

## Estructura del Proyecto


```plaintext
API_BIBLIOTECA
├── config
│   └── database.js        # Configuración de la base de datos
├── models
│   ├── Book.js            # Modelo para libros
│   └── Category.js        # Modelo para categorías
├── routes
│   ├── bookRoutes.js      # Rutas de libros
│   └── categoryRoutes.js  # Rutas de categorías
├── index.js               # Archivo principal de la API
├── package.json           # Dependencias del proyecto
└── README.md              # Documentación del proyecto


## Instalación y Configuración
**clonar el repositorio:**
git clone https://github.com/tu_usuario/api-biblioteca.git
cd api-biblioteca

**instalar dependencias:**
npm install

**Ejecutar el Servidor:** 
node index.js 
