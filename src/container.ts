import express from 'express';
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { TestService } from './services/test.service';


//recibe la lógica para registrar las dependencias
//a traves de express las dependecias que se registren estarán disponibles

//recibimos la aplicacion de express desde app.ts para poder usar sus comportamientos
export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    try {
        container.register({
            //la variable declarada del servicio de esta sección deberá ser el mismo que se vaya a usar en el constructor donde 
            //se vaya a utilizar la dependencia
            _testService: asClass(TestService).scoped()
        });

        //le decimos a express que agregue un nuevo comportamiento. Asociando el contenedor a express
        app.use(scopePerRequest(container));

    } catch (error) {
        console.log(error);
    }
};