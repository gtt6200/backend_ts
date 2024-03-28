import { SubscriptionInterface } from "./domain_services/subscription.domain.interface";

export interface SubscriptionRepositoryInterface {
    all(): Promise<SubscriptionInterface[]>;
    find(id: number): Promise<SubscriptionInterface | null>;
    findByUserAndCode(user_id: Number, code: string): Promise<SubscriptionInterface | null>;
    store(entry: SubscriptionInterface): Promise<void>;
    update(entry: SubscriptionInterface): Promise<void>;
    remove(id: number): Promise<void>;
}