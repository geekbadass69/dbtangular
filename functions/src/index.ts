import * as functions from 'firebase-functions';
import express from 'express';
import { AngularUniversalServer } from './angular-universal.server';
import { join } from 'path';

const app = express();
const distFolder = join(process.cwd(), 'dist/browser');
const indexHtml = 'index.html';

app.get('*', (req, res) => {
  AngularUniversalServer(req, res, indexHtml);
});

export const ssr = functions.https.onRequest(app);
