import { createContainer, asClass } from "awilix";
import { TestService } from "./services/test.service";
import express from 'express';
import { scopePerRequest } from "awilix-express";


//recibe la lógica para registrar las dependencias
//a traves de express las dependecias que se registren estarán disponibles

//recibimos la aplicacion de express desde app.ts para poder usar sus comportamientos
export default (app: express.Application) => {
    const container = createContainer({ injectionMode: 'CLASSIC' });

    container.register({
        testService: asClass(TestService).scoped()
    });
    //le decimos a express que agregue un nuevo comportamiento. Asociando el contenedor a express
    app.use(scopePerRequest(container));
};