import { __decorate, __param } from "tslib";
import { Component, inject, PLATFORM_ID, Inject } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
// import { BrowserModule } from '@angular/platform-browser';
// import { Tooltip } from 'primeng/tooltip';
//import { MetaService } from '../assets/meta.service';
import { AppService } from './backend-service.service';
//import { filter } from 'rxjs/operators';
let AppComponent = class AppComponent {
    constructor(primengConfig, titleService, metaService, router, platformId) {
        this.primengConfig = primengConfig;
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
        this.platformId = platformId;
        //  private metaService: MetaService
        this.appService = inject(AppService);
    }
    ngOnInit() {
        // Initialization logic here
        //console.log('AppComponent initialized');
        this.primengConfig.zIndex = {
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 99999999, // tooltip
        };
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationEnd)
        // ).subscribe(() => {
        //   const routeData = this.router.routerState.root.snapshot.firstChild?.data;
        //   if (routeData) {
        //     this.titleService.setTitle(routeData['title']);
        //     this.metaService.updateTag({ name: 'description', content: routeData['description'] });
        //     this.metaService.updateTag({ name: 'keywords', content: routeData['keywords'] });
        //   }
        // });
        //console.log('primeEng component set initialized');
        //this.metaService.initializeMetaTags();
        // this.appService
        // .simpleGetRequest()
        // .pipe(
        //   tap((resp) => {
        //     console.log(resp);
        //   })
        // )
        // .subscribe();
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Initialize AOS
            AOS.init();
            // Trigger AOS refresh
            setTimeout(() => {
                AOS.refresh();
            }, 100); // Adjust the delay as needed
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        providers: [AppService],
    }),
    __param(4, Inject(PLATFORM_ID))
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map