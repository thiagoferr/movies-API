"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const database_1 = require("./database");
const app = (0, express_1.default)();
const port = 3333;
(0, database_1.hasConnection)();
// const routes = require('./routes');
app.use(express_1.default.json());
app.use(index_1.routes);
app.listen(port, () => {
    console.log("listening on port " + port);
});
