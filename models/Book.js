const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');
 
const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

// Definir la relación de uno a muchos
Category.hasMany(Book, { foreignKey: 'CategoryId', onDelete: 'CASCADE' });
Book.belongsTo(Category, { foreignKey: 'CategoryId' });

module.exports = Book;
 