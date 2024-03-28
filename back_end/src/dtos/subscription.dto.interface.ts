export interface SubscriptionCreateDtoInterface {
    code: string;
    user_id: number;
    amount: number;
    cron: string;
}
export interface SubscriptionUpdateDtoInterface {
    code: string;
    amount: number;
    cron: string;
}