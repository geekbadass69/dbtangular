"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssr = void 0;
const tslib_1 = require("tslib");
const functions = tslib_1.__importStar(require("firebase-functions"));
const express_1 = tslib_1.__importDefault(require("express"));
const angular_universal_server_1 = require("./angular-universal.server");
const path_1 = require("path");
const app = (0, express_1.default)();
const distFolder = (0, path_1.join)(process.cwd(), 'dist/browser');
const indexHtml = 'index.html';
app.get('*', (req, res) => {
    (0, angular_universal_server_1.AngularUniversalServer)(req, res, indexHtml);
});
exports.ssr = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map