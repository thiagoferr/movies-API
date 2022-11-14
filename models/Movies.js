"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const Movies = database_1.db.define('movie', {
    movie_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    budget: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    homepage: {
        type: sequelize_1.DataTypes.STRING,
    },
    overview: {
        type: sequelize_1.DataTypes.STRING,
    },
    popularity: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    release_date: {
        type: sequelize_1.DataTypes.DATE,
    },
    revenue: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    runtime: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    movie_status: {
        type: sequelize_1.DataTypes.STRING,
    },
    tagline: {
        type: sequelize_1.DataTypes.STRING,
    },
    vote_average: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    vote_count: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: "movie",
    timestamps: false,
});
exports.Movies = Movies;
