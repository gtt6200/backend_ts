import { route, GET } from "awilix-express";
//estas importaciones sirven para darle un tipado a los req y res las funciones
import { Request, Response } from "express";
import { TestService } from '../services/test.service';

//el decorador indica la ruta donde va a correr ese controlador
@route('/')
export class DefaultController {

    constructor(private readonly _testService: TestService) { }
    //constructor(private testService = new TestService()){}
    @GET()//indica bajo que método de obtencion va a funcionar esta funcion y/o método
    public index(req: Request, res: Response): void {


        res.send({
            mensaje: "hola, si funciona",
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV
        });
    }

    @route('test')
    @GET()
    public test(req: Request, res: Response) {
        res.send(
            // this.testService.get()
            this._testService.get()
        );
    }
}