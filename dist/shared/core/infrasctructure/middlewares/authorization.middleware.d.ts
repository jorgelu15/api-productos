import { Request, Response, NextFunction } from 'express';
declare module 'express' {
    interface Request {
        userId?: string;
    }
}
declare const auth: (req: Request, res: Response, next: NextFunction) => void;
export default auth;
//# sourceMappingURL=authorization.middleware.d.ts.map