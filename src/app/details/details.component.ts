import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
//import { MetaDetailsService } from '../../assets/meta-details.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {

  isVideo: boolean = false;

  recordName: string | null = null;
  record: any = null;
  responsiveOptions: any[];
  dataLoaded: boolean = false;
  videoUrl: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
   // private metaDetailsService: MetaDetailsService,
    // private meta: Meta,
    // private title: Title,
    private sanitizer: DomSanitizer
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 0
      },
      {
        breakpoint: '768px',
        numVisible: 0
      },
      {
        breakpoint: '560px',
        numVisible: 0
      }
    ];
  }

  getSafeUrl(videourl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videourl);
  }

  ngOnInit(): void {

    // const type = this.route.snapshot.paramMap.get('type');
    // const friendlyUrlName = this.route.snapshot.paramMap.get('FriendlyUrlName');

    this.route.paramMap.subscribe(params => {
      this.recordName = params.get('name');
      if (this.recordName) {
        this.dataService.getRecordByName(this.recordName).subscribe(data => {
          if (!data) {
            console.log('No record found for', this.recordName);
            this.redirectToNotFound();
          } else {
            
            this.record = data;
            
            this.isVideo = data.type === 'video';

            if (this.isVideo && this.record.url !== this.videoUrl) {
              this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.record.url);
            }

            console.log('Record loaded:', this.record); // Log the loaded record
            console.log('Is Video:', this.isVideo); // Log whether it is a video or not
            
            // if (this.isVideo) {
            //   this.initializeJWPlayer(this.record.url);
            // }
  
            this.dataLoaded = true;
            console.log('Data Loaded:', this.dataLoaded);
            if (this.isVideo) {
              this.cdr.detach(); // Detach change detection for video
              this.videoUrl = this.getSafeUrl(this.record.url);
            } else {
              this.cdr.reattach(); // Reattach change detection for portfolio
            }
            this.cdr.detectChanges(); 
          }
        });
        

        // this.metaDetailsService.getMetaData(this.recordName).subscribe(metaData => {
        //   if (metaData) {
        //     this.title.setTitle(metaData.title);
        //     this.meta.updateTag({ name: 'keywords', content: metaData.keywords });
        //     this.meta.updateTag({ name: 'description', content: metaData.description });
        //     this.meta.updateTag({ name: 'twitter:site', content: metaData.TwitSite });
        //     this.meta.updateTag({ name: 'twitter:card', content: metaData.twitterCard });
        //     this.meta.updateTag({ name: 'twitter:title', content: metaData.twitterTitle });
        //     this.meta.updateTag({ name: 'twitter:description', content: metaData.twitterDescription });
        //     this.meta.updateTag({ name: 'twitter:image', content: metaData.twitterImage });
        //     this.meta.updateTag({ name: 'twitter:url', content: metaData.twitterURL });
        //     this.meta.updateTag({ property: 'og:type', content: metaData.OGtype });
        //     this.meta.updateTag({ property: 'og:title', content: metaData.OGtitle });
        //     this.meta.updateTag({ property: 'og:description', content: metaData.OGdescription });
        //     this.meta.updateTag({ property: 'og:image', content: metaData.OGimage });
        //     this.meta.updateTag({ property: 'og:url', content: metaData.OGurl });
        //     this.meta.updateTag({ property: 'og:site_name', content: metaData.OGsitename });
        //   } else {
        //     console.error(`No meta data found for ${this.recordName}`);
        //   }
        // });
      }
    });

      // Implement the ngOnDestroy method

  }

  ngOnDestroy(): void {
    this.videoUrl = null;
  }

  redirectToNotFound(): void {
    this.router.navigate(['/wrongaddress']); // Adjust the route according to your setup
  }

  activeIndex: number = 0;

  onIndexChange(event: any): void {
    this.activeIndex = event.index;
  }


  isActive(index: number): boolean {
    return this.activeIndex === index;
  }


}
