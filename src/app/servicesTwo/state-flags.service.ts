// src/app/services/state-flags.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateFlagsService {
  private flagsUrl = 'assets/state-flags.json';

  constructor(private http: HttpClient) { }

  getStateFlags(): Observable<any> {
    return this.http.get<any>(this.flagsUrl);
  }
}
