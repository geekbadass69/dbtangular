import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './web/web.component';
import { WrongaddressComponent } from './wrongaddress/wrongaddress.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
// Your routing file should look like this
export const routes = [
    // A route to the home page (component)
    {
        path: '',
        component: HomeComponent,
        // data: 
        // { 
        //   title: 'DBTweb.com | Imagine the possabilities | Home', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'DBT Web Productions is a renowned leader in Responsive web design. Our services include web site development, design, multimedia, broadcast video, 3D, animation and corporate identity. We design and develop quality media solutions for a large spectrum of clients including Fortune 1000, and international clients.',
        //   OGtype: 'website',
        //   OGtitle: 'DBTweb.com | Imagine the possabilities | Home',
        //   OGdescript: 'DBT Web Productions is a renowned leader in Responsive web design. Our services include web site development, design, multimedia, broadcast video, 3D, animation and corporate identity. We design and develop quality media solutions for a large spectrum of clients including Fortune 1000, and international clients',
        //   OGimage: 'https://www.tonytrapp.com/assets/dbtwebhomepage22.jpg',
        //   OGurl: 'https://www.dbtweb.com',
        //   OGsitename: 'dbtweb.com',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'DBTweb.com | Imagine the possabilities | Home',
        //   twitterDescription: 'DBT Web Productions is a renowned leader in Responsive web design. Our services include web site development, design, multimedia, broadcast video, 3D, animation and corporate identity. We design and develop quality media solutions for a large spectrum of clients including Fortune 1000, and international clients.',
        //   twitterImage: 'https://www.tonytrapp.com/assets/dbtwebhomepage22.jpg',
        //   twiiterURL: 'https://dbtweb.com/'
        // }
    },
    {
        path: 'about',
        component: AboutComponent,
        // data: 
        // { 
        //   title: 'About Full Stack Developer Tony Trapp | DBT Web | About', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'Learn about DBTWEB and its history 22 years ago and the Founder C.E.O Tony Trapp',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'About Full Stack Developer Tony Trapp | DBT Web | About',
        //   twitterDescription: 'Learn about DBTWEB and its history 24 years ago and the Founder C.E.O Tony Trapp',
        //   twitterImage: 'https://www.dbtweb.com/assets/dbtwebabout.jpg',
        //   twiiterURL: 'https://www.dbtweb.com/about',
        //   OGtype: 'website',
        //   OGtitle: 'About Full Stack Developer Tony Trapp | DBT Web | About',
        //   OGdescript: 'Learn about DBTWEB and its history 24 years ago and the Founder C.E.O Tony Trapp',
        //   OGimage: 'https://www.dbtweb.com/assets/dbtwebabout.jpg',
        //   OGurl: 'https://www.dbtweb.com/about',
        //   OGsitename: 'dbtweb.com'
        // }
    },
    {
        path: 'tech',
        component: TechComponent,
        // data: 
        // { 
        //   title: 'Technologies | DBTWeb.com | Tech', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'Learn about the technologies that dbtweb works with.',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'Technologies | DBTWeb.com | Tech',
        //   twitterDescription: 'Learn about the technologies that dbtweb works with.',
        //   twitterImage: 'https://www.dbtweb.com/assets/dbtwebTech.jpg',
        //   twiiterURL: 'https://www.dbtweb.com/tech',
        //   OGtype: 'website',
        //   OGtitle: 'Technologies | DBTWeb.com | Tech',
        //   OGdescript: 'Learn about the technologies that dbtweb works with.',
        //   OGimage: 'https://www.dbtweb.com/assets/dbtwebTech.jpg',
        //   OGurl: 'https://www.dbtweb.com/tech',
        //   OGsitename: 'dbtweb.com'
        // }
    },
    {
        path: 'services',
        component: ServicesComponent,
        // data: 
        // { 
        //   title: 'DBTWeb.com | Services | Learn about the services that dbtweb provides to you', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'Learn about the services that dbtweb provides to you',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'DBTWeb.com | Services | Learn about the services that dbtweb provides to you',
        //   twitterDescription: 'Learn about the services that dbtweb provides to you',
        //   twitterImage: 'https://www.dbtweb.com/assets/dbtwebServices.jpg',
        //   twiiterURL: 'https://www.dbtweb.com/services',
        //   OGtype: 'website',
        //   OGtitle: 'DBTWeb.com | Services | Learn about the services that dbtweb provides to you',
        //   OGdescript: 'Learn about the services that dbtweb provides to you',
        //   OGimage: 'https://www.dbtweb.com/assets/dbtwebServices.jpg',
        //   OGurl: 'https://www.dbtweb.com/services',
        //   OGsitename: 'dbtweb.com'
        // }
    },
    {
        path: 'web',
        component: WebComponent,
        // data: 
        // { 
        //   title: 'DBTWeb.com | Portfolio | Web Sites', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'See my portfolio browse all the sites and decide I am the designer for you.',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'DBTWeb.com | Portfolio | Web Sites',
        //   twitterDescription: 'See my portfolio browse all the sites and decide I am the designer for you.',
        //   twitterImage: 'https://www.dbtweb.com/assets/dbtwebportfolioWeb.jpg',
        //   twiiterURL: 'https://www.dbtweb.com/web',
        //   OGtype: 'website',
        //   OGtitle: 'DBTWeb.com | Portfolio | Web Sites',
        //   OGdescript: 'See my portfolio browse all the sites and decide I am the designer for you.',
        //   OGimage: 'https://www.dbtweb.com/assets/dbtwebportfolioWeb.jpg',
        //   OGurl: 'https://www.dbtweb.com/web',
        //   OGsitename: 'dbtweb.com'
        // }
    },
    {
        path: 'video',
        component: VideoComponent,
        // data: 
        // { 
        //   title: 'DBTWeb.com | Portfolio | Video', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'See all the videos I have made, play each one of them and decide I am the designer for you.',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'DBTWeb.com | Portfolio | Video',
        //   twitterDescription: 'See all the videos I have made, play each one of them and decide I am the designer for you.',
        //   twitterImage: 'https://www.dbtweb.com/assets/dbtwebportfolioVideoAudio.jpg',
        //   twiiterURL: 'https://www.dbtweb.com/video',
        //   OGtype: 'website',
        //   OGtitle: 'DBTWeb.com | Portfolio | Video',
        //   OGdescript: 'See all the videos I have made, play each one of them and decide I am the designer for you.',
        //   OGimage: 'https://www.dbtweb.com/assets/dbtwebportfolioVideoAudio.jpg',
        //   OGurl: 'https://www.dbtweb.com/video',
        //   OGsitename: 'dbtweb.com'
        // }
    },
    {
        path: 'contact-DBT',
        component: ContactComponent,
        // data: 
        // { 
        //   title: 'DBTWeb.com | Contact Me', 
        //   keywords: 'Home, Angular, Meta Tags', 
        //   description: 'Connect with me and Discuss new Opportunities for your new website.',
        //   TwitSite: 'DBTwebPro',
        //   twitterCard: 'summary_large_image',
        //   twitterTitle: 'DBTWeb.com | Contact Me',
        //   twitterDescription: 'Connect with me and Discuss new Opportunities for your new website.',
        //   twitterImage: 'https://www.dbtweb.com/images/dbtwebdisuss.jpg',
        //   twiiterURL: 'https://www.dbtweb.com/contact-DBT',
        //   OGtype: 'website',
        //   OGtitle: 'DBTWeb.com | Contact Me',
        //   OGdescript: 'Connect with me and Discuss new Opportunities for your new website.',
        //   OGimage: 'https://www.dbtweb.com/images/dbtwebdisuss.jpg',
        //   OGurl: 'https://www.dbtweb.com/contact-DBT',
        //   OGsitename: 'dbtweb.com'
        // }
    },
    {
        path: 'details/:type/:name',
        component: DetailsComponent
    },
    { path: '**',
        component: WrongaddressComponent,
        // data: 
        // { 
        //   title: 'Wrong address try again | DBT Web ', 
        //   keywords: '', 
        //   description: '',
        // }
        //redirectTo: 'wrongaddress' 
    }, // Catch-all route for undefined paths
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app.routes.js.map