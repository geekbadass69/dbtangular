import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface MetaData {
  name: string;
  title: string;
  keywords: string;
  description: string;
  TwitSite: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterURL: string;
  OGtype: string;
  OGtitle: string;
  OGdescription: string;
  OGimage: string;
  OGurl: string;
  OGsitename: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetaDetailsService {

  private metaDataUrl = 'assets/meta-data.json';

  constructor(private http: HttpClient) { }

  getMetaData(name: string): Observable<MetaData | null> {
    return this.http.get<{ webportMeta: MetaData[] }>(this.metaDataUrl).pipe(
      map(data => data.webportMeta.find(item => item.name === name) || null),
      catchError(error => {
        console.error('Error fetching meta data:', error);
        return of(null);
      })
    );
  }
}

