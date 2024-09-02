"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
require("zone.js/node");
const common_1 = require("@angular/common");
const ssr_1 = require("@angular/ssr");
const express_1 = tslib_1.__importDefault(require("express"));
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const main_server_1 = tslib_1.__importDefault(require("./src/main.server"));
const vidaudServ_json_1 = tslib_1.__importDefault(require("./src/assets/vidaudServ.json")); // Import your JSON file
const web_json_1 = tslib_1.__importDefault(require("./src/assets/web.json")); // Import your JSON file
// Function to get video data based on FriendlyUrlName
function getVideoData(friendlyUrlName) {
    return vidaudServ_json_1.default.videoAudio.find(video => video.FriendlyUrlName === friendlyUrlName);
}
// for the web
function getWebData(WebUrlName) {
    return web_json_1.default.webport.find(video => video.url === WebUrlName);
}
function app() {
    const server = (0, express_1.default)();
    const distFolder = (0, node_path_1.join)(process.cwd(), 'dist/dbtwebsite/browser');
    const indexHtml = (0, node_fs_1.existsSync)((0, node_path_1.join)(distFolder, 'index.original.html'))
        ? (0, node_path_1.join)(distFolder, 'index.original.html')
        : (0, node_path_1.join)(distFolder, 'index.html');
    const commonEngine = new ssr_1.CommonEngine();
    server.set('view engine', 'html');
    server.set('views', distFolder);
    // Serve static files from /browser
    server.get('*.*', express_1.default.static(distFolder, {
        maxAge: '1y'
    }));
    // Middleware to set meta tags based on the route
    server.use((req, res, next) => {
        let metaTags = '';
        if (req.url.startsWith('/details/video/')) {
            const friendlyUrlName = req.params['friendlyUrlName'];
            const video = getVideoData(friendlyUrlName);
            if (video) {
                metaTags = `
          <title>${video.name} | DBT Web</title>
          <meta name="description" content="${video.name} video on DBT Web">
          <meta name="twitter:image" content="${video.thumbnail}" />
          <meta property="og:title" content="${video.name} | DBT Web" />
          <meta property="og:image" content="${video.thumbnail}" />
        `;
            }
            else {
                metaTags = `<title>Video Not Found | DBT Web</title>`;
            }
        }
        else if (req.url === '/about') {
            metaTags = `
        <title>About Full Stack Developer Tony Trapp | DBT Web | About</title>
        <meta name="description" content="Learn about DBTWEB and its history 24 years ago and the Founder C.E.O Tony Trapp">
        <meta name="keywords" content="about, company, info">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="DBTwebPro" />
        <meta name="twitter:url" content="https://www.dbtweb.com/about" />
        <meta name="twitter:title" content="DBTWeb.com | About DBTWEB and The Founder C.E.O Tony Trapp" />
        <meta name="twitter:description" content="Learn about DBTWEB and it's history 20 years ago and the Founder C.E.O Tony Trapp" />
        <meta name="twitter:image" content="https://www.dbtweb.com/images/dbtwebabout.jpg" /><meta property="og:type" content="website" />
        <meta property="og:title" content="DBTWeb.com | About DBTWEB and The Founder C.E.O Tony Trapp" />
        <meta property="og:description" content="Learn about DBTWEB and it's history 20 years ago and the Founder C.E.O Tony Trapp" />
        <meta property="og:image" content="https://www.dbtweb.com/images/dbtwebabout.jpg" />
        <meta property="og:url" content="https://www.dbtweb.com/about" />
        <meta property="og:site_name" content="dbtweb.com" />
      `;
        }
        else if (req.url === '/') {
            metaTags = `
        <title>Imagine the possabilities  | DBTweb.com</title>
        <meta name="description" content="DBT Web Productions is a renowned leader in Responsive web design. Our services include web site development, design, multimedia, broadcast video, 3D, animation and corporate identity. We design and develop quality media solutions for a large spectrum of clients including Fortune 1000, and international clients.">
        <meta name="keywords" content="home, welcome, website">
        <meta name="twitter:card" content="summary_large_image"/> 
        <meta name="twitter:site" content="DBTwebPro"/> 
        <meta name="twitter:url" content="https://www.dbtweb.com"/> 
        <meta name="twitter:title" content="DBTweb.com | Imagine the possabilities"/> 
        <meta name="twitter:description" content="DBT Web Productions is a renowned leader in Responsive web design. Our services include web site development, design, multimedia, broadcast video, 3D, animation and corporate identity. We design and develop quality media solutions for a large spectrum of clients including Fortune 1000, and international clients."/> 
        <meta name="twitter:image" content="https://www.dbtweb.com/images/dbtwebhomepage22.jpg"/> 
        <meta property="og:type" content="website"/> 
        <meta property="og:title" content="DBTweb.com | Imagine the possabilities"/> <meta property="og:description" content="DBT Web Productions is a renowned leader in Responsive web design. Our services include web site development, design, multimedia, broadcast video, 3D, animation and corporate identity. We design and develop quality media solutions for a large spectrum of clients including Fortune 1000, and international clients."/> 
        <meta property="og:image" content="https://www.dbtweb.com/images/dbtwebhomepage22.jpg"/> 
        <meta property="og:url" content="https://www.dbtweb.com"/> 
        <meta property="og:site_name" content="dbtweb.com"/>
        <meta name="robots" content="INDEX, FOLLOW"/>
      `;
        }
        else if (req.url === '/contact-DBT') {
            metaTags = `
        <title>Contact Me Tony Trapp | DBTWeb.com </title>
        <meta name="description" content="Connect with me and Discuss new Opportunities for your new website.">
        <meta name="keywords" content="contact, support, help">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="DBTwebPro" />
        <meta name="twitter:url" content="https://www.dbtweb.com/contact" />
        <meta name="twitter:title" content="DBTWeb.com | Contact Me" />
        <meta name="twitter:description" content="Connect with me and Discuss new Opportunities for your new website." />
        <meta name="twitter:image" content="https://www.dbtweb.com/images/dbtwebdisuss.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DBTWeb.com | Contact Me" />
        <meta property="og:description" content="Connect with me and Discuss new Opportunities for your new website.." />
        <meta property="og:image" content="https://www.dbtweb.com/images/dbtwebdisuss.jpg" />
        <meta property="og:url" content="https://www.dbtweb.com/contact" />
        <meta property="og:site_name" content="dbtweb.com" />
      `;
        }
        else if (req.url === '/web') {
            metaTags = `
        <title>Web Sites | DBTWeb.com </title>
        <meta name="description" content="See my portfolio browse all the sites and decide I am the designer for you.">
        <meta name="keywords" content="contact, support, help">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="DBTwebPro" />
        <meta name="twitter:url" content="https://www.tonytrapp.com/web" />
        <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites" />
        <meta name="twitter:description" content="See my portfolio browse all the sites and decide I am the designer for you." />
        <meta name="twitter:image" content="https://www.tonytrapp.com/assets/dbtwebportfolioWeb.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites" />
        <meta property="og:description" content="See my portfolio browse all the sites and decide I am the designer for you." />
        <meta property="og:image" content="https://www.tonytrapp.com/assets/dbtwebportfolioWeb.jpg" />
        <meta property="og:url" content="https://www.tonytrapp.com/web" />
        <meta property="og:site_name" content="dbtweb.com" />
      `;
        }
        else if (req.url === '/video') {
            metaTags = `
        <title>Videos | DBTWeb.com</title>
        <meta name="description" content="See all the videos I have made, play each one of them and decide I am the designer for you.">
        <meta name="keywords" content="contact, support, help">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="DBTwebPro" />
        <meta name="twitter:url" content="https://www.tonytrapp.com/video" />
        <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites" />
        <meta name="twitter:description" content="See all the videos I have made, play each one of them and decide I am the designer for you." />
        <meta name="twitter:image" content="https://www.tonytrapp.com/assets/dbtwebportfolioVideoAudio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites" />
        <meta property="og:description" content="See all the videos I have made, play each one of them and decide I am the designer for you." />
        <meta property="og:image" content="https://www.tonytrapp.com/assets/dbtwebportfolioVideoAudio.jpg" />
        <meta property="og:url" content="https://www.tonytrapp.com/video" />
        <meta property="og:site_name" content="dbtweb.com" />
      `;
        }
        else if (req.url === '/tech') {
            metaTags = `
        <title>Technologies | DBTWeb.com | Tech</title>
        <meta name="description" content="Learn about the technologies that dbtweb works with.">
        <meta name="keywords" content="contact, support, help">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="DBTwebPro" />
        <meta name="twitter:url" content="https://www.tonytrapp.com/tech" />
        <meta name="twitter:title" content="Technologies | DBTWeb.com | Tech" />
        <meta name="twitter:description" content="Learn about the technologies that dbtweb works with." />
        <meta name="twitter:image" content="https://www.dbtweb.com/images/dbtwebdisuss.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technologies | DBTWeb.com | Tech" />
        <meta property="og:description" content="Learn about the technologies that dbtweb works with." />
        <meta property="og:image" content="https://www.dbtweb.com/images/dbtwebdisuss.jpg" />
        <meta property="og:url" content="https://www.tonytrapp.com/tech" />
        <meta property="og:site_name" content="dbtweb.com" />
      `;
        }
        else if (req.url === '/services') {
            metaTags = `
        <title>Learn about the services that dbtweb provides to you  | Services | DBTWeb.com</title>
        <meta name="description" content="Learn about the services that dbtweb provides to you.">
        <meta name="keywords" content="contact, support, help">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="DBTwebPro" />
        <meta name="twitter:url" content="https://www.tonytrapp.com/services" />
        <meta name="twitter:title" content="DBTWeb.com | Services | Learn about the services that dbtweb provides to you" />
        <meta name="twitter:description" content="Learn about the services that dbtweb provides to you" />
        <meta name="twitter:image" content="https://www.tonytrapp.com/assets/dbtwebServices.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DBTWeb.com | Services | Learn about the services that dbtweb provides to you" />
        <meta property="og:description" content="Learn about the services that dbtweb provides to you" />
        <meta property="og:image" content="https://www.tonytrapp.com/assets/dbtwebServices.jpg" />
        <meta property="og:url" content="https://www.tonytrapp.com/services" />
        <meta property="og:site_name" content="dbtweb.com" />
      `;
        }
        res.locals['metaTags'] = metaTags; // Pass meta tags to the view
        next();
    });
    // Specific route for video details
    server.get('/details/video/:friendlyUrlName', (req, res, next) => {
        const { protocol, headers, originalUrl } = req;
        const { friendlyUrlName } = req.params;
        console.log('Request received for video details:', originalUrl);
        const video = getVideoData(friendlyUrlName);
        let metaTags = '';
        if (video) {
            console.log('Video data found:', video);
            metaTags = `
        <title>${video.name} | DBT Web</title>
        <meta name="description" content="${video.name} video on DBT Web">
        <meta name="twitter:image" content="${video.thumbnail}" />
        <meta property="og:title" content="${video.name} | DBT Web" />
        <meta property="og:image" content="${video.thumbnail}" />
      `;
        }
        else {
            console.log('No video data found for:', friendlyUrlName);
            metaTags = `<title>Video Not Found | DBT Web</title>`;
        }
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: `${protocol}://${headers.host}${originalUrl}`,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
                { provide: 'META_TAGS', useValue: metaTags } // Provide meta tags here
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${metaTags}</head>`);
            res.send(htmlWithMetaTags);
            console.log('Generated meta tags:', metaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/details/portfolio/:WebUrlName', (req, res, next) => {
        const { protocol, headers, originalUrl } = req;
        const { WebUrlName } = req.params;
        console.log('Request received for web details:', originalUrl);
        const web = getWebData(WebUrlName);
        let metaTags = '';
        if (web) {
            //console.log('web data found:', web);
            const updatedImageUrl = web?.BigImage?.replace("..", "http://www.dbtweb.com");
            //console.log(updatedImageUrl);
            metaTags = `
        <title>${web?.name} | Portfolio | Web Sites | DBTWeb.com</title><meta name="description" content="Portfolio Case Study for ${web?.name} at DBTWeb.com"><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:site" content="DBTwebPro" /><meta name="twitter:url" content="https://www.dbtweb.com/details/portfolio/${web?.url}" /><meta name="twitter:title" content="${web?.name} | Portfolio | Web Sites | DBTWeb.com" /><meta name="twitter:description" content="Portfolio Case Study for ${web?.name} at DBTWeb.com" /><meta name="twitter:image" content="${updatedImageUrl}" /><meta property="og:type" content="website" /><meta property="og:title" content="${web?.name} | Portfolio | Web Sites | DBTWeb.com" /><meta property="og:description" content="Portfolio Case Study for ${web?.name} at DBTWeb.com" /><meta property="og:image" content="${updatedImageUrl}" /><meta property="og:url" content="https://www.dbtweb.com/details/portfolio/${web?.url}" /><meta property="og:site_name" content="dbtweb.com" /><meta name="robots" content="INDEX, FOLLOW"/>
      `;
        }
        else {
            console.log('No web site data found for:', WebUrlName);
            metaTags = `<title>Web Site Not Found | DBTWeb.com</title>`;
        }
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: `${protocol}://${headers.host}${originalUrl}`,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
                { provide: 'META_TAGS', useValue: metaTags } // Provide meta tags here
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${metaTags}</head>`);
            res.send(htmlWithMetaTags);
            console.log('Generated meta tags:', metaTags);
        })
            .catch((err) => next(err));
    });
    // Route handlers for other pages
    server.get('/about', (req, res, next) => {
        console.log('Request received for about page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/', (req, res, next) => {
        console.log('Request received for home page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/contact-DBT', (req, res, next) => {
        console.log('Request received for contact page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/web', (req, res, next) => {
        console.log('Request received for web services page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/video', (req, res, next) => {
        console.log('Request received for video page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/tech', (req, res, next) => {
        console.log('Request received for tech page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    server.get('/services', (req, res, next) => {
        console.log('Request received for services page:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => {
            const htmlWithMetaTags = html.replace('</head>', `${res.locals['metaTags']}</head>`);
            res.send(htmlWithMetaTags);
        })
            .catch((err) => next(err));
    });
    // Catch-all route for all other requests
    server.get('*', (req, res, next) => {
        console.log('Default route handler for:', req.originalUrl);
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: req.originalUrl,
            publicPath: distFolder,
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: req.baseUrl },
            ],
        })
            .then((html) => res.send(html))
            .catch((err) => next(err));
    });
    return server;
}
exports.app = app;
function run() {
    const port = process.env['PORT'] || 4000;
    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}
exports.default = main_server_1.default;
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/jpmorgan')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | JPmorgan</title>
//     //     <meta name="description" content="Portfolio Case Study for JPmorgan at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/jpmorgan" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | JPmorgan" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for JPmorgan at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/jpmorgan.webp" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | JPmorgan" />
//     //     <meta property="og:description" content="Portfolio Case Study for JPmorgan at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/jpmorgan.webp" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/jpmorgan" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/andromedia')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Andromeda</title>
//     //     <meta name="description" content="Portfolio Case Study for Andromeda at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/jpmorgan" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Andromeda" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Andromeda at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/andromeda.webp" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Andromeda" />
//     //     <meta property="og:description" content="Portfolio Case Study for Andromeda at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/andromeda.webp" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/jpmorgan" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/mystique')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Mystique</title>
//     //     <meta name="description" content="Portfolio Case Study for Mystique Boutique at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/mystique" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Mystique" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Mystique Boutique at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/mystqueboutiqe.jpg" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Mystique" />
//     //     <meta property="og:description" content="Portfolio Case Study for Mystique Boutique at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/mystqueboutiqe.jpg" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/mystique" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/guardhill')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Guardhill</title>
//     //     <meta name="description" content="Portfolio Case Study for Guardhill at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/Guardhill" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Guardhill" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Guardhill at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/guardhill.webp" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Guardhill" />
//     //     <meta property="og:description" content="Portfolio Case Study for Guardhill at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/guardhill.webp" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/Guardhill" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/nuveen')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Nuveen</title>
//     //     <meta name="description" content="Portfolio Case Study for Nuveen at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/nuveen" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Nuveen" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Nuveen at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/nuveen.webp" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Nuveen" />
//     //     <meta property="og:description" content="Portfolio Case Study for Nuveen at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/nuveen.webp" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/nuveen" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/homedax')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | homedax</title>
//     //     <meta name="description" content="Portfolio Case Study for homedax at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/homedax" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | homedax" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for homedax at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/homedex.webp" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | homedax" />
//     //     <meta property="og:description" content="Portfolio Case Study for homedax at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/homedex.webp" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/homedax" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/ovation')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | ovation</title>
//     //     <meta name="description" content="Portfolio Case Study for ovation at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/ovation" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | ovation" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for ovation at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/ovation.jpg" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | ovation" />
//     //     <meta property="og:description" content="Portfolio Case Study for ovation at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/ovation.jpg" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/ovation" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/ceoservices')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Ceo Services</title>
//     //     <meta name="description" content="Portfolio Case Study for Ceo Services at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/ceoservices" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Ceo Services" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Ceo Services at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/ceoserv.jpg" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Ceo Services" />
//     //     <meta property="og:description" content="Portfolio Case Study for Ceo Services at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/ceoserv.jpg" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/ceoservices" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/infatuation')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Ceo Services</title>
//     //     <meta name="description" content="Portfolio Case Study for Infatuation Super Store at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/infatuation" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Infatuation Super Store" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Infatuation Super Store at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/infatuation.jpg" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Infatuation Super Store" />
//     //     <meta property="og:description" content="Portfolio Case Study for Infatuation Super Store at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/infatuation.jpg" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/infatuation" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     // } else if (originalUrl.includes('/details/portfolio/streamingedge')) {
//     //   metaTags = `
//     //     <title>DBTWeb.com | Portfolio | Web Sites | Ceo Services</title>
//     //     <meta name="description" content="Portfolio Case Study for Streaming Edge at DBTWeb.com">
//     //     <meta name="keywords" content="contact, support, help">
//     //     <meta name="twitter:card" content="summary_large_image" />
//     //     <meta name="twitter:site" content="DBTwebPro" />
//     //     <meta name="twitter:url" content="https://www.tonytrapp.com/details/portfolio/streamingedge" />
//     //     <meta name="twitter:title" content="DBTWeb.com | Portfolio | Web Sites | Streaming Edge" />
//     //     <meta name="twitter:description" content="Portfolio Case Study for Streaming Edge at DBTWeb.com" />
//     //     <meta name="twitter:image" content="https://www.tonytrapp.com/assets/streamingedge.jpg" />
//     //     <meta property="og:type" content="website" />
//     //     <meta property="og:title" content="DBTWeb.com | Portfolio | Web Sites | Streaming Edge" />
//     //     <meta property="og:description" content="Portfolio Case Study for Streaming Edge at DBTWeb.com" />
//     //     <meta property="og:image" content="https://www.tonytrapp.com/assets/streamingedge.jpg" />
//     //     <meta property="og:url" content="https://www.tonytrapp.com/details/portfolio/streamingedge" />
//     //     <meta property="og:site_name" content="dbtweb.com" />
//     //   `;
//     //   `;
//     // } else {
//     //   // Default meta tags
//     //   metaTags = `
//     //     <title>Wrong address try again | DBT Web </title>
//     //   `;
//     // }
//     // if (originalUrl.includes('/details/video/')) {
//     //   console.log('Detected video details page');
//     //   const friendlyUrlName = originalUrl.split('/details/video/')[1];
//     //   console.log('Extracted FriendlyUrlName:', friendlyUrlName);
//     //   const video = getVideoData(friendlyUrlName);
//     //   if (video) {
//     //     metaTags = `
//     //       <title>${video.name} | DBT Web</title>
//     //       <meta name="description" content="${video.name} video on DBT Web">
//     //       <meta name="keywords" content="${video.name}, video">
//     //       <meta name="twitter:card" content="summary_large_image" />
//     //       <meta name="twitter:site" content="DBTwebPro" />
//     //       <meta name="twitter:url" content="${protocol}://${headers.host}${originalUrl}" />
//     //       <meta name="twitter:title" content="${video.name} | DBT Web" />
//     //       <meta name="twitter:description" content="${video.name} video on DBT Web" />
//     //       <meta name="twitter:image" content="${video.thumbnail}" />
//     //       <meta property="og:type" content="video" />
//     //       <meta property="og:title" content="${video.name} | DBT Web" />
//     //       <meta property="og:description" content="${video.name} video on DBT Web" />
//     //       <meta property="og:image" content="${video.thumbnail}" />
//     //       <meta property="og:url" content="${protocol}://${headers.host}${originalUrl}" />
//     //       <meta property="og:site_name" content="dbtweb.com" />
//     //     `;
//     //   } else {
//     //     metaTags = `<title>Video Not Found | DBT Web</title>`;
//     //   }
//     //   `;
//     // } else {
//     //   // Default meta tags for other routes
//     //   metaTags = `<title>Wrong address try again | DBT Web </title>`;
//     // }
//# sourceMappingURL=server.js.map