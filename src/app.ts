import express from 'express';
import { routes } from './routes/index';
import { hasConnection } from './database'

const app = express();
const port = 3333;
hasConnection();

// const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(port,() => {
    console.log("listening on port " + port);
});
