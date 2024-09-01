import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private jsonUrl = 'assets/technologies.json';

  constructor(private http: HttpClient) { }

  getTechnologies(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}