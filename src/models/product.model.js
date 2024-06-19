const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const Product = sequelize.define('Product', {
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    barcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    purchase_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vatable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

sequelize.sync({ alter: true })
    .then(() => console.log('Database synced with alter: true'))
    .catch(err => console.log('Error syncing database', err));

module.exports = Product;
