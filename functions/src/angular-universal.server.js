"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngularUniversalServer = void 0;
const tslib_1 = require("tslib");
require("zone.js/node");
const core_1 = require("@angular/core");
const express_engine_1 = require("@nguniversal/express-engine");
const main_server_1 = tslib_1.__importDefault(require("../../src/main.server"));
(0, core_1.enableProdMode)();
function AngularUniversalServer(req, res, template) {
    const engine = (0, express_engine_1.ngExpressEngine)({
        bootstrap: main_server_1.default,
    });
    res.render = (view, options, callback) => {
        engine(view, options || {}, (err, html) => {
            if (callback) {
                if (err) {
                    callback(err, html || '');
                }
                else {
                    callback(new Error("Unknown error"), html || '');
                }
            }
        });
    };
    res.render(template);
}
exports.AngularUniversalServer = AngularUniversalServer;
//# sourceMappingURL=angular-universal.server.js.map