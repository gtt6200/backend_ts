process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';



//env files
import dotenv from 'dotenv';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);

//crear servicio express y uso de rutas
import express from "express";
// import { correoRoutes } from './routes/correoRoutes';
// import cors from "cors";
// import bodyParser from 'body-parser';
import { loadControllers } from 'awilix-express';
import loadContainer from './container';

const app: express.Application = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(correoRoutes);


// Hago uso del contenedor y le mando la app definida instanciada aquí
loadContainer(app);


//importo y hago uso de los controladores
app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
));

export { app };




//importacion del contenedor apara la resolucion de dependecias IoC
// import { TestService } from './services/test.service';

// const testService = container.resolve<TestService>('testService');
// console.log(testService.get());