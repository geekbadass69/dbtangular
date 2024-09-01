import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = 'assets/records.json';

  constructor(private http: HttpClient) { }
  
  getRecordByName(name: string): Observable<any> {
    return this.http.get<any[]>('assets/records.json').pipe(
      map((records: any[]) => records.find(record => record.name === name))
    );
  }
}