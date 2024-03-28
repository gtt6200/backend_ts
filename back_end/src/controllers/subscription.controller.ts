import { DELETE, GET, POST, PUT, route } from "awilix-express";
import { SubscriptionService } from "../services/subscription.service";
import { Request, Response } from "express";
import { BaseController } from "../common/controllers/base.controller";
import { SubscriptionCreateDtoInterface, SubscriptionUpdateDtoInterface } from "../dtos/subscription.dto.interface";


@route('/subscriptions')
export class SubscriptionController extends BaseController {
    constructor(private readonly _subscriptionService: SubscriptionService) {
        super();
    }

    @GET()
    public async all(req: Request, res: Response) {
        try {
            res.status(200).send(
                await this._subscriptionService.all()
            )
        } catch (error) {
            this.handleException(error, res);
        }
    }
    @route(':id')
    @GET()
    public async find(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);

            res.send(
                await this._subscriptionService.find(id)
            );
        } catch (error) {
            this.handleException(error, res);
        }
    }
    @POST()
    public async store(req: Request, res: Response) {
        try {
            //const [user_id, code, amount, cron] = req.body;
            await this._subscriptionService.store({
                user_id: req.body.user_id,
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            } as SubscriptionCreateDtoInterface);
            res.status(200).send();
        } catch (error) {
            this.handleException(error, res);
        }
    }
    @route(':id')
    @PUT()
    public async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            //const body: SubscriptionUpdateDtoInterface = req.body;
            await this._subscriptionService.update(id, {
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            } as SubscriptionUpdateDtoInterface);
            res.send();
        } catch (error) {
            this.handleException(error, res);
        }
    }
    @route(':id')
    @DELETE()
    public async remove(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await this._subscriptionService.remove(id);
            res.send();
        } catch (error) {
            this.handleException(error, res);
        }
    }

}