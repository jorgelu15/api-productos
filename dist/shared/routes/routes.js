"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
class Routes {
    constructor(route) {
        this._apiPrefix = "api";
        this._apiVersion = "v1";
        this.route = this.getApiPath(route);
    }
    getApiPath(route) {
        if (route === undefined || route === null) {
            throw new Error("Route not provided");
        }
        const apiRoute = `/${this._apiPrefix}/${this._apiVersion}/${route}`;
        console.info(apiRoute);
        return apiRoute;
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map