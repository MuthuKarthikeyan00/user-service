// src/prisma/DB.ts
import { PrismaClient } from '../../prisma/user-client';
export default class DB {
    static get(company_id) {
        const url = `postgresql://admin:admin@localhost:5432/bill_mate_${company_id}?schema=user_service`;
        return new PrismaClient({
            log: ['query', 'error'],
            datasources: {
                db: {
                    url,
                },
            },
        });
    }
}
