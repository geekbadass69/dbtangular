import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import bootstrap from '../../src/main.server';
enableProdMode();
export function AngularUniversalServer(req, res, template) {
    const engine = ngExpressEngine({
        bootstrap: bootstrap,
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
//# sourceMappingURL=angular-universal.server.js.map