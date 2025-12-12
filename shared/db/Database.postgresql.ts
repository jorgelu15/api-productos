
import { Sequelize } from 'sequelize';

export class DataBasePostgresql {
    private sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize(
            `midgar_erp`,
            `midgar`,
            `123_Midgar`,
            {
                host: `localhost`,
                port: Number(process.env.DB_PORT) || 5432,
                dialect: 'postgres',
                logging: console.log,
                dialectOptions: {
                    // ssl: {
                    //     require: false, // AWS RDS necesita SSL
                    //     rejectUnauthorized: false,
                    // },
                },
                pool: {
                    max: 8,
                    min: 2,
                    acquire: 5000,
                    idle: 10000,
                }
            }
        );

        this.testConnection();
    }

    private async testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Conexión establecida con éxito.');
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
        }
    }

    public getSequelizeInstance() {
        return this.sequelize;
    }

    public async closeConnection() {
        try {
            await this.sequelize.close();
            console.log('Conexión cerrada con éxito.');
        } catch (error) {
            console.error('Error al cerrar la conexión:', error);
        }
    }
}
