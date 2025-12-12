"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_CONFIG = void 0;
const PORT_DEFAULT = 8000;
const PORT = process.env.PORT === undefined ? PORT_DEFAULT : Number.parseInt(process.env.PORT);
// const HOST = process.env.HOST || '3.129.19.64'
const HOST = process.env.HOST || 'localhost';
exports.ENV_CONFIG = {
    PORT,
    PORT_DEFAULT,
    HOST
};
//# sourceMappingURL=env.config.js.map