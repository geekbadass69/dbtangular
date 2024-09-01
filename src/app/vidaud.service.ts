import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class vidservice {
  private apiUrl = 'assets/vidaud.json'; // Ensure this path is correct

  constructor(private http: HttpClient) { }

  getVids(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching video data:', error);
        return throwError(error);
      })
    );
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class vidservice {

//   private jsonUrl = 'assets/vidaud.json';

//   constructor(private http: HttpClient) { }

//   getVids(): Observable<any> {
//     return this.http.get<any>(this.jsonUrl);
//   }
// }