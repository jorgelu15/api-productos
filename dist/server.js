"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const env_config_1 = require("./config/env.config");
dotenv_1.default.config();
const app = new app_1.App(env_config_1.ENV_CONFIG.PORT ? env_config_1.ENV_CONFIG.PORT : env_config_1.ENV_CONFIG.PORT_DEFAULT, env_config_1.ENV_CONFIG.HOST, []);
app.listen();
//# sourceMappingURL=server.js.map