import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { MetaDetailsService } from './meta-details.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaDetailsService: MetaDetailsService
  ) { }

  initializeMetaTags() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      switchMap(route => route.data.pipe(
        switchMap(data => {
          if (route.routeConfig && route.routeConfig.path && route.routeConfig.path.includes('details/:name')) {
            const name = route.snapshot.paramMap.get('name');
            if (name) {
              return this.metaDetailsService.getMetaData(name).pipe(
                map(metaData => ({ ...data, ...metaData }))
              );
            }
          }
          return of(data);
        })
      ))
    ).subscribe(event => {
      this.titleService.setTitle(event['title'] || 'Default Title');
      this.metaService.addTags([
        { name: 'keywords', content: event['keywords'] || 'default keywords' },
        { name: 'description', content: event['description'] || 'default description' },
        { property: 'og:type', content: event['OGtype'] || 'website' },
        { property: 'og:title', content: event['OGtitle'] || event['title'] },
        { property: 'og:description', content: event['OGdescription'] || event['description'] },
        { property: 'og:image', content: event['OGimage'] || 'default-ogimage' },
        { property: 'og:url', content: event['OGurl'] || 'default-ogurl' },
        { property: 'og:site_name', content: event['OGsitename'] || 'default-ogsitename' },
        { name: 'twitter:site', content: event['TwitSite'] || 'default-twit-site' },
        { name: 'twitter:card', content: event['twitterCard'] || 'summary_large_image' },
        { name: 'twitter:title', content: event['twitterTitle'] || event['title'] },
        { name: 'twitter:description', content: event['twitterDescription'] || event['description'] },
        { name: 'twitter:image', content: event['twitterImage'] || 'default-image-url' },
        { name: 'twitter:url', content: event['twitterURL'] || 'default-url' }

      ]);
    });
  }
}