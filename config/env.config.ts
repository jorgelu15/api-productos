const PORT_DEFAULT = 8000;
const PORT= process.env.PORT === undefined ? PORT_DEFAULT : Number.parseInt(process.env.PORT);
// const HOST = process.env.HOST || '3.129.19.64'
const HOST = process.env.HOST || 'localhost'


export const ENV_CONFIG =  {
    PORT,
    PORT_DEFAULT,
    HOST
} 