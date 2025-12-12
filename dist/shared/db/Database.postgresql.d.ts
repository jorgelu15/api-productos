import { Sequelize } from 'sequelize';
export declare class DataBasePostgresql {
    private sequelize;
    constructor();
    private testConnection;
    getSequelizeInstance(): Sequelize;
    closeConnection(): Promise<void>;
}
//# sourceMappingURL=Database.postgresql.d.ts.map