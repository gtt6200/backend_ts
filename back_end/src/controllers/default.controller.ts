import { route, GET } from "awilix-express";
//estas importaciones sirven para darle un tipado a los req y res las funciones
import { Request, Response } from "express";

//el decorador indica la ruta donde va a correr ese controlador
@route('/')
export class DefaultController {

    @GET()//indica bajo que método de obtencion va a funcionar esta funcion y/o método
    public index(req: Request, res: Response): void {
        res.send({ mensaje: "running", });
    }

}