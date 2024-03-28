import connector from '../../../../common/persistence/mysql.persistence';
import { SubscriptionInterface } from '../../domain_services/subscription.domain.interface';
import { SubscriptionRepositoryInterface } from '../../subscription.repository.interface';

export class SubscriptionMySQLRespositoryService implements SubscriptionRepositoryInterface {
    public async all(): Promise<SubscriptionInterface[]> {
        const [rows] = await connector.execute('SELECT * FROM wallet_subscription ORDER BY id DESC');
        return rows as SubscriptionInterface[];
    }

    public async find(id: Number): Promise<SubscriptionInterface | null> {
        const [rows]: any[] = await connector.execute('SELECT * FROM wallet_subscription WHERE id = ?', [id]);

        return rows.length ? rows as SubscriptionInterface : null
        // if (rows.length) {
        //     return rows as SubscriptionInterface;
        // }
        // return null;
    }
    public async findByUserAndCode(user_id: Number, code: string): Promise<SubscriptionInterface | null> {
        const [rows]: any[] = await connector.execute('SELECT * FROM wallet_subscription WHERE user_id = ? AND code = ?', [user_id, code]);

        return rows.length ? rows as SubscriptionInterface : null
        // if (rows.length) {
        //     return rows as SubscriptionInterface;
        // }
        // return null;
    }

    public async store(entry: SubscriptionInterface): Promise<void> {
        const now = new Date();
        const [row]: any[] = await connector.execute(
            'INSERT INTO wallet_subscription(user_id, code, amount, cron, created_at) VALUES (?,?,?,?,?)',
            [entry.user_id, entry.code, entry.amount, entry.cron, now]
        );
    }
    public async update(entry: SubscriptionInterface): Promise<void> {
        const now = new Date();
        const [row]: any[] = await connector.execute(
            'UPDATED wallet_subscription SET user_id = ?, code = ?, amount = ?, cron = ?, updated_at = ? WHERE id = ?',
            [entry.user_id, entry.code, entry.amount, entry.cron, now, entry.id]
        );
    }

    public async remove(id: Number): Promise<void> {
        await connector.execute('DELETE FROM wallet_subscription WHERE id = ?', [id]);

    }
}