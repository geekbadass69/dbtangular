import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';

import bootstrap from '../../src/main.server';

enableProdMode();

export function AngularUniversalServer(req: express.Request, res: express.Response, template: string): void {
  const engine = ngExpressEngine({
    bootstrap: bootstrap,
  });

  res.render = (view: string, options?: object, callback?: (err: Error, html: string) => void) => {
    engine(view, options || {}, (err?: Error | null, html?: string) => {
      if (callback) {
        if (err) {
          callback(err, html || '');
        } else {
          callback(new Error("Unknown error"), html || '');
        }
      }
    });
  };

  res.render(template);
}
