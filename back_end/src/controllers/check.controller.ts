import { GET, route } from "awilix-express";
import { TestService } from "../services/test.service";
import { Request, Response } from "express";

@route('/check')
export class CheckController {
    constructor(private readonly _testService: TestService) { }
    @GET()
    public index(req: Request, res: Response): void {
        res.send({
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV
        });
    }

    @route('/test')
    @GET()
    public test(req: Request, res: Response): void {
        res.send(
            this._testService.get()
        );
    }
}