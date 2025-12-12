"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    // Obtener el token de la cookie
    const token = req.cookies.token;
    const secretKey = process.env.SECRET_KEY || "default";
    // Verificar si el token existe
    if (!token) {
        res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
        return; // Detener la ejecución del middleware
    }
    try {
        // Verificar y decodificar el token JWT
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        // Añadir el ID del usuario al objeto `req` para su uso en rutas protegidas
        req.userId = decoded.userId;
        // Continuar con el siguiente middleware o controlador
        next();
    }
    catch (err) {
        // Manejar errores de token inválido o expirado
        res.status(401).json({ error: 'Token inválido o expirado.' });
        return; // Detener la ejecución del middleware
    }
};
exports.default = auth;
//# sourceMappingURL=authorization.middleware.js.map