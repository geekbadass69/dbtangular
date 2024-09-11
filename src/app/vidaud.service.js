import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let vidservice = class vidservice {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'assets/vidaud.json'; // Ensure this path is correct
    }
    getVids() {
        return this.http.get(this.apiUrl).pipe(catchError(error => {
            console.error('Error fetching video data:', error);
            return throwError(error);
        }));
    }
};
vidservice = __decorate([
    Injectable({
        providedIn: 'root'
    })
], vidservice);
export { vidservice };
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
//# sourceMappingURL=vidaud.service.js.map