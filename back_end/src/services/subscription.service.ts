import { ApplicationException } from "../common/exceptions/application.exception";
import { SubscriptionCreateDtoInterface, SubscriptionUpdateDtoInterface } from "../dtos/subscription.dto.interface";
import { SubscriptionInterface } from "./repositories_services/domain_services/subscription.domain.interface";
import { SubscriptionRepositoryInterface } from "./repositories_services/subscription.repository.interface";

export class SubscriptionService {
    constructor(private readonly _subscriptionRepositoryService: SubscriptionRepositoryInterface) { }
    public async find(id: number): Promise<SubscriptionInterface | null> {
        return await this._subscriptionRepositoryService.find(id);
    }
    public async all(): Promise<SubscriptionInterface[]> {
        return await this._subscriptionRepositoryService.all();
    }

    public async store(entry: SubscriptionCreateDtoInterface) {
        const originalEntry = await this._subscriptionRepositoryService.findByUserAndCode(entry.user_id, entry.code);
        if (!originalEntry) {
            await this._subscriptionRepositoryService.store(entry as SubscriptionInterface);
        } else {
            throw new ApplicationException('La subscripción del usuario ya existe.');
        }
    }
    public async update(id: number, entry: SubscriptionUpdateDtoInterface): Promise<void> {
        let originalEntry = await this._subscriptionRepositoryService.find(id);
        if (originalEntry) {
            originalEntry.code = entry.code;
            originalEntry.amount = entry.amount;
            originalEntry.cron = entry.cron;
        } else {
            throw new ApplicationException('No se encontró subscripción.');
        }
        return await this._subscriptionRepositoryService.update(entry as SubscriptionInterface);
    }
    public async remove(id: number): Promise<void> {
        return await this._subscriptionRepositoryService.remove(id);
    }
}