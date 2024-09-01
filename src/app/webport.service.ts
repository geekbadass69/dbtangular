import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class webportService {

  private jsonUrl = 'assets/web.json';

  constructor(private http: HttpClient) { }

  getWebport(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}