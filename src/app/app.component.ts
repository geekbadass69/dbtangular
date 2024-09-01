import { Component, OnInit, AfterViewInit, inject, PLATFORM_ID, Inject} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as AOS from 'aos';
//import { tap } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router} from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
// import { BrowserModule } from '@angular/platform-browser';
// import { Tooltip } from 'primeng/tooltip';
//import { MetaService } from '../assets/meta.service';
import { AppService } from './backend-service.service';
//import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})

export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  //  private metaService: MetaService

  appService = inject(AppService);

  ngOnInit(): void {
    // Initialization logic here
    //console.log('AppComponent initialized');
     
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 99999999,   // tooltip
      
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
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS
      AOS.init();

      // Trigger AOS refresh
      setTimeout(() => {
        AOS.refresh();
      }, 100); // Adjust the delay as needed
    }
  }
  // ngAfterViewInit(): void {
  //   // Initialize AOS
  //   AOS.init();

  //   // Trigger a small scroll event after initialization
  //   setTimeout(() => {
  //     this.renderer.setProperty(window, 'scrollTop', window.pageYOffset + 1);
  //     this.renderer.setProperty(window, 'scrollTop', window.pageYOffset - 1);
  //   }, 100); // Adjust the delay as needed
  // }
  // ngAfterViewInit(): void {
  //   // Initialize AOS
  //   AOS.init();
  //   //console.log('AOS initialized');

  //   setTimeout(() => {
  //     this.renderer.setProperty(window, 'scrollTop', window.pageYOffset + 1);
  //     this.renderer.setProperty(window, 'scrollTop', window.pageYOffset - 1);
  //   }, 100); // Adjust the delay as needed
  //   console.log('AOS set time out');
  // }
  
}
