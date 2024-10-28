const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
 
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la categoría
 *         name:
 *           type: string
 *           description: Nombre de la categoría
 *         description:
 *           type: string
 *           description: Descripción de la categoría
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoría creada exitosamente
 */
router.post('/', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
});


/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoría obtenidas exitosamente
 */
// Obtener todas las categorías
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
});


/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoría obtenida exitosamente
 */
// Obtener una categoría por ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la categoría' });
    }
});


/**
 * @swagger
 * /categories:
 *   put:
 *     summary: Actualizar una categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 */
// Actualizar una categoría
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            await category.update(req.body);
            res.json(category);
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
});


/**
 * @swagger 
 * /categories:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200: 
 *         description: Categoría eliminada exitosamente
 */
// Eliminar una categoría
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            await category.destroy();
            res.json({ message: 'Categoría eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
});

module.exports = router;