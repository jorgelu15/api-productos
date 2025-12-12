"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoutes = void 0;
const routes_1 = require("./routes");
class MainRoutes extends routes_1.Routes {
    constructor(app) {
        super(MainRoutes.MAIN_ROUTE);
        this.app = app;
        this.app.get(this.route, this.defaultRoute);
    }
    defaultRoute(req, res) {
        res.status(200).send({ message: "OK" });
    }
}
exports.MainRoutes = MainRoutes;
MainRoutes.MAIN_ROUTE = "";
//# sourceMappingURL=main.routes.js.map