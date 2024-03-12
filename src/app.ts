process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';



//env files
import dotenv from 'dotenv';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);


import express from "express";
import { correoRoutes } from './routes/correoRoutes';
import cors from "cors";
import bodyParser from 'body-parser';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(correoRoutes);

app.get('/', (req, res) => {
    res.send('corriendo... bien recio');
});


export { app };