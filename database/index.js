"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.hasConnection = void 0;
const sequelize_1 = require("sequelize");
const DB_NAME = "movies";
const DB_USER = "root";
const DB_PASSWORD = "Reisferreira312!";
// const DB_CONFIG = {
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3306,
// }
// let sequelize = new Sequelize();
// try {
let db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});
exports.db = db;
// } catch (err) {
//     console.error("Erro ao carregar o banco de dados", err);
// }
async function hasConnection() {
    try {
        await db.authenticate();
        console.log("SGBD autenticado com sucesso!");
    }
    catch (error) {
        console.log("Erro ao carregar na autenticação...", error);
    }
}
exports.hasConnection = hasConnection;
